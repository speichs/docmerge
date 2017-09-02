import React from 'react'
import { connect } from "react-redux"
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
    let file = e.dataTransfer.items[0].getAsFile()
    let obj = {email:this.props.user.email}
    let that = this;
    papaparse.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results){
        obj.data = results.data
        that.props.dispatch(fileActions.createFile(obj))
      }
    })
  }

  handleDragOver(e){
    e.preventDefault();
  }

  render(){
    return (
      <div className="dragContiner">
        <div onDrop={this.handleDrop.bind(this)}
        onDragOver={this.handleDragOver.bind(this)} className="dropzone">
          <h5 className='innerDropzone'>Drag and Drop Files</h5>
        </div>
      </div>
    )
  }
}
