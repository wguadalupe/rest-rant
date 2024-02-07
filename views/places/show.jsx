const React = require('react');
const PropTypes = require('prop-types');
const Def = require('./default');

function Show({ place, message = '' }) {
  let messageComponent = '';
  if (message) {
    messageComponent = (
      <h4 className='alert-danger'>
        {message}
      </h4>
    );
  }

  return (
    <Def>
      <main>
        <h1>{place.name}</h1>
        {messageComponent}
        <div className="row">
          <div className="col-sm-6">
            {/* Use a default image if imageUrl is not provided or is broken */}
            <img 
              src={place.imageUrl || 'path/to/default-image.png'} 
              alt={place.name} 
              style={{ maxWidth: "100%" }}
              onError={(e) => e.target.src = 'path/to/default-image.png'} // Fallback for broken images
            />
            <h2>Location & Information</h2>
            <p>Located in {place.city}, {place.state}</p>
            <p>{place.showEstablished()}</p>
            <p>Serving {place.cuisines}</p>
          </div>
        </div>
        <section>
          <h2>Ratings</h2>
          <div>No ratings yet</div>
        </section>
        <section>
          <h2>Comments</h2>
          <div>No comments yet</div>
        </section>
        <a href={`/places/${place._id}/edit`} className="btn btn-warning">Edit</a>
        <form method="POST" action={`/places/${place._id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">Delete</button>
        </form>
      </main>
    </Def>
  );
}

Show.propTypes = {
  place: PropTypes.object.isRequired,
  message: PropTypes.string
};

module.exports = Show;
