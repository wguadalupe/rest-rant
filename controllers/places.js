const router = require('express').Router();
const db = require('../models');

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
        place.comments.push(comment._id); // Assuming your schema uses _id to reference comments
        return place.save();
      });
    })
    .then(() => res.redirect(`/places/${placeId}`))
    .catch(err => {
      console.error('Error adding comment:', err);
      res.status(404).render('places/error404');
    });
});

// Update a place
router.put('/:id', (req, res) => {
  res.send('Update place functionality not yet implemented');
});

// Delete a place
router.delete('/:id', (req, res) => {
  res.send('Delete place functionality not yet implemented');
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
