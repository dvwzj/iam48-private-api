"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _iAM = _interopRequireDefault(require("./iAM48"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Singleton {
  constructor(instance, email, password) {
    this.iam48 = new _iAM.default(instance.defaults);
    Object.defineProperties(this, {
      email: {
        value: email
      },
      password: {
        value: password
      }
    });
  }

  User() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this.iam48.user.$data.id) {
          yield _this.iam48.user.auth.login(_this.email, _this.password);
        }

        return _this.iam48.user.user;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = Singleton;