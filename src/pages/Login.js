import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { TextField, Button, ButtonGroup, Typography } from '@material-ui/core'
import api from '../api'

import './Login.css'


// TODO: POST /login-external
class Login extends Component {
  constructor(props) {
    super(props)

    this.form = null
    this.state = {
      email: '',
      password: '',
      error: <span></span>,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('auth_token'))
      this.props.history.push('/')
  }

  // TODO: login
  onSubmit(e) {
    if (e) e.preventDefault()

    api.post('/login', { email: this.state.email, password: this.state.password })
    .then(res => {
      if (res.data.token){
        localStorage.clear()
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('auth_token', res.data.token)

        if (res.data.admin)
          localStorage.setItem('admin', 'true')

        //this.props.history.push('/')
        window.location.href = `/`
        //localStorage.getItem('aa')
        //localStorage.removeItem('aa')
        //localStorage.clear()
      }else{
        //deu ruim
        this.setState({ error: <Typography display='block' align='center' color='error' variant='button'>Email e/ou senha incorretos</Typography>})
      }
    })
  }

  back(){
    window.location.href = `/`
  }

  // TODO: design
  render() {
    return (
        <main>
        <div className='page-home'>
          <div id='banner'>
            <div className='container'>
              <div className="chamada">
                <form ref={x => this.form = x} className='box' onSubmit={ e => this.onSubmit(e) }>
                    { this.state.error }
                    <TextField id='email' className='input' label='E-mail' variant='outlined' value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required />
                    <TextField id='password' className='input' label='Senha' variant='outlined' type='password' autoComplete='current-password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} required />
                    </form>
              </div>
            <ButtonGroup disableElevation variant="contained" color="text.disabled">
                <Button id='login' onClick={ this.onSubmit() } >Login</Button>
                <Button onClick = { this.back} >Voltar</Button>
            </ButtonGroup>
           </div>
          </div>
        </div>
      </main>
    )
  }
}
export default withRouter(Login)