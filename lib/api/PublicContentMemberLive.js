"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class PublicContentMemberLive {
  constructor(_content) {
    Object.defineProperty(this, '$content', {
      value: _content
    });
    Object.defineProperty(this, '$http', {
      value: _content.$http.extends({
        baseURL: [_content.$http.defaults.baseURL, 'member-live'].join('/')
      })
    });
  }

  videos(params) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        params = _lodash.default.merge({
          skip: 0,
          take: 10
        }, params);
        var res = yield _this.$http.get('/videos', {
          params
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  stats(contentId) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!contentId) {
          throw new Error('[contentId] is required.');
        }

        var res = yield _this2.$http.get("/video/".concat(contentId, "/stats"));
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = PublicContentMemberLive;