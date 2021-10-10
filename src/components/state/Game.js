import React, { Component } from 'react'
import Target from './Target'
import startPage from '../../data/startPage.png'

import Tank from './Tank'
import Attack from './Attack'
import Move from './Move'
import States from './Tank'
import Vector from './Tank'

import { defaultParams, initialGameState } from '../../js/params.js'
import { gameField, panelStyle, welcomePage, welcomePageImg, messageStyle } from '../../js/styles.js'

let gameParams = { ...defaultParams }
let startPageImg = "..../public/data/startPage.png"
class Game extends React.Component {

    runNewGame = () => {
        this.setState({ ...initialGameState(), gameover: false, start: true, targetsCnt: 0 })
        this.makeGameFlow(this.gameOptions())
    }

    gameOptions = () => ({
        probability: this.state.probability,
        periodMsec: gameParams.periodMsec,
    })

    makeGameFlow = (options) => {
        if (this.state.life === 0) {
            gameParams = { ...defaultParams }
            const score = this.state.score
            this.setState({ ...initialGameState(), gameover: true, lastscore: this.state.score })
            return false
        }
        let gameIterator = this.targetGenerate(options)
        setTimeout(
            () => {
                clearInterval(gameIterator)
                options.periodMsec -= gameParams.difficultStepMsec
                options.probability += gameParams.difficultStepProbability
                this.makeGameFlow(options, this)
            },
            gameParams.difficultIntervalMsec
        )
    }

    targetGenerate = ({ probability, periodMsec }) => {
        return setInterval(() => {
            if (Math.random() * 100 <= probability) {
                const xpos = Math.random() * (gameParams.fieldWidth - gameParams.targetWidth)
                const ypos = Math.random() * (gameParams.fieldHeight - gameParams.targetHeight)
                this.setState({
                    targets: [
                        ...this.state.targets,
                        <Target
                            id={this.state.targetsCnt}
                            key={this.state.targetsCnt}
                            coordinate={{ xpos, ypos }}
                            clickHandler={this.clickTarget}
                            targetFired={this.targetFired}
                        />
                    ],
                    targetsCnt: ++this.state.targetsCnt
                })
            }
        }, periodMsec)
    }

    clickTarget = (id) => {
        console.log(id)
        const _targets = [...this.state.targets]
        _targets.reduce(
            (acc, curr, i, arr) => {
                if (curr.props.id === id) {
                    arr.splice(i, 1)
                    this.setState({
                        score: ++this.state.score,
                        targets: _targets
                    })
                }
            },
            _targets[0]
        )
    }

    targetFired = () => {
        const life = this.state.life > 0
            ? this.state.life - 1
            : 0
        this.setState({ life: life })
    }

    constructor(props) {
        super(props)
        this.state = { ...initialGameState(), start: false }
    }

    render() {
        return (
            <div>
                 
                <div style={welcomePage}>
                    { this.state.gameover !== true
                        && this.state.start === true
                        //&& `Попыток осталось: ${this.state.life} Попаданий: ${this.state.score}`              
                    }
                    <img src={startPage} style={welcomePageImg} />                

                    <div style={messageStyle}>
                    {
                        this.state.start === false
                        && <div
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

            </div>

        )
    }
}

export default Game 