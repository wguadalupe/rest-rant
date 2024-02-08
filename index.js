// Modules and Globals
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Database Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit();
  });

// Express Settings
app.set('views', path.join(__dirname, 'views')); // Use path.join for better path handling
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Routes
app.use('/places', require('./controllers/places'));
app.get('/', (req, res) => res.render('home'));
app.get('*', (req, res) => res.render('places/error404')); // Handle 404 not found

// Start the server
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
