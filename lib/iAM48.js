"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _reqFastPromise = require("req-fast-promise");

var _Public = _interopRequireDefault(require("./api/Public"));

var _User = _interopRequireDefault(require("./api/User"));

var _CoinUserbalance = _interopRequireDefault(require("./api/CoinUserbalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class iAM48 {
  constructor(defaults) {
    Object.defineProperty(this, 'defaults', {
      enumerable: true,
      writable: false,
      value: _lodash.default.merge({
        environment: 'PROD',
        userAgent: 'BNK48_102/1.2.89/Dalvik/2.1.0 (Linux; U; Android 5.1.1; HUAWEI MLA-L12 Build/HUAWEIMLA-L12)',
        appId: 'BNK48_102',
        appVersion: '1.2.22',
        deviceModel: 'HUAWEI HUAWEI MLA-L12',
        deviceId: '6802689067815614',
        deviceName: 'HUAWEI MLA-L12'
      }, defaults)
    });
    Object.defineProperty(this, '$http', {
      value: new _reqFastPromise.ReqFastPromise()
    });
    this.public = new _Public.default(this);
    this.user = new _User.default(this);
    this.coin = new _CoinUserbalance.default(this);
  }

  Singleton(email, password) {
    try {
      if (!email) {
        throw new Error('[email] is required.');
      }

      if (!password) {
        throw new Error('[password] is required.');
      }

      var iam48 = new iAM48(this.defaults);
      Object.defineProperty(iam48, 'User', {
        enumerable: true,
        writable: false,
        value: function () {
          var _value = _asyncToGenerator(function* () {
            if (!iam48.user.$data.id) {
              yield iam48.user.auth.login(email, password);
            }

            return iam48.user.user;
          });

          function value() {
            return _value.apply(this, arguments);
          }

          return value;
        }()
      });
      return iam48;
    } catch (e) {
      console.error(e);
    }
  }

}

exports.default = iAM48;