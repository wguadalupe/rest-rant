const router = require('express').Router();
const db = require('../models');
const seedPlaces = require('../seeders/seed-places')

// List all places
router.get('/', (req, res) => {
  db.Place.find()
    .then(places => {
      res.render('places/index', { places });
    })
    .catch(err => {
      console.error(err);
      res.status(404).render('places/error404');
    });
});

router.get('/seed', (req, res) => {
  seedPlaces()
    .then(() => res.send('Database successfully seeded!'))
    .catch(err => {
      console.error('Database seeding failed:', err);
      res.status(500).send('Database seeding failed. Check the server logs for more details.');
    });
});


// Create a new place
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        let message = 'Validation Error: ';
        for (let field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message} `;
        }
        console.log('Validation error message', message);
        res.render('places/new', { message });
      } else {
        console.error(err);
        res.status(404).render('places/error404');
      }
    });
});

// Display form to create a new place
router.get('/new', (req, res) => {
  res.render('places/new');
});

// Display details for a specific place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      if (!place) {
        throw new Error('Place not found');
      }
      res.render('places/show', { place });
    })
    .catch(err => {
      console.error('Error fetching place:', err);
      res.status(404).render('places/error404');
    });
});

// Add a comment to a place
router.post('/:id/comment', (req, res) => {
  const placeId = req.params.id;
  db.Place.findById(placeId)
    .then(place => {
      if (!place) {
        throw new Error('Place not found');
      }
      return db.Comment.create(req.body).then(comment => {
        place.comments.push(comment._id); 
        return place.save().then(() => place); 
      });
    })
    .then(place => res.redirect(`/places/${place._id}`)) 
    .catch(err => {
      console.error('Error adding comment:', err);
      res.status(404).render('places/error404');
    });
});

// Update a place
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch(err => {
      console.error(err);
      res.status(404).render('places/error404');
    });
});

// Delete a place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => {
      console.error(err);
      res.status(404).render('places/error404');
    });
});


// Display form to edit a place
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      if (!place) {
        throw new Error('Place not found');
      }
      res.render('places/edit', { place });
    })
    .catch(err => {
      console.error('Error fetching place for edit:', err);
      res.status(404).render('places/error404');
    });
});

module.exports = router;
