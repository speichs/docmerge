webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFile = createFile;
exports.getOwnedFiles = getOwnedFiles;
exports.getSharedFiles = getSharedFiles;
exports.getCurrentFile = getCurrentFile;
exports.changeValidName = changeValidName;
exports.nameCurrentProject = nameCurrentProject;
exports.showHideSchemaMaker = showHideSchemaMaker;
exports.addColToSchema = addColToSchema;
exports.updateValidColName = updateValidColName;
exports.itemDrop = itemDrop;
exports.makeProjectData = makeProjectData;
exports.createProjectFile = createProjectFile;

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
    _axios2.default.get("/files/" + id).then(function (response) {
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

function getCurrentFile(id, shared) {
  return function (dispatch) {
    dispatch({ type: "GETTING_CURRENT_FILES" });
    dispatch({
      type: "GOT_CURRENT_FILE",
      payload: {
        id: id,
        shared: shared
      }
    });
  };
}

function changeValidName() {
  return { type: "CHANGE_VALID_NAME" };
}

function nameCurrentProject(name) {
  return { type: "NAME_CURRENT_PROJECT", payload: name };
}

function showHideSchemaMaker() {
  return { type: "SHOW_HIDE_SCHEMA_MAKER" };
}

function addColToSchema(col) {
  return { type: "ADD_COL_TO_SCHEMA", payload: col };
}

function updateValidColName() {
  return { type: "UPDATE_VALID_COL_NAME" };
}

function itemDrop(index, item) {
  return {
    type: "DROP_ITEM",
    payload: {
      index: index,
      item: item
    }
  };
}

function makeProjectData() {
  return { type: "MAKE_PROJECT_DATA" };
}

function createProjectFile(f) {
  return function (dispatch) {
    dispatch({ type: "CREATE_PROJECT_FILE" });
    _axios2.default.post("files/projectfile").then(function (response) {
      dispatch({ type: "CREATE_PROJECT_FILE_FULFILLED", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "CREATE_PROJECT_FILE_REJECTED", payload: err });
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

  __REACT_HOT_LOADER__.register(getSharedFiles, "getSharedFiles", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(getCurrentFile, "getCurrentFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(changeValidName, "changeValidName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(nameCurrentProject, "nameCurrentProject", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(showHideSchemaMaker, "showHideSchemaMaker", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(addColToSchema, "addColToSchema", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(updateValidColName, "updateValidColName", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(itemDrop, "itemDrop", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(makeProjectData, "makeProjectData", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");

  __REACT_HOT_LOADER__.register(createProjectFile, "createProjectFile", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/fileActions.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.25f63312b62168780b09.hot-update.js.map