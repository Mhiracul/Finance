const express = require("express");
const router = express.Router();
const PendingFund = require("../models/pendingFund");
const { authenticateToken } = require("./authMiddleware");

// Route to fund wallet
router.post("/fund-wallet", authenticateToken, async (req, res) => {
  const { amount, paymentMethod } = req.body;
  const userId = req.user._id; // Extract user ID from authenticated user

  try {
    const pendingFund = new PendingFund({
      userId,
      amount,
      paymentMethod,
    });

    await pendingFund.save();
    res.status(200).json({ message: "Fund request submitted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while submitting fund request." });
  }
});

module.exports = router;
