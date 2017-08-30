webpackHotUpdate(0,{

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(125);

var _reactBootstrap = __webpack_require__(911);

var _reactFontawesome = __webpack_require__(986);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _FileDnd = __webpack_require__(443);

var _FileDnd2 = _interopRequireDefault(_FileDnd);

var _store = __webpack_require__(104);

var _store2 = _interopRequireDefault(_store);

var _fileActions = __webpack_require__(266);

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
    ownedFiles: store.file.fetchedFiles
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
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { bsClass: 'container-fluid' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 2 },
            _react2.default.createElement(_FileDnd2.default, null)
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            'Files: ',
            JSON.stringify(this.props.ownedFiles[3])
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 5 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: 'large', bsStyle: 'primary' },
              _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-plus' }),
              'Create New Project'
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
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  _reactBootstrap.Panel,
                  { bsStyle: 'success' },
                  'Hello World This is a Panel'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  _reactBootstrap.Panel,
                  { bsStyle: 'success' },
                  'Hello World This is a Panel'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 6 },
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  _reactBootstrap.Panel,
                  { bsStyle: 'success' },
                  'Shared Panel'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  _reactBootstrap.Panel,
                  { className: 'text-center', bsStyle: 'success' },
                  'Shared Panel'
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
            { xs: 5 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: 'large', bsStyle: 'primary' },
              _react2.default.createElement(_reactFontawesome2.default, { className: 'fa-envelope-o' }),
              'Create New Project'
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
//# sourceMappingURL=0.afb3305bc00717ba8c9c.hot-update.js.map