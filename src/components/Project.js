import React from 'react'
import { Panel, Col } from 'react-bootstrap'
import { connect } from "react-redux"


import store from '../store'
import * as fileActions from '../actions/fileActions'

@connect((store)=>{
  return {
    user: store.user.user,
    redirect: store.user.createdUser
  }
})

export default class Project extends React.Component{
  id:this.props.id;
  
  render(){
    <Col xs={6}>
      <Panel text className="text-center" bsStyle="success">
        {text}
      </Panel>
    </Col>
  }
}
