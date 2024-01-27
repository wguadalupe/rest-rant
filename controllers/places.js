const express = require('express');
const router = express.Router();
const places = require('../models/places');

// Route for '/' (list of places)
router.get('/', (req, res) => {
    res.render('places/index', { places });
});

// Route for '/new'
router.get('/new', (req, res) => {
    res.render('places/new');
});

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
  

// Route for '/:id' (specific place details)
router.get('/:id', (req, res) => {
    const id = req.params.id;
    let place = places.find(p => p.id === id) || { // Assuming 'places' is an array of objects
        id: id,
        name: 'Sample Place',
        city: 'Sample City',
        state: 'Sample State',
        cuisines: 'Sample Cuisine',
        pic: 'http://placekitten.com/250/250'
    };

    res.render('places/show', { place });
});

module.exports = router;
