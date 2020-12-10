"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class PublicComment {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http.extends({
        baseURL: [_public.$http.defaults.baseURL, 'comment'].join('/')
      })
    });
  }

  multiple(contentId, params) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        params = _lodash.default.merge({
          commentIdList: []
        }, params);
        var res = yield _this.$http.get("/".concat(contentId, "/multiple"), {
          params
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = PublicComment;