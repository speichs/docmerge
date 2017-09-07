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
import { Redirect, Link } from 'react-router-dom'

import store from '../store'
import { fetchUser } from '../actions/userActions'

@connect((store)=>{
  return {
    user: store.user.user.firstName,
    userFetched: store.user.fetched
  }
})
export default class Login extends React.Component{
  componentWillMount(){
    let token = localStorage.getItem('Token')
  }


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
    const blank = '   '
    if(!userFetched){
      return (
        <Grid className='loginGrid'>
          <Row className='loginRow'>
            <Col xs={4} xsPush={4}>
              <Row>
                <Col className='text-center' xs={12}>
                  <h1 id='welcomeLogin'>Welcome to DocMerge</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                </Col>
              </Row>

              <Row>
                <Col className='loginCol text-center' xs={12}>

                  <h4 className='loginHeader'>Login</h4>
                  <Form className= 'loginForm' horizontal onSubmit={this.handleSubmit.bind(this)}
                  >
                    <FormGroup controlId="formHorizontalEmail">
                      {/* <Col  componentClass={ControlLabel} sm={2}>
                      </Col> */}
                      <Col sm={12}>
                        <FormControl ref={email=>{this.email = email}} type="email" placeholder="Email" />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                      {/* <Col componentClass={ControlLabel} sm={2}>
                      </Col> */}
                      <Col sm={12}>
                        <FormControl ref={password=>{this.password = password}}type="password" placeholder="Password" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col  xs={12} >
                        <Button id='loginbtn' block bsSize='large' bsStyle='success' type="submit">
                          Sign in
                        </Button>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col  xs={12} >
                        <Link to='/createaccount'>
                          <Button
                            id='loginbtn'
                            block
                            bsSize='large'
                            bsStyle='success'
                            type="button">
                            CreateAccount
                          </Button>
                        </Link>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>

            </Col>
          </Row>
        </Grid>
      )
    }else{
      return (<Redirect to='/myprojects'/>)
    }

  }
}
