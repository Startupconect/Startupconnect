// controllers/investorController.js
const Investor = require('../models/Investor');

exports.createInvestor = async (req, res) => {
  try {
    const investor = new Investor(req.body);
    await investor.save();
    res.status(201).json({ message: "Investor registration successful", investor });
  } catch (error) {
    res.status(500).json({ message: "Error saving investor data", error: error.message });
  }
};

exports.getInvestors = async (req, res) => {
  try {
    const investors = await Investor.find();
    res.status(200).json(investors);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving investors", error: error.message });
  }
};
