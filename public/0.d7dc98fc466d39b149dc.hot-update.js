webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFile = createFile;
exports.getOwnedFiles = getOwnedFiles;
exports.getSharedFiles = getSharedFiles;
exports.getCurrentFile = getCurrentFile;
exports.changeValidName = changeValidName;
exports.nameCurrentProject = nameCurrentProject;
exports.showHideSchemaMaker = showHideSchemaMaker;
exports.addColToSchema = addColToSchema;
exports.updateValidColName = updateValidColName;

var _axios = __webpack_require__(286);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFile(f) {
  return function (dispatch) {
    dispatch({ type: "CREATE_FILE" });
    _axios2.default.post("files", f).then(function (response) {
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

function getCurrentFile(id, shared) {
  return function (dispatch) {
    dispatch({ type: "GETTING_CURRENT_FILES" });
    dispatch({
      type: "GOT_CURRENT_FILE",
      payload: {
        id: id,
        shared: shared
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createFile, "createFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getOwnedFiles, "getOwnedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getSharedFiles, "getSharedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getCurrentFile, "getCurrentFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(changeValidName, "changeValidName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(nameCurrentProject, "nameCurrentProject", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(showHideSchemaMaker, "showHideSchemaMaker", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(addColToSchema, "addColToSchema", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(updateValidColName, "updateValidColName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");
}();

;

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _update = __webpack_require__(1125);

var _update2 = _interopRequireDefault(_update);

var _reactDnd = __webpack_require__(172);

var _reactDndHtml5Backend = __webpack_require__(407);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactRedux = __webpack_require__(60);

var _reactBootstrap = __webpack_require__(126);

var _reactRouterDom = __webpack_require__(74);

var _Dustbin = __webpack_require__(488);

var _Dustbin2 = _interopRequireDefault(_Dustbin);

var _Box = __webpack_require__(484);

var _Box2 = _interopRequireDefault(_Box);

var _FileDnd = __webpack_require__(184);

var _FileDnd2 = _interopRequireDefault(_FileDnd);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _dndActions = __webpack_require__(182);

var dndActions = _interopRequireWildcard(_dndActions);

var _fileActions = __webpack_require__(133);

var fileActions = _interopRequireWildcard(_fileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//NOTE: comb through what you are bringing into store and get rid of all of the superfluous crap
var Container = (_dec = (0, _reactRedux.connect)(function (store) {
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
    currentProject: store.file.currentProject,
    associativeFiles: store.file.associativeFiles,
    showHideSchemaMaker: store.file.showHideSchemaMaker,
    validColName: store.file.validColName,
    areDustbins: false
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
      var id = parseInt(this.props.match.params.id);
      var shared = this.props.location.search;
      this.props.dispatch(fileActions.getCurrentFile(id, shared));
    }
  }, {
    key: 'handleAddSchemaClick',
    value: function handleAddSchemaClick() {
      this.props.dispatch(fileActions.showHideSchemaMaker());
    }
  }, {
    key: 'handleColNameChange',
    value: function handleColNameChange() {
      var column = ReactDOM.findDOMNode(this.column).value;
      if (column.length) {
        this.props.dispatch(fileAction.updateValidColName());
      }
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(index, item) {
      this.props.dispatch(dndActions.itemDrop(index, item));
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      //add in handling for the save of the project
      //here you could check if the path of the route says '/myproject ' if so you would save a new file,  if not you would save the existing file
    }
  }, {
    key: 'handleAddColumn',
    value: function handleAddColumn() {
      var column = ReactDOM.findDOMNode(this.column).value;
      this.props.dispatch(fileActions.addColToSchema(column));

      this.props.dispatch(fileAction.updateValidColName());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          boxes = _props.boxes,
          dustbins = _props.dustbins,
          currentFileKeys = _props.currentFileKeys,
          areDustbins = _props.areDustbins,
          currentProject = _props.currentProject,
          associativeFiles = _props.associativeFiles,
          showHideSchemaMaker = _props.showHideSchemaMaker;

      //NOTE: keep this code - just needs to be transformed soi that it knows not to display this when we are doing newProject
      // if(this.props.isSettingCurrent){
      //   return(
      //     <h1>Loading...</h1>
      //   )
      // }


      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { bsClass: 'container-fluid' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 4, xsPush: 4 },
            _react2.default.createElement(
              'h2',
              null,
              currentProject.name
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
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
              'div',
              { style: { overflow: 'hidden', clear: 'both' } },
              associativeFiles.map(function (e, index) {
                var keys = Object.keys(e.data[0]);
                return keys.map(function (el, ind) {
                  return _react2.default.createElement(
                    _Box2.default,
                    {
                      fileId: e.id,
                      name: el,
                      isDropped: _this2.isDropped(name),
                      key: ind
                    },
                    e.name
                  );
                });
              })
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      bsStyle: 'primary',
                      bsSize: 'large',
                      onClick: this.handleAddSchemaClick.bind(this)
                    },
                    'Create Schema'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Modal,
                    {
                      show: true,
                      'aria-labelledby': 'contained-modal-title'
                    },
                    _react2.default.createElement(
                      _reactBootstrap.Modal.Header,
                      { closeButton: true },
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
                              _this2.column = column;
                            },
                            type: 'text',
                            placeholder: 'My_Project',
                            onChange: this.handleColNameChange.bind(this)
                          })
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          {
                            bsStyle: 'primary',
                            type: 'submit',
                            disabled: !this.props.valvalidColName,
                            onClick: this.handleAddColumn.bind(this)
                          },
                          'Get Started'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Modal.Footer,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        null,
                        'Close'
                      )
                    )
                  )
                )
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

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  currentFile: {
    id: null,
    name: null,
    data: null,
    map: null,
    isProject: null
  },
  currentProject: {
    name: null,
    data: null,
    map: null,
    isProject: true
  },
  validColName: false,
  currentProjectSchema: [],
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
  sharesExist: false
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
    case "GETTING_CURRENT_FILES":
      {
        return _extends({}, state, { isSettingCurrent: true });
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
    case "GOT_CURRENT_FILE":
      {
        var id = action.payload.id;
        var isShared = action.payload.shared;
        var currentFile = _extends({}, state.currentFile);
        var currentFileKeys = [].concat(_toConsumableArray(state.currentFileKeys));
        if (isShared === "?true") {
          var data = [].concat(_toConsumableArray(state.sharedFiles));
          for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              currentFile = data[i];
              currentFileKeys = Object.keys(currentFile);
              return _extends({}, state, { currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent: false });
            }
          }
        } else {
          var _data = [].concat(_toConsumableArray(state.fetchedFiles));
          for (var _i = 0; _i < _data.length; _i++) {
            if (_data[_i].id === id) {
              currentFile = _data[_i];
              currentFileKeys = Object.keys(currentFile);
              return _extends({}, state, { currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent: false });
            }
          }
        }
      }
    case "SHOW_HIDE_SCHEMA_MAKER":
      {
        var _bool = _extends({}, state.showHideSchemaMaker);
        _bool = !_bool;
        return _extends({}, state, { showHideSchemaMaker: _bool });
      }
    case "ADD_COL_TO_SCHEMA":
      {
        var copyCurrentProjectSchema = [].concat(_toConsumableArray(state.currentProjectSchema));
        copyCurrentProjectSchema.push({ colName: action.payload });

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
  }
  return state;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.d7dc98fc466d39b149dc.hot-update.js.map