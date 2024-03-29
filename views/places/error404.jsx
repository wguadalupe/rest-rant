const React = require('react');
const Def = require('./default'); 

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </main>
        </Def>
    );
}

module.exports = Error404;
