// models/Certificate.js
const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateType: { type: String, required: true },
  certificateNumber: { type: String, required: true },
  entityName: { type: String, required: true },
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
