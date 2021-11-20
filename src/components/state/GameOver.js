import React, { Component } from 'react'
import gameover from '../../data/gameover.jpg'
import { GameOverImg, messageStyle, welcomePage } from '../../js/styles.js'
import { BrowserRouter as  Link } from 'react-router-dom';

class GameOver extends React.Component {

    render() {
        return (
            <div>

            <div style={welcomePage}>
                <img src={gameover} style={GameOverImg} />

                <div style={messageStyle}>
                    {
                        <div
                            style={messageStyle}
                            onClick={() => this.runNewGame()}   >

                            <div style={messageStyle}>
                                <Link to='/'>
                                    <span style={{ cursor: 'pointer' }}>RETURN TO MAIN PAGE </span>
                                </Link>
                            </div>
                            <br />
                        </div>
                    }
                </div>
            </div>

        </div>
        );
    }
}

export default GameOver ;