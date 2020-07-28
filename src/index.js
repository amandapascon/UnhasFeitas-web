import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
//import Chekin from './pages/Chekin'
//import Newpackage from './pages/Newpackage'


import './styles.css' // global styles

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Login} path='/login' exact />
          <Route component={Signin} path='/signin' exact />
          <Redirect push={false} to='/' />
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
