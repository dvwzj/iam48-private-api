"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class PublicTheater {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http.extends({
        baseURL: [_public.$http.defaults.baseURL, 'theater'].join('/')
      })
    });
  }

  playback(params) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        if (_lodash.default.isString(params) && _lodash.default.isInteger(parseInt("".concat(params))) || _lodash.default.isInteger(params)) {
          var res = yield _this.$http.get("/playback/".concat(params));
          return res.data;
        } else if (_lodash.default.isObject(params) && _lodash.default.size(_lodash.default.keys(params))) {
          params = _lodash.default.merge({
            skip: 0,
            take: 20
          }, params);

          var _res = yield _this.$http.get('/playback', {
            params
          });

          return _res.data;
        } else {
          throw new Error('invalid [memberId].');
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = PublicTheater;