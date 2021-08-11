"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffindaCredential = void 0;
class AffindaCredential {
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
exports.AffindaCredential = AffindaCredential;
//# sourceMappingURL=affindaAPICredential.js.map