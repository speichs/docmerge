import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './Login'
import MyProjects from './MyProjects'
import CreateAccount from './CreateAccount'
import DisplayProject from './DisplayProject'
import Container from './Container'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myprojects">MyProjects</Link></li>
        <li><Link to="/createaccount">CreateAccount</Link></li>
        <li><Link to="/dnd">DND</Link></li>
      </ul>
      <Route exact path="/" component={Login}/>
      <Route path="/myprojects" component={MyProjects}/>
      <Route path="/createaccount" component={CreateAccount}/>
      <Route path="/project/:id" component={DisplayProject}></Route>
      <Route path="/dnd" component={Container}></Route>
    </div>
  </Router>
)

export default App
