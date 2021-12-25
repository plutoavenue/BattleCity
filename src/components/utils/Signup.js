import React, { Component } from 'react'

import { box} from '../../js/styles.js'
import { BrowserRouter as  Redirect } from 'react-router-dom';


class Signup extends React.Component {

    constructor({ isLoggedIn, onLogin }) {
        super();
        this.onLogin = onLogin;

    if (isLoggedIn) {
        <Redirect to='/' />
    }
}
   

    dbCheck() {
        
        fetch("http://localhost/battlecity", {
            method : 'POST',
            mode: 'no-cors',
            header : {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({action:1})
        })
            .then(response => response.text())
            .then(response => {
                console.log(response);
            });
    }

    render() {
      
        return (

            <form className="box" id="boxSignUp" action="index.html" method="post">
            <h1 className="lgn">Sign Up</h1>
            <input type="text" name="" placeholder="Login"/>
            <input type="text" name="" placeholder="E-mail"/>
            <input type="password" name="" placeholder="Password"/>
            <input type="password" name="" placeholder="Confirm password"/>
            <input type="submit" name="" placeholder="Login"/>
        </form>

        );

    }
}

export default Signup