"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PublicProductsGiftSection = _interopRequireDefault(require("./PublicProductsGiftSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PublicProductsGift {
  constructor(_product) {
    Object.defineProperty(this, '$product', {
      value: _product
    });
    Object.defineProperty(this, '$http', {
      value: _product.$http.extends({
        baseURL: [_product.$http.defaults.baseURL, 'gift'].join('/')
      })
    });
    this.section = new _PublicProductsGiftSection.default(this);
  }

}

exports.default = PublicProductsGift;