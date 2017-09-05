webpackHotUpdate(0,{

/***/ 488:
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

var _dndActions = __webpack_require__(182);

var fileActions = _interopRequireWildcard(_dndActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  border: '1px dashed black'
};

var dustbinTarget = {
  drop: function drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

var Dustbin = function (_Component) {
  _inherits(Dustbin, _Component);

  function Dustbin() {
    _classCallCheck(this, Dustbin);

    return _possibleConstructorReturn(this, (Dustbin.__proto__ || Object.getPrototypeOf(Dustbin)).apply(this, arguments));
  }

  _createClass(Dustbin, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accepts = _props.accepts,
          isOver = _props.isOver,
          canDrop = _props.canDrop,
          connectDropTarget = _props.connectDropTarget,
          lastDroppedItem = _props.lastDroppedItem;


      console.log(isOver, lastDroppedItem, accepts);

      var isActive = isOver && canDrop;

      var backgroundColor = '#ffffff';
      if (isActive) {
        backgroundColor = 'darkgreen';
      } else if (canDrop) {
        backgroundColor = 'darkkhaki';
      }
      console.log(lastDroppedItem);
      return connectDropTarget(_react2.default.createElement(
        'div',
        { style: _extends({}, style, { backgroundColor: backgroundColor }) },
        isActive ? 'Release to drop' : 'This dustbin accepts: ' + accepts.colName,
        lastDroppedItem && _react2.default.createElement(
          'p',
          null,
          'Last dropped: ',
          JSON.stringify(lastDroppedItem)
        )
      ));
    }
  }]);

  return Dustbin;
}(_react.Component);

var _default = (0, _reactDnd.DropTarget)('paper', dustbinTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
})(Dustbin);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(style, 'style', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Dustbin.js');

  __REACT_HOT_LOADER__.register(dustbinTarget, 'dustbinTarget', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Dustbin.js');

  __REACT_HOT_LOADER__.register(Dustbin, 'Dustbin', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Dustbin.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Dustbin.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.3b2af4191f08a47159fe.hot-update.js.map