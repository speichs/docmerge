webpackHotUpdate(0,{

/***/ 486:
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

var _reactRouterDom = __webpack_require__(74);

var _reactBootstrap = __webpack_require__(126);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _userActions = __webpack_require__(182);

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAccount = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    redirect: store.user.createdUser
  };
}), _dec(_class = function (_React$Component) {
  _inherits(CreateAccount, _React$Component);

  function CreateAccount() {
    _classCallCheck(this, CreateAccount);

    return _possibleConstructorReturn(this, (CreateAccount.__proto__ || Object.getPrototypeOf(CreateAccount)).apply(this, arguments));
  }

  _createClass(CreateAccount, [{
    key: 'setFirstName',
    value: function setFirstName(e) {
      var first = _reactDom2.default.findDOMNode(this.cafirst).value;
      this.props.dispatch(userActions.setFirstName(first));
    }
  }, {
    key: 'setLastName',
    value: function setLastName(e) {
      var last = _reactDom2.default.findDOMNode(this.calast).value;
      this.props.dispatch(userActions.setLastName(last));
    }
  }, {
    key: 'setEmail',
    value: function setEmail(e) {
      var email = _reactDom2.default.findDOMNode(this.caemail).value;
      this.props.dispatch(userActions.setEmail(email));
    }
  }, {
    key: 'setPassword',
    value: function setPassword(e) {
      var password = _reactDom2.default.findDOMNode(this.capassword).value.replace(/\s/g, '');
      this.props.dispatch(userActions.setPassword(password));
    }
  }, {
    key: 'createUser',
    value: function createUser(e) {
      e.preventDefault();
      var info = {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email,
        password: this.props.user.password
      };
      this.props.dispatch(userActions.createUser(info));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          user = _props.user,
          redirect = _props.redirect;
      var firstName = user.firstName,
          lastName = user.lastName,
          email = user.email;
      var _from = { from: { pathname: '/myprojects' } },
          from = _from.from;


      if (redirect) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });
      }

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
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(_reactBootstrap.Col, { className: 'text-center', xs: 12 }),
              _react2.default.createElement(
                'h4',
                { className: 'createAccountHeader' },
                'Create Account'
              ),
              _react2.default.createElement(
                _reactBootstrap.Form,
                {
                  className: 'createAccountForm',
                  onSubmit: this.createUser.bind(this)
                },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'First Name'
                  ),
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    ref: function ref(cafirst) {
                      return _this2.cafirst = cafirst;
                    },
                    type: 'text',
                    placeholder: 'John',
                    onChange: this.setFirstName.bind(this)
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Last Name'
                  ),
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    ref: function ref(calast) {
                      return _this2.calast = calast;
                    },
                    type: 'text',
                    placeholder: 'Doe',
                    onChange: this.setLastName.bind(this)
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Email'
                  ),
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    ref: function ref(caemail) {
                      return _this2.caemail = caemail;
                    },
                    type: 'email',
                    placeholder: 'john_doe@gmail.com',
                    onChange: this.setEmail.bind(this)
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Password'
                  ),
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    ref: function ref(capassword) {
                      return _this2.capassword = capassword;
                    },
                    type: 'password',
                    placeholder: 'password',
                    onChange: this.setPassword.bind(this)
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12 },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { id: 'successbutton', block: true, bsSize: 'large', bsStyle: 'success', type: 'submit' },
                      'Create Account'
                    )
                  )
                )
              )
            )
          )
        )
      )

      /* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 col-lg-pull-4">
            <form onSubmit={this.createUser.bind(this)}>
               <div className="form-group">
                <label for="firstName">First Name: {firstName}</label>
                <input onChange={this.setFirstName.bind(this)}  type="text" className="form-control" id="firstName" placeholder="John"></input>
              </div>
               <div className="form-group">
                <label for="lastName">Last Name: {lastName}</label>
                <input onChange={this.setLastName.bind(this)} type="text" className="form-control" id="lastName" placeholder="Doe"></input>
              </div>
               <div className="form-group">
                <label for="exampleInputEmail1">Email address: {email}</label>
                <input onChange={this.setEmail.bind(this)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
               <div className="form-group">
                <label for="password">Password</label>
                <input onChange={this.setPassword.bind(this)} type="password" className="form-control" id="password" placeholder="Password"></input>
              </div>
               <button disabled={!email} type="submit" className="btn btn-primary">Create Account</button>
             </form>
          </div>
        </div>
      </div> */
      ;
    }
  }]);

  return CreateAccount;
}(_react2.default.Component)) || _class);
exports.default = CreateAccount;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CreateAccount, 'CreateAccount', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/CreateAccount.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.c978e401c2198e719207.hot-update.js.map