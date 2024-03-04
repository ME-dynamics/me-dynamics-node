export declare function sha512(value: string): string;
export declare function sha256(value: string): string;
export declare function sha1(value: string): string;
export declare function argon2(value: string): Promise<string>;
export declare function argon2Verify(hashedValue: string, plainValue: string): Promise<boolean>;
