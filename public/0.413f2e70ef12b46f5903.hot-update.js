webpackHotUpdate(0,{

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(254);

var _Login = __webpack_require__(268);

var _Login2 = _interopRequireDefault(_Login);

var _MyProjects = __webpack_require__(444);

var _MyProjects2 = _interopRequireDefault(_MyProjects);

var _CreateAccount = __webpack_require__(442);

var _CreateAccount2 = _interopRequireDefault(_CreateAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Home'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/myprojects' },
            'MyProjects'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/createaccount' },
            'CreateAccount'
          )
        )
      ),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/myprojects', component: _MyProjects2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/createaccount', component: _CreateAccount2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/project/:id' })
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
//# sourceMappingURL=0.413f2e70ef12b46f5903.hot-update.js.map