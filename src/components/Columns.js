import React from 'react'
import { connect } from "react-redux"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import store from '../store'
import * as userActions from '../actions/userActions'


export default class CreateAccount extends React.Component{
  render(){
    return (
      <h1>Hello World from Display Proj {this.props.match.params.id}</h1>
    )
  }
}
