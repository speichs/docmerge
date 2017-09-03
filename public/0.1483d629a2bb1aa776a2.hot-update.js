webpackHotUpdate(0,{

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(60);

var _papaparse = __webpack_require__(910);

var _papaparse2 = _interopRequireDefault(_papaparse);

var _reactRouterDom = __webpack_require__(74);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _fileActions = __webpack_require__(133);

var fileActions = _interopRequireWildcard(_fileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fileDND = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    file: store.file.file
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
      console.log(name);
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
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'dragContiner' },
        _react2.default.createElement(
          'div',
          { onDrop: this.handleDrop.bind(this),
            onDragOver: this.handleDragOver.bind(this), className: 'dropzone' },
          _react2.default.createElement(
            'h5',
            { className: 'innerDropzone' },
            'Drag and Drop Files'
          )
        )
      );
    }
  }]);

  return fileDND;
}(_react2.default.Component)) || _class);
exports.default = fileDND;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fileDND, 'fileDND', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/FileDnd.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.1483d629a2bb1aa776a2.hot-update.js.map