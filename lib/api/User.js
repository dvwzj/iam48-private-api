"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserAuth = _interopRequireDefault(require("./UserAuth"));

var _UserUser = _interopRequireDefault(require("./UserUser"));

var _UserSubscription = _interopRequireDefault(require("./UserSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class User {
  constructor(_app) {
    Object.defineProperty(this, '$app', {
      value: _app
    });
    Object.defineProperty(this, '$http', {
      get() {
        return _app.$http.extends({
          baseURL: 'https://user.bnk48.io',
          headers: {
            environment: _app.defaults.environment,
            'user-agent': _app.defaults.userAgent,
            'bnk48-appcode': _app.defaults.appId,
            'bnk48-device-id': _app.defaults.deviceId,
            'bnk48-device-model': _app.defaults.deviceModel,
            'authorization': "Bearer ".concat(this.$data.token || '')
          }
        });
      }

    });
    Object.defineProperty(this, '$data', {
      enumerable: true,
      writable: true,
      value: {
        id: undefined,
        token: undefined,
        refreshToken: undefined,
        expireDate: undefined
      }
    });
    this.auth = new _UserAuth.default(this);
    this.user = new _UserUser.default(this);
    this.subscription = new _UserSubscription.default(this);
  }

  memberLive(contentId) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this.$data.id) {
          throw new Error('Unauthorized');
        }

        if (!contentId) {
          throw new Error('[contentId] is required.');
        }

        var res = yield _this.$http.get("/member-live/".concat(contentId));
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  batchThankyouVideo(contentId) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this2.$data.id) {
          throw new Error('Unauthorized');
        }

        if (!contentId) {
          throw new Error('[contentId] is required.');
        }

        var res = yield _this2.$http.get("/batch-thankyou-video/".concat(contentId));
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = User;