const Startup = require('../models/Startup');

// Create a new startup with file upload support
exports.createStartup = async (req, res) => {
    try {
        const {
            startupName,
            brief,
            email,
            mobile,
            state,
            city,
            website,
            appLink,
            stage,
            funding,
            industry,
            sector,
            otherIndustry,
            otherSector,
            service,
            entityNature,
            udyogAadhaar,
            agreeToTerms,
            interestAreas,
        } = req.body;

        // Validate required fields
        if (!startupName || !email || !mobile || !agreeToTerms) {
            return res.status(400).json({ message: "Required fields are missing." });
        }

        // Validate interestAreas as JSON if it comes as a string
        const parsedInterestAreas = typeof interestAreas === 'string' 
            ? JSON.parse(interestAreas) 
            : interestAreas;

        // Access the uploaded file (if any)
        const file = req.file;
        const filePath = file ? file.path : null; // Store file path or null if no file uploaded

        // Create a new startup document with the data
        const newStartup = new Startup({
            startupName,
            brief,
            email,
            mobile,
            state,
            city,
            website,
            appLink,
            stage,
            funding,
            industry,
            sector,
            otherIndustry,
            otherSector,
            service,
            entityNature,
            udyogAadhaar,
            agreeToTerms,
            interestAreas: parsedInterestAreas,
            filePath, // Save file path in database
        });

        // Save to the database
        const savedStartup = await newStartup.save();
        res.status(201).json({
            message: 'Startup registered successfully!',
            data: savedStartup,
        });
    } catch (error) {
        console.error("Error registering startup:", error.message); // Log error message
        res.status(500).json({ message: 'Error registering startup', error: error.message });
    }
};

// Get all startups
exports.getAllStartups = async (req, res) => {
    try {
        const startups = await Startup.find();
        res.status(200).json(startups);
    } catch (error) {
        console.error("Error fetching startups:", error.message); // Log error message
        res.status(500).json({ message: 'Error fetching startups', error: error.message });
    }
};

// Get a startup by ID
exports.getStartupById = async (req, res) => {
    try {
        const startup = await Startup.findById(req.params.id);
        if (!startup) return res.status(404).json({ message: 'Startup not found' });
        res.status(200).json(startup);
    } catch (error) {
        console.error("Error fetching startup:", error.message); // Log error message
        res.status(500).json({ message: 'Error fetching startup', error: error.message });
    }
};

// Update a startup
exports.updateStartup = async (req, res) => {
    try {
        const updatedFields = req.body;

        // If there's a file, add its path to the update
        if (req.file) {
            updatedFields.filePath = req.file.path;
        }

        const startup = await Startup.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        if (!startup) return res.status(404).json({ message: 'Startup not found' });

        res.status(200).json({ message: 'Startup updated successfully', data: startup });
    } catch (error) {
        console.error("Error updating startup:", error.message); // Log error message
        res.status(400).json({ message: 'Error updating startup', error: error.message });
    }
};

// Delete a startup
exports.deleteStartup = async (req, res) => {
    try {
        const startup = await Startup.findByIdAndDelete(req.params.id);
        if (!startup) return res.status(404).json({ message: 'Startup not found' });

        res.status(200).json({ message: 'Startup deleted successfully' });
    } catch (error) {
        console.error("Error deleting startup:", error.message); // Log error message
        res.status(500).json({ message: 'Error deleting startup', error: error.message });
    }
};
