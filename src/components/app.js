import React from 'react'
import { Navbar, NavItem} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import Login from './Login'
import MyProjects from './MyProjects'
import CreateAccount from './CreateAccount'
import DisplayProject from './DisplayProject'
import Container from './Container'

const App = () => (
  <Router>
    <div>
      {/* <Navbar>
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/myprojects">
          <NavItem>My Projects</NavItem>
        </Link>
        <Link to="/createaccount">
          <NavItem>Create Account</NavItem>
        </Link>
      </Navbar> */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myprojects">MyProjects</Link></li>
        <li><Link to="/createaccount">CreateAccount</Link></li>
        <li><Link to="/dnd">DND</Link></li>
      </ul>
      <Route exact path="/" component={Login}/>

      <Route path="/myprojects" component={MyProjects}/>

      <Route path="/createaccount" component={CreateAccount}/>

      <Route path="/project/:id" component={Container}></Route>

      <Route path="/newproject" component={Container}></Route>

      <Route path="/dnd" component={Container}></Route>
    </div>
  </Router>
)

export default App
