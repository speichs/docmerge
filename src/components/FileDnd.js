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
import { DropTarget } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';


import store from '../store'
import * as fileActions from '../actions/fileActions'

const dustbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  },
};

@connect((store)=>{
  return {
    user: store.user.user,
    file: store.file.file,
  }
})
class fileDND extends React.Component{

  handleDrop(e){
    e.preventDefault();
    let data = e.dataTransfer.items[0].getAsFile()
    let name = data.name
    name = name.split('')
    name.splice(name.length-4,4)
    name = name.join('')
    e.dataTransfer.dropEffect = 'copy';
    let file = e.dataTransfer.items[0].getAsFile()
    let obj = {email:this.props.user.email}
    let that = this;
    papaparse.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results){
        obj.data = results.data
        obj.name = name
        that.props.dispatch(fileActions.createFile(obj))
      }
    })
  }

  render(){
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div className="dragContiner">
        <div
          onDrop = {this.handleDrop.bind(this)}
          className="dropzone">
          <h5 className='innerDropzone'>
            Drag and Drop Files
          </h5>
          <img src='src/pics/green_csv.png'></img>
        </div>
      </div>
    )
  }
}

export default DropTarget(NativeTypes.FILE, dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(fileDND)
