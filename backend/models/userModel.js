const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  bitcoinAddress: {
    type: String,
  },
  tetherAddress: {
    type: String,
  },

  accountBalance: {
    type: Number,
    default: 0,
  },
  tradingAccount: {
    type: Number,
    default: 0,
  },
  phone: {
    type: Number,
  },
  ipAddress: {
    type: String,
    default: null,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  kycDocuments: {
    govtId: { type: String, default: null }, // Store Base64-encoded string
    passport: { type: String, default: null }, // Store Base64-encoded string
  },
  kycApproved: { type: Boolean, default: false },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
