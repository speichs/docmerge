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
    var _this = this;

    dispatch({ type: "CREATE_USER" });
    _axios2.default.post("users", userInfo).then(function (response) {
      dispatch({ type: "CREATE_USER_FULFILLED", payload: response.data });
    }).then(function () {
      _this.context.router.replace('/myprojects');
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

/***/ })

})
//# sourceMappingURL=0.8eb1d17675dca6040fc9.hot-update.js.map