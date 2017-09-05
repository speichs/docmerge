import React from 'react'
import ReactDOM from 'react-dom'
import {
  Navbar,
  Nav,
  NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>

          <Link to='/'>
            <NavItem eventKey={1}>
              Home
            </NavItem>
          </Link>

          <Link to ="/myprojects">
            <NavItem eventKey={2}>
              My Projects
            </NavItem>
          </Link>

        </Nav>

      </Navbar>
    )
  }
}
