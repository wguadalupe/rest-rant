// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')



const path = require('path');
const app = express();

// Set the views directory
// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Static Files (uncomment if you have static files like images, CSS, client-side JS)
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/places', require('./controllers/places'));

app.use('/', (req, res) => {
    res.render('home'); 
});  

app.use('*', (req, res) => {
    res.render('error404'); 
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
