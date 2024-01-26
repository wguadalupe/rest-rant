const express = require('express');
const router = express.Router();

// Route for '/places/new'
router.get('/new', (req, res) => {
    res.render('places/new');
});

// Route for '/places/:id' (specific place details)
router.get('/:id', (req, res) => {
    // Placeholder for fetching a specific place by its id
    const id = req.params.id;
    // Placeholder object
    let place = {
        id: id,
        name: 'Sample Place',
        city: 'Sample City',
        state: 'Sample State',
        cuisines: 'Sample Cuisine',
        pic: 'http://placekitten.com/250/250'
    };

    // Render the specific place details page
    res.render('places/show', { place }); // Corrected here
});


// Route for '/' (list of places)
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }];
    
    res.render('places/index', { places });
});

module.exports = router;
