webpackHotUpdate(0,{

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _update = __webpack_require__(1126);

var _update2 = _interopRequireDefault(_update);

var _reactDnd = __webpack_require__(257);

var _reactDndHtml5Backend = __webpack_require__(984);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _Dustbin = __webpack_require__(487);

var _Dustbin2 = _interopRequireDefault(_Dustbin);

var _Box = __webpack_require__(483);

var _Box2 = _interopRequireDefault(_Box);

var _reactRedux = __webpack_require__(60);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _dndActions = __webpack_require__(179);

var fileActions = _interopRequireWildcard(_dndActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    dustbins: store.dnd.dustbins,
    boxes: store.dnd.boxes,
    droppedBoxNames: store.dnd.droppedBoxNames
  };
}), _dec(_class = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'isDropped',
    value: function isDropped(boxName) {
      return this.props.droppedBoxNames.indexOf(boxName) > -1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          boxes = _props.boxes,
          dustbins = _props.dustbins;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { overflow: 'hidden', clear: 'both' } },
          dustbins.map(function (_ref, index) {
            var accepts = _ref.accepts,
                lastDroppedItem = _ref.lastDroppedItem;
            return _react2.default.createElement(_Dustbin2.default, {
              accepts: accepts,
              lastDroppedItem: lastDroppedItem,
              onDrop: function onDrop(item) {
                return _this2.handleDrop(index, item);
              },
              key: index
            });
          })
        ),
        _react2.default.createElement(
          'div',
          { style: { overflow: 'hidden', clear: 'both' } },
          boxes.map(function (_ref2, index) {
            var name = _ref2.name,
                type = _ref2.type;
            return _react2.default.createElement(_Box2.default, {
              name: name,
              type: type,
              isDropped: _this2.isDropped(name),
              key: index
            });
          })
        )
      );
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(index, item) {
      this.props.dispatch(dndActions.itemDrop(index, item));
    }
  }]);

  return Container;
}(_react.Component)) || _class);

var _default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Container);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Container, 'Container', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Container.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.8964ee470e5bf3cf1e2c.hot-update.js.map