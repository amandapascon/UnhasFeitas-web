import React from 'react'
import ReactDOM from 'react-dom'
//para fazer spa, navegação sem recarregar a página
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

//importando os componentes
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Checkin from './pages/Checkin'
import Newpackage from './pages/Newpackage'

//styles global
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={Login} path='/login' exact/>
          <Route component={Signin} path='/signin' exact/>
          <Route component={Checkin} path='/checkin' exact/>
          <Route component={Newpackage} path='/newpackage' exact/>
          <Redirect push={false} to='/' />
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
