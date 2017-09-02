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

var _update = __webpack_require__(1125);

var _update2 = _interopRequireDefault(_update);

var _reactDnd = __webpack_require__(258);

var _reactDndHtml5Backend = __webpack_require__(983);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactRedux = __webpack_require__(60);

var _reactBootstrap = __webpack_require__(170);

var _reactRouterDom = __webpack_require__(93);

var _Dustbin = __webpack_require__(487);

var _Dustbin2 = _interopRequireDefault(_Dustbin);

var _Box = __webpack_require__(483);

var _Box2 = _interopRequireDefault(_Box);

var _FileDnd = __webpack_require__(291);

var _FileDnd2 = _interopRequireDefault(_FileDnd);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _dndActions = __webpack_require__(181);

var dndActions = _interopRequireWildcard(_dndActions);

var _fileActions = __webpack_require__(132);

var fileActions = _interopRequireWildcard(_fileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//NOTE: comb through what you are bringing into store and get rid of all of the superfluous crap
var Container = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    dustbins: store.dnd.dustbins,
    boxes: store.dnd.boxes,
    droppedBoxNames: store.dnd.droppedBoxNames,
    ownedFiles: store.file.fetchedFiles,
    sharedFiles: store.file.sharedFiles,
    currentFile: store.file.currentFile,
    currentFileKeys: store.file.currentFileKeys,
    isSettingCurrent: store.file.isSettingCurrent,
    areDustbins: false
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var id = parseInt(this.props.match.params.id);
      var shared = this.props.location.search;
      this.props.dispatch(fileActions.getCurrentFile(id, shared));
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(index, item) {
      this.props.dispatch(dndActions.itemDrop(index, item));
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      //add in handling for the save of the project
      //here you could check if the path of the route says '/myproject ' if so you would save a new file,  if not you would save the existing file
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          boxes = _props.boxes,
          dustbins = _props.dustbins,
          currentFileKeys = _props.currentFileKeys,
          areDustbins = _props.areDustbins;

      //NOTE: keep this code - just needs to be transformed soi that it knows not to display this when we are doing newProject
      // if(this.props.isSettingCurrent){
      //   return(
      //     <h1>Loading...</h1>
      //   )
      // }


      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { bsClass: 'container-fluid' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 4, xsPush: 4 },
            _react2.default.createElement(_FileDnd2.default, null)
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 12 },
            _react2.default.createElement(
              'h1',
              null,
              'Drag'
            ),
            _react2.default.createElement(
              'p',
              null,
              'this.props.user.id'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { className: 'text-center', xs: 12 },
            _react2.default.createElement(
              'div',
              { style: { overflow: 'hidden', clear: 'both' } },
              currentFileKeys.map(function (e, index) {
                return _react2.default.createElement(_Box2.default, {
                  name: e,
                  isDropped: _this2.isDropped(name),
                  key: index
                });
              })
            ),
            _react2.default.createElement(
              'h1',
              null,
              'Drop'
            ),
            _react2.default.createElement(
              'div',
              { style: { overflow: 'hidden', clear: 'both' } },
              areDustbins ? dustbins.map(function (e, index) {
                return _react2.default.createElement(_Dustbin2.default, {
                  accepts: e.accepts,
                  lastDroppedItem: e.lastDroppedItem,
                  onDrop: function onDrop(item) {
                    return _this2.handleDrop(index, item);
                  },
                  key: index
                });
              }) : _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 3 },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { onClick: this.genBin },
                    'Generate Schema'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 4, xsPush: 8 },
            _react2.default.createElement(_reactBootstrap.Button, { onClick: this.handleSave })
          )
        )
      );
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
//# sourceMappingURL=0.2e690472bbf5d8e567d4.hot-update.js.map