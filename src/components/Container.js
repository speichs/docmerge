import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import { connect } from 'react-redux'
import store from '../store'
import * as fileActions from '../actions/dndActions'

@connect((store)=>{
  return {
    user: store.user.user,
    dustbins: store.dnd.dustbins,
    boxes: store.dnd.boxes,
    droppedBoxNames: store.dnd.droppedBoxNames,
  }
})

class Container extends Component {

  isDropped(boxName) {
    return this.props.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {
    const { boxes, dustbins } = this.props;

    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {dustbins.map(({ accepts, lastDroppedItem }, index) =>
            <Dustbin
              accepts={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={item => this.handleDrop(index, item)}
              key={index}
            />,
          )}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map(({ name, type }, index) =>
            <Box
              name={name}
              type={type}
              isDropped={this.isDropped(name)}
              key={index}
            />,
          )}
        </div>
      </div>
    );
  }

  handleDrop(index, item) {
    this.props.dispatch(dndActions.itemDrop(index,item))
  }
}

export default DragDropContext(HTML5Backend)(Container)
