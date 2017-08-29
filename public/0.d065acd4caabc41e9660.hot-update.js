webpackHotUpdate(0,{

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const  style ={
//   height:'400px',
//   width: '400px',
//   border: '1px solid black'
// }


var fileDND = function (_React$Component) {
  _inherits(fileDND, _React$Component);

  function fileDND() {
    _classCallCheck(this, fileDND);

    return _possibleConstructorReturn(this, (fileDND.__proto__ || Object.getPrototypeOf(fileDND)).apply(this, arguments));
  }

  _createClass(fileDND, [{
    key: "render",


    // handleDrop = (e) =>{
    //   e.preventDefault();
    //   e.dataTransfer.dropEffect = 'copy'
    //   let file = e.dataTransfer.items[0].getAsFile();
    //
    //
    //   function gotFile(file){
    //     readAsText(file,function(str){
    //         console.log(str.split('\r\n'))
    //     });
    //   }
    //
    //   function readAsText(file,callback) {
    //       var reader = new FileReader();
    //       reader.onloadend = function() {
    //        callback(reader.result);
    //       };
    //       reader.readAsText(file);
    //   }
    //
    //   gotFile(file)
    //
    //
    //
    //
    //
    // }
    //
    // preventDefault = (e) =>{
    //   e.preventDefault()
    // }


    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "dragContiner" },
        _react2.default.createElement(
          "div",
          { onDrop: this.handleDrop,
            onDragOver: this.preventDefault, className: "dropzone" },
          "drop some files"
        ),
        _react2.default.createElement("p", null)
      );
    }
  }]);

  return fileDND;
}(_react2.default.Component);

exports.default = fileDND;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fileDND, "fileDND", "/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/FileDnd.js");
}();

;

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _FileDnd = __webpack_require__(322);

var _FileDnd2 = _interopRequireDefault(_FileDnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyProjects = function (_React$Component) {
  _inherits(MyProjects, _React$Component);

  function MyProjects() {
    _classCallCheck(this, MyProjects);

    return _possibleConstructorReturn(this, (MyProjects.__proto__ || Object.getPrototypeOf(MyProjects)).apply(this, arguments));
  }

  _createClass(MyProjects, [{
    key: 'handledrop',
    value: function handledrop(e) {
      console.log(e.target);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('div', { id: 'dnd', className: 'col-12' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-5' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary' },
              _react2.default.createElement('i', { className: 'fa fa-plus aria-hiden=', 'true': true }),
              'Create New Project'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { id: 'dndbox', className: 'col-5 push-4' },
            _react2.default.createElement(
              'p',
              { className: 'text-center' },
              'Drag and Drop File'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('div', { className: 'col-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-4' },
            _react2.default.createElement(
              'h3',
              { className: 'text-center' },
              'Your Projects'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-block' },
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title' },
                      'Card title'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-block' },
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title' },
                      'Card title'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-block' },
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title' },
                      'Card title'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('div', { className: 'col-2' }),
          _react2.default.createElement(
            'div',
            { className: 'col-4' },
            _react2.default.createElement(
              'h3',
              { className: 'text-center' },
              'Shared Projects'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-block' },
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title' },
                      'Card title'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-block' },
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title' },
                      'Card title'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('div', { className: 'col-1' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-2 push-10' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary' },
              _react2.default.createElement('i', { className: 'fa fa-envelope-o', 'aria-hiden': 'true' }),
              'Email Project'
            )
          )
        )
      );
    }
  }]);

  return MyProjects;
}(_react2.default.Component);

exports.default = MyProjects;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyProjects, 'MyProjects', '/Users/seaneichenberger/Desktop/Galvanize/Q4/reactly-starter-kit/src/components/MyProjects.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.d065acd4caabc41e9660.hot-update.js.map