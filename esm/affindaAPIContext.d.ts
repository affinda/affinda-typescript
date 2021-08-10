import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { AffindaAPIOptionalParams } from "./models";
export declare class AffindaAPIContext extends coreClient.ServiceClient {
    $host: string;
    limit?: number;
    offset?: number;
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
}
//# sourceMappingURL=affindaAPIContext.d.ts.map