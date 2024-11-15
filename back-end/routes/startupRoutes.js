const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require('path');
const startupController = require("../controllers/startupController");

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename with timestamp
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage });

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// POST route to register a startup with file upload
router.post("/register", upload.single("file"), startupController.createStartup);

// GET route to fetch all startups
router.get("/all", startupController.getAllStartups);

// GET route to fetch a specific startup by ID
router.get("/:id", startupController.getStartupById);

// PUT route to update a specific startup by ID, with file upload support
router.put("/:id", upload.single("file"), startupController.updateStartup);

// DELETE route to delete a specific startup by ID
router.delete("/:id", startupController.deleteStartup);

module.exports = router;
