import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux'
import store from '../store'
import * as fileActions from '../actions/dndActions'

const style = {
  height: '6rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  border: '1px dashed #05386B'
};

const dustbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  },
};
class Dustbin extends Component {
  render() {
    const { accepts, isOver, canDrop, connectDropTarget, lastDroppedItem, associatedFile } = this.props;
    const isActive = isOver && canDrop;
    let backgroundColor = '#EDF5E1';
    let color = 'black';
    if (isActive) {
      backgroundColor = '#00BF9A';
      color = '#05386B';
    } else if (canDrop) {
      backgroundColor = '#008975';
      color = '#05386B';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor, color }}>
        {isActive ?
          'Release to drop' :
          `Header: ${accepts.colName}`
        }

        {lastDroppedItem &&
          <p>Dropped:{lastDroppedItem}</p>
        }

      </div>,
    );
  }
}

export default DropTarget('paper', dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Dustbin)
