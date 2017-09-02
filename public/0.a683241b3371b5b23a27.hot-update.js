webpackHotUpdate(0,{

/***/ 292:
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

var _store = __webpack_require__(49);

var _store2 = _interopRequireDefault(_store);

var _userActions = __webpack_require__(182);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user.firstName,
    userFetched: store.user.fetched
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',

    // componentWillMount(){
    //   this.props.dispatch(fetchUser())
    // }

    value: function render() {
      var user = this.props.user;

      return _react2.default.createElement(
        'h1',
        null,
        user
      )

      // <form>
      //   <div className="form-group">
      //     <label for="exampleInputEmail1">Email address</label>
      //  <   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      //     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      //   </div>
      //   <div className="form-group">
      //     <label for="exampleInputPassword1">Password</label>
      //     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      //   </div>
      //   <div className="form-check">
      //     <label className="form-check-label">
      //       <input type="checkbox" className="form-check-input"></input>
      //       Check me out
      //     </label>
      //   </div>
      //   <button type="submit" className="btn btn-primary">Submit</button>
      // </form>
      ;
    }
  }]);

  return Login;
}(_react2.default.Component)) || _class);

// const mapStateToProps = state => ({
//   user: store.user,
//   //userFetched: store.user.fetched,
// })
//
// const mapDispatchToProps = () => ({})
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login)

exports.default = Login;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Login, 'Login', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/Login.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.a683241b3371b5b23a27.hot-update.js.map