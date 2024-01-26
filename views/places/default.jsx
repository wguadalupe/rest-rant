const React = require('react')

function Def ({ children, title = 'Default Title' }) {
    return (
        <html>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

module.exports = Def
