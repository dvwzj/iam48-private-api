"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Timeline {
  constructor(_public) {
    Object.defineProperty(this, '$public', {
      value: _public
    });
    Object.defineProperty(this, '$http', {
      value: _public.$http.extends({
        baseURL: [_public.$http.defaults.baseURL, 'timeline'].join('/')
      })
    });
  }

  all(params) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        params = _lodash.default.merge({
          amount: 10,
          last_id: undefined
        }, params);
        var res = yield _this.$http.get('/all', {
          params
        });
        return res.data.feeds;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  getContent(post) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      switch (post.itemType) {
        case 'recommend-media-content':
          {
            var recommend = yield _this2.$public.content.purchasable.recommend();
            post.content = recommend;
            return post;
          }

        case 'promotion-list':
          {
            var campaigns = yield _this2.$public.campaigns.all();
            post.content = campaigns;
            return post;
          }

        case 'game-list':
          {
            var games = yield _this2.$public.games();
            post.content = games;
            return post;
          }

        case 'schedule-member-live':
        case 'content-member-timeline':
        case 'content-member-live-playback':
        default:
          {
            return post;
          }
      }
    })();
  }

}

exports.default = Timeline;