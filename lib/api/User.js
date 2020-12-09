"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserAuth = _interopRequireDefault(require("./UserAuth"));

var _UserUser = _interopRequireDefault(require("./UserUser"));

var _UserSubscription = _interopRequireDefault(require("./UserSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

}

exports.default = User;