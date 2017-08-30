webpackHotUpdate(0,{

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, callback) {
    var reader;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reader = new FileReader();

            reader.onloadend = function () {
              callback(reader.result);
            };
            reader.readAsText(file);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function readAsText(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return readAsText;
}();
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ })

})
//# sourceMappingURL=0.c9741659f0064a99bf61.hot-update.js.map