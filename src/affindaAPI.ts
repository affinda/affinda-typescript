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
  AffindaAPIGetAllInvoicesOptionalParams,
  AffindaAPIGetAllInvoicesResponse,
  AffindaAPICreateInvoiceOptionalParams,
  AffindaAPICreateInvoiceResponse,
  AffindaAPIGetInvoiceOptionalParams,
  AffindaAPIGetInvoiceResponse,
  AffindaAPIDeleteInvoiceOptionalParams,
  AffindaAPIDeleteInvoiceResponse
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
