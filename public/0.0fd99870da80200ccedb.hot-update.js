webpackHotUpdate(0,{

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = fetchUser;
exports.setFirstName = setFirstName;
exports.setLastName = setLastName;
exports.setEmail = setEmail;
exports.setPassword = setPassword;
exports.createUser = createUser;

var _axios = __webpack_require__(285);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchUser(user) {
  return function (dispatch) {
    dispatch({ type: 'LOGIN_USER' });
    _axios2.default.post('file');
  };

  // return {
  //   type: "FETCH_USER_FULFILLED",
  //   payload:{
  //     id: 1,
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "test@gmail.com"
  //   }
  // }
}

function setFirstName(first) {
  return {
    type: "SET_FIRSTNAME",
    payload: first
  };
}

function setLastName(last) {
  return {
    type: "SET_LASTNAME",
    payload: last
  };
}

function setEmail(email) {
  return {
    type: "SET_EMAIL",
    payload: email
  };
}

function setPassword(password) {
  return { type: "SET_PASSWORD",
    payload: password };
}

function createUser(userInfo) {
  return function (dispatch) {
    dispatch({ type: "CREATE_USER" });
    _axios2.default.post("users", userInfo).then(function (response) {
      dispatch({ type: "CREATE_USER_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "CREATE_USER_REJECTED", payload: err });
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fetchUser, 'fetchUser', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js');

  __REACT_HOT_LOADER__.register(setFirstName, 'setFirstName', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js');

  __REACT_HOT_LOADER__.register(setLastName, 'setLastName', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js');

  __REACT_HOT_LOADER__.register(setEmail, 'setEmail', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js');

  __REACT_HOT_LOADER__.register(setPassword, 'setPassword', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js');

  __REACT_HOT_LOADER__.register(createUser, 'createUser', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js');
}();

;

/***/ }),

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

var _reactBootstrap = __webpack_require__(170);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

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

    // componentWillMount(){
    //   this.props.dispatch(fetchUser())
    // }

    value: function handleSubmit(e) {
      e.preventDefault();
      var email = _reactDom2.default.findDOMNode(this.email).value;
      var password = _reactDom2.default.findDOMNode(this.password).value;
      var userObj = {
        email: email,
        password: password
      };
      this.props.dispatch(userActions.fetchUser);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var user = this.props.user;

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 4, xsPush: 4 },
            _react2.default.createElement(
              _reactBootstrap.Form,
              { horizontal: true, onSubmit: this.handleSubmit.bind(this) },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formHorizontalEmail' },
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { componentClass: _reactBootstrap.ControlLabel, sm: 2 },
                  'Email'
                ),
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
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { componentClass: _reactBootstrap.ControlLabel, sm: 2 },
                  'Password'
                ),
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
                  { smOffset: 2, sm: 10 },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'success', type: 'submit' },
                    'Sign in'
                  )
                )
              )
            )
          )
        )
      )

      // <form>
      //   <div className="form-group">
      //     <label for="exampleInputEmail1">Email address</label>
      //  <   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      //     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      //   </div>
      //   <div className="form-group">
      //     <label for="exampleInputPassword1">Password</label>
      //     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      //   </div>
      //   <div className="form-check">
      //     <label className="form-check-label">
      //       <input type="checkbox" className="form-check-input"></input>
      //       Check me out
      //     </label>
      //   </div>
      //   <button type="submit" className="btn btn-primary">Submit</button>
      // </form>
      ;
    }
  }]);

  return Login;
}(_react2.default.Component)) || _class);

// const mapStateToProps = state => ({
//   user: store.user,
//   //userFetched: store.user.fetched,
// })
//
// const mapDispatchToProps = () => ({})
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login)

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
//# sourceMappingURL=0.0fd99870da80200ccedb.hot-update.js.map