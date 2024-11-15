// controllers/bottomFormController.js
const BottomForm = require('../models/BottomForm');

// Handle form submission
exports.submitForm = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const newEntry = new BottomForm({ text });
    await newEntry.save();
    res.status(201).json({ message: 'Form submitted successfully', data: newEntry });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
};

// Get all form entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await BottomForm.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
};
