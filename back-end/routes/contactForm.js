// routes/contactForm.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const ContactForm = require('../models/ContactForm');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Add timestamp to file name to avoid duplicates
    }
});

const upload = multer({ storage });

// POST route to handle form submission
router.post('/submit', upload.single('fileUpload'), async (req, res) => {
    try {
        const { 
            firstName, lastName, email, contactNumber, gender, 
            profession, state, city, queryType, comments 
        } = req.body;

        // Save form data into the database
        const newContactForm = new ContactForm({
            firstName,
            lastName,
            email,
            contactNumber,
            gender,
            profession,
            state,
            city,
            queryType,
            comments,
            fileUpload: req.file ? req.file.path : null, // Store file path if uploaded
        });

        await newContactForm.save();

        res.status(200).json({ message: 'Form submission successful!' });
    } catch (error) {
        console.error('Error while submitting form:', error);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
});

module.exports = router;
