// index.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up the JSX view engine with express-react-views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// Static Files (uncomment if you have static files like images, CSS, client-side JS)
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home'); // Ensure you have a home.jsx in your views directory
});

app.get('*', (req, res) => {
    res.render('error404'); // Ensure you have an error404.jsx in your views directory
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
