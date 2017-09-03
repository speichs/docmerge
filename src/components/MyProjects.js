import React from 'react'
import { connect } from "react-redux"
import ReactDOM from 'react-dom'
import {
  Grid,
  Row,
  Panel,
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
  FieldGroup,
  ControlLabel
} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

import Project from './Project.js'
import FileDnd from './FileDnd'
import store from '../store'
import * as fileActions from '../actions/fileActions'

@connect((store)=>{
  return {
    user: store.user.user,
    redirect: store.user.createdUser,
    ownedFiles: store.file.fetchedFiles,
    hasFetchedOwned: store.file.fetchedOwnedFiles,
    hasFetchedShared: store.file.fetchedSharedFiles,
    sharedFiles: store.file.sharedFiles,
    sharesExist: store.file.sharesExist,
    filesExist: store.file.filesExist,
    isFetchingOwned: store.file.fetchingOwnedFiles,
    isFetchingShared: store.file.fetchingSharedFiles,
    validName: store.file.validName

  }
})
export default class MyProjects extends React.Component{

  componentWillMount(){
    let id = this.props.user.id;
    this.props.dispatch(fileActions.getOwnedFiles(id))
    this.props.dispatch(fileActions.getSharedFiles(id))
  }

  handleNewProjClick(){
    e.preventDefault()
  }

  handleSubmitName(e){
    e.preventDefault()
  }

  handleProjectNameChange(e){
    e.preventDefault()
    let text = ReactDOM.findDOMNode(this.name).value
    if(this.props.validName){
      this.props.dispatch(fileActions.nameCurrentProject(text))
    }
    else if(text.length){
      this.props.dispatch(fileActions.changeValidName())
      this.props.dispatch(fileActions.nameCurrentProject(text))
    }
  }



  render(){

    if(this.props.isFetchingOwned || this.props.isFechingShared){
      return(
        <h1>loading...</h1>
      )
    }

    //NOTE: you might want to change FontAwesome className to name becuase the console keeps screaming at you

    return (
      <Grid bsClass='container-fluid'>

        <Row>
          <Col xs={12}>
            {this.props.user.id}, {this.props.user.firstName}
          </Col>
        </Row>

        <Row>
          <Col className='text-center' xs={4} xsPush={4}>
            <Button bsSize="large" bsStyle="primary">
              <FontAwesome className="fa-plus"></FontAwesome>
              Create New Project
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={4} xsPush={4}>
            <Form onSubmit={this.handleSubmitName.bind(this)}>
              <FormGroup controlId='formHorizontalName'>
                <ControlLabel>
                  Name Your Project
                </ControlLabel>
                <FormControl onChange={this.handleProjectNameChange.bind(this)} ref={name=>{this.name = name}} type='text' placeholder='My_Project'>
                </FormControl>
              </FormGroup>
              <Link to='/newproject'>
                <Button bsStyle='primary' type="submit" disabled={!this.props.validName}>
                  Get Started
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>


        <Row>
          <Col xs={6}>
            <h3 className="text-center">
              My Projects
            </h3>
          </Col>
          <Col xs={6}>
            <h3 className="text-center">
              Shared Projects
            </h3>
          </Col>
        </Row>


        <Row>
          <Col xs={6}>
            <Row>
              {
                this.props.hasFetchedOwned && this.props.ownedFiles.length ?
                this.props.ownedFiles.map(e => (
                  <Project
                    key={e.id}
                    text={e.name}
                    id={e.id}
                    shared="false">
                  </Project>)) : <p></p>
              }
            </Row>
          </Col>

          <Col xs={6}>
            <Row>
              {
                this.props.hasFetchedShared && this.props.sharedFiles.length?
                this.props.sharedFiles.map(e=>(
                  <Project
                    key={e.id}
                    text={e.name}
                    id = {e.id}
                    shared="true"
                    >
                  </Project>)): <h1>Nothing to Load</h1>
              }
            </Row>
          </Col>
        </Row>
      </Grid>


    )
  }
}
