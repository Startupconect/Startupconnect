const mongoose = require('mongoose');

const individualSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  occupation: { type: String, required: true },
  interest: { type: String, required: true },
  brief: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  termsAgreed: { type: Boolean, required: true },
  profilePicture: { type: String }  // Store path or URL to the profile picture
}, { timestamps: true });

module.exports = mongoose.model('Individual', individualSchema);
