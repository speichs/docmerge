import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './Login'
import MyProjects from './MyProjects'
import CreateAccount from './CreateAccount'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myprojects">MyProjects</Link></li>
        <li><Link to="/createaccount">CreateAccount</Link></li>
      </ul>
      <Route exact path="/" component={Login}/>
      <Route path="/myprojects" component={MyProjects}/>
      <Route path="/createaccount" component={CreateAccount}/>
    </div>
  </Router>
)

export default App
