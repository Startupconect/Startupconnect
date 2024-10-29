const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    program: { type: String },
    gst: { type: String },
    companyName: { type: String },
    companyDetails: { type: String },
    address: { type: String },
    phone: { type: String },
    location: { type: String },
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;
