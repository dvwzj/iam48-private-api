"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class PublicContentPurchasable {
  constructor(_content) {
    Object.defineProperty(this, '$content', {
      value: _content
    });
    Object.defineProperty(this, '$http', {
      value: _content.$http.extends({
        baseURL: [_content.$http.defaults.baseURL, 'purchasable'].join('/')
      })
    });
  }

  recommend() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this.$http.get('/recommend');
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = PublicContentPurchasable;