// models/Investor.js
const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  contactInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
  },
  category: { type: String, required: true },
  interest: {
    investmentAmount: { type: Number, required: true },
    focusAreas: { type: [String], required: true },
    investmentStage: { type: String, required: true },
  },
}, { timestamps: true });

module.exports = mongoose.model('Investor', investorSchema);
