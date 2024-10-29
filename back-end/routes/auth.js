const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { email, password, ...otherFields } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, ...otherFields });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ message: "Server error, please try again later." });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Log user details for debugging
    console.log("User found: ", user);
    console.log("Password provided: ", password);
    console.log("Hashed password in DB: ", user.password);

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Login error: ", error.message);
    res.status(500).json({ message: "Server error, please try again later" });
  }
});

module.exports = router;
