import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Dustbin from './Dustbin';
import Box from './Box';
import FileDnd from './FileDnd'
import store from '../store'
import * as dndActions from '../actions/dndActions'
import * as fileActions from '../actions/fileActions'


//NOTE: comb through what you are bringing into store and get rid of all of the superfluous crap
@connect((store)=>{
  return {
    user: store.user.user,
    dustbins: store.dnd.dustbins,
    boxes: store.dnd.boxes,
    droppedBoxNames: store.dnd.droppedBoxNames,
    ownedFiles: store.file.fetchedFiles,
    sharedFiles: store.file.sharedFiles,
    currentFile: store.file.currentFile,
    currentFileKeys: store.file.currentFileKeys,
    isSettingCurrent: store.file.isSettingCurrent,
    areDustbins: false,
  }
})

class Container extends Component {
  isDropped(boxName) {
    return this.props.droppedBoxNames.indexOf(boxName) > -1;
  }

  componentWillMount(){
    let id = parseInt(this.props.match.params.id)
    let shared = this.props.location.search
    this.props.dispatch(fileActions.getCurrentFile(id,shared))
  }

  handleDrop(index, item) {
    this.props.dispatch(dndActions.itemDrop(index,item))
  }

  handleSave(){
    //add in handling for the save of the project
    //here you could check if the path of the route says '/myproject ' if so you would save a new file,  if not you would save the existing file
  }


  render()
  {
    const { boxes, dustbins, currentFileKeys, areDustbins } = this.props;


    //NOTE: keep this code - just needs to be transformed soi that it knows not to display this when we are doing newProject
    // if(this.props.isSettingCurrent){
    //   return(
    //     <h1>Loading...</h1>
    //   )
    // }


    return (
      <Grid bsClass='container-fluid'>
        <Row>
          <Col className='text-center' xs={4} xsPush={4}>
            <FileDnd></FileDnd>
          </Col>
        </Row>

        <Row>
          <Col className='text-center' xs={12}>
            <h1>Drag</h1>
            <p>this.props.user.id</p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center" xs={12}>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              {currentFileKeys.map((e, index) =>
                <Box
                  name={e}
                  isDropped={this.isDropped(name)}
                  key={index}
                />,
              )}
            </div>
            <h1>Drop</h1>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              {
                areDustbins?
                dustbins.map((e, index) =>
                <Dustbin
                  accepts={e.accepts}
                  lastDroppedItem={e.lastDroppedItem}
                  onDrop={item => this.handleDrop(index, item)}
                  key={index}
                />) :
                <Row>
                  <Col xs={3}>
                    <Button onClick={this.genBin}>Generate Schema</Button>
                  </Col>
                </Row>
              }
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={4} xsPush={8}>
            <Button onClick={this.handleSave}></Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container)
