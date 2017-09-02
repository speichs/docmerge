import React from 'react'
import { connect } from "react-redux"
import { Grid, Row, Panel, Col, Button } from 'react-bootstrap'
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
            <Link to='/newproject'>
            <Button bsSize="large" bsStyle="primary">
              <FontAwesome className="fa-plus"></FontAwesome>
              Create New Project
            </Button>
          </Link>
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




        <Row>
          <Col xs={5}>
            <Button bsSize="large" bsStyle="primary">
              <FontAwesome className="fa-envelope-o"></FontAwesome>
              Create New Project
            </Button>
          </Col>
        </Row>
      </Grid>


    )
  }
}
