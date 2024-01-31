const mongoose = require('mongoose');

// Import the 'Place' model from the 'places.js' file
const Place = require('./places'); // This should match the exported name from places.js

const db = {
  Place: Place,  
};

module.exports = db;
