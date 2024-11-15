const GstDetails = require('../models/GstDetails');
const path = require('path');

// POST: Save GST Details
exports.createGstDetails = async (req, res) => {
  const { gstNumber, panNumber, tinNumber, bankAccount, initialCapital, shareholders } = req.body;

  const files = {
    gstFile: req.files['gstFile'] ? req.files['gstFile'][0].path : null,
    panFile: req.files['panFile'] ? req.files['panFile'][0].path : null,
    tinFile: req.files['tinFile'] ? req.files['tinFile'][0].path : null,
    bankFile: req.files['bankFile'] ? req.files['bankFile'][0].path : null,
    shareholdersFile: req.files['shareholdersFile'] ? req.files['shareholdersFile'][0].path : null,
  };

  try {
    const gstDetails = new GstDetails({
      gstNumber,
      panNumber,
      tinNumber,
      bankAccount,
      initialCapital,
      shareholders,
      files,
    });

    await gstDetails.save();
    res.status(201).json({ message: 'GST details submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting GST details.' });
  }
};
