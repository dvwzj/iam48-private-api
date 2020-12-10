"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _PublicMemberFans = _interopRequireDefault(require("./PublicMemberFans"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class PublicMember {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http.extends({
        baseURL: [_public.$http.defaults.baseURL, 'member'].join('/')
      })
    });
    this.fans = new _PublicMemberFans.default(this);
  }

  profile(memberId) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        if (!memberId) {
          throw new Error('[memberId] is required.');
        }

        var res = yield _this.$http.get("/".concat(memberId, "/profile"));
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  memberLive(memberId, params) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!memberId) {
          throw new Error('[memberId] is required.');
        }

        params = _lodash.default.merge({
          skip: 0,
          take: 10
        }, params);
        var res = yield _this2.$http.get("/".concat(memberId, "/member-lives"), {
          params
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = PublicMember;