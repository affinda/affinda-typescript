import * as coreClient from "@azure/core-client";
export class AffindaAPIContext extends coreClient.ServiceClient {
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8",
            credential: credentials
        };
        const packageDetails = `azsdk-js-affinda/0.1.0`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        if (!options.credentialScopes) {
            options.credentialScopes = ["https://management.azure.com/.default"];
        }
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix
            }, baseUri: options.endpoint || "https://api.affinda.com/v1" });
        super(optionsWithDefaults);
        // Assigning values to Constant parameters
        this.$host = options.$host || "https://api.affinda.com/v1";
    }
}
//# sourceMappingURL=affindaAPIContext.js.map