webpackHotUpdate(0,{

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _update = __webpack_require__(1128);

var _update2 = _interopRequireDefault(_update);

var _reactDnd = __webpack_require__(172);

var _reactDndHtml5Backend = __webpack_require__(409);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactRedux = __webpack_require__(60);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(438);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactBootstrap = __webpack_require__(93);

var _reactRouterDom = __webpack_require__(66);

var _Dustbin = __webpack_require__(491);

var _Dustbin2 = _interopRequireDefault(_Dustbin);

var _Box = __webpack_require__(487);

var _Box2 = _interopRequireDefault(_Box);

var _FileDnd = __webpack_require__(184);

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
    wasSaved: store.file.wasSaved
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


      if (this.props.header) {
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
              !this.props.location.search || this.props.wasSaved === false ? _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  id: 'successbutton',
                  className: 'savebutton',
                  block: true,
                  bsSize: 'large',
                  onClick: this.handleSave.bind(this) },
                _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-floppy-o create' }),
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
      } else {
        var _from = { from: { pathname: '/' } },
            from = _from.from;

        return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });
      }
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

/***/ }),

/***/ 495:
false,

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function instantiateSchema(schema) {
  var obj = {};
  schema.forEach(function (e) {
    return obj[e.colName] = null;
  });
  return obj;
}

function mapData(schema, files) {
  var frameObj = instantiateSchema(schema);
  var newData = [];
  for (var i = 0; i < files.length; i++) {
    var data = files[i].data;
    for (var j = 0; j < data.length; j++) {
      var obj = Object.assign({}, frameObj);
      for (var k = 0; k < schema.length; k++) {
        if (data[j].hasOwnProperty(schema[k].lastDroppedItem)) {
          obj[schema[k].colName] = data[j][schema[k].lastDroppedItem];
        }
      }
      newData.push(obj);
    }
  }
  return newData;
}

function updateMapData(schema, files, current) {
  var frameObj = instantiateSchema(schema);
  for (var i = 0; i < files.length; i++) {
    var data = files[i].data;
    for (var j = 0; j < data.length; j++) {
      var obj = Object.assign({}, frameObj);
      for (var k = 0; k < schema.length; k++) {
        if (data[j].hasOwnProperty(schema[k].lastDroppedItem)) {
          obj[schema[k].colName] = data[j][schema[k].lastDroppedItem];
        }
      }
      current.push(obj);
    }
  }
  return current;
}

