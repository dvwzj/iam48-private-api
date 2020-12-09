"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PublicContentPurchasable = _interopRequireDefault(require("./PublicContentPurchasable"));

var _PublicContentMemberLive = _interopRequireDefault(require("./PublicContentMemberLive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PublicContent {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http.extends({
        baseURL: [_public.$http.defaults.baseURL, 'content'].join('/')
      })
    });
    this.purchasable = new _PublicContentPurchasable.default(this);
    this.member = new _PublicContentMemberLive.default(this);
  }

}

exports.default = PublicContent;