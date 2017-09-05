webpackHotUpdate(0,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  dustbins: [],
  droppedBoxNames: []
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "DROP_ITEM":
      {
        var newState = _extends({}, state);
        var newDustbins = [].concat(_toConsumableArray(newState.dustbins));

        newDustbins[action.payload.index].lastDroppedItem = action.payload.item;

        newState.dustbins = newDustbins;

        if (!newState.droppedBoxNames.includes(action.payload.item.name)) {
          newState.droppedBoxNames.push(action.payload.item.name);
        }
        return newState;
      }
  }
  return state;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/dndReducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/dndReducer.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.ef1ed3790638512e7100.hot-update.js.map