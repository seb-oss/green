"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var fs = require('fs');
var updateDeps = function (pkg, packages, type) {
    var _a;
    if (type === void 0) { type = 'dependencies'; }
    var deps = Object.entries(pkg[type] || {});
    return __assign(__assign({}, pkg), (_a = {}, _a[type] = __assign({}, deps.reduce(function (previous, current) {
        var _a;
        return (__assign(__assign({}, previous), (_a = {}, _a[current[0]] = packages[current[0]]
            ? "^".concat(packages[current[0]])
            : current[1], _a)));
    }, {})), _a));
};
function multipleExecutor(options, context) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var result, _b, _c, result_1, result_1_1, res, e_1_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.info("Executing \"update-dependencies\"...");
                    console.info("Options: ".concat(JSON.stringify(options, null, 2)));
                    _c = (_b = Promise).race;
                    return [4 /*yield*/, new Promise(function (resolve) {
                            // get workspace config
                            var workspace = JSON.parse(fs.readFileSync("workspace.json"));
                            // get package json for project
                            var pkg = JSON.parse(fs.readFileSync("libs/".concat(context.projectName, "/package.json")));
                            console.log("existing package.json for ".concat(context.projectName), pkg);
                            // get libs based on path
                            var libs = Object.values(workspace.projects).filter(function (path) {
                                return /^libs\/.*/.test(path);
                            });
                            // get current version of each lib from package.json
                            var packages = libs.reduce(function (previous, current) {
                                var _a;
                                var pkg = JSON.parse(fs.readFileSync("".concat(current, "/package.json")));
                                return __assign(__assign({}, previous), (_a = {}, _a[pkg.name] = pkg.version, _a));
                            }, {});
                            // placeholder for updated package.json for project
                            var updatedPkg = __assign({}, pkg);
                            // update peer dependencies if needed
                            if (pkg.peerDependencies) {
                                updatedPkg = updateDeps(updatedPkg, packages, 'peerDependencies');
                            }
                            // update dependencies if needed
                            if (pkg.dependencies) {
                                updatedPkg = updateDeps(updatedPkg, packages);
                            }
                            console.log("updated package.json for ".concat(context.projectName), updatedPkg);
                            fs.writeFile("libs/".concat(context.projectName, "/package.json"), JSON.stringify(updatedPkg, null, 4), resolve);
                            console.log("libs/".concat(context.projectName, "/package.json has been updated!"));
                        })["catch"](function (_) { return [{ success: false }]; })
                            .then(function (_) { return [{ success: true }]; })];
                case 1: return [4 /*yield*/, _c.apply(_b, [[
                            _d.sent()
                        ]])];
                case 2:
                    result = _d.sent();
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 8, 9, 14]);
                    result_1 = __asyncValues(result);
                    _d.label = 4;
                case 4: return [4 /*yield*/, result_1.next()];
                case 5:
                    if (!(result_1_1 = _d.sent(), !result_1_1.done)) return [3 /*break*/, 7];
                    res = result_1_1.value;
                    if (!res.success)
                        return [2 /*return*/, res];
                    _d.label = 6;
                case 6: return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 14];
                case 8:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _d.trys.push([9, , 12, 13]);
                    if (!(result_1_1 && !result_1_1.done && (_a = result_1["return"]))) return [3 /*break*/, 11];
                    return [4 /*yield*/, _a.call(result_1)];
                case 10:
                    _d.sent();
                    _d.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 13: return [7 /*endfinally*/];
                case 14: return [2 /*return*/, { success: true }];
            }
        });
    });
}
exports["default"] = multipleExecutor;
