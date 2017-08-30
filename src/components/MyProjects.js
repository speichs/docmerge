import React from 'react'
import FileDnd from './FileDnd'
import { Grid, Row, Panel, Col, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'


export default class MyProjects extends React.Component{


  render(){
    return (
      <Grid bsClass='container-fluid'>
        <Row>
          <Col xs={2}>
            <FileDnd></FileDnd>
          </Col>
        </Row>

        <Row>
          <Col xs={12}></Col>
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
