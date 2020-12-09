"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PublicMemberFansToprank = _interopRequireDefault(require("./PublicMemberFansToprank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PublicMemberFans {
  constructor(_member) {
    Object.defineProperty(this, '$member', {
      value: _member
    });
    Object.defineProperty(this, '$http', {
      value: _member.$http
    });
    this.toprank = new _PublicMemberFansToprank.default(this);
  }

}

exports.default = PublicMemberFans;