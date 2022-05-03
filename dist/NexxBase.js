"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.ends-with.js");

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defaultHost = "embed.nexx.cloud";

var NexxBase = /*#__PURE__*/function (_React$Component) {
  _inherits(NexxBase, _React$Component);

  var _super = _createSuper(NexxBase);

  function NexxBase(props, acceptedOverrides, frameTemplate) {
    var _this;

    _classCallCheck(this, NexxBase);

    _this = _super.call(this, props);
    _this.instance = null;
    _this.name = 'nxp-' + frameTemplate + '-' + new Date().getTime();
    _this.params = {
      environment: 'react'
    };
    _this.config = {
      domain: 0,
      protocol: "https"
    };

    if (_this.props.domain) {
      _this.config.domain = parseInt(_this.props.domain);
    }

    if (_this.props.protocol === 'http') {
      _this.config.protocol = _this.props.protocol;
    }

    if (_this.props.deliveryPartner) {
      _this.config.deliveryPartner = _this.props.deliveryPartner;
    }

    var host = defaultHost;

    if (_this.props.embedHost) {
      host = _this.props.embedHost;

      if (host.startsWith("http")) {
        host = host.split("://")[1];
      }

      if (host.endsWith("/")) {
        host = host.splice(0, -1);
      }
    }

    _this.usedHost = _this.config.protocol + "://" + host;
    acceptedOverrides.push('language');
    acceptedOverrides.push('direction');
    acceptedOverrides.push('affiliateCode');

    if (_this.props.hasOwnProperty("params") && _typeof(_this.props.params) == "object") {
      for (var _i = 0, _Object$entries = Object.entries(_this.props.params); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (acceptedOverrides.includes(key)) {
          _this.params[key] = value;
        }
      }
    }

    return _this;
  }

  _createClass(NexxBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onRef) {
        this.props.onRef(this);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onRef) {
        this.props.onRef(undefined);
      }
    }
  }, {
    key: "buildProps",
    value: function buildProps() {
      var props = {};

      if (this.props) {
        if (this.props.id) {
          props.id = this.props.id;
        }

        if (this.props.name) {
          this.name = this.props.name;
          props.name = this.props.name;
        }
      }

      if (!props.name) {
        props.name = this.name;
      }

      return props;
    }
  }, {
    key: "buildSrc",
    value: function buildSrc() {
      return "";
    }
  }, {
    key: "buildFinalSrc",
    value: function buildFinalSrc() {
      var _this2 = this;

      var src = this.usedHost + "/";

      if (this.config.hasOwnProperty('deliveryPartner')) {
        src += this.config.deliveryPartner;
      } else {
        src += this.config.domain;
      }

      src += "/" + this.buildSrc();
      src += "?" + Object.keys(this.params).map(function (key) {
        return key + '=' + encodeURIComponent(_this2.params[key]);
      }).join('&');
      return src;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement("iframe", _extends({}, this.buildProps(), {
        ref: function ref(_ref) {
          return _this3.instance = _ref;
        },
        src: this.buildFinalSrc(),
        width: "100%",
        height: "100%",
        frameBorder: "0",
        allow: "autoplay; picture-in-picture; gyroscope; magnetometer; accelerometer; encrypted-media; fullscreen",
        allowFullScreen: true
      }));
    }
  }]);

  return NexxBase;
}(_react.default.Component);

var _default = NexxBase;
exports.default = _default;