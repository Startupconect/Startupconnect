const express = require('express');
const multer = require('multer');
const path = require('path');

const { createIndividual, getAllIndividuals } = require('../controllers/individualController');

const router = express.Router();

// Configure file upload using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: set file size limit to 5 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Routes
router.post('/register', upload.single('profilePicture'), createIndividual);
//router.get('/', getAllIndividuals);

module.exports = router;
