const Individual = require('../models/individualModel');

// Create a new individual
exports.createIndividual = async (req, res) => {
  try {

    const existingIndividual = await Individual.findOne({ email: req.body.email });
    if (existingIndividual) {
      return res.status(400).json({ message: 'This email is already registered.' });
    }

    const individual = new Individual({
      ...req.body,
      profilePicture: req.file ? req.file.path : null,
    });

    await individual.save();
    res.status(201).json({ message: 'Individual registered successfully', individual });
  } catch (error) {
    // Check for duplicate key error (error code 11000)
    if (error.code === 11000) {
      res.status(400).json({ message: 'Duplicate email error: This email already exists.' });
    } else {
      console.error('Error saving individual:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
};
