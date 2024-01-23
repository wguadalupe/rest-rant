const React = require('react')
const Def = require('../home')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      // Using place.id as key if available, otherwise using index
      return (
        <div key={place.id || index}>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
}

module.exports = index
