"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _PublicMember = _interopRequireDefault(require("./PublicMember"));

var _PublicMembers = _interopRequireDefault(require("./PublicMembers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Members {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http
    });
    this.member = new _PublicMember.default(this);
    this.members = new _PublicMembers.default(this);
  }

  find(params) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var members = yield _this.members.all();
        return _lodash.default.filter(members, params);
      } catch (e) {
        console.error(e);
      }
    })();
  }

  findOne() {
    var _arguments = arguments,
        _this2 = this;

    return _asyncToGenerator(function* () {
      var params = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;

      try {
        var members = yield _this2.find(params);
        return _lodash.default.first(members);
      } catch (e) {
        console.error(e);
      }
    })();
  }

  get(memberId) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!memberId) {
          throw new Error('[memberId] is required.');
        } else if (_lodash.default.isString(memberId) && _lodash.default.isInteger(parseInt(memberId)) || _lodash.default.isInteger(memberId)) {
          var member = yield _this3.member.profile(memberId);
          return member;
        } else {
          throw new Error('invalid [memberId].');
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = Members;