import { sha1, sha256, sha512, argon2 } from "../src/hash";
describe("hash", () => {
  const data = "madara";
  const sha512hashed =
    "986e1b08783557015e787780245b5b3896b1f9d7061dac4996d61f42ea9034b7cb2201a88e77aee490cfe967ecded30218cfe18901ffe4eec1b9bac1483f2963";
  const sha256hashed =
    "3ded2fed5527d81118c02d5d30875082bdc558bb8b85493b5c2bcaae089241e1";
  const sha1hashed = "a044ea81e3c56100127a6fcdd70b9dddd25fc2e3";
  it("should return correct sha512 hash", () => {
    expect(sha512(data)).toBe(sha512hashed);
  });
  it("should return correct sha256 hash", () => {
    expect(sha256(data)).toBe(sha256hashed);
  });
  it("should return correct sha1 hash", () => {
    expect(sha1(data)).toBe(sha1hashed);
  });
  it("should return correct argon2 hash", async () => {
    const hashed = await argon2(data);
    expect(hashed).toBe
  })
});
