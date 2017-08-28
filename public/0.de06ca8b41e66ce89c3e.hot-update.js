webpackHotUpdate(0,{

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
        _newUserObj4 = {
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: null,
          redirect: true
        };
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
//# sourceMappingURL=0.de06ca8b41e66ce89c3e.hot-update.js.map