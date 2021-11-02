import React, { Component } from 'react'

import upState from '../../data/user/up.png'
import downState from '../../data/user/down.png'
import rightState from '../../data/user/right.png'
import leftState from '../../data/user/left.png'



class UserTank extends React.Component {


	creatUserTank = () => {
		this.setState({
			start: true,
			moveDown: false,
			moveUp: false,
			moveLeft: false,
			moveRight: false,
			barrier: false,
			attack: false,
			dead: false,

			posX: 0,
			posY: 0,

			speed: 1,
			bulletSpeed: 0.5
		})
    }


}
export default UserTank