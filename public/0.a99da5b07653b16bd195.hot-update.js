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

var _reactFileDrop = __webpack_require__(796);

var _reactFileDrop2 = _interopRequireDefault(_reactFileDrop);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-12' },
            _react2.default.createElement(_reactFileDrop2.default, null)
          )
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
              _react2.default.createElement('i', { classNameName: 'fa fa-envelope-o aria-hiden=', 'true': true }),
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

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

(function(root, factory) {
    if (true) {
        var React = __webpack_require__(15);
        module.exports = factory(React);
    }
    else if (typeof define === "function" && define.amd) {
        define(["react"], function(React) {
            return factory(React);
        });
    }
    else {
        factory(root.React);
    }
}(this, function(React) {

    var FileDrop = React.createClass({
        displayName: "FileDrop",

        propTypes: {
            onDrop: React.PropTypes.func,
            onDragOver: React.PropTypes.func,
            onDragLeave: React.PropTypes.func,
            dropEffect: React.PropTypes.oneOf(["copy", "move", "link", "none"]),
            targetAlwaysVisible: React.PropTypes.bool,
            frame: function (props, propName, componentName) {
                var prop = props[propName];
                if (prop == null) {
                    return new Error("Warning: Required prop `" + propName + "` was not specified in `" + componentName + "`");
                }
                if (prop !== document && prop !== window && !(prop instanceof HTMLElement)) {
                    return new Error("Warning: Prop `" + propName + "` must be one of the following: document, window, or an HTMLElement!");
                }
            },
            onFrameDragEnter: React.PropTypes.func,
            onFrameDragLeave: React.PropTypes.func,
            onFrameDrop: React.PropTypes.func
        },

        getDefaultProps: function () {
            return {
                dropEffect: "copy",
                frame: document,
                targetAlwaysVisible: false
            };
        },

        // getInitialState: in componentWillMount, we call this.resetDragging();

        resetDragging: function () {
            this._dragCount = 0;
            this.setState({draggingOverFrame: false, draggingOverTarget: false});
        },

        _handleDrop: function (event) {
            event.preventDefault();
            if (this.props.onDrop) {
                var files = (event.dataTransfer) ? event.dataTransfer.files : (event.frame) ? event.frame.files : undefined;
                this.props.onDrop(files, event);
            }
        },

        _handleDragOver: function (event) {
            event.preventDefault();
            event.stopPropagation();
            event.dataTransfer.dropEffect = this.props.dropEffect;

            // set active drag state only when file is dragged into
            // (in mozilla when file is dragged effect is "uninitialized")
            var effectAllowed = event.dataTransfer.effectAllowed;
            if (effectAllowed === "all" || effectAllowed === "uninitialized") {
                this.setState({draggingOverTarget: true});
            }

            if (this.props.onDragOver) this.props.onDragOver(event);
        },

        _handleDragLeave: function (event) {
            this.setState({draggingOverTarget: false});
            if (this.props.onDragLeave) this.props.onDragLeave(event);
        },

        _handleFrameDrag: function (event) {
            // We are listening for events on the 'frame', so every time the user drags over any element in the frame's tree,
            // the event bubbles up to the frame. By keeping count of how many "dragenters" we get, we can tell if they are still
            // "draggingOverFrame" (b/c you get one "dragenter" initially, and one "dragenter"/one "dragleave" for every bubble)
            this._dragCount += (event.type === "dragenter" ? 1 : -1);
            if (this._dragCount === 1) {
                this.setState({draggingOverFrame: true});
                if (this.props.onFrameDragEnter) this.props.onFrameDragEnter(event);
            } else if (this._dragCount === 0) {
                if (this.props.onFrameDragLeave) this.props.onFrameDragLeave(event);
                this.setState({draggingOverFrame: false});
            }
        },

        _handleFrameDrop: function(event) {
            this.resetDragging();
            if (!this.state.draggingOverTarget) {
                if (this.props.onFrameDrop) this.props.onFrameDrop(event);
            }
        },

        render: function () {
            var fileDropTarget;
            var fileDropTargetClassName = "file-drop-target";
            if (this.props.targetAlwaysVisible || this.state.draggingOverFrame) {
                if (this.state.draggingOverFrame) fileDropTargetClassName += " file-drop-dragging-over-frame";
                if (this.state.draggingOverTarget) fileDropTargetClassName += " file-drop-dragging-over-target";
                fileDropTarget = (
                    React.createElement("div", {className: fileDropTargetClassName},
                        this.props.children
                    )
                );
            }
            var className = "file-drop";
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return (
                React.createElement("div", {className: className, onDrop: this._handleDrop, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver},
                    fileDropTarget
                )
            );
        },

        _handleWindowDragOverOrDrop: function(event) {
            event.preventDefault();
        },

        componentWillReceiveProps: function(nextProps) {
            if (nextProps.frame !== this.props.frame) {
                this.resetDragging();
                this.stopFrameListeners(this.props.frame);
                this.startFrameListeners(nextProps.frame);
            }
        },

        componentWillMount: function() {
            this.startFrameListeners();
            this.resetDragging();
            window.addEventListener("dragover", this._handleWindowDragOverOrDrop);
            window.addEventListener("drop", this._handleWindowDragOverOrDrop);
        },

        componentWillUnmount: function() {
            this.stopFrameListeners();
            window.removeEventListener("dragover", this._handleWindowDragOverOrDrop);
            window.removeEventListener("drop", this._handleWindowDragOverOrDrop);
        },

        stopFrameListeners: function(frame) {
            frame = frame || this.props.frame;
            frame.removeEventListener("dragenter", this._handleFrameDrag);
            frame.removeEventListener("dragleave", this._handleFrameDrag);
            frame.removeEventListener("drop", this._handleFrameDrop);
        },

        startFrameListeners: function(frame) {
            frame = frame || this.props.frame;
            frame.addEventListener("dragenter", this._handleFrameDrag);
            frame.addEventListener("dragleave", this._handleFrameDrag);
            frame.addEventListener("drop", this._handleFrameDrop);
        }
    });

    if (false) {
        this.ReactFileDrop = FileDrop;
    }

    return FileDrop;
}));


/***/ })

})
//# sourceMappingURL=0.a99da5b07653b16bd195.hot-update.js.map