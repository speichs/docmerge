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

var _showhideactions = __webpack_require__(293);

var showHideActions = _interopRequireWildcard(_showhideactions);

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
    wasSaved: store.file.wasSaved,
    toggleShare: store.showhide.toggleShare
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

      if (this.props.wasSaved) {
        this.props.dispatch(fileActions.updateProjectData());

        setTimeout(function () {
          var obj = {
            email: that.props.user.email,
            data: that.props.currentProject
          };
          that.props.dispatch(fileActions.updateProjectFile(obj));
        }, 4000);
      } else {
        this.props.dispatch(fileActions.makeProjectData());

        setTimeout(function () {
          var obj = {
            email: that.props.user.email,
            data: that.props.currentProject
          };
          that.props.dispatch(fileActions.createProjectFile(obj));
        }, 4000);
      }
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
    key: 'toggleShare',
    value: function toggleShare(e) {
      e.preventDefault();
      this.props.dispatch(showHideActions.toggleShare());
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
              { xs: 5 },
              _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ButtonGroup,
                  { bsSize: 'large' },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      id: 'successbutton',
                      className: 'savebutton',
                      bsSize: 'large',
                      block: true,
                      onClick: this.handleSave.bind(this) },
                    _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-floppy-o create' }),
                    'Save'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      id: 'successbutton',
                      className: 'savebutton',
                      bsSize: 'large',
                      onClick: this.handleSend.bind(this) },
                    _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-envelope create' }),
                    'Send Email'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 1 },
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  id: 'successbutton',
                  className: 'savebutton',
                  bsSize: 'large',
                  block: true,
                  onClick: this.handleSave.bind(this) },
                _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-floppy-o create' }),
                'Save'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 2 },
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  id: 'successbutton',
                  className: 'savebutton',
                  bsSize: 'large',
                  onClick: this.handleSend.bind(this) },
                _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-envelope create' }),
                'Send Email'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 1 },
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  id: 'successbutton',
                  className: 'savebutton',
                  bsSize: 'large',
                  onClick: this.toggleShare.bind(this) },
                _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-share create' }),
                'Send Email'
              )
            ),
            this.props.toggleShare ? _react2.default.createElement(
              _reactBootstrap.Col,
              { className: 'text-center', xs: 4 },
              _react2.default.createElement(
                'h4',
                null,
                'Share With Another User'
              ),
              _react2.default.createElement(
                _reactBootstrap.Form,
                { inline: true, onSubmit: this.shareFile.bind(this) },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Email: '
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
            ) : _react2.default.createElement('span', null)
          ),
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
                    _reactBootstrap.Button,
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
            _react2.default.createElement(_reactBootstrap.Col, { xs: 2, xsPush: 9 })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_reactBootstrap.Row, null),
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

/***/ })

})
//# sourceMappingURL=0.2c030dc3b9ace2ab686e.hot-update.js.map