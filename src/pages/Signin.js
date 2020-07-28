import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { TextField, Button, ButtonGroup, Typography } from '@material-ui/core'
import api from '../api'

import './Signin.css'


class SignIn extends Component { 
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',      
    }
  }

  componentDidMount() {
    if (localStorage.getItem('auth_token'))
      this.props.history.push('/')
  }

  checkPassword() {
    let check = this.state.password == this.state.password2
    this.setState({error: !check})
    return check
  }

  async register() {
    let { email, name, password, state, city } = this.state
    

    api.put('/signin', {email, name, password})
    .then(res => {
      if (res.data.token){
        localStorage.clear()
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('auth_token', res.data.token)
        this.setState({ page: 2 })
      } else {
        if (res.data.err == 'duplicate_email')
          this.setState({ error: <Typography display='block' align='center' color='error' variant='button'>Email já cadastrado!</Typography>})
        else if (res.data.err == 'grecaptcha')
          this.setState({ error: <Typography display='block' align='center' color='error' variant='button'>Ação bloqueada pelo reCaptcha!</Typography>})
      }
    })
  }

  back(){
    window.location.href = `/`
  }

  render() {
    return (
        <main>
        <div className='page-home'>
          <div id='banner'>
            <div className='container'>
              <div className="chamada">
                <form ref={x => this.form = x} className='box' onSubmit={ e => { e.preventDefault(); return false; }}>
                    { this.state.error }
                    <TextField id='name' className='input' label='Nome' variant='outlined' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} required />
                    <TextField id='email' className='input' label='E-mail' variant='outlined' value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required />
                    <TextField id='password' className='input' label='Senha' variant='outlined' type='password' autoComplete='current-password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} required />
                    <TextField id='password2' className='input' label='Confirme a Senha' variant='outlined' type='password' autoComplete='current-password' value={this.state.password2} onChange={e => this.setState({ password2: e.target.value })} required />
                    </form>
              </div>
            <ButtonGroup disableElevation variant="contained" color="text.disabled">
                <Button id='singin' onClick={ this.register() }>Cadastrar</Button>
                <Button onClick = { this.back} >Voltar</Button>
            </ButtonGroup>
           </div>
          </div>
        </div>
      </main>
    )
  }

}

  
  export default withRouter(SignIn) 