const React = require('react');
const Def = require('../home'); 
function index({ places }) {
    let placesFormatted = places.map((places) => {
        return (
            <div key={places.name}> {/* Use a unique key, like name or id */}
                <h2>{places.name}</h2>
                <img src={places.pic} alt={places.name}/>
            </div>
        );
    });
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    );
}

module.exports = index;
