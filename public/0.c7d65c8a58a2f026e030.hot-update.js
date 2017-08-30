webpackHotUpdate(0,{

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFile = createFile;
exports.getOwnedFiles = getOwnedFiles;

var _axios = __webpack_require__(260);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFile(f) {
  return function (dispatch) {
    dispatch({ type: "CREATE_FILE" });
    _axios2.default.post("files", f).then(function (response) {
      dispatch({ type: "CREATE_FILE_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "CREATE_FILE_REJECTED", payload: err });
    });
  };
}

function getOwnedFiles(id) {
  return function (dispatch) {
    dispatch({ type: "GET_OWNED_FILES" });
    _axios2.default.post('http://localhost:8080/files/2').then(function (response) {
      dispatch({ type: "GET_OWNED_FILES_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "GET_OWNED_FILES_REJECTED", payload: err });
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createFile, "createFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getOwnedFiles, "getOwnedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.c7d65c8a58a2f026e030.hot-update.js.map