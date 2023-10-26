"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoRandom = void 0;
const crypto_1 = require("crypto");
const util_1 = require("util");
const errorFactory_1 = require("../errorFactory");
const asyncRandomBytes = (0, util_1.promisify)(crypto_1.randomBytes);
async function cryptoRandom(value) {
    if (!crypto_1.randomBytes || crypto_1.randomBytes === null) {
        throw new errorFactory_1.ErrorFactory({
            name: "crypto_random_not_found",
            message: "No suitable random number generator available.",
            detail: "Ensure that your runtime is linked against OpenSSL ( or an equivalent ) correctly.",
            nativeError: undefined,
        });
    }
    return await asyncRandomBytes(value);
}
exports.cryptoRandom = cryptoRandom;
