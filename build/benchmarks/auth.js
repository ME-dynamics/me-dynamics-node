"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const benchmark_1 = __importDefault(require("benchmark"));
const auth_1 = require("../src/auth");
const suite = new benchmark_1.default.Suite();
console.log(new Date().toString());
suite
    .add("auth", function () {
    (0, auth_1.auth)(
    //@ts-ignore
    {
        headers: {
            "x-jwt-payload": "ewogICJzdWIiOiAiMTIzc2Q0NTY3ODkwIiwKICAibmFtZSI6ICJKb2huIERvZSIsCiAgImV4cCI6IDE2ODI4MDYwMjMxMTksCiAgImFkbWluIjogdHJ1ZQp9",
        },
    }, { admin: true });
})
    // add listeners
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .on("complete", function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("Fastest is " + this.filter("fastest").map("name"));
})
    .run();
// run async
