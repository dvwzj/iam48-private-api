"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserUserCommentsContent = _interopRequireDefault(require("./UserUserCommentsContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserUserComments {
  constructor(_user) {
    Object.defineProperty(this, '$user', {
      value: _user
    });
    Object.defineProperty(this, '$http', {
      value: _user.$http.extends({
        baseURL: [_user.$http.defaults.baseURL, 'comments'].join('/')
      })
    });
    this.content = new _UserUserCommentsContent.default(this);
  }

}

exports.default = UserUserComments;