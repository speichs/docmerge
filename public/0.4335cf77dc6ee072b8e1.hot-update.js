webpackHotUpdate(0,{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__(93);

var _reactRouterDom = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomNav = function (_React$Component) {
  _inherits(CustomNav, _React$Component);

  function CustomNav() {
    _classCallCheck(this, CustomNav);

    return _possibleConstructorReturn(this, (CustomNav.__proto__ || Object.getPrototypeOf(CustomNav)).apply(this, arguments));
  }

  _createClass(CustomNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { bsClass: 'container-fluid' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'navRow' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 1 },
                _react2.default.createElement(
                  'h1',
                  null,
                  'DocMerge'
                )
              ),
              _react2.default.createElement(_reactBootstrap.Col, { xs: 6 }),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { className: 'text-center', xs: 3, xsPush: 1 },
                _react2.default.createElement(
                  'h5',
                  null,
                  'Home'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { sytle: { display: 'inline-block' } },
                  'Logout'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CustomNav;
}(_react2.default.Component);

exports.default = CustomNav;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CustomNav, 'CustomNav', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/CustomNav.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.4335cf77dc6ee072b8e1.hot-update.js.map