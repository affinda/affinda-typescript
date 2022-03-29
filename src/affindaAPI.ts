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
  AffindaAPIDeleteReformattedResumeResponse,
  ResumeSearchParameters,
  AffindaAPICreateResumeSearchOptionalParams,
  AffindaAPICreateResumeSearchResponse,
  AffindaAPIGetAllIndexesOptionalParams,
  AffindaAPIGetAllIndexesResponse,
  AffindaAPICreateIndexOptionalParams,
  AffindaAPICreateIndexResponse,
  Paths1Ud8LkzIndexNamePatchRequestbodyContentApplicationJsonSchema,
  AffindaAPIUpdateIndexOptionalParams,
  AffindaAPIUpdateIndexResponse,
  AffindaAPIDeleteIndexOptionalParams,
  AffindaAPIDeleteIndexResponse,
  AffindaAPIGetAllIndexDocumentsOptionalParams,
  AffindaAPIGetAllIndexDocumentsResponse,
  PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema,
  AffindaAPICreateIndexDocumentOptionalParams,
  AffindaAPICreateIndexDocumentResponse,
  AffindaAPIDeleteIndexDocumentOptionalParams,
  AffindaAPIDeleteIndexDocumentResponse,
  AffindaAPIGetAllInvoicesOptionalParams,
  AffindaAPIGetAllInvoicesResponse,
  AffindaAPICreateInvoiceOptionalParams,
  AffindaAPICreateInvoiceResponse,
  AffindaAPIGetInvoiceOptionalParams,
  AffindaAPIGetInvoiceResponse,
  AffindaAPIDeleteInvoiceOptionalParams,
  AffindaAPIDeleteInvoiceResponse,
  AffindaAPIListOccupationGroupsOptionalParams,
  AffindaAPIListOccupationGroupsResponse
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
    identifier: string | null,
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
    identifier: string | null,
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
    identifier: string | null,
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
    identifier: string | null,
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
   * Upload a resume for reformatting.
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
    identifier: string | null,
    options?: AffindaAPIGetReformattedResumeOptionalParams
  ): Promise<AffindaAPIGetReformattedResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getReformattedResumeOperationSpec
    );
  }

  /**
   * Delete the specified resume from the database
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteReformattedResume(
    identifier: string | null,
    options?: AffindaAPIDeleteReformattedResumeOptionalParams
  ): Promise<AffindaAPIDeleteReformattedResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteReformattedResumeOperationSpec
    );
  }

  /**
   * Searches through parsed resumes.
   * TODO TODO TODO
   * When successful, returns a list of {id, pdf} in the response for subsequent use with the
   * [/resumes/{identifier}](#operation/getResume) endpoint to retrieve the resumes.
   * @param body Search parameters
   * @param options The options parameters.
   */
  createResumeSearch(
    body: ResumeSearchParameters | null,
    options?: AffindaAPICreateResumeSearchOptionalParams
  ): Promise<AffindaAPICreateResumeSearchResponse> {
    return this.sendOperationRequest(
      { body, options },
      createResumeSearchOperationSpec
    );
  }

  /**
   * Returns all the indexes
   * @param options The options parameters.
   */
  getAllIndexes(
    options?: AffindaAPIGetAllIndexesOptionalParams
  ): Promise<AffindaAPIGetAllIndexesResponse> {
    return this.sendOperationRequest({ options }, getAllIndexesOperationSpec);
  }

  /**
   * Create an index for the search tool
   * @param options The options parameters.
   */
  createIndex(
    options?: AffindaAPICreateIndexOptionalParams
  ): Promise<AffindaAPICreateIndexResponse> {
    return this.sendOperationRequest({ options }, createIndexOperationSpec);
  }

  /**
   * Updates the specified index name to a new one
   * @param name Index name
   * @param body New Index name
   * @param options The options parameters.
   */
  updateIndex(
    name: string,
    body: Paths1Ud8LkzIndexNamePatchRequestbodyContentApplicationJsonSchema,
    options?: AffindaAPIUpdateIndexOptionalParams
  ): Promise<AffindaAPIUpdateIndexResponse> {
    return this.sendOperationRequest(
      { name, body, options },
      updateIndexOperationSpec
    );
  }

  /**
   * Deletes the specified index from the database
   * @param name Index name
   * @param options The options parameters.
   */
  deleteIndex(
    name: string,
    options?: AffindaAPIDeleteIndexOptionalParams
  ): Promise<AffindaAPIDeleteIndexResponse> {
    return this.sendOperationRequest(
      { name, options },
      deleteIndexOperationSpec
    );
  }

  /**
   * Returns all the indexed documents for that index
   * @param name Index name
   * @param options The options parameters.
   */
  getAllIndexDocuments(
    name: string,
    options?: AffindaAPIGetAllIndexDocumentsOptionalParams
  ): Promise<AffindaAPIGetAllIndexDocumentsResponse> {
    return this.sendOperationRequest(
      { name, options },
      getAllIndexDocumentsOperationSpec
    );
  }

  /**
   * Create an indexed document for the search tool
   * @param name Index name
   * @param body Document to index
   * @param options The options parameters.
   */
  createIndexDocument(
    name: string,
    body: PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema,
    options?: AffindaAPICreateIndexDocumentOptionalParams
  ): Promise<AffindaAPICreateIndexDocumentResponse> {
    return this.sendOperationRequest(
      { name, body, options },
      createIndexDocumentOperationSpec
    );
  }

  /**
   * Delete the specified indexed document from the database
   * @param name Index name
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteIndexDocument(
    name: string,
    identifier: string | null,
    options?: AffindaAPIDeleteIndexDocumentOptionalParams
  ): Promise<AffindaAPIDeleteIndexDocumentResponse> {
    return this.sendOperationRequest(
      { name, identifier, options },
      deleteIndexDocumentOperationSpec
    );
  }

  /**
   * Returns all the invoice summaries for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllInvoices(
    options?: AffindaAPIGetAllInvoicesOptionalParams
  ): Promise<AffindaAPIGetAllInvoicesResponse> {
    return this.sendOperationRequest({ options }, getAllInvoicesOperationSpec);
  }

  /**
   * Uploads an invoice for parsing.
   * When successful, returns an `identifier` in the response for subsequent use with the
   * [/invoices/{identifier}](#operation/getInvoice) endpoint to check processing status and retrieve
   * results.
   * @param options The options parameters.
   */
  createInvoice(
    options?: AffindaAPICreateInvoiceOptionalParams
  ): Promise<AffindaAPICreateInvoiceResponse> {
    return this.sendOperationRequest({ options }, createInvoiceOperationSpec);
  }

  /**
   * Returns all the parse results for that invoice if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the invoice via the
   * [/invoices](#operation/createInvoice) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getInvoice(
    identifier: string | null,
    options?: AffindaAPIGetInvoiceOptionalParams
  ): Promise<AffindaAPIGetInvoiceResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getInvoiceOperationSpec
    );
  }

  /**
   * Delete the specified invoice from the database
   * @param identifier Invoice identifier
   * @param options The options parameters.
   */
  deleteInvoice(
    identifier: string | null,
    options?: AffindaAPIDeleteInvoiceOptionalParams
  ): Promise<AffindaAPIDeleteInvoiceResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteInvoiceOperationSpec
    );
  }

  /**
   * TODO TODO TODO
   * @param options The options parameters.
   */
  listOccupationGroups(
    options?: AffindaAPIListOccupationGroupsOptionalParams
  ): Promise<AffindaAPIListOccupationGroupsResponse> {
    return this.sendOperationRequest(
      { options },
      listOccupationGroupsOperationSpec
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
      bodyMapper: Mappers.GetAllDocumentsResults
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
    200: {
      bodyMapper: Mappers.Resume
    },
    201: {
      bodyMapper: Mappers.Resume
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.url,
    Parameters.wait,
    Parameters.language,
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
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
      bodyMapper: Mappers.GetAllDocumentsResults
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
    200: {
      bodyMapper: Mappers.RedactedResume
    },
    201: {
      bodyMapper: Mappers.RedactedResume
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.url,
    Parameters.wait,
    Parameters.language,
    Parameters.expiryTime,
    Parameters.redactHeadshot,
    Parameters.redactPersonalDetails,
    Parameters.redactWorkDetails,
    Parameters.redactEducationDetails,
    Parameters.redactReferees,
    Parameters.redactLocations,
    Parameters.redactDates,
    Parameters.redactGender
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
      bodyMapper: Mappers.RedactedResume
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
      bodyMapper: Mappers.GetAllDocumentsResults
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
    200: {
      bodyMapper: Mappers.ReformattedResume
    },
    201: {
      bodyMapper: Mappers.ReformattedResume
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.url,
    Parameters.wait,
    Parameters.language,
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
      bodyMapper: Mappers.ReformattedResume
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
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
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const createResumeSearchOperationSpec: coreClient.OperationSpec = {
  path: "/search",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ResumeSearch
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getAllIndexesOperationSpec: coreClient.OperationSpec = {
  path: "/index",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.limit, Parameters.offset],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createIndexOperationSpec: coreClient.OperationSpec = {
  path: "/index",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [Parameters.name],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const updateIndexOperationSpec: coreClient.OperationSpec = {
  path: "/index/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsEzsbycIndexNamePatchResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.name1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteIndexOperationSpec: coreClient.OperationSpec = {
  path: "/index/{name}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.name1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllIndexDocumentsOperationSpec: coreClient.OperationSpec = {
  path: "/index/{name}/documents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.name1],
  headerParameters: [Parameters.accept],
  serializer
};
const createIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/index/{name}/documents",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host, Parameters.name1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/index/{name}/documents/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1, Parameters.name1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllInvoicesOperationSpec: coreClient.OperationSpec = {
  path: "/invoices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetAllInvoicesResults
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.limit, Parameters.offset],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createInvoiceOperationSpec: coreClient.OperationSpec = {
  path: "/invoices",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
    },
    201: {
      bodyMapper: Mappers.Invoice
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.url,
    Parameters.wait,
    Parameters.language,
    Parameters.expiryTime
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const getInvoiceOperationSpec: coreClient.OperationSpec = {
  path: "/invoices/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteInvoiceOperationSpec: coreClient.OperationSpec = {
  path: "/invoices/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const listOccupationGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/occupation_groups",
  httpMethod: "GET",
  responses: {
    201: {
      bodyMapper: Mappers.OccupationGroup
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    404: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
