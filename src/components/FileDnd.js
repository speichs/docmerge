import React from 'react'
import { connect } from "react-redux"
import readAsText from '../helperFunctions'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import store from '../store'
import * as fileActions from '../actions/fileActions'

// const  style ={
//   height:'400px',
//   width: '400px',
//   border: '1px solid black'
// }

@connect((store)=>{
  return {
    user: store.user.user,
    file: store.file.file
  }
})

export default class fileDND extends React.Component{

  handleDrop(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    // let file=e.dataTransfer.items[0].getAsFile()
    //
    // let str = readAsText(file, (s)=>{
    //   return JSON.stringify(s.split('\r\n'))
    // })
    //
    // let obj = {
    //   email: this.props.user.user.email,
    //   data: str
    // }
    //
    // this.props.dispatch(fileActions.createFile(JSON.stringify(obj)))
  }

  handleDragOver(e){
    e.preventDefault();
  }

  render(){
    return (
      <div className="dragContiner">
        <div onDrop={this.handleDrop.bind(this)}
        onDragOver={this.handleDragOver.bind(this)} className="dropzone">
          drop some files
        </div>

        <p></p>

      </div>
    )
  }
}
