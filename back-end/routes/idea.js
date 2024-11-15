// routes/ideas.js
const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

// POST route to submit a new idea
router.post('/submit', async (req, res) => {
  const { ideaText } = req.body;

  if (!ideaText) {
    return res.status(400).json({ error: 'Idea text is required.' });
  }

  try {
    // Create and save new idea in the database
    const newIdea = new Idea({ text: ideaText });
    await newIdea.save();
    res.status(200).json({ message: 'Idea submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
