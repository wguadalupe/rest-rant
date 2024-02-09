const React = require('react');
const PropTypes = require('prop-types');
const Def = require('./default');
const CommentForm = require('./comments'); // Corrected import statement

function Show({ place, message = '' }) {
  let messageComponent = '';
  if (message) {
    messageComponent = (
      <h4 className='alert-danger'>
        {message}
      </h4>
    );
  }

  // Dynamic comments rendering logic
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  );
  if (place.comments && place.comments.length) { // Ensure comments exist and have length before mapping
    comments = place.comments.map(c => {
      return (
        <div className="border" key={c._id}> {/* Ensure each comment has a unique key */}
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😺'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong> 
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }

  return (
    <Def>
      <main>
        <h1>{place.name}</h1>
        {messageComponent}
        <div className="row">
          <div className="col-sm-6">
            <img 
              src={place.pic || '/path/to/default-image.png'} 
              alt={place.name} 
              style={{ maxWidth: "100%" }}
              onError={(e) => e.target.src = '/path/to/default-image.png'}
            />
            <h2>Location & Information</h2>
            <p>Located in {place.city}, {place.state}</p>
            <p>{place.showEstablished()}</p>
            <p>Serving {place.cuisines}</p>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        {comments}
        <CommentForm place={place} /> {/* Ensure this is correctly placed */}
        <hr />
        <a href={`/places/${place._id}/edit`} className="btn btn-warning">Edit</a>
        <form method="POST" action={`/places/${place._id}?_method=DELETE`} style={{marginTop: "1rem"}}>
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
