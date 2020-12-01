'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: props.count
    };
    _this.handleIncrement = _this.handleIncrement.bind(_this);
    _this.handleDecrement = _this.handleDecrement.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleIncrement',
    value: function handleIncrement() {
      this.setState({ count: this.state.count + 1 });
    }
  }, {
    key: 'handleDecrement',
    value: function handleDecrement() {
      this.setState({ count: this.state.count - 1 });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState({ count: 0 });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleDecrement },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        ),
        React.createElement(
          'button',
          { onClick: this.handleIncrement },
          '+1'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  count: 0
};

var VisibilityToggle = function (_React$Component2) {
  _inherits(VisibilityToggle, _React$Component2);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this2 = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this2.handleToggle = _this2.handleToggle.bind(_this2);

    _this2.state = {
      visible: false
    };
    return _this2;
  }

  _createClass(VisibilityToggle, [{
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          visible: !prevState.visible
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'visibillity Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggle },
          this.state.visible ? 'Hide details' : 'Show Details'
        ),
        this.state.visible && React.createElement(
          'p',
          null,
          'Hey, these are some details you can see now!'
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(Counter, { count: 10 }), document.getElementById('app'));
