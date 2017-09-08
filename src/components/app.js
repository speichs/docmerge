import React from 'react'
import { Navbar, NavItem, Nav} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import history from 'history'

import Login from './Login'
import MyProjects from './MyProjects'
import CreateAccount from './CreateAccount'
import Container from './Container'
import FileDnd from './FileDnd'
import CustomNav from './CustomNav'
import Splash from './Splash'
import Home from './Home'


const App = () => (
  <Router history = {history}>
    <div>
      <div>
        <CustomNav></CustomNav>
      </div>

      <Route exact path="/" component={Splash}></Route>

      <Route exact path="/login" component={Login}/>

      <Route path="/createaccount" component={CreateAccount}/>

      <Route path="/myprojects" component={MyProjects}/>

      <Route path="/project/:id" component={Container}></Route>

      <Route path="/newproject" component={Container}></Route>

    </div>
  </Router>
)

export default App
