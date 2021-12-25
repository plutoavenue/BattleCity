import React, { Component } from 'react'

import { box} from '../../js/styles.js'
import { BrowserRouter as  Redirect } from 'react-router-dom';


class Login extends React.Component {

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
            <form style={box} className="box" onSubmit={this.onLogin}>
                <h1 className='lgn' >Login</h1>
                <input type="text" name=""
                    id="inputEmail"
                    placeholder="Login"
                    required=""/>  
                <input type="password" name="" placeholder="Password"
                    id="inputPassword"
                    required />
                <input type="submit" name="" placeholder="Login"/>
              </form>


        );

    }
}

export default Login