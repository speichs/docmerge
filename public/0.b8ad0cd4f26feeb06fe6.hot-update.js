webpackHotUpdate(0,{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(170);

var _reactRouterDom = __webpack_require__(93);

var _Login = __webpack_require__(291);

var _Login2 = _interopRequireDefault(_Login);

var _MyProjects = __webpack_require__(488);

var _MyProjects2 = _interopRequireDefault(_MyProjects);

var _CreateAccount = __webpack_require__(484);

var _CreateAccount2 = _interopRequireDefault(_CreateAccount);

var _DisplayProject = __webpack_require__(485);

var _DisplayProject2 = _interopRequireDefault(_DisplayProject);

var _Container = __webpack_require__(483);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactBootstrap.Navbar,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            null,
            'Home'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/myprojects' },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            null,
            'My Projects'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/createaccount' },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            null,
            'Create Account'
          )
        )
      ),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/myprojects', component: _MyProjects2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/createaccount', component: _CreateAccount2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/newproject', component: _Container2.default })
    )
  );
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/app.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/app.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.b8ad0cd4f26feeb06fe6.hot-update.js.map