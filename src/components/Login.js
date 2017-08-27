import React from 'react'
import { connect } from "react-redux"

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
    this.props.dispatch(fetchUser())
  }

  render(){
    var { user } = this.props;
    return (

      <h1>{user}</h1>

      // <form>
      //   <div className="form-group">
      //     <label for="exampleInputEmail1">Email address</label>
      //  <   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      //     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      //   </div>
      //   <div className="form-group">
      //     <label for="exampleInputPassword1">Password</label>
      //     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      //   </div>
      //   <div className="form-check">
      //     <label className="form-check-label">
      //       <input type="checkbox" className="form-check-input"></input>
      //       Check me out
      //     </label>
      //   </div>
      //   <button type="submit" className="btn btn-primary">Submit</button>
      // </form>
    )
  }
}

// const mapStateToProps = state => ({
//   user: store.user,
//   //userFetched: store.user.fetched,
// })
//
// const mapDispatchToProps = () => ({})
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login)
