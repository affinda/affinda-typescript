export class AffindaCredential {
    constructor(token) {
        this.token = token;
    }
    getToken(scopes, options) {
        return Promise.resolve({
            token: this.token,
            expiresOnTimestamp: 0
        });
    }
}
//# sourceMappingURL=affindaAPICredential.js.map