// routes/mentorRoutes.js
const express = require('express');
const { registerMentor } = require('../controllers/mentorController');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid duplicates
  },
});

const upload = multer({ storage });

// Register mentor route
router.post('/register', upload.single('file'), registerMentor);

module.exports = router;
