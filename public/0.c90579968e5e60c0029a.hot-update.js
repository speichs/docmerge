webpackHotUpdate(0,{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var initialState = {
  currentFile: {
    id: null,
    name: null,
    data: null
  },
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
        return _extends({}, state, { creatingUser: true });
      }
    case "CREATE_FILE_REJECTED":
      {
        return _extends({}, state, { creatingUser: false, error: action.payload });
      }
    case "CREATE_FILE_FULFILLED":
      {
        var newFile = {
          id: action.payload.id,
          headers: [],
          data: action.payload.data
        };
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
    case "GOT_CURRENT_FILE":
      {
        return _extends({}, state, { isSettingCurrent: false
          // let id = action.payload.id;
          // let isShared = action.payload.shared;
          // let currentFile = {...state.currentFile}
          // let currentFileKeys = [...state.currentFileKeys]
          // if(isShared=== "?true"){
          //   let data = [...state.sharedFiles]
          //   for(let i = 0; i < data.length; i++){
          //     if(data[i].id === id){
          //       currentFile = data[i];
          //       currentFileKeys = Object.keys(currentFile);
          //       return {...state, currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent:false};
          //     }
          //   }
          // }else{
          //   let data = [...state.fetchedFiles]
          //   for(let i = 0; i < data.length; i++){
          //     if(data[i].id === id){
          //       currentFile = data[i];
          //       currentFileKeys = Object.keys(currentFile);
          //       return {...state, currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent:false};
          //     }
          //   }
          // }
          //dont forget to return a new object
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
//# sourceMappingURL=0.c90579968e5e60c0029a.hot-update.js.map