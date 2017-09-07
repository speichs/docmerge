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
import { Link, Redirect } from 'react-router-dom'

import Project from './Project.js'
import FileDnd from './FileDnd'
import CustomNav from './CustomNav'
import store from '../store'
import * as fileActions from '../actions/fileActions'
import * as showHideActions from '../actions/showhideactions'

@connect((store)=>{
  return {
    user: store.user.user,
    header: store.user.header,
    redirect: store.user.createdUser,
    ownedFiles: store.file.fetchedFiles,
    hasFetchedOwned: store.file.fetchedOwnedFiles,
    hasFetchedShared: store.file.fetchedSharedFiles,
    sharedFiles: store.file.sharedFiles,
    sharesExist: store.file.sharesExist,
    filesExist: store.file.filesExist,
    isFetchingOwned: store.file.fetchingOwnedFiles,
    isFetchingShared: store.file.fetchingSharedFiles,
    validName: store.file.validName,
    isCreateNew: store.showhide.isCreateNew

  }
})
export default class MyProjects extends React.Component{

  componentWillMount(){
    let id = this.props.user.id;
    this.props.dispatch(fileActions.getOwnedFiles(id))
    this.props.dispatch(fileActions.getSharedFiles(id))
    this.props.dispatch(fileActions.clearCurrentProject(null))
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

  toggleNameProject(){
    this.props.dispatch(showHideActions.toggleNameProject())
  }

  render(){

    const { isCreateNew } = this.props
    const { from } = { from: { pathname:'/'} }

    if(!this.props.header){
      return (<Redirect to={from}></Redirect>)
    }

    else if(this.props.isFetchingOwned || this.props.isFechingShared){
      return(
        <h1>loading...</h1>
      )
    }else{
      return (
          <Grid bsClass='container-fluid'>
            <Row className='createProjectRow'>
              <Col className='text-center' xs={4} xsPush={4}>
                <Button
                  id='successbutton'
                  bsSize="large"
                  bsStyle="success"
                  onClick={this.toggleNameProject.bind(this)}
                  >
                    {
                      !isCreateNew?
                      <FontAwesome className="fa-plus create"></FontAwesome>:
                      <FontAwesome className="fa-minus create"></FontAwesome>

                    }
                    New Project
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col xs={4} xsPush={4}>
                  {
                    isCreateNew? <Form onSubmit={this.handleSubmitName.bind(this)}>
                      <FormGroup controlId='formHorizontalName'>
                        <ControlLabel>
                          Name Your Project
                        </ControlLabel>
                        <FormControl onChange={this.handleProjectNameChange.bind(this)} ref={name=>{this.name = name}} type='text' placeholder='My_Project'>
                        </FormControl>
                      </FormGroup>
                      <Link to='/newproject'>
                      <Button id="successbutton" bsStyle='primary' type="submit" disabled={!this.props.validName}>
                        Get Started
                      </Button>
                    </Link>
                  </Form> : <h1></h1>
                }
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
                    this.props.hasFetchedOwned?
                    this.props.ownedFiles.map(e =>{
                      if(e.isProject){
                        return(
                          <Project
                            key={e.id}
                            text={e.name}
                            id={e.id}
                            shared="false">
                          </Project>
                        )
                      }
                    }
                  ):<p>Nothing</p>
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
                      </Project>)): <h1></h1>
                    }
                  </Row>
                </Col>
              </Row>
            </Grid>
      )
    }


  }
}
