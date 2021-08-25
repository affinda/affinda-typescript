import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { AffindaAPIContext } from "./affindaAPIContext";
export class AffindaAPI extends AffindaAPIContext {
    /**
     * Initializes a new instance of the AffindaAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        super(credentials, options);
    }
    /**
     * Returns all the resume summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllResumes(options) {
        return this.sendOperationRequest({ options }, getAllResumesOperationSpec);
    }
    /**
     * Uploads a resume for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createResume(options) {
        return this.sendOperationRequest({ options }, createResumeOperationSpec);
    }
    /**
     * Returns all the parse results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#operation/createResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteResumeOperationSpec);
    }
    /**
     * Returns all the redacted resume information for that resume
     * @param options The options parameters.
     */
    getAllRedactedResumes(options) {
        return this.sendOperationRequest({ options }, getAllRedactedResumesOperationSpec);
    }
    /**
     * Uploads a resume for redacting.
     * @param options The options parameters.
     */
    createRedactedResume(options) {
        return this.sendOperationRequest({ options }, createRedactedResumeOperationSpec);
    }
    /**
     * Returns all the redaction results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/redacted_resumes](#operation/createRedactedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getRedactedResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteRedactedResumeOperationSpec);
    }
    /**
     * Returns all the resume formats
     * @param options The options parameters.
     */
    getAllResumeFormats(options) {
        return this.sendOperationRequest({ options }, getAllResumeFormatsOperationSpec);
    }
    /**
     * Returns all the reformatted resume information for that resume
     * @param options The options parameters.
     */
    getAllReformattedResumes(options) {
        return this.sendOperationRequest({ options }, getAllReformattedResumesOperationSpec);
    }
    /**
     * Uploads a resume for reformatting.
     * @param resumeFormat Identifier of the format used
     * @param options The options parameters.
     */
    createReformattedResume(resumeFormat, options) {
        return this.sendOperationRequest({ resumeFormat, options }, createReformattedResumeOperationSpec);
    }
    /**
     * Returns all the reformatting results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/reformatted_resumes](#operation/createReformattedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getReformattedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getReformattedResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteReformattedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteReformattedResumeOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getAllResumesOperationSpec = {
    path: "/resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.GetAllDocumentsResults
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.limit, Parameters.offset],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const createResumeOperationSpec = {
    path: "/resumes",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Resume
        },
        201: {
            bodyMapper: Mappers.Resume
        },
        400: {
            bodyMapper: Mappers.Components8Sxs33Responses400ErrorContentApplicationJsonSchema
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    formDataParameters: [
        Parameters.file,
        Parameters.identifier,
        Parameters.fileName,
        Parameters.url,
        Parameters.wait,
        Parameters.resumeLanguage,
        Parameters.expiryTime
    ],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept1],
    serializer
};
const getResumeOperationSpec = {
    path: "/resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Resume
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.identifier1],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteResumeOperationSpec = {
    path: "/resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.identifier1],
    headerParameters: [Parameters.accept],
    serializer
};
const getAllRedactedResumesOperationSpec = {
    path: "/redacted_resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.GetAllDocumentsResults
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.limit, Parameters.offset],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const createRedactedResumeOperationSpec = {
    path: "/redacted_resumes",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.RedactedResume
        },
        201: {
            bodyMapper: Mappers.RedactedResume
        },
        400: {
            bodyMapper: Mappers.Components8Sxs33Responses400ErrorContentApplicationJsonSchema
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    formDataParameters: [
        Parameters.file,
        Parameters.identifier,
        Parameters.fileName,
        Parameters.url,
        Parameters.wait,
        Parameters.resumeLanguage,
        Parameters.expiryTime,
        Parameters.redactHeadshot,
        Parameters.redactPersonalDetails,
        Parameters.redactWorkDetails,
        Parameters.redactEducationDetails,
        Parameters.redactReferees,
        Parameters.redactLocations,
        Parameters.redactDates
    ],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept1],
    serializer
};
const getRedactedResumeOperationSpec = {
    path: "/redacted_resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.RedactedResume
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.identifier1],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteRedactedResumeOperationSpec = {
    path: "/redacted_resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.identifier1],
    headerParameters: [Parameters.accept],
    serializer
};
const getAllResumeFormatsOperationSpec = {
    path: "/resume_formats",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.limit, Parameters.offset],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const getAllReformattedResumesOperationSpec = {
    path: "/reformatted_resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.GetAllDocumentsResults
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.limit, Parameters.offset],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const createReformattedResumeOperationSpec = {
    path: "/reformatted_resumes",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.ReformattedResume
        },
        201: {
            bodyMapper: Mappers.ReformattedResume
        },
        400: {
            bodyMapper: Mappers.Components8Sxs33Responses400ErrorContentApplicationJsonSchema
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    formDataParameters: [
        Parameters.file,
        Parameters.identifier,
        Parameters.fileName,
        Parameters.url,
        Parameters.wait,
        Parameters.resumeLanguage,
        Parameters.resumeFormat
    ],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept1],
    serializer
};
const getReformattedResumeOperationSpec = {
    path: "/reformatted_resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ReformattedResume
        },
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.identifier1],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteReformattedResumeOperationSpec = {
    path: "/reformatted_resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        401: {
            bodyMapper: Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.identifier1],
    headerParameters: [Parameters.accept],
    serializer
};
//# sourceMappingURL=affindaAPI.js.map