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
    redirect: store.user.createdUser,
    files: store.file
  }
})

export default class CreateAccount extends React.Component{
  constructor(){
    super()
    console.log('hello world ')
  }
  render(){
    return (
      <h1>
        {
        JSON.stringify(this.props.files.fetchedFiles)
        }
    </h1>
    )
  }
}
