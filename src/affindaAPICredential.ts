import {AccessToken, GetTokenOptions, TokenCredential} from "@azure/identity";


export class AffindaCredential implements TokenCredential {
    token: string

    constructor(token: string) {
        this.token = token
    }

    getToken(scopes: string | string[], options?: GetTokenOptions): Promise<AccessToken | null> {
        return Promise.resolve({
            token: this.token,
            expiresOnTimestamp: 0
        });
    }
}
