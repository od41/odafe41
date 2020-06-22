import React from 'react';
import { render } from 'react-dom';
import { Router } from "@reach/router";
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Xperiments from './Xperiments';
import Work from './Work';

const App = () => {

    return (
        <React.StrictMode>
            <div>
                <div className="loader"></div>

                <Header />

                <Router>

                    <Home path="/" />
                    <Xperiments path="/xperiments" />
                    <Work path="/work" />
                    <AboutMe path="/aboutme" />

                </Router>
            </div>
        </React.StrictMode>
    )
};

render(<App />, document.getElementById("root"));