import React, { Component } from 'react'
//import startPage from '../../data/startPage.png'

import Target from './Target'
import UserTank from './UserTank'
import Attack from './Attack'
import Move from './Move'


import { defaultParams, initialGameState } from '../../js/params.js'
import { gameField, panelStyle, gameOn, leftPanel, rightPanel,  messageStyle } from '../../js/styles.js'

let gameParams = { ...defaultParams }

class GameOver extends React.Component {


    render() {
        return (
            <div style={gameOn}>


                <div style={leftPanel}>

                </div> 

                <div style={gameField}>
                   <span> SHOOOOOOOOO </span>
                </div>  

                <div style={rightPanel}>

                </div>  

            </div>

        )
    }
}

export default GameOver 