const React = require('react')


function Def (html) {
    <html>
        <head>
            <title>Title</title>
        </head>
        <body>
            {html.children}
        </body>
    </html>
}

module.exports = Def