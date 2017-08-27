import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './Login'
import MyProjects from './MyProjects'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myprojects">MyProjects</Link></li>
      </ul>
      <Route exact path="/" component={Login}/>
      <Route path="/myprojects" component={MyProjects}/>
    </div>
  </Router>
)



export default App
