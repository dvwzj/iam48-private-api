"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class PublicTimelineOnly {
  constructor(_timeline) {
    Object.defineProperty(this, '$timeline', {
      value: _timeline
    });
    Object.defineProperty(this, '$http', {
      value: _timeline.$http.extends({
        baseURL: [_timeline.$http.defaults.baseURL, 'only'].join('/')
      })
    });
  }

  member(memberId, params) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        if (!memberId) {
          throw new Error('[memberId] is required.');
        }

        params = _lodash.default.merge({
          amount: 6,
          last_id: undefined
        }, params);
        var res = yield _this.$http.get("/member/".concat(memberId), {
          params
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = PublicTimelineOnly;