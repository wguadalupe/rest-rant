const React = require('react');
const Def = require('./default');

function CommentForm({ place }) {
    return (
        <Def>
            <form action={`/places/${place._id}/comments`} method="POST" className="mt-4"> 
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        placeholder="Your name"
                        required // Consider adding required for necessary fields
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        name="content"
                        rows="3"
                        placeholder="Your comment"
                        required // Adding required to ensure content is provided
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="stars" className="form-label">Star Rating</label>
                    <input
                        type="number"
                        className="form-control"
                        id="stars"
                        name="stars"
                        step="0.5"
                        min="0"
                        max="5"
                        required // Adding required to ensure a rating is given
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="rant"
                        name="rant"
                    />
                    <label className="form-check-label" htmlFor="rant">Rant</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Def>
    );
}

module.exports = CommentForm;
