webpackHotUpdate(0,{

/***/ 292:
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

var _reactBootstrap = __webpack_require__(126);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(74);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _userActions = __webpack_require__(182);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user.firstName,
    userFetched: store.user.fetched
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var email = _reactDom2.default.findDOMNode(this.email).value;
      email = email.replace(/\s/g, '');
      var password = _reactDom2.default.findDOMNode(this.password).value;
      password = password.replace(/\s/g, '');
      var userObj = {
        email: email,
        password: password
      };
      this.props.dispatch((0, _userActions.fetchUser)(userObj));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          user = _props.user,
          userFetched = _props.userFetched;

      var blank = '   ';
      if (!userFetched) {
        return _react2.default.createElement(
          _reactBootstrap.Grid,
          { className: 'loginGrid' },
          _react2.default.createElement(
            _reactBootstrap.Row,
            { className: 'loginRow' },
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 4, xsPush: 4 },
              _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { className: 'text-center', xs: 12 },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'Welcome to DocMerge'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null)
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { className: 'loginCol', xs: 12 },
                  _react2.default.createElement(
                    _reactBootstrap.Form,
                    { className: 'loginForm', horizontal: true, onSubmit: this.handleSubmit.bind(this)
                    },
                    _react2.default.createElement(
                      _reactBootstrap.FormGroup,
                      { controlId: 'formHorizontalEmail' },
                      _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 2 }),
                      _react2.default.createElement(
                        _reactBootstrap.Col,
                        { sm: 10 },
                        _react2.default.createElement(_reactBootstrap.FormControl, { ref: function ref(email) {
                            _this2.email = email;
                          }, type: 'email', placeholder: 'Email' })
                      )
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.FormGroup,
                      { controlId: 'formHorizontalPassword' },
                      _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 2 }),
                      _react2.default.createElement(
                        _reactBootstrap.Col,
                        { sm: 10 },
                        _react2.default.createElement(_reactBootstrap.FormControl, { ref: function ref(password) {
                            _this2.password = password;
                          }, type: 'password', placeholder: 'Password' })
                      )
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 10, xsPush: 2 },
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          { block: true, bsSize: 'large', bsStyle: 'success', type: 'submit' },
                          'Sign in'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/myprojects' });
      }
    }
  }]);

  return Login;
}(_react2.default.Component)) || _class);
exports.default = Login;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Login, 'Login', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Login.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.3e423f1f4bbb9ca24d53.hot-update.js.map