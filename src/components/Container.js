import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
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
import * as fileActions from '../actions/fileActions'

@connect((store)=>{
  return {
    user: store.user.user,
    header: store.user.header,
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
    let shared = this.props.location.search;

    console.log('location.search: ', shared)

    if(!shared){
      this.props.dispatch(fileActions.clearCurrentProject(this.props.currentProject.name))
    }
    else if(shared === "?false"){
      this.props.ownedFiles.map(e=>{
        if(e.id === id){
          let copy = Object.assign({},e)
          console.log(copy);
          this.props.dispatch(fileActions.setCurrentProject(copy))
        }
      })
    }else if(shared === "?true"){
      this.props.sharedFiles.map(e=>{
        if(e.id === id){
          let copy = Object.assign({},e)

          this.props.dispatch(fileActions.setCurrentProject(copy))
        }
      })
    }
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

  handleSend(){
    let obj = {
      email: this.props.user.email,
      data: this.props.currentProject
    }
    this.props.dispatch(fileActions.sendEmail(obj))
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
  }

  handleAddColumn(e){
    e.preventDefault()
    let column = ReactDOM.findDOMNode(this.column).value
    this.props.dispatch(fileActions.addColToSchema(column))
    ReactDOM.findDOMNode(this.column).value = ''
    this.props.dispatch(fileActions.updateValidColName())
  }

  shareFile(e){
    e.preventDefault()
    let shareEmail = ReactDOM.findDOMNode(this.useremail).value
    let fileId = this.props.currentProject.id;
    let userId = this.props.user.id;
    let obj = {
      shareEmail,
      fileId,
      userId
    }
    this.props.dispatch(fileActions.shareProject(obj))
  }

  handleUpdate(e){
    e.preventDefault();
    let that = this

    this.props.dispatch(fileActions.updateProjectData())

    setTimeout(function(){
      let obj = {
        email: that.props.user.email,
        data: that.props.currentProject
      }
      that.props.dispatch(fileActions.updateProjectFile(obj))
    }, 4000);
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

    if(this.props.header){
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
                      associativeFiles.length? associativeFiles.map((e, index) =>{
                        let keys = Object.keys(e.data[0])
                        return keys.map((el,ind)=>
                        <Box
                          fileId={e.id}
                          name={el}
                          isDropped={this.isDropped(name)}
                          key={ind}
                          >{e.name}</Box>)
                        }) : <p></p>
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
              {
                !this.props.location.search?<Button
                  id='successbutton'
                  className='savebutton'
                  block
                  bsSize='large'
                  onClick={this.handleSave.bind(this)}>
                  Save
                </Button> : <Button
                  id='successbutton'
                  className='savebutton'
                  block
                  bsSize='large'
                  onClick={this.handleUpdate.bind(this)}>
                  Update
                </Button>
              }
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={2} xsPush={9}>
              <Button
                // disabled = {this.props.wasSaved || this.props.match.params.id >=0 }
                id='successbutton'
                className='savebutton'
                block
                bsSize='large'
                onClick={this.handleSend.bind(this)}>
                <FontAwesome className="fa-envelope create"></FontAwesome>
                Send Email
              </Button>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className='text-center' xs={4}>
              <h4>Share With Another User</h4>
              <Form onSubmit={this.shareFile.bind(this)}>
                <FormGroup>
                  <ControlLabel>
                    Email
                  </ControlLabel>
                  <FormControl
                  ref={useremail=>{this.useremail = useremail}}
                  type="email"
                  placeholder="User Email"
                  >
                  </FormControl>
                </FormGroup>
                <Button type='submit'>Share</Button>
              </Form>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={2} xsPush={9}>
            <Link to='/myprojects'>
              <Button
                id='successbutton'
                bsSize='large'
                block
              >
                My Projects
              </Button>
            </Link>
            </Col>
          </Row>



        </Grid>
      );
    }else{
      const { from } = { from: { pathname:'/'} }
      return (
        <Redirect to={from}></Redirect>
      )
    }

  }
}

export default DragDropContext(HTML5Backend)(Container)
