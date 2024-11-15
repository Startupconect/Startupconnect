// models/ContactForm.js

const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    gender: { type: String, required: true },
    profession: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    queryType: { type: String, required: true },
    comments: { type: String, required: true },
    fileUpload: { type: String }, // Store file path
    createdAt: { type: Date, default: Date.now }
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);
module.exports = ContactForm;

