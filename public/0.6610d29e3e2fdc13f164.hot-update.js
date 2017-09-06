webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFile = createFile;
exports.getOwnedFiles = getOwnedFiles;
exports.setCurrentProject = setCurrentProject;
exports.getSharedFiles = getSharedFiles;
exports.getCurrentFile = getCurrentFile;
exports.changeValidName = changeValidName;
exports.nameCurrentProject = nameCurrentProject;
exports.showHideSchemaMaker = showHideSchemaMaker;
exports.addColToSchema = addColToSchema;
exports.updateValidColName = updateValidColName;
exports.itemDrop = itemDrop;
exports.makeProjectData = makeProjectData;
exports.createProjectFile = createProjectFile;
exports.sendEmail = sendEmail;
exports.updateProjectData = updateProjectData;
exports.updateProjectFile = updateProjectFile;
exports.clearCurrentProject = clearCurrentProject;
exports.shareProject = shareProject;

var _axios = __webpack_require__(285);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFile(f) {
  return function (dispatch) {
    dispatch({ type: "CREATE_FILE" });
    _axios2.default.post("http://localhost:8080/files", f).then(function (response) {
      dispatch({ type: "CREATE_FILE_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "CREATE_FILE_REJECTED", payload: err });
    });
  };
}

function getOwnedFiles(id) {
  return function (dispatch) {
    dispatch({ type: "GET_OWNED_FILES" });
    _axios2.default.get("/files/" + id).then(function (response) {
      dispatch({ type: "GET_OWNED_FILES_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "GET_OWNED_FILES_REJECTED", payload: err });
    });
  };
}

function setCurrentProject(obj) {
  return function (dispatch) {
    dispatch({
      type: "SET_CURRENT_PROJECT",
      payload: obj
    });
  };
}

//insert a shareFile function

function getSharedFiles(id) {
  return function (dispatch) {
    dispatch({ type: "GET_SHARED_FILES" });
    _axios2.default.get("http://localhost:8080/share/" + id).then(function (response) {
      dispatch({ type: "GET_SHARED_FILES_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "GET_SHARED_FILES_REJECTED", payload: err });
    });
  };
}

function getCurrentFile(id, shared, sharedFiles, ownedFiles) {
  return function (dispatch) {
    dispatch({
      type: "GOT_CURRENT_FILE",
      payload: {
        id: id,
        shared: shared,
        sharedFiles: sharedFiles,
        ownedFiles: ownedFiles
      }
    });
  };
}

function changeValidName() {
  return { type: "CHANGE_VALID_NAME" };
}

function nameCurrentProject(name) {
  return { type: "NAME_CURRENT_PROJECT", payload: name };
}

function showHideSchemaMaker() {
  return { type: "SHOW_HIDE_SCHEMA_MAKER" };
}

function addColToSchema(col) {
  return { type: "ADD_COL_TO_SCHEMA", payload: col };
}

function updateValidColName() {
  return { type: "UPDATE_VALID_COL_NAME" };
}

function itemDrop(index, item) {
  return {
    type: "DROP_ITEM",
    payload: {
      index: index,
      item: item
    }
  };
}

function makeProjectData(user) {
  return function (dispatch) {
    dispatch({ type: "MAKE_PROJECT_DATA" });
  };
}

function createProjectFile(f) {
  return function (dispatch) {
    dispatch({ type: "CREATE_PROJECT_FILE" });
    _axios2.default.post("projects", f).then(function (response) {
      dispatch({ type: "CREATE_PROJECT_FILE_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "CREATE_PROJECT_FILE_REJECTED", payload: err });
    });
  };
}

function sendEmail(obj) {
  return function (dispatch) {
    dispatch({ type: "SEND_EMAIL" });
    _axios2.default.post("/email", obj).then(function (response) {
      dispatch({ type: "SEND_EMAIL_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "SEND_EMAIL_REJECTED", payload: err });
    });
  };
}

function updateProjectData() {
  return function (dispatch) {
    dispatch({ type: "UPDATE_PROJECT_DATA" });
  };
}

function updateProjectFile(obj) {
  return function (dispatch) {
    dispatch({ type: "UPDATE_PROJECT_FILE" });
    var id = obj.data.id;
    _axios2.default.patch("http://localhost:8080/projects/" + id, obj).then(function (response) {
      dispatch({ type: "UPDATE_PROJECT_FILE_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "UPDATE_PROJECT_FILE_REJECTED", payload: err });
    });
  };
}

function clearCurrentProject(name) {
  return function (dispatch) {
    dispatch({ type: "CLEAR_CURRENT_PROJECT", payload: name });
  };
}

function shareProject(obj) {
  return function (dispatch) {
    dispatch({ type: "SHARE_PROJECT" });
    _axios2.default.post("http://localhost:8080/share", obj).then(function (response) {
      dispatch({ type: "SHARE_PROJECT_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "SHARE_PROJECT_REJECTED", payload: err });
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createFile, "createFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getOwnedFiles, "getOwnedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(setCurrentProject, "setCurrentProject", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getSharedFiles, "getSharedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getCurrentFile, "getCurrentFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(changeValidName, "changeValidName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(nameCurrentProject, "nameCurrentProject", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(showHideSchemaMaker, "showHideSchemaMaker", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(addColToSchema, "addColToSchema", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(updateValidColName, "updateValidColName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(itemDrop, "itemDrop", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(makeProjectData, "makeProjectData", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(createProjectFile, "createProjectFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(sendEmail, "sendEmail", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(updateProjectData, "updateProjectData", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(updateProjectFile, "updateProjectFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(clearCurrentProject, "clearCurrentProject", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(shareProject, "shareProject", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");
}();

;

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _update = __webpack_require__(1127);

var _update2 = _interopRequireDefault(_update);

var _reactDnd = __webpack_require__(172);

var _reactDndHtml5Backend = __webpack_require__(408);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactRedux = __webpack_require__(60);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(437);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactBootstrap = __webpack_require__(109);

var _reactRouterDom = __webpack_require__(74);

var _Dustbin = __webpack_require__(490);

var _Dustbin2 = _interopRequireDefault(_Dustbin);

var _Box = __webpack_require__(486);

var _Box2 = _interopRequireDefault(_Box);

var _FileDnd = __webpack_require__(183);

var _FileDnd2 = _interopRequireDefault(_FileDnd);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _fileActions = __webpack_require__(133);

var fileActions = _interopRequireWildcard(_fileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (_dec = (0, _reactRedux.connect)(function (store) {
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
    currentProjectSchema: store.file.currentProjectSchema
  };
}), _dec(_class = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'isDropped',
    value: function isDropped(boxName) {
      return this.props.droppedBoxNames.indexOf(boxName) > -1;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = parseInt(this.props.match.params.id);
      var shared = this.props.location.search;

      console.log('location.search: ', shared);

      if (!shared) {
        this.props.dispatch(fileActions.clearCurrentProject(this.props.currentProject.name));
      } else if (shared === "?false") {
        this.props.ownedFiles.map(function (e) {
          if (e.id === id) {
            var copy = Object.assign({}, e);
            console.log(copy);
            _this2.props.dispatch(fileActions.setCurrentProject(copy));
          }
        });
      } else if (shared === "?true") {
        this.props.sharedFiles.map(function (e) {
          if (e.id === id) {
            var copy = Object.assign({}, e);

            _this2.props.dispatch(fileActions.setCurrentProject(copy));
          }
        });
      }
    }
  }, {
    key: 'handleAddSchemaClick',
    value: function handleAddSchemaClick() {
      this.props.dispatch(fileActions.showHideSchemaMaker());
    }
  }, {
    key: 'hideSchemaMaker',
    value: function hideSchemaMaker() {
      this.props.dispatch(fileActions.showHideSchemaMaker());
    }
  }, {
    key: 'handleColNameChange',
    value: function handleColNameChange() {
      var column = _reactDom2.default.findDOMNode(this.column).value;
      if (this.props.validColName) {} else if (column.length) {
        this.props.dispatch(fileActions.updateValidColName());
      }
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(index, item) {
      this.props.dispatch(fileActions.itemDrop(index, item));
    }
  }, {
    key: 'handleSend',
    value: function handleSend() {
      var obj = {
        email: this.props.user.email,
        data: this.props.currentProject
      };
      this.props.dispatch(fileActions.sendEmail(obj));
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      var that = this;
      this.props.dispatch(fileActions.makeProjectData());

      setTimeout(function () {
        var obj = {
          email: that.props.user.email,
          data: that.props.currentProject
        };
        that.props.dispatch(fileActions.createProjectFile(obj));
      }, 4000);
    }
  }, {
    key: 'handleAddColumn',
    value: function handleAddColumn(e) {
      e.preventDefault();
      var column = _reactDom2.default.findDOMNode(this.column).value;
      this.props.dispatch(fileActions.addColToSchema(column));
      _reactDom2.default.findDOMNode(this.column).value = '';
      this.props.dispatch(fileActions.updateValidColName());
    }
  }, {
    key: 'shareFile',
    value: function shareFile(e) {
      e.preventDefault();
      var shareEmail = _reactDom2.default.findDOMNode(this.useremail).value;
      var fileId = this.props.currentProject.id;
      var userId = this.props.user.id;
      var obj = {
        shareEmail: shareEmail,
        fileId: fileId,
        userId: userId
      };
      this.props.dispatch(fileActions.shareProject(obj));
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate(e) {
      e.preventDefault();
      var that = this;

      this.props.dispatch(fileActions.updateProjectData());

      setTimeout(function () {
        var obj = {
          email: that.props.user.email,
          data: that.props.currentProject
        };
        that.props.dispatch(fileActions.updateProjectFile(obj));
      }, 4000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          boxes = _props.boxes,
          dustbins = _props.dustbins,
          currentFileKeys = _props.currentFileKeys,
          areDustbins = _props.areDustbins,
          currentProject = _props.currentProject,
          associativeFiles = _props.associativeFiles,
          showHideSchemaMaker = _props.showHideSchemaMaker,
          currentProjectSchema = _props.currentProjectSchema;


      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { bsClass: 'container-fluid' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center projNameRow', xs: 4, xsPush: 4 },
            _react2.default.createElement(
              'h2',
              null,
              currentProject.name
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'filedragcol' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 4, xsPush: 4 },
            _react2.default.createElement(_FileDnd2.default, null)
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 12 },
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'createSchemaButton' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 4, xsPush: 4 },
                _react2.default.createElement(
                  _reactBootstrap.Button
                  // disabled = {this.props.wasSaved || this.props.match.params.id >=0 }
                  ,
                  {
                    id: 'successbutton',
                    bsStyle: 'primary',
                    bsSize: 'large',
                    onClick: this.handleAddSchemaClick.bind(this),
                    block: true
                  },
                  'Create Schema'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 10, xsPush: 1 },
                _react2.default.createElement(
                  'div',
                  { style: { overflow: 'hidden', clear: 'both' } },
                  associativeFiles.length ? associativeFiles.map(function (e, index) {
                    var keys = Object.keys(e.data[0]);
                    return keys.map(function (el, ind) {
                      return _react2.default.createElement(
                        _Box2.default,
                        {
                          fileId: e.id,
                          name: el,
                          isDropped: _this3.isDropped(name),
                          key: ind
                        },
                        e.name
                      );
                    });
                  }) : _react2.default.createElement('p', null)
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  _reactBootstrap.Modal,
                  {
                    className: 'modal',
                    show: showHideSchemaMaker
                  },
                  _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Modal.Title,
                      { id: 'contained-modal-title' },
                      'CreateSchema'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Form,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formHorizontalName' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Set New Column Header'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                          ref: function ref(column) {
                            _this3.column = column;
                          },
                          type: 'text',
                          placeholder: 'Header_1',
                          onChange: this.handleColNameChange.bind(this)
                        })
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        {
                          bsStyle: 'primary',
                          type: 'submit',
                          disabled: false,
                          onClick: this.handleAddColumn.bind(this)
                        },
                        'Add Header'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Modal.Footer,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      {
                        onClick: this.hideSchemaMaker.bind(this)
                      },
                      'Close'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 10, xsPush: 1 },
                _react2.default.createElement(
                  'div',
                  { style: { overflow: 'hidden', clear: 'both' } },
                  currentProjectSchema.map(function (e, index) {
                    return _react2.default.createElement(_Dustbin2.default, {
                      accepts: e,
                      lastDroppedItem: e.lastDroppedItem,
                      associatedFile: e.associatedFile,
                      onDrop: function onDrop(item) {
                        return _this3.handleDrop(index, item);
                      },
                      key: index
                    });
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 2, xsPush: 9 },
            !this.props.location.search ? _react2.default.createElement(
              _reactBootstrap.Button,
              {
                id: 'successbutton',
                className: 'savebutton',
                block: true,
                bsSize: 'large',
                onClick: this.handleSave.bind(this) },
              'Save'
            ) : _react2.default.createElement(
              _reactBootstrap.Button,
              {
                id: 'successbutton',
                className: 'savebutton',
                block: true,
                bsSize: 'large',
                onClick: this.handleUpdate.bind(this) },
              'Update'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 2, xsPush: 9 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { id: 'successbutton',
                className: 'savebutton',
                block: true,
                bsSize: 'large',
                onClick: this.handleSend.bind(this) },
              _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-envelope create' }),
              'Send Email'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 4 },
            _react2.default.createElement(
              'h4',
              null,
              'Share With Another User'
            ),
            _react2.default.createElement(
              _reactBootstrap.Form,
              { onSubmit: this.shareFile.bind(this) },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Email'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  ref: function ref(useremail) {
                    _this3.useremail = useremail;
                  },
                  type: 'email',
                  placeholder: 'User Email'
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { type: 'submit' },
                'Share'
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 2, xsPush: 9 },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/myprojects' },
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  id: 'successbutton',
                  bsSize: 'large',
                  block: true
                },
                'My Projects'
              )
            )
          )
        )
      );
    }
  }]);

  return Container;
}(_react.Component)) || _class);

var _default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Container);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Container, 'Container', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Container.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.6610d29e3e2fdc13f164.hot-update.js.map