const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  network: { type: String, required: true },
  tieEmail: { 
    type: String, 
    required:function()  { return this.network === "TIE";},
  },
  
  password: {
    type: String,
    required: function() { return this.network === "TIE"; }, // Conditional requirement
  },
  description: {
     type: String,
     required: function() { return this.network === "Other"; },
    },
  file: { type: String }, // Store file path or URL
  mentorName: { type: String, required: true },
  activeMonths: { type: Number },
  interest: { type: String },
  industry: { type: String },
  sectors: { type: String },
  stages: { type: String },
  brief: { type: String },
  email: { type: String, required: true, unique: true },
  state: { type: String },
  city: { type: String },
  url: { type: String },
  mobile: { type: String },
  successStories: { type: Boolean },
  startupName: { type: String },
  websiteLink: { type: String },
  hubProfileLink: { type: String },
  successbrief: { type: String },
   
  
});

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;
