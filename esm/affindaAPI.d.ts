import * as coreAuth from "@azure/core-auth";
import { AffindaAPIContext } from "./affindaAPIContext";
import { AffindaAPIOptionalParams, AffindaAPIGetAllResumesOptionalParams, AffindaAPIGetAllResumesResponse, AffindaAPICreateResumeOptionalParams, AffindaAPICreateResumeResponse, AffindaAPIGetResumeOptionalParams, AffindaAPIGetResumeResponse, AffindaAPIDeleteResumeOptionalParams, AffindaAPIDeleteResumeResponse, AffindaAPIGetAllRedactedResumesOptionalParams, AffindaAPIGetAllRedactedResumesResponse, AffindaAPICreateRedactedResumeOptionalParams, AffindaAPICreateRedactedResumeResponse, AffindaAPIGetRedactedResumeOptionalParams, AffindaAPIGetRedactedResumeResponse, AffindaAPIDeleteRedactedResumeOptionalParams, AffindaAPIDeleteRedactedResumeResponse, AffindaAPIGetAllResumeFormatsOptionalParams, AffindaAPIGetAllResumeFormatsResponse, AffindaAPIGetAllReformattedResumesOptionalParams, AffindaAPIGetAllReformattedResumesResponse, AffindaAPICreateReformattedResumeOptionalParams, AffindaAPICreateReformattedResumeResponse, AffindaAPIGetReformattedResumeOptionalParams, AffindaAPIGetReformattedResumeResponse, AffindaAPIDeleteReformattedResumeOptionalParams, AffindaAPIDeleteReformattedResumeResponse } from "./models";
export declare class AffindaAPI extends AffindaAPIContext {
    /**
     * Initializes a new instance of the AffindaAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
    /**
     * Returns all the resume summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllResumes(options?: AffindaAPIGetAllResumesOptionalParams): Promise<AffindaAPIGetAllResumesResponse>;
    /**
     * Uploads a resume for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createResume(options?: AffindaAPICreateResumeOptionalParams): Promise<AffindaAPICreateResumeResponse>;
    /**
     * Returns all the parse results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#operation/createResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getResume(identifier: string, options?: AffindaAPIGetResumeOptionalParams): Promise<AffindaAPIGetResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier: string, options?: AffindaAPIDeleteResumeOptionalParams): Promise<AffindaAPIDeleteResumeResponse>;
    /**
     * Returns all the redacted resume information for that resume
     * @param options The options parameters.
     */
    getAllRedactedResumes(options?: AffindaAPIGetAllRedactedResumesOptionalParams): Promise<AffindaAPIGetAllRedactedResumesResponse>;
    /**
     * Uploads a resume for redacting.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/redacted_resumes/{identifier}](#operation/getRedactedResume) endpoint to check processing status
     * and retrieve results.
     * @param options The options parameters.
     */
    createRedactedResume(options?: AffindaAPICreateRedactedResumeOptionalParams): Promise<AffindaAPICreateRedactedResumeResponse>;
    /**
     * Returns all the redaction results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/redacted_resumes](#operation/createRedactedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedResume(identifier: string, options?: AffindaAPIGetRedactedResumeOptionalParams): Promise<AffindaAPIGetRedactedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier: string, options?: AffindaAPIDeleteRedactedResumeOptionalParams): Promise<AffindaAPIDeleteRedactedResumeResponse>;
    /**
     * Returns all the resume formats
     * @param options The options parameters.
     */
    getAllResumeFormats(options?: AffindaAPIGetAllResumeFormatsOptionalParams): Promise<AffindaAPIGetAllResumeFormatsResponse>;
    /**
     * Returns all the reformatted resume information for that resume
     * @param options The options parameters.
     */
    getAllReformattedResumes(options?: AffindaAPIGetAllReformattedResumesOptionalParams): Promise<AffindaAPIGetAllReformattedResumesResponse>;
    /**
     * Uploads a resume for reformatting.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/reformatted_resumes/{identifier}](#operation/getReformattedResume) endpoint to check processing
     * status and retrieve results.
     * @param resumeFormat Identifier of the format used
     * @param options The options parameters.
     */
    createReformattedResume(resumeFormat: string, options?: AffindaAPICreateReformattedResumeOptionalParams): Promise<AffindaAPICreateReformattedResumeResponse>;
    /**
     * Returns all the reformatting results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/reformatted_resumes](#operation/createReformattedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getReformattedResume(identifier: string, options?: AffindaAPIGetReformattedResumeOptionalParams): Promise<AffindaAPIGetReformattedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteReformattedResume(identifier: string, options?: AffindaAPIDeleteReformattedResumeOptionalParams): Promise<AffindaAPIDeleteReformattedResumeResponse>;
}
//# sourceMappingURL=affindaAPI.d.ts.map