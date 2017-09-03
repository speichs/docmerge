webpackHotUpdate(0,{

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(60);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__(126);

var _reactFontawesome = __webpack_require__(1068);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactRouterDom = __webpack_require__(74);

var _Project = __webpack_require__(489);

var _Project2 = _interopRequireDefault(_Project);

var _FileDnd = __webpack_require__(291);

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

var MyProjects = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    redirect: store.user.createdUser,
    ownedFiles: store.file.fetchedFiles,
    hasFetchedOwned: store.file.fetchedOwnedFiles,
    hasFetchedShared: store.file.fetchedSharedFiles,
    sharedFiles: store.file.sharedFiles,
    sharesExist: store.file.sharesExist,
    filesExist: store.file.filesExist,
    isFetchingOwned: store.file.fetchingOwnedFiles,
    isFetchingShared: store.file.fetchingSharedFiles,
    validName: store.file.validName

  };
}), _dec(_class = function (_React$Component) {
  _inherits(MyProjects, _React$Component);

  function MyProjects() {
    _classCallCheck(this, MyProjects);

    return _possibleConstructorReturn(this, (MyProjects.__proto__ || Object.getPrototypeOf(MyProjects)).apply(this, arguments));
  }

  _createClass(MyProjects, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var id = this.props.user.id;
      this.props.dispatch(fileActions.getOwnedFiles(id));
      this.props.dispatch(fileActions.getSharedFiles(id));
    }
  }, {
    key: 'handleNewProjClick',
    value: function handleNewProjClick() {
      e.preventDefault();
    }
  }, {
    key: 'handleSubmitName',
    value: function handleSubmitName(e) {
      e.preventDefault();
    }
  }, {
    key: 'handleProjectNameChange',
    value: function handleProjectNameChange(e) {
      e.preventDefault();
      var text = _reactDom2.default.findDOMNode(this.name).value;
      if (text.length) {
        this.props.validName = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isFetchingOwned || this.props.isFechingShared) {
        return _react2.default.createElement(
          'h1',
          null,
          'loading...'
        );
      }

      //NOTE: you might want to change FontAwesome className to name becuase the console keeps screaming at you

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { bsClass: 'container-fluid' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            this.props.user.id,
            ', ',
            this.props.user.firstName
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 4, xsPush: 4 },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/newproject' },
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsSize: 'large', bsStyle: 'primary' },
                _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-plus' }),
                'Create New Project'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 4, xsPush: 4 },
            _react2.default.createElement(
              _reactBootstrap.Form,
              { onSubmit: this.handleSubmitName.bind(this) },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formHorizontalName' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Name Your Project'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, { onChange: this.handleProjectNameChange.bind(this), ref: function ref(name) {
                    _this2.name = name;
                  }, type: 'text', placeholder: 'My_Project' })
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'primary', type: 'submit', disabled: !this.props.validName },
                'Get Started'
              )
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
              'h3',
              { className: 'text-center' },
              'My Projects'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 6 },
            _react2.default.createElement(
              'h3',
              { className: 'text-center' },
              'Shared Projects'
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
              _reactBootstrap.Row,
              null,
              this.props.hasFetchedOwned && this.props.ownedFiles.length ? this.props.ownedFiles.map(function (e) {
                return _react2.default.createElement(_Project2.default, {
                  key: e.id,
                  text: e.name,
                  id: e.id,
                  shared: 'false' });
              }) : _react2.default.createElement('p', null)
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 6 },
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              this.props.hasFetchedShared && this.props.sharedFiles.length ? this.props.sharedFiles.map(function (e) {
                return _react2.default.createElement(_Project2.default, {
                  key: e.id,
                  text: e.name,
                  id: e.id,
                  shared: 'true'
                });
              }) : _react2.default.createElement(
                'h1',
                null,
                'Nothing to Load'
              )
            )
          )
        )
      );
    }
  }]);

  return MyProjects;
}(_react2.default.Component)) || _class);
exports.default = MyProjects;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyProjects, 'MyProjects', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/MyProjects.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.bc7fd64b14b0474ec415.hot-update.js.map