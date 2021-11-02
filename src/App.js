import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Game from './components/state/Game'
import GameOn from './components/state/GameOn'
import GameOver from './components/state/GameOver'

import './App.css'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route
                            path='/'
                            component={Game}
                            exact />
                        <Route
                            path='/gameon'
                            component={GameOn}
                        />
                        <Route
                            path='/gameover'
                            component={GameOver}
                        />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}
export default App;