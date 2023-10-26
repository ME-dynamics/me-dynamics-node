import { randomBytes } from "crypto";
import { promisify } from "util";
import { ErrorFactory } from "../errorFactory";

const asyncRandomBytes = promisify(randomBytes);

export async function cryptoRandom(value: number): Promise<Buffer> {
  if (!randomBytes || randomBytes === null) {
    throw new ErrorFactory({
      name: "crypto_random_not_found",
      message: "No suitable random number generator available.",
      detail:
        "Ensure that your runtime is linked against OpenSSL ( or an equivalent ) correctly.",
      nativeError: undefined,
    });
  }
  return await asyncRandomBytes(value);
}
