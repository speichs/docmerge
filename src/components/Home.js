import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Splash extends React.Component{
  componentWillMount(){
    this.props.history.push('/home')
  }
  render(){
    return (<p>Loading...</p>)
  }
}
