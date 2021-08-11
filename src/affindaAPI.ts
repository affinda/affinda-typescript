import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { AffindaAPIContext } from "./affindaAPIContext";
import {
  AffindaAPIOptionalParams,
  AffindaAPIGetAllResumesOptionalParams,
  AffindaAPIGetAllResumesResponse,
  AffindaAPICreateResumeOptionalParams,
  AffindaAPICreateResumeResponse,
  AffindaAPIGetResumeOptionalParams,
  AffindaAPIGetResumeResponse,
  AffindaAPIDeleteResumeOptionalParams,
  AffindaAPIDeleteResumeResponse,
  AffindaAPIGetAllRedactedResumesOptionalParams,
  AffindaAPIGetAllRedactedResumesResponse,
  AffindaAPICreateRedactedResumeOptionalParams,
  AffindaAPICreateRedactedResumeResponse,
  AffindaAPIGetRedactedResumeOptionalParams,
  AffindaAPIGetRedactedResumeResponse,
  AffindaAPIDeleteRedactedResumeOptionalParams,
  AffindaAPIDeleteRedactedResumeResponse,
  AffindaAPIGetAllResumeFormatsOptionalParams,
  AffindaAPIGetAllResumeFormatsResponse,
  AffindaAPIGetAllReformattedResumesOptionalParams,
  AffindaAPIGetAllReformattedResumesResponse,
  AffindaAPICreateReformattedResumeOptionalParams,
  AffindaAPICreateReformattedResumeResponse,
  AffindaAPIGetReformattedResumeOptionalParams,
  AffindaAPIGetReformattedResumeResponse,
  AffindaAPIDeleteReformattedResumeOptionalParams,
  AffindaAPIDeleteReformattedResumeResponse
} from "./models";

export class AffindaAPI extends AffindaAPIContext {
  /**
   * Initializes a new instance of the AffindaAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: AffindaAPIOptionalParams
  ) {
    super(credentials, options);
  }

  /**
   * Returns all the resume summaries for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllResumes(
    options?: AffindaAPIGetAllResumesOptionalParams
  ): Promise<AffindaAPIGetAllResumesResponse> {
    return this.sendOperationRequest({ options }, getAllResumesOperationSpec);
  }

  /**
   * Uploads a resume for parsing.
   * When successful, returns an `identifier` in the response for subsequent use with the
   * [/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
   * results.
   * @param options The options parameters.
   */
  createResume(
    options?: AffindaAPICreateResumeOptionalParams
  ): Promise<AffindaAPICreateResumeResponse> {
    return this.sendOperationRequest({ options }, createResumeOperationSpec);
  }

