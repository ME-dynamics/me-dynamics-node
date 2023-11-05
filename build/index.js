"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCodes = exports.undefinedToNull = exports.result = exports.nullToUndefined = exports.ErrorFactory = exports.webSocketClient = exports.time = exports.buildRouteGenerator = exports.secureRandomNumber = exports.buildLogger = exports.httpResult = exports.auth = exports.types = void 0;
exports.types = __importStar(require("./src/types"));
var auth_1 = require("./src/auth");
Object.defineProperty(exports, "auth", { enumerable: true, get: function () { return auth_1.auth; } });
var http_result_1 = require("./src/http-result");
Object.defineProperty(exports, "httpResult", { enumerable: true, get: function () { return http_result_1.httpResult; } });
var logger_1 = require("./src/logger");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_1.buildLogger; } });
var random_digits_1 = require("./src/random-digits");
Object.defineProperty(exports, "secureRandomNumber", { enumerable: true, get: function () { return random_digits_1.secureRandomNumber; } });
var route_gen_1 = require("./src/route-gen");
Object.defineProperty(exports, "buildRouteGenerator", { enumerable: true, get: function () { return route_gen_1.buildRouteGenerator; } });
var time_1 = require("./src/time");
Object.defineProperty(exports, "time", { enumerable: true, get: function () { return time_1.time; } });
var web_socket_1 = require("./src/web-socket");
Object.defineProperty(exports, "webSocketClient", { enumerable: true, get: function () { return web_socket_1.webSocketClient; } });
var errorFactory_1 = require("./src/errorFactory");
Object.defineProperty(exports, "ErrorFactory", { enumerable: true, get: function () { return errorFactory_1.ErrorFactory; } });
var nullToUndefined_1 = require("./src/nullToUndefined");
Object.defineProperty(exports, "nullToUndefined", { enumerable: true, get: function () { return nullToUndefined_1.nullToUndefined; } });
var result_1 = require("./src/result");
Object.defineProperty(exports, "result", { enumerable: true, get: function () { return result_1.result; } });
var undefinedToNull_1 = require("./src/undefinedToNull");
Object.defineProperty(exports, "undefinedToNull", { enumerable: true, get: function () { return undefinedToNull_1.undefinedToNull; } });
var http_status_codes_1 = require("http-status-codes");
Object.defineProperty(exports, "statusCodes", { enumerable: true, get: function () { return http_status_codes_1.StatusCodes; } });
