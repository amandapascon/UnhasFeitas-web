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

  signin(){
    window.location.href = `./signin`
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
              <Button onClick={this.signin}>Registrar-se</Button>
              <Button onClick={this.login}>Entrar</Button>
            </ButtonGroup>
           </div>
          </div>
        </div>
      </main>
    )
  }
}
