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
        <Row className='navRow'>
            <Col xs={12}>
              <Row className='innerNavRow' id='innerNavRow'>
                <Col xs={1} >
                  <h1>DocMerge</h1>
                </Col>
                <Col xs={8}>

                </Col>
                <Col className="text-center" xs={1}>
                  <Link to='/'  className="navLink"><h5>Home</h5></Link>
                </Col>
                <Col xs={1}>
                  <Link to = '/myprojects' className="navLink"><h5>My Projects</h5></Link>
                </Col>
              </Row>
            </Col>


        </Row>
      </Grid>
    )
  }
}