var initialState = {
  currentFile: {
    id: null,
    name: null,
    data: null,
    map: null,
    isProject: null
  },
  currentProject: {
    id: null,
    name: null,
    data: null,
    map: null,
    isProject: true
  },
  validColName: false,
  wasSaved: false,
  currentProjectSchema: [],
  droppedBoxNames: [],
  showHideSchemaMaker: false,
  associativeFiles: [],
  validName: false,
  isSettingCurrent: false,
  currentFileKeys: [],
  fetching: false,
  fetched: false,
  error: null,
  creatingFile: false,
  createdFile: true,
  redirect: false,
  fetchingOwnedFiles: false,
  fetchedOwnedFiles: false,
  fetchedFiles: [],
  filesExist: false,
  sharedFiles: [],
  fetchingSharedFiles: false,
  fetchedSharedFiles: false,
  sharesExist: false,
  sendingEmail: false,
  emailSent: false,
  updatingProjectFile: false,
  updatedProjectFile: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "CREATE_FILE":
      {
        return _extends({}, state, { creatingFile: true });
      }
    case "CREATE_FILE_REJECTED":
      {
        return _extends({}, state, { creatingFile: false, error: action.payload });
      }
    case "CREATE_FILE_FULFILLED":
      {
        var newFile = action.payload;
        var copyFetchedFileArray = [].concat(_toConsumableArray(state.fetchedFiles));

        var copyAssociativeArray = [].concat(_toConsumableArray(state.associativeFiles));
        copyAssociativeArray.push(newFile);

        copyFetchedFileArray.push(newFile);
        return _extends({}, state, {
          fetchedFiles: copyFetchedFileArray, associativeFiles: copyAssociativeArray,
          creatingFile: false,
          createdFile: true
        });
      }
    case "GET_OWNED_FILES":
      {
        return _extends({}, state, { fetchingOwnedFiles: true });
      }
    case "GET_OWNED_FILES_FULFILLED":
      {
        var files = action.payload;
        return _extends({}, state, {
          fetchedFiles: files,
          fetchingOwnedFiles: false,
          fetchedOwnedFiles: true,
          filesExist: true
        });
      }
    case "GET_OWNED_FILES_REJECTED":
      {
        return _extends({}, state, {
          fetchingOwnedFiles: false,
          error: action.payload
        });
      }
    case "GET_SHARED_FILES":
      {
        return _extends({}, state, { fetchingSharedFiles: true });
      }
    case "GET_SHARED_FILES_FULFILLED":
      {
        var _files = action.payload;
        return _extends({}, state, { sharedFiles: _files, fetchingSharedFiles: false, fetchedSharedFiles: true, sharesExist: true });
      }
    case "GET_SHARED_FILES_REJECTED":
      {
        return _extends({}, state, { fetchingSharedFiles: false, error: action.payload });
      }
    case "CHANGE_VALID_NAME":
      {
        var bool = !state.validName;
        return _extends({}, state, { validName: bool });
      }
    case "NAME_CURRENT_PROJECT":
      {
        var proj = _extends({}, state.currentProject);
        proj.name = action.payload;
        return _extends({}, state, { currentProject: proj });
      }
    case "GOT_CURRENT_PROJECT":
      {
        var id = action.payload.id;
        console.log('hello from the got current project');
        console.log('id of got', id);
        var isShared = action.payload.shared;
        console.log('shared of got', isShared);
        var copyCurrentProject = {};
        if (isShared === "?true") {
          var data = action.payload.sharedFiles;
          for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              copyCurrentProject.name = data[i].name;
              copyCurrentProject.data = data[i].data;
              copyCurrentProject.map = data[i].map;
              copyCurrentProject.isProject = data[i].isProject;
              return _extends({}, state, {
                currentProject: copyCurrentFile,
                isSettingCurrent: false,
                associativeFiles: [],
                currentProjectSchema: copyCurrentProject.map,
                fetchedFiles: action.payload.ownedFiles,
                sharedFiles: action.payload.sharedFiles,
                showHideSchemaMaker: true
              });
            }
          }
        } else {
          var _data = action.payload.ownedFiles;
          for (var _i = 0; _i < _data.length; _i++) {
            if (_data[_i].id === id) {
              copyCurrentProject.name = _data[_i].name;
              copyCurrentProject.data = _data[_i].data;
              copyCurrentProject.map = _data[_i].map;
              copyCurrentProject.isProject = _data[_i].isProject;
              console.log(currentProject);
              return _extends({}, state, {
                currentProject: copyCurrentProject,
                isSettingCurrent: false,
                associativeFiles: [],
                currentProjectSchema: copyCurrentProject.map,
                fetchedFiles: action.payload.ownedFiles,
                sharedFiles: action.payload.sharedFiles,
                showHideSchemaMaker: true
              });
            }
          }
        }
      }
    case "SHOW_HIDE_SCHEMA_MAKER":
      {
        var _bool = state.showHideSchemaMaker;
        _bool = !_bool;
        return _extends({}, state, { showHideSchemaMaker: _bool });
      }
    case "ADD_COL_TO_SCHEMA":
      {
        var copyCurrentProjectSchema = [].concat(_toConsumableArray(state.currentProjectSchema));
        copyCurrentProjectSchema.push({ colName: action.payload, lastDroppedItem: null });

        return _extends({}, state, {
          currentProjectSchema: copyCurrentProjectSchema
        });
      }
    case "UPDATE_VALID_COL_NAME":
      {
        var _bool2 = _extends({}, state.validColName);
        _bool2 = !_bool2;
        return _extends({}, state, { validColName: _bool2 });
      }
    case "DROP_ITEM":
      {
        var index = action.payload.index;
        var item = action.payload.item;
        var copyDropped = [].concat(_toConsumableArray(state.droppedBoxNames));

        if (!copyDropped.includes(item.name)) {
          copyDropped.push(item.name);
        } else {
          copyDropped = copyDropped;
        }

        var copySchema = [].concat(_toConsumableArray(state.currentProjectSchema));
        copySchema[index].lastDroppedItem = item.name;
        copySchema[index].associatedFile = item.fileId;

        return _extends({}, state, {
          currentProjectSchema: copySchema,
          droppedBoxNames: copyDropped
        });
      }
    case "MAKE_PROJECT_DATA":
      {
        var projectData = mapData(state.currentProjectSchema, state.associativeFiles);
        var copyProject = _extends({}, state.currentProject);
        copyProject.data = projectData;
        copyProject.map = [].concat(_toConsumableArray(state.currentProjectSchema));
        return _extends({}, state, { currentProject: copyProject });
      }
    case "UPDATE_PROJECT_DATA":
      {
        var copyCurrent = [].concat(_toConsumableArray(state.currentProject.data));
        var _projectData = updateMapData(state.currentProjectSchema, state.associativeFiles, copyCurrent);
        var _copyProject = _extends({}, state.currentProject);
        _copyProject.data = _projectData;
        _copyProject.map = [].concat(_toConsumableArray(state.currentProjectSchema));
        return _extends({}, state, { currentProject: _copyProject });
      }
    case "UPDATE_PROJECT_FILE":
      {
        return _extends({}, state, { updatingProjectFile: true });
      }
    case "CLEAR_CURRENT_PROJECT":
      {
        var clearedProject = {
          id: null,
          name: action.payload,
          data: null,
          map: null,
          isProject: true
        };
        return _extends({}, state, {
          currentProject: clearedProject,
          currentProjectSchema: [],
          droppedBoxNames: [],
          associativeFiles: [],
          wasSaved: false
        });
      }
    case "UPDATE_PROJECT_FILE_FULFILLED":
      {
        return _extends({}, state, { updatingProjectFile: false, updatedProjectFile: true });
      }
    case "UPDATE_PROJECT_FILE_REJECTED":
      {
        return _extends({}, state, { error: action.payload });
      }

    case "CREATE_PROJECT_FILE":
      {
        return _extends({}, state, { creatingFile: true });
      }
    case "CREATE_PROJECT_FILE_REJECTED":
      {
        return _extends({}, state, { creatingFile: false, error: action.payload });
      }
    case "CREATE_PROJECT_FILE_FULFILLED":
      {
        var _newFile = action.payload;
        var _copyFetchedFileArray = [].concat(_toConsumableArray(state.fetchedFiles));
        _copyFetchedFileArray.push(_newFile);
        return _extends({}, state, {
          fetchedFiles: _copyFetchedFileArray,
          creatingFile: false,
          createdFile: true,
          wasSaved: true
        });
      }
    case "SET_CURRENT_PROJECT":
      {
        return _extends({}, state, {
          currentProject: action.payload,
          currentProjectSchema: action.payload.map
        });
      }
    case "SEND_EMAIL":
      {
        return _extends({}, state, { sendingEmail: true });
      }
    case "SEND_EMAIL_FULFILLED":
      {
        return _extends({}, state, {
          sendingEmail: false,
          emailSent: true
        });
      }
    case "SEND_EMAIL_REJECTED":
      {
        return _extends({}, state, {
          error: action.payload
        });
      }
  }
  return state;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(instantiateSchema, "instantiateSchema", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(mapData, "mapData", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(updateMapData, "updateMapData", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");
}();

;

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(284);

var _userReducer = __webpack_require__(499);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _fileReducer = __webpack_require__(496);

var _fileReducer2 = _interopRequireDefault(_fileReducer);

var _showhidereducer = __webpack_require__(498);

var _showhidereducer2 = _interopRequireDefault(_showhidereducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  user: _userReducer2.default,
  file: _fileReducer2.default,
  showhide: _showhidereducer2.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/index.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.7543007e57023b9cb066.hot-update.js.map