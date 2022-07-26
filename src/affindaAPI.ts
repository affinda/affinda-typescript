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
  ResumeData,
  AffindaAPIUpdateResumeDataOptionalParams,
  AffindaAPIUpdateResumeDataResponse,
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
  AffindaAPIGetResumeSearchDetailOptionalParams,
  AffindaAPIGetResumeSearchDetailResponse,
  AffindaAPIGetResumeSearchMatchOptionalParams,
  AffindaAPIGetResumeSearchMatchResponse,
  AffindaAPIGetAllJobDescriptionsOptionalParams,
  AffindaAPIGetAllJobDescriptionsResponse,
  AffindaAPICreateJobDescriptionOptionalParams,
  AffindaAPICreateJobDescriptionResponse,
  AffindaAPIGetJobDescriptionOptionalParams,
  AffindaAPIGetJobDescriptionResponse,
  AffindaAPIDeleteJobDescriptionOptionalParams,
  AffindaAPIDeleteJobDescriptionResponse,
  AffindaAPIGetAllIndexesOptionalParams,
  AffindaAPIGetAllIndexesResponse,
  AffindaAPICreateIndexOptionalParams,
  AffindaAPICreateIndexResponse,
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
  AffindaAPIListOccupationGroupsResponse,
  AffindaAPIGetAllUsersOptionalParams,
  AffindaAPIGetAllUsersResponse,
  AffindaAPICreateUserOptionalParams,
  AffindaAPICreateUserResponse
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
   * Provide `file` for uploading a resume file, or `url` for getting resume file from an url, or `data`
   * if you want to upload resume data directly without parsing any resume file.
   * For uploading resume data, the `data` argument provided must be a JSON-encoded string.
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
   * Update data of a parsed resume.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/resumes](#operation/createResume) endpoint.
   * @param identifier Resume identifier
   * @param body Resume data to update
   * @param options The options parameters.
   */
  updateResumeData(
    identifier: string | null,
    body: ResumeData | null,
    options?: AffindaAPIUpdateResumeDataOptionalParams
  ): Promise<AffindaAPIUpdateResumeDataResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateResumeDataOperationSpec
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
   * Searches through parsed resumes. You can search with custom criterias, a job description, or a
   * resume.
   * When searching with a job description, a parsed job description is used to find candidates that suit
   * it.
   * When searching with a resume, a parsed resume is used to find other candidates that have similar
   * attributes.
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
   * This contains more detailed information about the matching score of the search criteria, or which
   * search criteria is missing in this resume.
   * The `identifier` is the unique ID returned via the [/resume_search](#operation/createResumeSearch)
   * endpoint.
   * @param identifier Resume identifier
   * @param body Search parameters
   * @param options The options parameters.
   */
  getResumeSearchDetail(
    identifier: string | null,
    body: ResumeSearchParameters | null,
    options?: AffindaAPIGetResumeSearchDetailOptionalParams
  ): Promise<AffindaAPIGetResumeSearchDetailResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      getResumeSearchDetailOperationSpec
    );
  }

  /**
   * Get the matching score between a resume and a job description. The score ranges between 0 and 1,
   * with 0 being not a match at all, and 1 being perfect match.
   * @param resume Identify the resume to match.
   * @param jobDescription Identify the job description to match.
   * @param options The options parameters.
   */
  getResumeSearchMatch(
    resume: string,
    jobDescription: string,
    options?: AffindaAPIGetResumeSearchMatchOptionalParams
  ): Promise<AffindaAPIGetResumeSearchMatchResponse> {
    return this.sendOperationRequest(
      { resume, jobDescription, options },
      getResumeSearchMatchOperationSpec
    );
  }

  /**
   * Returns all the job descriptions for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllJobDescriptions(
    options?: AffindaAPIGetAllJobDescriptionsOptionalParams
  ): Promise<AffindaAPIGetAllJobDescriptionsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllJobDescriptionsOperationSpec
    );
  }

  /**
   * Uploads a job description for parsing.
   * When successful, returns an `identifier` in the response for subsequent use with the
   * [/job_descriptions/{identifier}](#operation/getResume) endpoint to check processing status and
   * retrieve results.
   * @param options The options parameters.
   */
  createJobDescription(
    options?: AffindaAPICreateJobDescriptionOptionalParams
  ): Promise<AffindaAPICreateJobDescriptionResponse> {
    return this.sendOperationRequest(
      { options },
      createJobDescriptionOperationSpec
    );
  }

  /**
   * Returns all the results for that job description if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/job_descriptions](#operation/createJobDescription) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getJobDescription(
    identifier: string | null,
    options?: AffindaAPIGetJobDescriptionOptionalParams
  ): Promise<AffindaAPIGetJobDescriptionResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getJobDescriptionOperationSpec
    );
  }

  /**
   * Deletes the specified job description from the database
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteJobDescription(
    identifier: string | null,
    options?: AffindaAPIDeleteJobDescriptionOptionalParams
  ): Promise<AffindaAPIDeleteJobDescriptionResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteJobDescriptionOperationSpec
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

  /**
   * Returns all the users
   * @param options The options parameters.
   */
  getAllUsers(
    options?: AffindaAPIGetAllUsersOptionalParams
  ): Promise<AffindaAPIGetAllUsersResponse> {
    return this.sendOperationRequest({ options }, getAllUsersOperationSpec);
  }

  /**
   * Create an user as part of your account
   * @param username
   * @param options The options parameters.
   */
  createUser(
    username: string,
    options?: AffindaAPICreateUserOptionalParams
  ): Promise<AffindaAPICreateUserResponse> {
    return this.sendOperationRequest(
      { username, options },
      createUserOperationSpec
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.url,
    Parameters.data,
    Parameters.identifier,
    Parameters.fileName,
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const updateResumeDataOperationSpec: coreClient.OperationSpec = {
  path: "/resumes/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeData
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.url,
    Parameters.identifier,
    Parameters.fileName,
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.url,
    Parameters.identifier,
    Parameters.fileName,
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const createResumeSearchOperationSpec: coreClient.OperationSpec = {
  path: "/resume_search",
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getResumeSearchDetailOperationSpec: coreClient.OperationSpec = {
  path: "/resume_search/details/{identifier}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchDetail
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.identifier1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getResumeSearchMatchOperationSpec: coreClient.OperationSpec = {
  path: "/resume_search/match",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchMatch
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.resume,
    Parameters.jobDescription,
    Parameters.index,
    Parameters.jobTitlesWeight,
    Parameters.yearsExperienceWeight,
    Parameters.locationsWeight,
    Parameters.languagesWeight,
    Parameters.skillsWeight,
    Parameters.educationWeight,
    Parameters.searchExpressionWeight,
    Parameters.socCodesWeight,
    Parameters.managementLevelWeight
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllJobDescriptionsOperationSpec: coreClient.OperationSpec = {
  path: "/job_descriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetAllJobDescriptionsResults
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createJobDescriptionOperationSpec: coreClient.OperationSpec = {
  path: "/job_descriptions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescription
    },
    201: {
      bodyMapper: Mappers.JobDescription
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.url,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.wait,
    Parameters.language,
    Parameters.expiryTime
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const getJobDescriptionOperationSpec: coreClient.OperationSpec = {
  path: "/job_descriptions/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescription
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
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
const deleteJobDescriptionOperationSpec: coreClient.OperationSpec = {
  path: "/job_descriptions/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [Parameters.name],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
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
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.url,
    Parameters.identifier,
    Parameters.fileName,
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
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "OccupationGroup" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
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
const getAllUsersOperationSpec: coreClient.OperationSpec = {
  path: "/users",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createUserOperationSpec: coreClient.OperationSpec = {
  path: "/users",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsTop5ZkUsersPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError
    },
    401: {
      bodyMapper: Mappers.RequestError
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.name,
    Parameters.id,
    Parameters.username,
    Parameters.email,
    Parameters.apiKey
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
