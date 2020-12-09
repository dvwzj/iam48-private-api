"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PublicUsersAll = _interopRequireDefault(require("./PublicUsersAll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PublicUsers {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http.extends({
        baseURL: [_public.$http.defaults.baseURL, 'users'].join('/')
      })
    });
    this.all = new _PublicUsersAll.default(this);
  }

}

exports.default = PublicUsers;