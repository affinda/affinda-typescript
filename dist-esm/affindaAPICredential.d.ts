import { AccessToken, GetTokenOptions, TokenCredential } from "@azure/identity";
export declare class AffindaCredential implements TokenCredential {
    token: string;
    constructor(token: string);
    getToken(scopes: string | string[], options?: GetTokenOptions): Promise<AccessToken | null>;
}
//# sourceMappingURL=affindaAPICredential.d.ts.map