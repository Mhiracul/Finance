// Example using Mongoose
const mongoose = require("mongoose");

const traderSchema = new mongoose.Schema({
  name: String,
  company: String,
  minimumAmount: Number,
  image: String,
  investorsTotal: Number,
  returnPercentage: String,
  fees: String,
});

module.exports = mongoose.model("Trader", traderSchema);
