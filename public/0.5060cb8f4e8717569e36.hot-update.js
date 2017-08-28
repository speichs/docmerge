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
    _axios2.default.post("/user", userInfo).then(response);
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

/***/ })

})
//# sourceMappingURL=0.5060cb8f4e8717569e36.hot-update.js.map