import React from 'react'
import ReactDOM from 'react-dom'
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CustomNav extends React.Component{
  render(){
    return (
      <Grid>
        <Row>
          <Col xs={2} xsPush={1}>
            DocMerge
          </Col>
          <Col xs={6}>

          </Col>
          <Col className="text-center" xs={3}>
            LinkLeft
          </Col>
        </Row>
      </Grid>
    )
  }
}
