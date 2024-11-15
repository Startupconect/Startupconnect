// models/Idea.js
const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  text: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});


const idea = mongoose.model("idea", ideaSchema);
module.exports = idea;
