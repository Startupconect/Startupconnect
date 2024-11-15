const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  network: { type: String, required: true },
  email: { type: String, required: true },
  mentorName: { type: String, required: true },
  activeMonths: { type: String, required: true },
  state: { type: String, required: true },
  url: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  interest: { type: String, required: false },
  industry: { type: String, required: false },
  sectors: { type: String, required: false },
  brief: { type: String, required: false },
  file: { type: String, required: true }, // Ensure the file path is required
  successStories: { type: Boolean, default: false },
  startupName: { type: String, required: false },
  websiteLink: { type: String, required: false },
  hubProfileLink: { type: String, required: false },
});

const Mentor = mongoose.model("Mentor", MentorSchema);
module.exports = Mentor;
