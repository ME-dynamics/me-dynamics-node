"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const http_result_1 = require("../http-result");
const { unauthorized } = http_result_1.httpResult.clientError;
// const jwtHeader = new TextEncoder().encode("x-jwt-payload").buffer;
function auth(httpRequest, roles) {
    const jwtPayload = httpRequest.headers["x-jwt-payload"];
    if (typeof jwtPayload !== "string") {
        return {
            success: false,
            error: unauthorized({ error: "jwt is not defined" }),
            payload: { userId: "", role: "" },
        };
    }
    try {
        const jwt = JSON.parse(Buffer.from(jwtPayload, "base64").toString());
        // check if jwt is expired
        if (typeof jwt["exp"] !== "number") {
            return {
                success: false,
                error: unauthorized({ error: "invalid jwt" }),
                payload: { userId: "", role: "" },
            };
        }
        if (jwt["exp"] < Date.now() / 1000) {
            return {
                success: false,
                error: unauthorized({ error: "jwt expired" }),
                payload: { userId: "", role: "" },
            };
        }
        // check if jwt has id
        if (typeof jwt["sub"] !== "string") {
            return {
                success: false,
                error: unauthorized({ error: "invalid jwt" }),
                payload: { userId: "", role: "" },
            };
        }
        const { admin, accountant, assistant, customer, provider, support } = roles;
        if (admin && jwt["admin"]) {
            return {
                success: true,
                error: undefined,
                payload: { userId: jwt["sub"], role: "admin" },
            };
        }
        if (provider && jwt["provider"]) {
            return {
                success: true,
                error: undefined,
                payload: { userId: jwt["sub"], role: "provider" },
            };
        }
        if (customer && jwt["customer"]) {
            return {
                success: true,
                error: undefined,
                payload: { userId: jwt["sub"], role: "customer" },
            };
        }
        if (assistant && jwt["assistant"]) {
            return {
                success: true,
                error: undefined,
                payload: { userId: jwt["sub"], role: "assistant" },
            };
        }
        if (accountant && jwt["accountant"]) {
            return {
                success: true,
                error: undefined,
                payload: { userId: jwt["sub"], role: "accountant" },
            };
        }
        if (support && jwt["support"]) {
            return {
                success: true,
                error: undefined,
                payload: { userId: jwt["sub"], role: "support" },
            };
        }
        return {
            success: false,
            error: unauthorized({ error: "unauthorized" }),
            payload: { userId: "", role: "" },
        };
    }
    catch (error) {
        return {
            success: false,
            error: unauthorized({ error: "jwt parse error" }),
            payload: { userId: "", role: "" },
        };
    }
}
exports.auth = auth;
