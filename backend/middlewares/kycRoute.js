const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const { authenticateToken } = require("../middlewares/authMiddleware");

// Route to handle KYC document submission
router.post("/submit-kyc", authenticateToken, async (req, res) => {
  try {
    const { _id } = req.user; // Get _id from token
    console.log("User ID from token:", _id); // Debugging line

    if (!_id) {
      return res.status(400).json({ error: "No user ID found in token" });
    }

    const user = await userModel.findById(_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user's KYC documents and status
    user.kycDocuments = {
      govtId: req.body.govtId || user.kycDocuments.govtId, // Store Base64 data
      passport: req.body.passport || user.kycDocuments.passport, // Store Base64 data
    };
    user.kycApproved = false; // Set KYC to not approved until reviewed

    await user.save();

    res.status(200).json({ message: "KYC documents submitted successfully" });
  } catch (error) {
    console.error("Error submitting KYC documents:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting KYC documents" });
  }
});

router.get("/kyc-status", authenticateToken, async (req, res) => {
  try {
    const { _id } = req.user; // Get _id from token
    const user = await userModel.findById(_id).select("kycApproved");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ kycApproved: user.kycApproved });
  } catch (error) {
    console.error("Error checking KYC status:", error);
    res
      .status(500)
      .json({ error: "An error occurred while checking KYC status" });
  }
});

module.exports = router;
