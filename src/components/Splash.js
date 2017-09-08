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
  Image
} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { Redirect, Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

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
    return (
      <div className='splashcontainer'>
        <div className='svgCol'>
          <img className='svgcsvimg' src='./public/elizabeth-is-my-favorite.svg'/>
        </div>

        <div className="mktcopy">
          <h4>Drag & Drop Your CSV File </h4>
            <h4>Set a Schema</h4>
            <h4>Click</h4>
            <h4>Done</h4>
        </div>

        <div>
        <Link to='/login'>
          <Button
            id='successbutton'
            className='savebutton'
            bsSize='large'
          >
            Get Started
          </Button>
        </Link>
        </div>
      </div>
    )
  }
}
