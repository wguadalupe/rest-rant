const db = require('../models');

function seedPlaces() {
  const placesData = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: '/public/images/image-from-rawpixel-id-5908144-original.jpg',
      founded: 1989
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg',
      founded: 2020
    }];

  return db.Place.deleteMany({})
    .then(() => db.Place.create(placesData))
    .then(() => console.log('Database successfully seeded!'))
    .catch(err => console.log('Database seeding failed:', err));
}

module.exports = seedPlaces;
