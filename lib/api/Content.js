"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContentPurchasable = _interopRequireDefault(require("./ContentPurchasable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Content {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http.extends({
        baseURL: [_public.$http.defaults.baseURL, 'content'].join('/')
      })
    });
    this.purchasable = new _ContentPurchasable.default(this);
  }

}

exports.default = Content;