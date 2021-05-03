import React from 'react'
import ReactDOM from 'react-dom'
//para fazer spa, navegação sem recarregar a página
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

//importando os componentes
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
import HomePack from './pages/HomePack'
import Historic from './pages/Historic'
import Scheduling from './pages/Scheduling'
//styles global
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={Login} path='/login' exact/>
          <Route component={Signin} path='/signin' exact/>
          <Route component={HomePack} path='/homePack' exact/>
          <Route component={Historic} path='/historic' exact/>
          <Route component={Scheduling} path='/Scheduling' exact/>
          <Redirect push={false} to='/' />
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
