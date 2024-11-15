// routes/investorRoutes.js
const express = require('express');
const { createInvestor, getInvestors } = require('../controllers/investorController');


const router = express.Router();

router.post('/register', createInvestor); // Register investor
router.get('/investors', getInvestors);    // Retrieve all investors

module.exports = router;
