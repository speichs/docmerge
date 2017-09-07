import React from 'react'
import { connect } from "react-redux"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
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

import store from '../store'
import * as userActions from '../actions/userActions'

@connect((store)=>{
  return {
    user: store.user.user,
    redirect: store.user.createdUser
  }
})

export default class CreateAccount extends React.Component{
  setFirstName(e){
    let first = ReactDOM.findDOMNode(this.cafirst).value
    this.props.dispatch(userActions.setFirstName(first))
  }

  setLastName(e){
    let last = ReactDOM.findDOMNode(this.calast).value
    this.props.dispatch(userActions.setLastName(last))
  }

  setEmail(e){
    let email = ReactDOM.findDOMNode(this.caemail).value
    this.props.dispatch(userActions.setEmail(email))
  }

  setPassword(e){
    let password = ReactDOM.findDOMNode(this.capassword).value.replace(/\s/g,'')
    this.props.dispatch(userActions.setPassword(password))
  }

  createUser(e){
    e.preventDefault();
    let info = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      password: this.props.user.password
    }
    this.props.dispatch(userActions.createUser(info))
  }

  render(){
    const { user, redirect } = this.props;
    const { firstName, lastName, email }= user;
    const { from } = { from: { pathname:'/myprojects'} }

    if(redirect){
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <Grid>
        <Row id='outerCARow'>
          <Col className='text-center outerCACol' xs={4} xsPush={4}>
            <h4 className='createAccountHeader'>
              Create Account
            </h4>
            <Row>
              <Col className="text-left" xs={12}>
                <Form
                  className='createAccountForm'
                  onSubmit={this.createUser.bind(this)}
                >
                  <FormGroup>
                    <ControlLabel>
                      First Name
                    </ControlLabel>
                    <FormControl
                      ref={cafirst=>this.cafirst=cafirst}
                      type="text"
                      placeholder="John"
                      onChange={this.setFirstName.bind(this)}
                    >
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>
                      Last Name
                    </ControlLabel>
                    <FormControl
                      ref={calast=>this.calast=calast}
                      type="text"
                      placeholder="Doe"
                      onChange={this.setLastName.bind(this)}
                    >
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>
                      Email
                    </ControlLabel>
                    <FormControl
                      ref={caemail=>this.caemail=caemail}
                      type="email"
                      placeholder="john_doe@gmail.com"
                      onChange={this.setEmail.bind(this)}
                    >
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>
                      Password
                    </ControlLabel>
                    <FormControl
                      ref={capassword=>this.capassword=capassword}
                      type="password"
                      placeholder="password"
                      onChange={this.setPassword.bind(this)}
                    >
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                      <Button id='successbutton' block bsSize='large' bsStyle='success' type="submit">
                        Create Account
                      </Button>
                  </FormGroup>
                </Form>
              </Col>

            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}
