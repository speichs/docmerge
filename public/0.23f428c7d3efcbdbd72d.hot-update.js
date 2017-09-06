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

function instantiateSchema(schema) {
  var obj = {};
  schema.forEach(function (e) {
    return obj[e.colName] = null;
  });
  return obj;
}

function mapData(schema, files) {
  var frameObj = instantiateSchema(schema);
  var newData = [];
  for (var i = 0; i < files.length; i++) {
    var data = files[i].data;
    for (var j = 0; j < data.length; j++) {
      var obj = Object.assign({}, frameObj);
      for (var k = 0; k < schema.length; k++) {
        if (data[j].hasOwnProperty(schema[k].lastDroppedItem)) {
          obj[schema[k].colName] = data[j][schema[k].lastDroppedItem];
        }
      }
      newData.push(obj);
    }
  }
  return newData;
}

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
    case "GOT_CURRENT_PROJECT":
      {
        var id = action.payload.id;
        console.log('hello from the got current project');
        console.log('id of got', id);
        var isShared = action.payload.shared;
        console.log('shared of got', isShared);
        var copyCurrentProject = {};
        if (isShared === "?true") {
          var data = action.payload.sharedFiles;
          for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              copyCurrentProject.name = data[i].name;
              copyCurrentProject.data = data[i].data;
              copyCurrentProject.map = data[i].map;
              copyCurrentProject.isProject = data[i].isProject;
              return _extends({}, state, {
                currentProject: copyCurrentFile,
                isSettingCurrent: false,
                associativeFiles: [],
                currentProjectSchema: copyCurrentProject.map,
                fetchedFiles: action.payload.ownedFiles,
                sharedFiles: action.payload.sharedFiles,
                showHideSchemaMaker: true
              });
            }
          }
        } else {
          var _data = action.payload.ownedFiles;
          for (var _i = 0; _i < _data.length; _i++) {
            if (_data[_i].id === id) {
              copyCurrentProject.name = _data[_i].name;
              copyCurrentProject.data = _data[_i].data;
              copyCurrentProject.map = _data[_i].map;
              copyCurrentProject.isProject = _data[_i].isProject;
              console.log(currentProject);
              return _extends({}, state, {
                currentProject: copyCurrentProject,
                isSettingCurrent: false,
                associativeFiles: [],
                currentProjectSchema: copyCurrentProject.map,
                fetchedFiles: action.payload.ownedFiles,
                sharedFiles: action.payload.sharedFiles,
                showHideSchemaMaker: true
              });
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
        copySchema[index].associatedFile = item.fileId;

        return _extends({}, state, {
          currentProjectSchema: copySchema,
          droppedBoxNames: copyDropped
        });
      }
    case "MAKE_PROJECT_DATA":
      {
        var projectData = mapData(state.currentProjectSchema, state.associativeFiles);
        var copyProject = _extends({}, state.currentProject);
        copyProject.data = projectData;
        copyProject.map = [].concat(_toConsumableArray(state.currentProjectSchema));
        return _extends({}, state, { currentProject: copyProject });
      }
    case "CREATE_PROJECT_FILE":
      {
        return _extends({}, state, { creatingFile: true });
      }
    case "CREATE_PROJECT_FILE_REJECTED":
      {
        return _extends({}, state, { creatingFile: false, error: action.payload });
      }
    case "CREATE_PROJECT_FILE_FULFILLED":
      {
        var _newFile = action.payload;
        var _copyFetchedFileArray = [].concat(_toConsumableArray(state.fetchedFiles));
        _copyFetchedFileArray.push(_newFile);
        return _extends({}, state, {
          fetchedFiles: _copyFetchedFileArray,
          creatingFile: false,
          createdFile: true
        });
      }
    case "SET_CURRENT_PROJECT":
      {
        return _extends({}, state, {
          currentProject: action.payload,
          currentProjectSchema: action.payload.map
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

  __REACT_HOT_LOADER__.register(instantiateSchema, "instantiateSchema", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(mapData, "mapData", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/fileReducer.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.23f428c7d3efcbdbd72d.hot-update.js.map