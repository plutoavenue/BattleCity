import React, { Component } from 'react'
import startPage from '../../data/startPage.png'
import Map from './Map'


import {
    GAME_STATE,
    gameStateContext
} from '../utils/Constants';

import GameOver from './GameOver';
import GameOn from './GameOn';

import { welcomePage, welcomePageImg, messageStyle } from '../../js/styles.js'


class Game extends React.Component {


 
    startGame() {
        this.context = GAME_STATE.PLAYING;
    }


    render() {
        return (


            <div>
                
                {this.context === GAME_STATE.START_SCREEN &&
                    <div style={welcomePage}>

                        <img src={startPage} style={welcomePageImg} />
                        <div style={messageStyle}>
                            {
                                <div
                                    style={messageStyle}
                                >
                                <div style={messageStyle}
                                   
                                    onClick={() =>
                                        this.startGame()
                                    } >
                                  
                                        <span style={{ cursor: 'pointer' }}>START NEW BATTLE</span>
                                    </div>
                                    <br />
                                    <div>
                                        <span style={{ cursor: 'pointer' }}>OPTIONS</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                {  this.context === GAME_STATE.GAME_OVER && <GameOver />}

                {  this.context === GAME_STATE.PLAYING && <GameOn /> }
            </div>


        );

    }
}
Game.contextType = gameStateContext;
export default Game 