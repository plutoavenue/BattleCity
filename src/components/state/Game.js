import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import startPage from '../../data/startPage.png'
import GameOn from './GameOn'

import { defaultParams, initialGameState } from '../../js/params.js'
import { welcomePage, welcomePageImg, messageStyle } from '../../js/styles.js'

let gameParams = { ...defaultParams }
class Game extends React.Component {

    runNewGame = () => {
        this.setState({
            ...initialGameState(),
            gameover: false,
            gameon: true,
            start: true,
            targetsCnt: 0
        })

    }

    constructor(props) {
        super(props) 
        this.state = { ...initialGameState(), start: false }
    }

    render() {
    return (
            /*
            <div>
 
                <div style={welcomePage}>
                    { this.state.gameover !== true
                        && this.state.gameon === false             
                    }
                    <img src={startPage} style={welcomePageImg} />                

                    <div style={messageStyle}>
                    {
                        <div
                            style={messageStyle}
                            onClick={() => this.runNewGame()}   >
                                
                                <div style={messageStyle}>
                                    <span style={{ cursor: 'pointer' }}>START NEW BATTLE</span>
                                    </div>
                                <br/>
                                <div>
                                    <span style={{ cursor: 'pointer' }}>OPTIONS</span>
                                </div>
                        </div>
                    }
                    </div>
                </div>  

            </div>*/

    
                            <div>

                                <div style={welcomePage}>
                                    {this.state.gameover !== true
                                        && this.state.gameon === false
                                    }
                                    <img src={startPage} style={welcomePageImg} />

                                    <div style={messageStyle}>
                                        {
                                            <div
                                                style={messageStyle}
                                                onClick={() => this.runNewGame()}   >

                                                <div style={messageStyle}>
                                                    <Link to='/gameon'>
                                                        <span style={{ cursor: 'pointer' }}>START NEW BATTLE</span>
                                                    </Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <span style={{ cursor: 'pointer' }}>OPTIONS</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                            </div>
                          
        );

    }
}

export default Game 