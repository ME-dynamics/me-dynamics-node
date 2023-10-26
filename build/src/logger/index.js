"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = void 0;
const pino_1 = __importDefault(require("pino"));
const hyperid_1 = __importDefault(require("hyperid"));
function buildLogger(options) {
    const isDev = process.env["NODE_ENV"] !== "production";
    const level = isDev ? "debug" : "info";
    const pinoLogger = (0, pino_1.default)({ level });
    const idGen = (0, hyperid_1.default)();
    function metadata(data) {
        return { init: () => init(data) };
    }
    function init(data) {
        const id = idGen();
        if (data) {
            return pinoLogger.child({ metadata: data, details: options, id });
        }
        return pinoLogger.child({ details: options, id });
    }
    return { init, metadata };
}
exports.buildLogger = buildLogger;
