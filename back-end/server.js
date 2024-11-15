const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Import route files
const authRoutes = require('./routes/auth');
const contactFormRoutes = require('./routes/contactForm');
const gstRoutes = require('./routes/gstRoutes');
const certificateRoutes = require('./routes/certificateRoutes'); 
const investorRoutes = require('./routes/investorRoutes');
const startupRoutes = require("./routes/startupRoutes");
const individualRoutes = require('./routes/individualRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const ideaRoutes = require("./routes/idea");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route middlewares
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactFormRoutes);
app.use('/api/gst', gstRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/investors', investorRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/mentors", mentorRoutes);
app.use('/api/individual', individualRoutes);
app.use("/api/idea", ideaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
