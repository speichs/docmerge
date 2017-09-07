import React from 'react'
import { connect } from "react-redux"
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button,
} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom'

import store from '../store'
import { fetchUser } from '../actions/userActions'

@connect((store)=>{
  return {
    user: store.user.user.firstName,
    userFetched: store.user.fetched
  }
})
export default class Splash extends React.Component{
  render(){
    


  }
}
