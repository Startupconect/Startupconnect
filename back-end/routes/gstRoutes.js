const express = require('express');
const multer = require('multer');
const path = require('path');
const { createGstDetails } = require('../controllers/gstController');

const router = express.Router();

// Set up file storage using multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Define route
router.post(
  '/gst',
  upload.fields([
    { name: 'gstFile', maxCount: 1 },
    { name: 'panFile', maxCount: 1 },
    { name: 'tinFile', maxCount: 1 },
    { name: 'bankFile', maxCount: 1 },
    { name: 'shareholdersFile', maxCount: 1 },
  ]),
  createGstDetails
);

module.exports = router;
