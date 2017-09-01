import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import { connect } from 'react-redux'
import store from '../store'
import * as dndActions from '../actions/dndActions'
import * as fileActions from '../actions/fileActions'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import { Row, Grid, Col } from 'react-bootstrap'

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
  }
})

class Container extends Component {
  isDropped(boxName) {
    return this.props.droppedBoxNames.indexOf(boxName) > -1;
  }

  componentWillMount(){
    //this.props.currentFileKeys['b', 'r', 'b']
    let id = parseInt(this.props.match.params.id)
    let shared = this.props.location.search
    this.props.dispatch(fileActions.getCurrentFile(id,shared))
    console.log(id);
  }


  render()
  {
    const { boxes, dustbins, currentFileKeys } = this.props;
    console.log(currentFileKeys);

    if(this.props.isSettingCurrent){
      return(
        <h1>Loading...</h1>
      )
    }

    return (
      <Grid bsClass='container-fluid'>
        <Row>
          <Col className='text-center' xs={12}>
            <h1>Drag</h1>
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
              {dustbins.map((e, index) =>
                <Dustbin
                  accepts={e.accepts}
                  lastDroppedItem={e.lastDroppedItem}
                  onDrop={item => this.handleDrop(index, item)}
                  key={index}
                />,
              )}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }

  handleDrop(index, item) {
    this.props.dispatch(dndActions.itemDrop(index,item))
  }
}

export default DragDropContext(HTML5Backend)(Container)
