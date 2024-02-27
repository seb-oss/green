'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
var __asyncValues =
  (this && this.__asyncValues) ||
  function (o) {
    if (!Symbol.asyncIterator)
      throw new TypeError('Symbol.asyncIterator is not defined.')
    var m = o[Symbol.asyncIterator],
      i
    return m
      ? m.call(o)
      : ((o =
          typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb('next'),
        verb('throw'),
        verb('return'),
        (i[Symbol.asyncIterator] = function () {
          return this
        }),
        i)
    function verb(n) {
      i[n] =
        o[n] &&
        function (v) {
          return new Promise(function (resolve, reject) {
            ;(v = o[n](v)), settle(resolve, reject, v.done, v.value)
          })
        }
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({ value: v, done: d })
      }, reject)
    }
  }
exports.__esModule = true
var devkit_1 = require('@nx/devkit')
var copyfiles = require('copyfiles')
function multipleExecutor(options, context) {
  var e_1, _a
  return __awaiter(this, void 0, void 0, function () {
    var result, _b, _c, _d, result_1, result_1_1, res, e_1_1
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          console.info('Executing "build-lib"...')
          console.info('Options: ' + JSON.stringify(options, null, 2))
          _c = (_b = Promise).race
          return [
            4 /*yield*/,
            (0, devkit_1.runExecutor)(
              { project: context.projectName, target: 'compile-scss' },
              {},
              context
            ),
          ]
        case 1:
          _d = [_e.sent()]
          // copy readme and changelog
          return [
            4 /*yield*/,
            new Promise(function (resolve) {
              return copyfiles(
                ['libs/' + context.projectName + '/*.md', options.outputPath],
                { up: 2 },
                resolve
              )
            })
              ['catch'](function (_) {
                return [{ success: false }]
              })
              .then(function (_) {
                return [{ success: true }]
              }),
          ]
        case 2:
          _d = _d.concat([
            // copy readme and changelog
            _e.sent(),
          ])
          // copy package json
          return [
            4 /*yield*/,
            new Promise(function (resolve) {
              return copyfiles(
                [options.packageJson, options.outputPath],
                { up: 2 },
                resolve
              )
            })
              ['catch'](function (_) {
                return [{ success: false }]
              })
              .then(function (_) {
                return [{ success: true }]
              }),
          ]
        case 3:
          _d = _d.concat([
            // copy package json
            _e.sent(),
          ])
          // copy scss files
          return [
            4 /*yield*/,
            new Promise(function (resolve) {
              return copyfiles(
                [
                  'libs/' + context.projectName + '/scss/**/*.scss',
                  '' + options.outputPath,
                ],
                { up: 2 },
                resolve
              )
            })
              ['catch'](function (_) {
                return [{ success: false }]
              })
              .then(function (_) {
                return [{ success: true }]
              }),
          ]
        case 4:
          return [
            4 /*yield*/,
            _c.apply(_b, [
              _d.concat([
                // copy scss files
                _e.sent(),
              ]),
            ]),
          ]
        case 5:
          result = _e.sent()
          _e.label = 6
        case 6:
          _e.trys.push([6, 11, 12, 17])
          result_1 = __asyncValues(result)
          _e.label = 7
        case 7:
          return [4 /*yield*/, result_1.next()]
        case 8:
          if (!((result_1_1 = _e.sent()), !result_1_1.done))
            return [3 /*break*/, 10]
          res = result_1_1.value
          if (!res.success) return [2 /*return*/, res]
          _e.label = 9
        case 9:
          return [3 /*break*/, 7]
        case 10:
          return [3 /*break*/, 17]
        case 11:
          e_1_1 = _e.sent()
          e_1 = { error: e_1_1 }
          return [3 /*break*/, 17]
        case 12:
          _e.trys.push([12, , 15, 16])
          if (!(result_1_1 && !result_1_1.done && (_a = result_1['return'])))
            return [3 /*break*/, 14]
          return [4 /*yield*/, _a.call(result_1)]
        case 13:
          _e.sent()
          _e.label = 14
        case 14:
          return [3 /*break*/, 16]
        case 15:
          if (e_1) throw e_1.error
          return [7 /*endfinally*/]
        case 16:
          return [7 /*endfinally*/]
        case 17:
          return [2 /*return*/, { success: true }]
      }
    })
  })
}
exports['default'] = multipleExecutor
