const express = require("express");
const userModel = require("../models/userModel");
const {
  authenticateToken,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, phone, password, confirmPassword } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("Email already exists:", email);
      return res.status(400).json({ error: "Email already exists" });
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return res.status(400).json({ error: "Passwords do not match" });
    }

    /* const kycDocument = await KYC.findOne({ email });
    if (!kycDocument || !kycDocument.isApproved) {
      console.log("KYC documents are not approved");
      return res.status(400).json({
        error: "KYC documents must be submitted and approved by admin",
      });
    }
*/
    const user = new userModel({
      fullName,
      email,
      phone,
      password,
      role: "user",
    });

    await user.save();

    // Send registration email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mokeke250@gmail.com",
        pass: "lxvycnellvurscyl",
      },
    });

    const mailOptions = {
      from: '"Pendora Ventures" <mokeke250@gmail.com>',
      to: email,
      subject: "Registration Confirmation",
      html: `
          <div style="color: black; padding: 70px 10px; border-radius: 10px;">
            <h2 style="color: #2544D8;">Welcome to Pendora Ventures, ${fullName}!</h2>
            <p style="font-size: 18px;">Thank you for registering with us. We have received your details and will process them shortly.</p>
            <p style="font-size: 18px;">Your email: ${email}</p>
            <p style="font-size: 18px;">Your phone number: ${phone}</p>
            <p style="font-size: 18px;">If you have any questions, feel free to reach out to us.</p>
            <p style="font-size: 18px;">Best regards,<br> The Pendora Ventures Team</p>
          </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          error: "An error occurred while sending the registration email",
        });
      } else {
        console.log("Email sent:", info.response);
        res.status(201).json({ message: "User registered successfully" });
      }
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const dataSend = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    console.log("Token:", token);
    res.send({
      message: "Login is successful",
      alert: true,
      data: dataSend,
      token: token,
    });
    // Generate JWT token
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "An error occurred while signing in" });
  }
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).json({ message: "Error logging out" });
      }
      res.clearCookie("sessionID");
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(200); // If no session exists, still send 200 OK
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "No user found with this email" });
    }

    // Generate a password reset token
    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mokeke250@gmail.com",
        pass: "lxvycnellvurscyl",
      },
    });

    const mailOptions = {
      from: '"Pendora Ventures" <mokeke250@gmail.com>',
      to: email,
      subject: "Password Reset",
      html: `
          <div>
            <p>Click the link below to reset your password:</p>
            <a href="https://yourwebsite.com/reset-password?token=${resetToken}">Reset Password</a>
          </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          error: "An error occurred while sending the reset email",
        });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Password reset email sent" });
      }
    });
  } catch (error) {
    console.error("Error handling forgot password:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing forgot password" });
  }
});

router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;

    // Verify the reset token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await userModel.findById(decoded.userId);
    if (!user) {
      return res.status(400).json({ error: "Invalid or expired reset token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res
      .status(500)
      .json({ error: "An error occurred while resetting the password" });
  }
});

router.put("/profile", authenticateToken, async (req, res) => {
  const { fullName, phone, email } = req.body;
  try {
    let profile = await userModel.findOne({ userId: req.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.fullName = fullName;
    profile.email = email;
    profile.phone = phone;

    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/wallet", authenticateToken, async (req, res) => {
  try {
    // Get the user ID from the authenticated request
    const userId = req.user._id;

    // Fetch user from database
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the wallet balance
    res.json(user.accountBalance);
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/profile", authenticateToken, async (req, res) => {
  try {
    const profile = await userModel.findOne({ userId: req.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/users", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

// Update a user
router.put("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  const { fullName, email, phone, password, kycApproved, kycDocuments } =
    req.body;

  try {
    const user = await userModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.fullName = fullName || user.fullName;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.password = password || user.password;
    user.accountBalance = accountBalance || user.accountBalance;
    user.kycApproved =
      kycApproved !== undefined ? kycApproved : user.kycApproved;
    user.kycDocuments = kycDocuments || user.kycDocuments;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
});

// Delete a user
router.delete("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
});

module.exports = router;
