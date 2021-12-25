import React, { Component } from 'react'
import Game from './components/state/Game'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './header/header';
import Login from './components/utils/Login';
import Signup from './components/utils/Signup';


class App extends Component {

    state = {
        isLoggedIn: false,
    }

    onLogin = (event) => {
        event.preventDefault();
        if (event.target.inputEmail.value === 'admin'
            && event.target.inputPassword.value === '12345') {
            console.log('logged in');
            this.setState({ isLoggedIn: true });
        } else {
            this.setState({ isLoggedIn: false });
            alert("Wrong login or password!");
        }
    }

    onLogout = (event) => {
        event.preventDefault();
        console.log('logged out');
        this.setState({ isLoggedIn: false });
    }

    render() {
        return (
               <React.Fragment>
                <Router>

                    <Header
                        isLoggedIn={this.state.isLoggedIn}
                        onLogout={this.onLogout}
                    />
                    <Switch>
                        <Route
                            path='/'
                            component={Game}
                            exact />
                        
                        <Route 
                            path='/login'
                            render={ () => (
                                this.state.isLoggedIn ? <Redirect to='/' /> :
                                    <Login
                                        isLoggedIn={this.state.isLoggedIn}
                                        onLogin={this.onLogin}/>)}
                        />
                        <Route
                            path='/signup'
                            render={() => (
                                this.state.isLoggedIn ? <Game /> :
                                    <Signup
                                        isLoggedIn={this.state.isLoggedIn}
                                        onLogin={this.onLogin} />)}
                        />
                       
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}
export default App;