webpackHotUpdate(0,{

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var initialState = {
  dustbins: [{ accepts: ['glass'], lastDroppedItem: null }, { accepts: ['food'], lastDroppedItem: null }, { accepts: ['paper', 'glass'], lastDroppedItem: null }, { accepts: ['paper'], lastDroppedItem: null }],
  boxes: [{ name: 'Bottle', type: 'glass' }, { name: 'Banana', type: 'food' }, { name: 'Magazine', type: 'paper' }],
  droppedBoxNames: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "DROP_ITEM":
      {
        var newState = _extends({}, state);
        newState.dustbins[index].lastDroppedItem = item;
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

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/dndReducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/dndReducer.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.18d2ee5ec4669ab07035.hot-update.js.map