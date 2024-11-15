// routes/certificateRoutes.js
const express = require('express');
const Certificate = require('../models/Certificate');
const router = express.Router();

// POST route to handle certificate submissions
router.post('/submit', async (req, res) => {
  const { certificateType, certificateNumber, entityName } = req.body;

  try {
    const newCertificate = new Certificate({
      certificateType,
      certificateNumber,
      entityName,
    });
    
    await newCertificate.save();
    res.status(201).json({ message: 'Certificate submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'There was an error submitting the certificate.' });
  }
});

module.exports = router;
