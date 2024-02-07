const React = require('react')

function Def({ children, title = 'Default Title' }) {
    return (
        <>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>{title}</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/places">Places</a></li>
                            <li className="nav-item"><a className="nav-link" href="/places/new">Add Place</a></li>
                        </ul>
                    </nav>
                    {children}
                </body>
            </html>
        </>
    )
}

module.exports = Def
