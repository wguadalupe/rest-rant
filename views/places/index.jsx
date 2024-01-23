const React = require('react');
const Def = require('./default');

function Index({ places = [] }) {
    const placesFormatted = places.map((place, index) => (
        <div key={index}>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={`Image of ${place.name}`}/>
        </div>
    ));

    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    );
}

module.exports = Index;