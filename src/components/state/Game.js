import React, { Component } from 'react'
import startPage from '../../data/startPage.png'

import GameOver from './GameOver';
import GameOn from './GameOn';

import { welcomePage, welcomePageImg, messageStyle, gameOn } from '../../js/styles.js'
import { connect } from 'react-redux';
import { gameOverAction, playingAction, startScreenAction } from '../redux/reducer';


class Game extends React.Component {


    render() {
        const { startScreen, playing, gameOver, type } = this.props;
        return (


            <div>
                
                {type === 'START_SCREEN' &&
                    <div style={welcomePage}>

                        <img src={startPage} style={welcomePageImg} />
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
                                    <br />
                                    <div>
                                        <span style={{ cursor: 'pointer' }}>OPTIONS</span>
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