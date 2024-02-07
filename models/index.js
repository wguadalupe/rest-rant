require('dotenv').config();
const mongoose = require('mongoose');
const Place = require('./places'); 

module.exports = { Place }; // Export the 'Place' model
