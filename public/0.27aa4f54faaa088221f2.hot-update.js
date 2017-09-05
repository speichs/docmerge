webpackHotUpdate(0,{

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__(126);

var _reactRouterDom = __webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'React-Bootstrap'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Nav,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 1 },
              'Home'
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/myprojects' },
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 2 },
              'My Projects'
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(_react2.default.Component);

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavBar, 'NavBar', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/NavBar.js');
}();

;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(491);

var _app2 = _interopRequireDefault(_app);

var _NavBar = __webpack_require__(1142);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Login = __webpack_require__(292);

var _Login2 = _interopRequireDefault(_Login);

__webpack_require__(1136);

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = document.getElementById('main');

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(NavBar, null),
  _react2.default.createElement(_app2.default, null)
), main);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(main, 'main', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/index.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.27aa4f54faaa088221f2.hot-update.js.map