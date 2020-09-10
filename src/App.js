import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import Integers from './components/Integers';
import Strings from './components/Strings';
import ColoredStrings from './components/ColoredStrings';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-5 mx-auto text-center">
                        <Router>
                            <Home path="/home" />
                            <Integers path="/:int" />
                            <Strings path="/:str" />
                            <ColoredStrings path="/:str/:color/:bgc" />
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
