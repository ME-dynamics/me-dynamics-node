import { createHash } from "node:crypto";
import { hash,  } from "argon2";
export function sha512(value: string): string {
  return createHash("sha512").update(value).digest("hex");
}

export function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export function sha1(value: string): string {
  return createHash("sha1").update(value).digest("hex");
}

export async function argon2(value: string) {
  return await hash(value);
}