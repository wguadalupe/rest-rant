const React = require('react');
const Def = require('./places/default'); 

function Home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div> <img src="/images/all-over-print-recycled-unisex-hoodie-white-back-6552adde0227b.png" alt="hoodie" />

                </div>

                <a href="/places"> <button className="btn-primary">Places Page</button> </a>

                
            </main>
        </Def>
    );
}

module.exports = Home;
