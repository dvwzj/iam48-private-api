"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class CoinUserbalance {
  constructor(_app) {
    Object.defineProperty(this, '$app', {
      value: _app
    });
    Object.defineProperty(this, '$http', {
      get() {
        return _app.$http.extends({
          baseURL: 'https://coin-userbalance.bnk48.io',
          headers: {
            environment: _app.defaults.environment,
            'user-agent': _app.defaults.userAgent,
            'bnk48-appcode': _app.defaults.appId,
            'bnk48-device-id': _app.defaults.deviceId,
            'bnk48-device-model': _app.defaults.deviceModel,
            'authorization': "Bearer ".concat(_app.user.$data.token || '')
          }
        });
      }

    });
  }

  balance() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this.$app.user.$data.id) {
          throw new Error('Unauthirized');
        }

        var res = yield _this.$http.get("/app/".concat(_this.$app.defaults.appId, "/user/").concat(_this.$app.user.$data.id, "/balance"));
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = CoinUserbalance;