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
exports.setPassword = setPassword;
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

function setPassword(password) {
  return { type: "SET_PASSWORD",
    payload: password };
}

function createUser(userInfo) {
  return function (dispatch) {
    dispatch({ type: "CREATE_USER" });
    _axios2.default.post("users", userInfo).then(function (response) {
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

  __REACT_HOT_LOADER__.register(setPassword, "setPassword", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js");

  __REACT_HOT_LOADER__.register(createUser, "createUser", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/userActions.js");
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
    email: null,
    password: null
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
    case "SET_PASSWORD":
      {
        var _newUserObj3 = _extends({}, state.user);
        _newUserObj3.password = action.payload;
        var _newState3 = _extends({}, state, { user: _newUserObj3 });
        return _newState3;
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
        var _newUserObj4 = _extends({}, state.user);
        _newUserObj4 = action.payload;
        var _newState4 = _extends({}, state, { user: _newUserObj4, creatingUser: false, createdUser: true });
        return _newState4;
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
//# sourceMappingURL=0.d6178366a8df5ff94a64.hot-update.js.map