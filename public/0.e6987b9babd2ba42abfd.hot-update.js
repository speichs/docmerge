webpackHotUpdate(0,{

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleNameProject = toggleNameProject;
exports.toggleDropColor = toggleDropColor;
function toggleNameProject() {
  return { type: "TOGGLE_NAME_PROJECT" };
}

function toggleDropColor() {
  return { type: "TOGGLE_DROP_COLOR" };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggleNameProject, "toggleNameProject", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/showhideactions.js");

  __REACT_HOT_LOADER__.register(toggleDropColor, "toggleDropColor", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/actions/showhideactions.js");
}();

;

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var initialState = {
  isCreateNew: false,
  wasDropped: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "TOGGLE_NAME_PROJECT":
      {
        var bool = state.isCreateNew;
        bool = !bool;
        return _extends({}, state, { isCreateNew: bool });
      }
    case "TOGGLE_DROP_COLOR":
      {
        var _bool = state.wasDropped;
        _bool = !_bool;
        return _extends({}, state, { wasDropped: _bool });
      }

  }
  return state;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/showhidereducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/reducers/showhidereducer.js");
}();

;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(60);

var _papaparse = __webpack_require__(911);

var _papaparse2 = _interopRequireDefault(_papaparse);

var _reactRouterDom = __webpack_require__(74);

var _reactDnd = __webpack_require__(172);

var _reactDndHtml5Backend = __webpack_require__(407);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _fileActions = __webpack_require__(133);

var fileActions = _interopRequireWildcard(_fileActions);

var _showhideactions = __webpack_require__(1142);

var showHideActions = _interopRequireWildcard(_showhideactions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dustbinTarget = {
  drop: function drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

var outerStyle = {};

var fileDND = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    file: store.file.file,
    wasDropped: store.showhide.wasDropped
  };
}), _dec(_class = function (_React$Component) {
  _inherits(fileDND, _React$Component);

  function fileDND() {
    _classCallCheck(this, fileDND);

    return _possibleConstructorReturn(this, (fileDND.__proto__ || Object.getPrototypeOf(fileDND)).apply(this, arguments));
  }

  _createClass(fileDND, [{
    key: 'handleDrop',
    value: function handleDrop(e) {
      e.preventDefault();
      var data = e.dataTransfer.items[0].getAsFile();
      var name = data.name;
      name = name.split('');
      name.splice(name.length - 4, 4);
      name = name.join('');
      e.dataTransfer.dropEffect = 'copy';
      var file = e.dataTransfer.items[0].getAsFile();
      var obj = { email: this.props.user.email };
      var that = this;
      _papaparse2.default.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function complete(results) {
          obj.data = results.data;
          obj.name = name;
          that.props.dispatch(fileActions.createFile(obj));
        }
      });
      this.props.dispatch(showHideActions.toggleDropColor());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDropTarget = _props.connectDropTarget,
          isOver = _props.isOver,
          canDrop = _props.canDrop;


      var isActive = isOver && canDrop;

      var backgroundColor = 'white';
      var color = 'black';
      if (isOver) {
        backgroundColor = '#00BF9A';
      } else if (this.props.wasdropped) {
        backgroundColor = 'white';
      }

      return connectDropTarget(_react2.default.createElement(
        'div',
        { style: _extends({}, outerStyle, { backgroundColor: backgroundColor }), className: 'dragContiner' },
        _react2.default.createElement(
          'div',
          {
            onDrop: this.handleDrop.bind(this),
            className: 'dropzone' },
          _react2.default.createElement(
            'h5',
            { className: 'innerDropzone' },
            'Drag and Drop Files'
          ),
          _react2.default.createElement('img', { src: 'src/pics/green_csv.png' })
        )
      ));
    }
  }]);

  return fileDND;
}(_react2.default.Component)) || _class);

var _default = (0, _reactDnd.DropTarget)(_reactDndHtml5Backend.NativeTypes.FILE, dustbinTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
})(fileDND);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dustbinTarget, 'dustbinTarget', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/FileDnd.js');

  __REACT_HOT_LOADER__.register(outerStyle, 'outerStyle', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/FileDnd.js');

  __REACT_HOT_LOADER__.register(fileDND, 'fileDND', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/FileDnd.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/FileDnd.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.e6987b9babd2ba42abfd.hot-update.js.map