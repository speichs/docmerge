webpackHotUpdate(0,{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = fetchUser;
exports.setFirstName = setFirstName;
exports.setLastName = setLastName;
exports.setEmail = setEmail;
exports.createUser = createUser;

var _axios = __webpack_require__(302);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "test@gmail.com"
    }
  };
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

function createUser(userInfo) {
  return function (dispatch) {
    dispatch({ type: "CREATE_USER" });
    _axios2.default.post("http://localhost:8080/users", userInfo).then(function (response) {
      console.log(response);
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

  __REACT_HOT_LOADER__.register(fetchUser, "fetchUser", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js");

  __REACT_HOT_LOADER__.register(setFirstName, "setFirstName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js");

  __REACT_HOT_LOADER__.register(setLastName, "setLastName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js");

  __REACT_HOT_LOADER__.register(setEmail, "setEmail", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js");

  __REACT_HOT_LOADER__.register(createUser, "createUser", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js");
}();

;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(178);

var _store = __webpack_require__(122);

var _store2 = _interopRequireDefault(_store);

var _userActions = __webpack_require__(191);

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAccount = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user
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
      var first = e.target.value;
      this.props.dispatch(userActions.setFirstName(first));
    }
  }, {
    key: 'setLastName',
    value: function setLastName(e) {
      var last = e.target.value;
      this.props.dispatch(userActions.setLastName(last));
    }
  }, {
    key: 'setEmail',
    value: function setEmail(e) {
      var email = e.target.value;
      this.props.dispatch(userActions.setEmail(email));
    }
  }, {
    key: 'setPassword',
    value: function setPassword(e) {
      this.props.pass = e.target.value;
    }
  }, {
    key: 'createUser',
    value: function createUser(e) {
      e.preventDefault();
      var info = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: this.props.pass
      };
      this.props.dispatch(userActions.createUser(info));
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;

      var firstName = user.firstName;
      var lastName = this.props.user.lastName;
      var email = this.props.user.email;


      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('div', { className: 'col-lg-4' }),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-4 col-lg-pull-4' },
            _react2.default.createElement(
              'form',
              { onSubmit: this.createUser.bind(this) },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'firstName' },
                  'First Name: ',
                  firstName
                ),
                _react2.default.createElement('input', { onChange: this.setFirstName.bind(this), type: 'text', className: 'form-control', id: 'firstName', placeholder: 'John' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'lastName' },
                  'Last Name: ',
                  lastName
                ),
                _react2.default.createElement('input', { onChange: this.setLastName.bind(this), type: 'text', className: 'form-control', id: 'lastName', placeholder: 'Doe' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'exampleInputEmail1' },
                  'Email address: ',
                  email
                ),
                _react2.default.createElement('input', { onChange: this.setEmail.bind(this), type: 'email', className: 'form-control', id: 'exampleInputEmail1', 'aria-describedby': 'emailHelp', placeholder: 'Enter email' }),
                _react2.default.createElement(
                  'small',
                  { id: 'emailHelp', className: 'form-text text-muted' },
                  'We\'ll never share your email with anyone else.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'password' },
                  'Password'
                ),
                _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', placeholder: 'Password' })
              ),
              _react2.default.createElement(
                'button',
                { disabled: !email, type: 'submit', className: 'btn btn-primary' },
                'Create Account'
              )
            )
          )
        )
      );
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

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var initialState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    email: null
  },
  fetching: false,
  fetched: false,
  error: null,
  creatingUser: false,
  createdUser: false

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "FETCH_USER":
      {
        return _extends({}, state, { fetching: true });
      }
    case "FETCH_USER_REJECTED":
      {
        return _extends({}, state, { fetching: false, error: action.payload });
      }
    case "FETCH_USER_FULFILLED":
      {
        return _extends({}, state, {
          fetching: false,
          fetched: true,
          user: action.payload
        });
      }
    case "SET_FIRSTNAME":
      {
        var newUserObj = _extends({}, state.user);
        newUserObj.firstName = action.payload;
        var newState = _extends({}, state, { user: newUserObj });
        return newState;
      }
    case "SET_LASTNAME":
      {
        var _newUserObj = _extends({}, state.user);
        _newUserObj.lastName = action.payload;
        var _newState = _extends({}, state, { user: _newUserObj });
        return _newState;
      }
    case "SET_EMAIL":
      {
        var _newUserObj2 = _extends({}, state.user);
        _newUserObj2.email = action.payload;
        var _newState2 = _extends({}, state, { user: _newUserObj2 });
        return _newState2;
      }
    case "CREATE_USER":
      {
        return _extends({}, state, { creatingUser: true });
      }
    case "CREATE_USER_REJECTED":
      {
        return _extends({}, state, { creatingUser: false, error: action.payload });
      }
    case "CREATE_USER_FULFILLED":
      {
        var _newUserObj3 = _extends({}, state.user);
        _newUserObj3 = action.payload;
        var _newState3 = _extends({}, state, { user: _newUserObj3, creatingUser: false, createdUser: true });
        return _newState3;
      }
  }
  return state;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/userReducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/userReducer.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.b2b68f5345c59ca1785c.hot-update.js.map