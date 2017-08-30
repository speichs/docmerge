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

@connect((store)=>{
  return {
    user: store.user.user,
    redirect: store.user.createdUser
  }
})

export default class CreateAccount extends React.Component{
  render(){
    return (
      <h1>Hello World from Display Proj</h1>
    )
  }
}
