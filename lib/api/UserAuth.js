"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UserAuth {
  constructor(_user) {
    Object.defineProperty(this, '$user', {
      value: _user
    });
    Object.defineProperty(this, '$http', {
      get() {
        return _user.$http.extends({
          baseURL: [_user.$http.defaults.baseURL, 'auth'].join('/')
        });
      }

    });
  }

  login(email, password) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this.$http.post('/email', {
          email,
          password
        });

        if (res.data) {
          _this.$user.$data = res.data;
          return _this.$user.user;
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }

  refreshToken() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this2.$user.$data.refreshToken) {
          throw new Error('Unauthorized');
        }

        var res = yield _this2.$http.post('/refresh', {
          refreshToken: _this2.$user.$data.refreshToken
        });

        if (res.data) {
          _this2.$user.$data = res.data;
          return _this2.$user.user;
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = UserAuth;