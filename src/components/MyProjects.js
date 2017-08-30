import React from 'react'
import { connect } from "react-redux"
import { Grid, Row, Panel, Col, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import Project from './Project.js'
import FileDnd from './FileDnd'
import store from '../store'
import * as fileActions from '../actions/fileActions'

@connect((store)=>{
  return {
    user: store.user.user,
    redirect: store.user.createdUser,
    ownedFiles: store.file.fetchedFiles,
    hasFetched: store.file.fetchedOwnedFiles
  }
})


export default class MyProjects extends React.Component{
  componentWillMount(){
    let id = this.props.user.id;
    this.props.dispatch(fileActions.getOwnedFiles(id))
  }

  render(){
    if(!this.props.hasFetched){
      return(
        <h1>loading</h1>
      )
    }

    return (
      <Grid bsClass='container-fluid'>
        <Row>
          <Col xs={2}>
            <FileDnd></FileDnd>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            Files: {this.props.ownedFiles[0].name}
          </Col>
        </Row>

        <Row>
          <Col xs={5}>
            <Button bsSize="large" bsStyle="primary">
              <FontAwesome className="fa-plus"></FontAwesome>
              Create New Project
            </Button>
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
              <Col xs={6}>
                <Panel bsStyle="success">
                  Hello World This is a Panel
                </Panel>
              </Col>
              <Col xs={6}>
                <Panel bsStyle="success">
                  Hello World This is a Panel
                </Panel>
              </Col>
            </Row>
          </Col>

          <Col xs={6}>
            <Row>
              <Col xs={6}>
                <Panel bsStyle="success">
                  Shared Panel
                </Panel>
              </Col>
              <Col xs={6}>
                <Panel className="text-center" bsStyle="success">
                  Shared Panel
                </Panel>
              </Col>
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
