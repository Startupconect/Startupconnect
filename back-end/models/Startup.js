const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    startupName: { type: String, required: true, trim: true },
    file: { type: String }, // Store file path
    funding: { type: String, enum: ['Funded', 'Bootstrapped'], default: 'Bootstrapped' },
    stage: { type: String, enum: ['Ideation', 'Validation', 'Early Traction', 'Scaling'], required: true },
    brief: { type: String, maxlength: 500 },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    state: { type: String },
    city: { type: String },
    website: { type: String },
    appLink: { type: String },
    industry: { type: String },
    otherIndustry: { type: String },
    sector: { type: String },
    otherSector: { type: String },
    service: { type: String },
    entityNature: { type: String, enum: ['Registered partnership', 'Limited Liability Partnership', 'Private Limited'] },
    udyogAadhaar: { type: String, match: /^[0-9]{12}$/ },
    interestAreas: {
        all: { type: Boolean, default: false },
        investors: { type: Boolean, default: false },
        incubators: { type: Boolean, default: false },
        otherStartups: { type: Boolean, default: false },
        mentors: { type: Boolean, default: false },
        accelerators: { type: Boolean, default: false }
    },
    agreeToTerms: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Startup-Registartion', startupSchema);
