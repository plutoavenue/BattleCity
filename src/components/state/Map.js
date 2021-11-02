import React, { Component } from 'react'
//import startPage from '../../data/startPage.png'

import Target from './Target'
import UserTank from './UserTank'
import Attack from './Attack'
import Move from './Move'


import bricks from '../../data/bricks.png'
import stones from '../../data/wall.png'
import water from '../../data/water.png'
import grass from '../../data/grass.png'
import background from '../../data/background.png'



import { defaultParams, initialGameState } from '../../js/params.js'
import { rowItems} from '../../js/styles.js'

let gameParams = { ...defaultParams }

class GameOn extends React.Component {


    constructor(props) {
        super(props);
        this.row = 0
        this.mapCont = React.createRef();
    }



    renderDivs(row) {
        let uiItems = [];

        let locationMap = [['0', 'B', '0', 'S', '0', 'W', 'W', 'B', 'B', '0', '0'],
        ['0', 'B', '0', 'S', '0', 'W', 'W', 'B', 'B', '0', '0'],
        ['0', 'B', '0', 'G', '0', '0', '0', 'B', '0', '0', '0'],
        ['0', '0', '0', 'G', '0', 'B', '0', 'B', '0', '0', 'G'],
        ['0', 'B', 'B', 'B', 'B', 'B', '0', '0', '0', '0', 'G'],
        ['0', '0', '0', '0', 'S', 'S', '0', '0', '0', '0', 'B'],
        ['G', 'B', '0', '0', '0', '0', '0', '0', 'B', '0', 'B'],
        ['0', 'B', '0', '0', 'B', 'B', 'B', 'S', '0', '0', 'B'],
        ['0', 'B', '0', '0', 'B', 'M', 'B', 'S', '0', '0', 'B'],
        ['0', 'B', 'B', '0', 'B', 'B', 'B', 'S', '0', '0', '0']];


        let i = 0;
        let j = 0;

        for (i = row; i < 10; i++) {
            for (j = 0; j < 11; j++) {

                if (locationMap[i][j] === 'B') {
                    uiItems.push(
                        <div>
                            <img src={bricks} />
                        </div>
                    )
                }
                else if (locationMap[i][j] === 'S') {
                    uiItems.push(
                        <div>
                            <img src={stones} />
                        </div>
                    )
                }

                else if (locationMap[i][j] === 'W') {
                    uiItems.push(
                        <div>
                            <img src={water} />
                        </div>
                    )
                }
                else if (locationMap[i][j] === 'G') {
                    uiItems.push(
                        <div>
                            <img src={grass} />
                        </div>
                    )
                }

                else {
                    uiItems.push(
                        <div>
                            <img src={background} />
                        </div>
                    )
                }
            }
        }
        

    /*    while (count--)
            uiItems.push(
                <div>
                    This is added div! uniqueID: {count}
                </div>
            )*/
        return uiItems;
    }

    render() {
       
        return (
            //<div style={gameOn}>


            //    <div style={leftPanel}>

            //    </div> 

            //    <div style={gameField} id="map">
            //     <Game/>
            //    </div>  

            <div ref={this.mapCont} >
                <div style={rowItems}>
                    {this.renderDivs(0)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(1)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(2)}
                </div >
                <div style={rowItems}>
                    {this.renderDivs(3)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(4)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(5)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(6)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(7)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(8)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(9)}
                </div>
                <div style={rowItems}>
                    {this.renderDivs(10)}
                </div>

             
                </div>  

            //</div>

        )
    }
}

export default GameOn 