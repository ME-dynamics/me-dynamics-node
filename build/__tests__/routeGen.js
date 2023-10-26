"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_gen_1 = require("../src/route-gen");
describe("route generator", () => {
    it("should return correct path", () => {
        const routeGen = (0, route_gen_1.buildRouteGenerator)({
            service: "business",
            version: "v1",
        });
        expect.assertions(1);
        expect(routeGen(["customers", ":customerId"])).toBe("/api/v1/business/customers/:customerId");
    });
    it("should throw error when using / in route", () => {
        const routeGen = (0, route_gen_1.buildRouteGenerator)({
            service: "business",
            version: "v1",
        });
        expect.assertions(1);
        expect(() => routeGen(["customers", "/:customerId"])).toThrow();
    });
    it("should throw error when using space in route", () => {
        const routeGen = (0, route_gen_1.buildRouteGenerator)({
            service: "business",
            version: "v1",
        });
        expect.assertions(1);
        expect(() => routeGen(["customers", " :customerId"])).toThrow();
    });
    it("should return base when routes is empty array", () => {
        const routeGen = (0, route_gen_1.buildRouteGenerator)({
            service: "business",
            version: "v1",
        });
        expect.assertions(1);
        expect(routeGen([])).toBe("/api/v1/business");
    });
});
