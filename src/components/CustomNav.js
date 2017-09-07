import React from 'react'
import ReactDOM from 'react-dom'
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CustomNav extends React.Component{
  render(){
    return (
      <Grid bsClass='container-fluid'>
        <Row>
          <Col xs={1} >
            <h1>DocMerge</h1>
          </Col>
          <Col xs={6}>

          </Col>
          <Col className="text-center" xs={3} xsPush={1}>
            <h5>Home</h5>
            <Button sytle={{display: 'inline-block'}}>Logout</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
