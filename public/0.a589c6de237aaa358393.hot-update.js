webpackHotUpdate(0,{

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  currentFile: {
    id: null,
    name: null,
    data: null,
    map: null,
    isProject: null
  },
  currentProject: {
    name: null,
    data: null,
    map: null,
    isProject: true
  },
  validColName: false,
  currentProjectSchema: [],
  droppedBoxNames: [],
  showHideSchemaMaker: true,
  associativeFiles: [],
  validName: false,
  isSettingCurrent: false,
  currentFileKeys: [],
  fetching: false,
  fetched: false,
  error: null,
  creatingFile: false,
  createdFile: true,
  redirect: false,
  fetchingOwnedFiles: false,
  fetchedOwnedFiles: false,
  fetchedFiles: [],
  filesExist: false,
  sharedFiles: [],
  fetchingSharedFiles: false,
  fetchedSharedFiles: false,
  sharesExist: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "CREATE_FILE":
      {
        return _extends({}, state, { creatingFile: true });
      }
    case "CREATE_FILE_REJECTED":
      {
        return _extends({}, state, { creatingFile: false, error: action.payload });
      }
    case "CREATE_FILE_FULFILLED":
      {
        var newFile = action.payload;
        var copyFetchedFileArray = [].concat(_toConsumableArray(state.fetchedFiles));

        var copyAssociativeArray = [].concat(_toConsumableArray(state.associativeFiles));
        copyAssociativeArray.push(newFile);

        copyFetchedFileArray.push(newFile);
        return _extends({}, state, {
          fetchedFiles: copyFetchedFileArray, associativeFiles: copyAssociativeArray,
          creatingFile: false,
          createdFile: true
        });
      }
    case "GET_OWNED_FILES":
      {
        return _extends({}, state, { fetchingOwnedFiles: true });
      }
    case "GET_OWNED_FILES_FULFILLED":
      {
        var files = action.payload;
        return _extends({}, state, {
          fetchedFiles: files,
          fetchingOwnedFiles: false,
          fetchedOwnedFiles: true,
          filesExist: true
        });
      }
    case "GET_OWNED_FILES_REJECTED":
      {
        return _extends({}, state, {
          fetchingOwnedFiles: false,
          error: action.payload
        });
      }
    case "GET_SHARED_FILES":
      {
        return _extends({}, state, { fetchingSharedFiles: true });
      }
    case "GET_SHARED_FILES_FULFILLED":
      {
        var _files = action.payload;
        return _extends({}, state, { sharedFiles: _files, fetchingSharedFiles: false, fetchedSharedFiles: true, sharesExist: true });
      }
    case "GET_SHARED_FILES_REJECTED":
      {
        return _extends({}, state, { fetchingSharedFiles: false, error: action.payload });
      }
    case "GETTING_CURRENT_FILES":
      {
        return _extends({}, state, { isSettingCurrent: true });
      }
    case "CHANGE_VALID_NAME":
      {
        var bool = !state.validName;
        return _extends({}, state, { validName: bool });
      }
    case "NAME_CURRENT_PROJECT":
      {
        var proj = _extends({}, state.currentProject);
        proj.name = action.payload;
        return _extends({}, state, { currentProject: proj });
      }
    case "GOT_CURRENT_FILE":
      {
        var id = action.payload.id;
        var isShared = action.payload.shared;
        var currentFile = _extends({}, state.currentFile);
        var currentFileKeys = [].concat(_toConsumableArray(state.currentFileKeys));
        if (isShared === "?true") {
          var data = [].concat(_toConsumableArray(state.sharedFiles));
          for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              currentFile = data[i];
              currentFileKeys = Object.keys(currentFile);
              return _extends({}, state, { currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent: false });
            }
          }
        } else {
          var _data = [].concat(_toConsumableArray(state.fetchedFiles));
          for (var _i = 0; _i < _data.length; _i++) {
            if (_data[_i].id === id) {
              currentFile = _data[_i];
              currentFileKeys = Object.keys(currentFile);
              return _extends({}, state, { currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent: false });
            }
          }
        }
      }
    case "SHOW_HIDE_SCHEMA_MAKER":
      {
        var _bool = state.showHideSchemaMaker;
        _bool = !_bool;
        return _extends({}, state, { showHideSchemaMaker: _bool });
      }
    case "ADD_COL_TO_SCHEMA":
      {
        var copyCurrentProjectSchema = [].concat(_toConsumableArray(state.currentProjectSchema));
        copyCurrentProjectSchema.push({ colName: action.payload, lastDroppedItem: null });

        return _extends({}, state, {
          currentProjectSchema: copyCurrentProjectSchema
        });
      }
    case "UPDATE_VALID_COL_NAME":
      {
        var _bool2 = _extends({}, state.validColName);
        _bool2 = !_bool2;
        return _extends({}, state, { validColName: _bool2 });
      }
    case "DROP_ITEM":
      {
        var index = action.payload.index;
        var item = action.payload.item;
        var copyDropped = [].concat(_toConsumableArray(state.droppedBoxNames));

        if (!copyDropped.includes(item.name)) {
          copyDropped.push(item.name);
        } else {
          copyDropped = copyDropped;
        }

        var copySchema = [].concat(_toConsumableArray(state.currentProjectSchema));
        copySchema[index].lastDroppedItem = item.name;

        return _extends({}, state, {
          currentProjectSchema: copySchema,
          droppedBoxNames: copyDropped
        });
      }
  }
  return state;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.a589c6de237aaa358393.hot-update.js.map