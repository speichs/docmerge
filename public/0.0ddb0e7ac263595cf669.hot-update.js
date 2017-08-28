webpackHotUpdate(0,{

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(178);

var _store = __webpack_require__(122);

var _store2 = _interopRequireDefault(_store);

var _userActions = __webpack_require__(191);

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAccount = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user
  };
}), _dec(_class = function (_React$Component) {
  _inherits(CreateAccount, _React$Component);

  function CreateAccount() {
    _classCallCheck(this, CreateAccount);

    return _possibleConstructorReturn(this, (CreateAccount.__proto__ || Object.getPrototypeOf(CreateAccount)).apply(this, arguments));
  }

  _createClass(CreateAccount, [{
    key: 'setFirstName',
    value: function setFirstName(e) {
      var first = e.target.value;
      this.props.dispatch(userActions.setFirstName(first));
    }
  }, {
    key: 'setLastName',
    value: function setLastName(e) {
      var last = e.target.value;
      this.props.dispatch(userActions.setLastName(last));
    }
  }, {
    key: 'setEmail',
    value: function setEmail(e) {
      var email = e.target.value;
      this.props.dispatch(userActions.setEmail(email));
    }

    // setPassword(e){
    //   let password = e.target.value;
    //   this.props.dispatch
    // }


  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;

      var firstName = user.firstName;
      var lastName = this.props.user.lastName;
      var email = this.props.user.email;


      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-xs-push-1' },
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'firstName' },
                  'First Name: ',
                  firstName
                ),
                _react2.default.createElement('input', { onChange: this.setFirstName.bind(this), type: 'text', className: 'form-control', id: 'firstName', placeholder: 'John' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'lastName' },
                  'Last Name: ',
                  lastName
                ),
                _react2.default.createElement('input', { onChange: this.setLastName.bind(this), type: 'text', className: 'form-control', id: 'lastName', placeholder: 'Doe' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'exampleInputEmail1' },
                  'Email address: ',
                  email
                ),
                _react2.default.createElement('input', { onChange: this.setEmail.bind(this), type: 'email', className: 'form-control', id: 'exampleInputEmail1', 'aria-describedby': 'emailHelp', placeholder: 'Enter email' }),
                _react2.default.createElement(
                  'small',
                  { id: 'emailHelp', className: 'form-text text-muted' },
                  'We\'ll never share your email with anyone else.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'password' },
                  'Password'
                ),
                _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', placeholder: 'Password' })
              ),
              _react2.default.createElement(
                'button',
                { disabled: !email, type: 'submit', className: 'btn btn-primary' },
                'Create Account'
              )
            )
          )
        )
      );
    }
  }]);

  return CreateAccount;
}(_react2.default.Component)) || _class);
exports.default = CreateAccount;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CreateAccount, 'CreateAccount', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/CreateAccount.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.0ddb0e7ac263595cf669.hot-update.js.map