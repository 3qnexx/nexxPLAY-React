"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-set.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _NexxBase2 = _interopRequireDefault(require("./NexxBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var supportedStreamtypes = {
  VIDEO: 'video',
  AUDIO: 'audio',
  LIVE: 'live',
  RADIO: 'radio',
  PLAYLIST: 'playlist',
  AUDIO_ALBUM: 'audioalbum',
  COLLECTION: 'collection',
  SET: 'set',
  RACK: 'rack'
};

var _playbackControl = /*#__PURE__*/new WeakSet();

var NexxPLAY = /*#__PURE__*/function (_NexxBase) {
  _inherits(NexxPLAY, _NexxBase);

  var _super = _createSuper(NexxPLAY);

  function NexxPLAY(props) {
    var _this;

    _classCallCheck(this, NexxPLAY);

    _this = _super.call(this, props, ['delay', 'autoPlay', 'dataMode', 'menuMode', 'exitMode', 'disableAds', 'streamingFilter', 'consentString'], 'play');

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _playbackControl);

    if (_this.props.streamtype) {
      if (Object.values(supportedStreamtypes).includes(_this.props.streamtype)) {
        _this.config.streamtype = _this.props.streamtype;
      } else {
        _this.config.streamtype = supportedStreamtypes.VIDEO;
      }
    } else {
      _this.config.streamtype = supportedStreamtypes.VIDEO;
    }

    if (_this.props.mediaHash) {
      _this.config.mediaHash = _this.props.mediaHash;
    }

    window.removeEventListener("message", _this.onPostMessage);

    if (_this.props.onPlayerEvent || _this.props.onPlayerData) {
      _this.onPostMessage = _this.onPostMessage.bind(_assertThisInitialized(_this));
      window.addEventListener("message", _this.onPostMessage);
    }

    return _this;
  }

  _createClass(NexxPLAY, [{
    key: "onPostMessage",
    value: function onPostMessage(e) {
      if (e.origin === this.usedHost) {
        if (e.data.frameName == this.name) {
          var data = e.data;

          if (data.hasOwnProperty("event")) {
            if (this.props.onPlayerEvent) {
              this.props.onPlayerEvent(data);
            }
          } else if (this.props.onPlayerData) {
            this.props.onPlayerData(data);
          }
        }
      }
    }
  }, {
    key: "buildSrc",
    value: function buildSrc() {
      return this.config.streamtype + "/" + this.config.mediaHash;
    }
  }, {
    key: "pause",
    value: function pause() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "pause");
    }
  }, {
    key: "play",
    value: function play() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "play");
    }
  }, {
    key: "toggle",
    value: function toggle() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "toggle");
    }
  }, {
    key: "mute",
    value: function mute() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "mute");
    }
  }, {
    key: "unmute",
    value: function unmute() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "unmute");
    }
  }, {
    key: "seekTo",
    value: function seekTo(time) {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "seekTo", time);
    }
  }, {
    key: "seekBy",
    value: function seekBy(seconds) {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "seekBy", seconds);
    }
  }, {
    key: "next",
    value: function next() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "next");
    }
  }, {
    key: "previous",
    value: function previous() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "previous");
    }
  }, {
    key: "swapToPosition",
    value: function swapToPosition(pos) {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "swapToPosition", pos);
    }
  }, {
    key: "getCurrentMedia",
    value: function getCurrentMedia() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "getCurrentMedia");
    }
  }, {
    key: "getCurrentMediaParent",
    value: function getCurrentMediaParent() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "getCurrentMediaParent");
    }
  }, {
    key: "getCurrentPlaybackState",
    value: function getCurrentPlaybackState() {
      _classPrivateMethodGet(this, _playbackControl, _playbackControl2).call(this, "getCurrentPlaybackState");
    }
  }]);

  return NexxPLAY;
}(_NexxBase2.default);

function _playbackControl2(command, param) {
  if (this.instance) {
    var obj = {
      cmd: command
    };

    if (param) {
      obj.param = param;
    }

    this.instance.contentWindow.postMessage(obj, this.usedHost);
  }
}

var _default = NexxPLAY;
exports.default = _default;