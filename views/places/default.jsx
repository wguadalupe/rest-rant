const React = require('react');

function Def({ children }) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

module.exports = Def;