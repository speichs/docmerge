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
  border: '1px dashed black'
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
    let backgroundColor = '#ffffff';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    console.log(lastDroppedItem)

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {isActive ?
          'Release to drop' :
          `Header: ${accepts.colName}`
        }

        {lastDroppedItem &&
          <p>Last dropped:{lastDroppedItem}</p>
        }

        {associatedFile &&
          <p>associatedFile:{associatedFile}</p>
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
