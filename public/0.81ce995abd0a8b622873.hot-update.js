webpackHotUpdate(0,{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(283);

var _reduxLogger = __webpack_require__(1126);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(1129);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(1127);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducers = __webpack_require__(493);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//NOTE: at the end you are going to need to remove logger so that the console does not display all of the state changes

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default);

var store = (0, _redux.createStore)(_reducers2.default, middleware);

var _default = store;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middleware, "middleware", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/store.js");

  __REACT_HOT_LOADER__.register(store, "store", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/store.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/store.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.81ce995abd0a8b622873.hot-update.js.map