  /**
   * Returns all the parse results for that resume if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/resumes](#operation/createResume) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getResume(
    identifier: string,
    options?: AffindaAPIGetResumeOptionalParams
  ): Promise<AffindaAPIGetResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getResumeOperationSpec
    );
  }

  /**
   * Deletes the specified resume from the database
   * @param identifier Resume identifier
   * @param options The options parameters.
   */
  deleteResume(
    identifier: string,
    options?: AffindaAPIDeleteResumeOptionalParams
  ): Promise<AffindaAPIDeleteResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteResumeOperationSpec
    );
  }

  /**
   * Returns all the redacted resume information for that resume
   * @param options The options parameters.
   */
  getAllRedactedResumes(
    options?: AffindaAPIGetAllRedactedResumesOptionalParams
  ): Promise<AffindaAPIGetAllRedactedResumesResponse> {
    return this.sendOperationRequest(
      { options },
      getAllRedactedResumesOperationSpec
    );
  }

  /**
   * Uploads a resume for redacting.
   * When successful, returns an `identifier` in the response for subsequent use with the
   * [/redacted_resumes/{identifier}](#operation/getRedactedResume) endpoint to check processing status
   * and retrieve results.
   * @param options The options parameters.
   */
  createRedactedResume(
    options?: AffindaAPICreateRedactedResumeOptionalParams
  ): Promise<AffindaAPICreateRedactedResumeResponse> {
    return this.sendOperationRequest(
      { options },
      createRedactedResumeOperationSpec
    );
  }

  /**
   * Returns all the redaction results for that resume if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/redacted_resumes](#operation/createRedactedResume) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getRedactedResume(
    identifier: string,
    options?: AffindaAPIGetRedactedResumeOptionalParams
  ): Promise<AffindaAPIGetRedactedResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getRedactedResumeOperationSpec
    );
  }

  /**
   * Deletes the specified resume from the database
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteRedactedResume(
    identifier: string,
    options?: AffindaAPIDeleteRedactedResumeOptionalParams
  ): Promise<AffindaAPIDeleteRedactedResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteRedactedResumeOperationSpec
    );
  }

  /**
   * Returns all the resume formats
   * @param options The options parameters.
   */
  getAllResumeFormats(
    options?: AffindaAPIGetAllResumeFormatsOptionalParams
  ): Promise<AffindaAPIGetAllResumeFormatsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllResumeFormatsOperationSpec
    );
  }

  /**
   * Returns all the reformatted resume information for that resume
   * @param options The options parameters.
   */
  getAllReformattedResumes(
    options?: AffindaAPIGetAllReformattedResumesOptionalParams
  ): Promise<AffindaAPIGetAllReformattedResumesResponse> {
    return this.sendOperationRequest(
      { options },
      getAllReformattedResumesOperationSpec
    );
  }

  /**
   * Uploads a resume for reformatting.
   * When successful, returns an `identifier` in the response for subsequent use with the
   * [/reformatted_resumes/{identifier}](#operation/getReformattedResume) endpoint to check processing
   * status and retrieve results.
   * @param resumeFormat Identifier of the format used
   * @param options The options parameters.
   */
  createReformattedResume(
    resumeFormat: string,
    options?: AffindaAPICreateReformattedResumeOptionalParams
  ): Promise<AffindaAPICreateReformattedResumeResponse> {
    return this.sendOperationRequest(
      { resumeFormat, options },
      createReformattedResumeOperationSpec
    );
  }

  /**
   * Returns all the reformatting results for that resume if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/reformatted_resumes](#operation/createReformattedResume) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getReformattedResume(
    identifier: string,
    options?: AffindaAPIGetReformattedResumeOptionalParams
  ): Promise<AffindaAPIGetReformattedResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getReformattedResumeOperationSpec
    );
  }

  /**
   * Deletes the specified resume from the database
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteReformattedResume(
    identifier: string,
    options?: AffindaAPIDeleteReformattedResumeOptionalParams
  ): Promise<AffindaAPIDeleteReformattedResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteReformattedResumeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAllResumesOperationSpec: coreClient.OperationSpec = {
  path: "/resumes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.limit, Parameters.offset],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createResumeOperationSpec: coreClient.OperationSpec = {
  path: "/resumes",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper:
        Mappers.Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
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
const getResumeOperationSpec: coreClient.OperationSpec = {
  path: "/resumes/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Resume
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteResumeOperationSpec: coreClient.OperationSpec = {
  path: "/resumes/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllRedactedResumesOperationSpec: coreClient.OperationSpec = {
  path: "/redacted_resumes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.limit, Parameters.offset],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createRedactedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/redacted_resumes",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper:
        Mappers.Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.url,
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
const getRedactedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/redacted_resumes/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedactedDocument
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteRedactedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/redacted_resumes/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllResumeFormatsOperationSpec: coreClient.OperationSpec = {
  path: "/resume_formats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.limit, Parameters.offset],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllReformattedResumesOperationSpec: coreClient.OperationSpec = {
  path: "/reformatted_resumes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.limit, Parameters.offset],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createReformattedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/reformatted_resumes",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper:
        Mappers.Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.url,
    Parameters.resumeLanguage,
    Parameters.resumeFormat
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const getReformattedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/reformatted_resumes/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReformattedDocument
    },
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteReformattedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/reformatted_resumes/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper:
        Mappers.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
