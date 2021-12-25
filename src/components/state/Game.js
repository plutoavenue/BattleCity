import React, { Component } from 'react'
import startPage from '../../data/startPage.png'

import GameOver from './GameOver';
import GameOn from './GameOn';


import { welcomePage, welcomePageImg, messageStyle } from '../../js/styles.js'
import { connect } from 'react-redux';
import { gameOverAction, playingAction, startScreenAction } from '../redux/reducer';


class Game extends Component {

  
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
        const { playing, type } = this.props;
        return (


            <div>
                {type === 'START_SCREEN' &&

                    <div style={welcomePage}>

                    <img src={startPage} style={welcomePageImg} alt='noimg'/>

                        <div style={messageStyle}>
                            {
                                <div
                                    style={messageStyle}
                                >
                                <div style={messageStyle}
                                   
                                    onClick={() =>
                                        playing()
                                    } >
                                  
                                        <span style={{ cursor: 'pointer' }}>START NEW BATTLE</span>
                                    </div>
                                <div style={messageStyle}
                                    onClick={() =>
                                        this.dbCheck()
                                    } >

                                    <span style={{ cursor: 'pointer' }}>OPTIONS </span>
                                   

                                </div>
                                </div>
                            }
                        </div>
                    </div>

                }

                {  type === 'GAME_OVER' && <GameOver />}

                {  type === 'PLAYING' && <GameOn /> }
            </div>


        );

    }
}

const mapStateToProps = (state) => ({
    type: state.gameOn.type,
});

const mapDispatchToProps = {
    startScreen: startScreenAction,
    playing: playingAction,
    gameOver: gameOverAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game) 