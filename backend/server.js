const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const planRoutes = require("./middlewares/plansMiddleware");
const authMiddleware = require("./middlewares/auth");
const kycMiddleware = require("./middlewares/kycRoute");
const tradersMiddleware = require("./middlewares/traders");
const fundMiddleware = require("./middlewares/fundWallet");
const dotenv = require("dotenv");
const {
  authenticateToken,
  authorizeAdmin,
} = require("./middlewares/authMiddleware");
dotenv.config();

const app = express();

const allowedOrigin = "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);
app.get("/api", (req, res) => {
  res.send("Server is running");
});

app.get("/admin", authenticateToken, authorizeAdmin, (req, res) => {
  // This route handler will only be executed if the user is an admin
  res.send({ message: "Welcome to the admin-only route!", alert: true });
});

app.use(express.json({ limit: "10mb" }));

const PORT = 4000;
const mongo = process.env.MONGO_URL;

mongoose
  .connect(mongo)
  .then(() => console.log("Mongo connection successful"))
  .catch((err) => console.error("Mongo connection failed", err));

app.use("/api", authMiddleware);
app.use("/api", kycMiddleware);
app.use("/api", tradersMiddleware);
app.use("/api", fundMiddleware);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
