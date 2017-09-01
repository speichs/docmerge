webpackHotUpdate(0,{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFile = createFile;
exports.getOwnedFiles = getOwnedFiles;
exports.getSharedFiles = getSharedFiles;
exports.getCurrentFiles = getCurrentFiles;

var _axios = __webpack_require__(285);

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
    _axios2.default.get('/files/3').then(function (response) {
      dispatch({ type: "GET_OWNED_FILES_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "GET_OWNED_FILES_REJECTED", payload: err });
    });
  };
}

//insert a shareFile function

function getSharedFiles(id) {
  return function (dispatch) {
    dispatch({ type: "GET_SHARED_FILES" });
    _axios2.default.get("http://localhost:8080/share/" + id).then(function (response) {
      dispatch({ type: "GET_SHARED_FILES_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "GET_SHARED_FILES_REJECTED", payload: err });
    });
  };
}

function getCurrentFiles(id) {
  return;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createFile, "createFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getOwnedFiles, "getOwnedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getSharedFiles, "getSharedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getCurrentFiles, "getCurrentFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.b7f8ba51f335d4993b37.hot-update.js.map