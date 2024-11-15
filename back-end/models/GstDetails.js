const mongoose = require('mongoose');

const GstDetailsSchema = new mongoose.Schema({
  gstNumber: { type: String, required: true },
  panNumber: { type: String, required: true },
  tinNumber: { type: String },
  bankAccount: { type: String, required: true },
  initialCapital: { type: Number, required: true },
  shareholders: { type: String, required: true },
  files: {
    gstFile: { type: String },
    panFile: { type: String },
    tinFile: { type: String },
    bankFile: { type: String },
    shareholdersFile: { type: String },
  },
});

module.exports = mongoose.model('GstDetails', GstDetailsSchema);
