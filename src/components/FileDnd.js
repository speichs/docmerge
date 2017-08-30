import React from 'react'
import { connect } from "react-redux"
import readAsText from '../helperFunctions'
import papaparse from 'papaparse'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import store from '../store'
import * as fileActions from '../actions/fileActions'

const  style ={
  height:'100px',
  width: '100px',
  border: '1px solid black'
}

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
    let file=e.dataTransfer.items[0].getAsFile()
    let obj={};
    obj.email = this.props.user.email
    let that = this;
    papaparse.parse(file, {
      header: true,
      dynamicTyping:true,
      complete: function(results){
        obj.data = results.data
        that.props.dispatch(fileActions.createFile(obj))
      }
    })

    // readAsText(file, (s)=>{
    //   obj.data = (s.split('\r\n'));
    //   that.props.dispatch(fileActions.createFile(obj))
    // })

  }

  handleDragOver(e){
    e.preventDefault();
  }

  render(){
    return (
      <div className="dragContiner">
        <div style={style} onDrop={this.handleDrop.bind(this)}
        onDragOver={this.handleDragOver.bind(this)} className="dropzone">
          drop some files
        </div>
      </div>
    )
  }
}
