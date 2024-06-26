import { auth } from "../src/auth";
import { httpResult } from "../src/http-result";

const { unauthorized } = httpResult.clientError;

describe("auth function", () => {
  it("should return unauthorized if jwt is not defined", () => {
    const httpRequest = {
      headers: {},
    };
    const roles = {
      admin: true,
    };
    // @ts-ignore
    const result = auth(httpRequest, roles);
    expect(result).toEqual({
      success: false,
      error: unauthorized({ error: "jwt is not defined" }),
      payload: { userId: "", role: "" },
    });
  });

  it("should return unauthorized if jwt is expired", () => {
    const expiredJwt = {
      sub: "user-id",
      exp: Date.now() / 1000 - 3600,
      admin: true,
    };
    const jwtPayload = Buffer.from(JSON.stringify(expiredJwt)).toString(
      "base64"
    );
    const httpRequest = {
      headers: {
        "x-jwt-payload": jwtPayload,
      },
    };
    const roles = {
      admin: true,
    };
    // @ts-ignore
    const result = auth(httpRequest, roles);
    expect(result).toEqual({
      success: false,
      error: unauthorized({ error: "jwt expired" }),
      payload: { userId: "", role: "" },
    });
  });

  it("should return unauthorized if jwt has no id", () => {
    const expiredJwt = {
      exp: Date.now() / 1000 + 3600,
      admin: true,
    };
    const jwtPayload = Buffer.from(JSON.stringify(expiredJwt)).toString(
      "base64"
    );
    const httpRequest = {
      headers: {
        "x-jwt-payload": jwtPayload,
      },
    };
    const roles = {
      admin: true,
    };
    // @ts-ignore
    const result = auth(httpRequest, roles);
    expect(result).toEqual({
      success: false,
      error: unauthorized({ error: "invalid jwt" }),
      payload: { userId: "", role: "" },
    });
  });

  it("should return unauthorized if jwt has no matching role", () => {
    const noRoleJwt = {
      sub: "user-id",
      exp: Date.now() + 3600,
      admin: true,
    };
    const jwtPayload = Buffer.from(JSON.stringify(noRoleJwt)).toString(
      "base64"
    );
    const httpRequest = {
      headers: {
        "x-jwt-payload": jwtPayload,
      },
    };
    const roles = {
      provider: false,
      customer: false,
      admin: false,
    };
    // @ts-ignore
    const result = auth(httpRequest, roles);
    expect(result).toEqual({
      success: false,
      error: unauthorized({ error: "unauthorized" }),
      payload: { userId: "", role: "" },
    });
  });

  it("should return the correct role if jwt has a matching role", () => {
    const roleJwt = {
      sub: "user-id",
      exp: Date.now() + 3600,
      admin: true,
    };
    const jwtPayload = Buffer.from(JSON.stringify(roleJwt)).toString("base64");
    const httpRequest = {
      headers: {
        "x-jwt-payload": jwtPayload,
      },
    };
    // @ts-ignore
    const roles = {
      provider: false,
      customer: false,
      admin: true,
    };
    // @ts-ignore
    const result = auth(httpRequest, roles);
    expect(result).toEqual({
      success: true,
      error: undefined,
      payload: { userId: "user-id", role: "admin" },
    });
  });

  it("should return unauthorized if jwt parsing fails", () => {
    const httpRequest = {
      headers: {
        "x-jwt-payload": "invalid-base64-data",
      },
    };
    const roles = {
      admin: true,
    };
    // @ts-ignore
    const result = auth(httpRequest, roles);
    expect(result).toEqual({
      success: false,
      error: unauthorized({ error: "jwt parse error" }),
      payload: { userId: "", role: "" },
    });
  });
});
