import React, { Component } from 'react'
//import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd'
import { connect } from 'react-redux'
import store from '../store'
import * as fileActions from '../actions/dndActions'


const style = {
  border: '1px solid blue',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },
};

class Box extends Component {

  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
      <div style={{ ...style, opacity }}>
        {isDropped ?
          <s>{name}</s> :
          name
        }
      </div>,
    );
  }
}

export default DragSource('paper', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(Box)
