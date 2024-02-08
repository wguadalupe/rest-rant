
const React = require('react');
const Def = require('./default');

function Index({ places = [] }) {
    let placesFormatted = places.map((place) => (
        <div className="col-sm-6" key={place._id}> {/* Added key prop here */}
          <h2>
            <a href={`/places/${place._id}`}>
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={`Image of ${place.name}`} style={{width: "100%", height: "auto"}} />
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
