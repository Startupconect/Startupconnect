// controllers/mentorController.js
const Mentor = require('../models/mentorModel');

const registerMentor = async (req, res) => {
  try {
    const { network, tieEmail, email, password, description, mentorName, activeMonths, state, url, mobile, city, successStories, startupName, websiteLink, hubProfileLink, brief, successbrief, interest, industry, sectors, stages } = req.body;

    // Handle file path
    const filePath = req.file ? req.file.path : null; // Get file path from multer

    const newMentor = new Mentor({
      network,
      tieEmail,
      password, // Make sure to hash this before saving in production
      description,
      file: filePath,
      mentorName,
      activeMonths,
      interest,
      industry,
      sectors,
      stages,
      brief,
      email,
      state,
      city,
      url,
      mobile,
      successStories,
      startupName,
      websiteLink,
      hubProfileLink,
      successbrief,
      
      
    });

    await newMentor.save();
    res.status(201).json({ message: 'Mentor registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { registerMentor };
