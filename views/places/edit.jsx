const React = require('react');
const Def = require('./default'); 

function Edit({ place }) {
  return (
    <Def title={`Edit ${place.name}`}>
      <main>
        <h1>Edit {place.name}</h1>
        <form action={`/places/${place._id}?_method=PUT`} method="POST">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" defaultValue={place.name} required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" defaultValue={place.pic} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" defaultValue={place.city} />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" defaultValue={place.state} />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisines} required />
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input 
              type="number" 
              className="form-control" 
              id="founded" 
              name="founded" 
              defaultValue={place.founded ? place.founded : new Date().getFullYear()} />
          </div>
          <input className="btn btn-primary" type="submit" value="Save Changes" />
        </form>
      </main>
    </Def>
  );
}

module.exports = Edit;
