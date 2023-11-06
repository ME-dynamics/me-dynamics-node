"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argon2 = exports.sha1 = exports.sha256 = exports.sha512 = void 0;
const node_crypto_1 = require("node:crypto");
const argon2_1 = require("argon2");
function sha512(value) {
    return (0, node_crypto_1.createHash)("sha512").update(value).digest("hex");
}
exports.sha512 = sha512;
function sha256(value) {
    return (0, node_crypto_1.createHash)("sha256").update(value).digest("hex");
}
exports.sha256 = sha256;
function sha1(value) {
    return (0, node_crypto_1.createHash)("sha1").update(value).digest("hex");
}
exports.sha1 = sha1;
async function argon2(value) {
    return await (0, argon2_1.hash)(value);
}
exports.argon2 = argon2;
