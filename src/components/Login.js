import React from 'react'
import { connect } from "react-redux"
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button,
} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom'

import store from '../store'
import { fetchUser } from '../actions/userActions'


@connect((store)=>{
  return {
    user: store.user.user.firstName,
    userFetched: store.user.fetched
  }
})
export default class Login extends React.Component{
  handleSubmit(e){
    e.preventDefault()
    let email = ReactDOM.findDOMNode(this.email).value
    email = email.replace(/\s/g,'')
    let password = ReactDOM.findDOMNode(this.password).value
    password = password.replace(/\s/g,'')
    let userObj = {
      email: email,
      password: password
    }
    this.props.dispatch(fetchUser(userObj))
  }

  render(){
    const { user, userFetched } = this.props;
    if(!userFetched){
      return (
        <Grid>
          <Row>
            <Col xs={4} xsPush={4}>
              <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl ref={email=>{this.email = email}} type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl ref={password=>{this.password = password}}type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button bsStyle='success' type="submit">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
      )
    }else{
      return (<Redirect to='/myprojects'/>)
    }

  }
}
