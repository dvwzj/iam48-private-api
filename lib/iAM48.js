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

}

exports.default = iAM48;