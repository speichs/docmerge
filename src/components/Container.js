import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import {
  Grid,
  Row,
  Col,
  Button,
  Modal,
  FormGroup,
  Form,
  ControlLabel,
  FormControl,

} from 'react-bootstrap'
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
//import * as dndActions from '../actions/dndActions'
import * as fileActions from '../actions/fileActions'


//NOTE: comb through what you are bringing into store and get rid of all of the superfluous crap
@connect((store)=>{
  return {
    user: store.user.user,
    droppedBoxNames: store.file.droppedBoxNames,
    ownedFiles: store.file.fetchedFiles,
    sharedFiles: store.file.sharedFiles,
    currentFile: store.file.currentFile,
    currentFileKeys: store.file.currentFileKeys,
    isSettingCurrent: store.file.isSettingCurrent,
    currentProject: store.file.currentProject,
    associativeFiles: store.file.associativeFiles,
    showHideSchemaMaker: store.file.showHideSchemaMaker,
    validColName: store.file.validColName,
    currentProjectSchema: store.file.currentProjectSchema,
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

  handleAddSchemaClick(){
    this.props.dispatch(fileActions.showHideSchemaMaker())
  }

  hideSchemaMaker(){
    this.props.dispatch(fileActions.showHideSchemaMaker())
  }

  handleColNameChange(){
    let column = ReactDOM.findDOMNode(this.column).value
    if(this.props.validColName){

    }
    else if(column.length){
      this.props.dispatch(fileActions.updateValidColName())
    }
  }

  handleDrop(index, item) {
    this.props.dispatch(fileActions.itemDrop(index,item))
  }

  updatefile(){


  }

  showData(){

  }

  handleSave(){
    let that = this
    this.props.dispatch(fileActions.makeProjectData())

    setTimeout(function(){
      let obj = {
        email: that.props.user.email,
        data: that.props.currentProject
      }
      that.props.dispatch(fileActions.createProjectFile(obj))
    }, 4000);

    // let obj = {
    //   email: this.props.user.email,
    //   data: this.props.currentProject
    // }
    //
    // this.props.dispatch(fileActions.createProjectFile(obj))

    //add in handling for the save of the project
    //here you could check if the path of the route says '/myproject ' if so you would save a new file,  if not you would save the existing file
  }

  handleAddColumn(e){
    e.preventDefault()
    let column = ReactDOM.findDOMNode(this.column).value
    this.props.dispatch(fileActions.addColToSchema(column))
    ReactDOM.findDOMNode(this.column).value = ''
    this.props.dispatch(fileActions.updateValidColName())
  }

  render()
  {
    const {
      boxes,
      dustbins,
      currentFileKeys,
      areDustbins,
      currentProject,
      associativeFiles,
      showHideSchemaMaker,
      currentProjectSchema,
    } = this.props;

    //NOTE: keep this code - just needs to be transformed soi that it knows not to display this when we are doing newProject
    // if(this.props.isSettingCurrent){
    //   return(
    //     <h1>Loading...</h1>
    //   )
    // }


    return (
      <Grid bsClass='container-fluid'>

        <Row>
          <Col className='text-center projNameRow' xs={4} xsPush={4}>
            <h2>{currentProject.name}</h2>
          </Col>
        </Row>


        <Row className='filedragcol'>
          <Col className='text-center' xs={4} xsPush={4}>
            <FileDnd></FileDnd>
          </Col>
        </Row>


        <Row>
          <Col className="text-center" xs={12}>
            <Row className='createSchemaButton'>
              <Col xs={4} xsPush={4}>
                <Button
                  id='successbutton'
                  bsStyle="primary"
                  bsSize='large'
                  onClick={this.handleAddSchemaClick.bind(this)}
                  block
                >
                  Create Schema
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsPush={1}>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                  {
                    associativeFiles.map((e, index) =>{
                      let keys = Object.keys(e.data[0])
                      return keys.map((el,ind)=>
                      <Box
                        fileId={e.id}
                        name={el}
                        isDropped={this.isDropped(name)}
                        key={ind}
                        >{e.name}</Box>)
                      })
                    }
                  </div>
              </Col>
            </Row>

            <Row>

              <Col xs={6}>
                  <Modal
                    className='modal'
                    show={showHideSchemaMaker}
                  >
                    <Modal.Header>
                      <Modal.Title  id="contained-modal-title">
                        CreateSchema
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <FormGroup controlId='formHorizontalName'>
                          <ControlLabel>
                            Set New Column Header
                          </ControlLabel>
                          <FormControl
                            ref={column=>{this.column = column}}
                            type='text'
                            placeholder='Header_1'
                            onChange={this.handleColNameChange.bind(this)}
                            >
                          </FormControl>
                        </FormGroup>
                        <Button
                          bsStyle='primary'
                          type="submit"
                          disabled={false}
                          onClick={this.handleAddColumn.bind(this)}
                          >
                          Add Header
                        </Button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={this.hideSchemaMaker.bind(this)}
                      >
                        Close
                    </Button>
                    </Modal.Footer>
                  </Modal>
              </Col>
            </Row>

            <Row>
              <Col xs={10} xsPush={1}>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                  {
                    currentProjectSchema.map((e, index) =>
                    <Dustbin
                      accepts={e}
                      lastDroppedItem={e.lastDroppedItem}
                      associatedFile={e.associatedFile}
                      onDrop={item => this.handleDrop(index, item)}
                      key={index}
                    />)
                  }
                </div>
              </Col>
            </Row>

          </Col>
        </Row>

        <Row>
          <Col xs={2} xsPush={9}>
            <Button
              id='successbutton'
              className='savebutton'
              block
              bsSize='large'
              onClick={this.handleSave.bind(this)}>
              Save
            </Button>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container)
