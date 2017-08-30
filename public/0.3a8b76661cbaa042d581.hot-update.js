webpackHotUpdate(0,{

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var papaparse = __webpack_require__(801);
console.log(papaparse);

module.exports = function readAsText(file, callback) {
  var reader = new FileReader();
  reader.onloadend = function () {
    callback(reader.result);
  };
  reader.readAsText(file);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ })

})
//# sourceMappingURL=0.3a8b76661cbaa042d581.hot-update.js.map