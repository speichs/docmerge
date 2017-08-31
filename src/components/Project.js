import React from 'react'
import { Panel, Col } from 'react-bootstrap'
import { connect } from "react-redux"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import store from '../store'
import * as fileActions from '../actions/fileActions'

@connect((store)=>{
  return {
    user: store.user.user,
    redirect: store.user.createdUser
  }
})

export default class Project extends React.Component{

  render(){
    let route = `/project/${this.props.key}`
    return(
      <Col xs={6}>
        <Link to={route}>
        <Panel className="text-center" bsStyle="success">
          {this.props.text}
          {this.props.id}
        </Panel>
        </Link>
      </Col>
    )
  }
}
