// Example using Express.js
const express = require("express");
const router = express.Router();

// Assuming you have a Trader model
const Trader = require("../models/traders");
const { authenticateToken, authorizeAdmin } = require("./authMiddleware");

router.post("/traders", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const {
      name,
      image,
      company,
      minimumAmount,
      investorsTotal,
      returnPercentage,
      fees,
    } = req.body;
    const base64Data = image.replace(/^data:image\/png;base64,/, "");

    const newTrader = new Trader({
      name,
      minimumAmount,
      company,
      image: base64Data, // Store base64 string
      investorsTotal,
      returnPercentage,
      fees,
    });
    await newTrader.save();
    res.status(201).json(newTrader);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/traders", authenticateToken, async (req, res) => {
  try {
    const traders = await Trader.find();
    res.status(200).json(traders);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/traders/:id", authenticateToken, async (req, res) => {
  try {
    const trader = await Trader.findById(req.params.id);
    if (!trader) return res.status(404).json({ error: "Trader not found" });
    res.status(200).json(trader);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.delete(
  "/traders/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const trader = await Trader.findByIdAndDelete(req.params.id);
      if (!trader) return res.status(404).json({ error: "Trader not found" });
      res.json({ message: "Trader deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

// Route to update a trader
router.put(
  "/traders/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const {
        name,
        image,
        company,
        minimumAmount,
        investorsTotal,
        returnPercentage,
        fees,
      } = req.body;
      const base64Data = image
        ? image.replace(/^data:image\/png;base64,/, "")
        : undefined;

      const updatedTrader = await Trader.findByIdAndUpdate(
        req.params.id,
        {
          name,
          image: base64Data,
          company,
          minimumAmount,
          investorsTotal,
          returnPercentage,
          fees,
        },
        { new: true }
      );

      if (!updatedTrader)
        return res.status(404).json({ error: "Trader not found" });
      res.json(updatedTrader);
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);
module.exports = router;
