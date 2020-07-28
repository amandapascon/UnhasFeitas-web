import React, { Component } from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import api from '../api'

import './Home.css'

import { Link } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  singin(){
    window.location.href = `./singin`
  }

  login(){
    window.location.href = `./login`
  }

  render() {
    return (
      <main>
        <div className='page-home'>
          <div id='banner'>
            <div className='container'>
              <div className="chamada">
                <p>UNHAS FEITAS</p>
              </div>
              <img src={require('../assets/logo.png')} />
            <ButtonGroup disableElevation variant="contained" color="text.disabled">
              <Button onClick={this.singin}>Singin</Button>
              <Button onClick={this.login}>Login</Button>
            </ButtonGroup>
           </div>
          </div>
        </div>
      </main>
    )
  }
}
