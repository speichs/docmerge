import React from 'react'
import { connect } from "react-redux"

import store from '../store'
import * as userActions from '../actions/userActions'

@connect((store)=>{
  return {
    user: store.user.user
  }
})

export default class CreateAccount extends React.Component{
  setFirstName(e){
    let first = e.target.value
    this.props.dispatch(userActions.setFirstName(first))
  }

  setLastName(e){
    let last = e.target.value
    this.props.dispatch(userActions.setLastName(last))
  }

  setEmail(e){
    let email = e.target.value;
    this.props.dispatch(userActions.setEmail(email))
  }

  // setPassword(e){
  //   let password = e.target.value;
  //   this.props.dispatch
  // }


  render(){
    const { user } = this.props;
    const firstName = user.firstName;
    const { lastName } = this.props.user;
    const { email } = this.props.user
    let pass = '';

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 col-lg-pull-4">
            <form>

              <div className="form-group">
                <label for="firstName">First Name: {firstName}</label>
                <input onChange={this.setFirstName.bind(this)}  type="text" className="form-control" id="firstName" placeholder="John"></input>
              </div>

              <div className="form-group">
                <label for="lastName">Last Name: {lastName}</label>
                <input onChange={this.setLastName.bind(this)} type="text" className="form-control" id="lastName" placeholder="Doe"></input>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email address: {email}</label>
                <input onChange={this.setEmail.bind(this)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"></input>
              </div>

              <button disabled={!email} type="submit" className="btn btn-primary">Create Account</button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
