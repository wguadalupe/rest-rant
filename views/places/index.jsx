const React = require('react');
const Def = require('./default');

function Index({ places = [] }) {
    const placesFormatted = places.map((place, index) => (
        <div key={place.id || index} className="col-sm-6">
          <h2>
            <a href={`/places/${place.id}`} >
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={`Image of ${place.name}`} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
    ));

    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div className="row">
                  {placesFormatted}
                </div>
            </main>
        </Def>
    );
}

module.exports = Index;
