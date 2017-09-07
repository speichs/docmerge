webpackHotUpdate(0,{

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDnd = __webpack_require__(172);

var _reactRedux = __webpack_require__(60);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _dndActions = __webpack_require__(292);

var fileActions = _interopRequireWildcard(_dndActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import PropTypes from 'prop-types';


var style = {
  border: '2px solid #05386B',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left'
};

var boxSource = {
  beginDrag: function beginDrag(props) {
    return {
      name: props.name,
      fileId: props.fileId
    };
  }
};

var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          isDropped = _props.isDropped,
          isDragging = _props.isDragging,
          connectDragSource = _props.connectDragSource,
          fileId = _props.fileId;

      var opacity = isDragging ? 0.4 : 1;

      return connectDragSource(_react2.default.createElement(
        'div',
        { style: _extends({}, style, { opacity: opacity }) },
        isDropped ? _react2.default.createElement(
          's',
          null,
          name,
          ', snooop'
        ) : name
      ));
    }
  }]);

  return Box;
}(_react.Component);

var _default = (0, _reactDnd.DragSource)('paper', boxSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})(Box);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(style, 'style', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Box.js');

  __REACT_HOT_LOADER__.register(boxSource, 'boxSource', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Box.js');

  __REACT_HOT_LOADER__.register(Box, 'Box', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Box.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Box.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.438d47229f29e9b45f33.hot-update.js.map