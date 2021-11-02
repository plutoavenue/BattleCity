import React, { Component } from 'react'
//import startPage from '../../data/startPage.png'

import Target from './Target'
import UserTank from './UserTank'
import Attack from './Attack'
import Move from './Move'
import Map from './Map'


import bricks from '../../data/bricks.png'
import stones from '../../data/wall.png'
import water from '../../data/water.png'
import grass from '../../data/grass.png'
import base from '../../data/base.png'



import { defaultParams, initialGameState } from '../../js/params.js'
import { gameField, panelStyle, gameOn, leftPanel, rightPanel,  messageStyle } from '../../js/styles.js'

let gameParams = { ...defaultParams }

class GameOn extends React.Component {

    constructor(props) {
        super(props)
            this.mapCont = React.createRef();
    
        }

    render() {
        return (
            <div style={gameOn} ref={this.map}>


                <div style={leftPanel}>

                </div> 

                <div style={gameField} ref={this.mapCont} id='map' >
            
                 <Map/>
                </div>  

                <div style={rightPanel}>

                </div>  

            </div>

        )
    }
}

export default GameOn 