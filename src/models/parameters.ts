import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  DocumentUpdate as DocumentUpdateMapper,
  WorkspaceCreate as WorkspaceCreateMapper,
  WorkspaceUpdate as WorkspaceUpdateMapper,
  WorkspaceMembershipCreate as WorkspaceMembershipCreateMapper,
  DocumentTypeCreate as DocumentTypeCreateMapper,
  DocumentTypeUpdate as DocumentTypeUpdateMapper,
  MappingDataSourceCreate as MappingDataSourceCreateMapper,
  ValidationResultCreate as ValidationResultCreateMapper,
  ValidationResultUpdate as ValidationResultUpdateMapper,
  BatchDeleteValidationResultsRequest as BatchDeleteValidationResultsRequestMapper,
  ValidationToolConfig as ValidationToolConfigMapper,
  TagCreate as TagCreateMapper,
  TagUpdate as TagUpdateMapper,
  BatchAddTagRequest as BatchAddTagRequestMapper,
  BatchRemoveTagRequest as BatchRemoveTagRequestMapper,
  AnnotationCreate as AnnotationCreateMapper,
  AnnotationUpdate as AnnotationUpdateMapper,
  ResthookSubscriptionCreate as ResthookSubscriptionCreateMapper,
  ResthookSubscriptionUpdate as ResthookSubscriptionUpdateMapper,
  DocumentCreateFromData as DocumentCreateFromDataMapper,
  PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema as PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchemaMapper,
  ResumeSearchParameters as ResumeSearchParametersMapper,
  ResumeSearchConfig as ResumeSearchConfigMapper,
  Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema as Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper,
  JobDescriptionSearchParameters as JobDescriptionSearchParametersMapper,
  JobDescriptionSearchConfig as JobDescriptionSearchConfigMapper,
  PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema as PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper,
  IndexCreate as IndexCreateMapper,
  IndexUpdate as IndexUpdateMapper,
  PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema as PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper,
  CollectionCreate as CollectionCreateMapper,
  CollectionUpdate as CollectionUpdateMapper,
  DataFieldCreate as DataFieldCreateMapper,
  CollectionField as CollectionFieldMapper,
  DataPointCreate as DataPointCreateMapper,
  DataPointUpdate as DataPointUpdateMapper,
  DataPointChoiceCreate as DataPointChoiceCreateMapper,
  DataPointChoiceUpdate as DataPointChoiceUpdateMapper,
  DataPointChoiceReplaceRequest as DataPointChoiceReplaceRequestMapper,
  ApiUserCreate as ApiUserCreateMapper,
  ApiUserUpdate as ApiUserUpdateMapper,
  DocumentEditRequest as DocumentEditRequestMapper,
  ExtractorCreate as ExtractorCreateMapper,
  ExtractorUpdate as ExtractorUpdateMapper,
  OrganizationMembershipUpdate as OrganizationMembershipUpdateMapper,
  InvitationCreate as InvitationCreateMapper,
  InvitationUpdate as InvitationUpdateMapper,
  InvitationResponse as InvitationResponseMapper,
  MappingCreate as MappingCreateMapper,
  MappingUpdate as MappingUpdateMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const region: OperationURLParameter = {
  parameterPath: "region",
  mapper: {
    serializedName: "region",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const offset: OperationQueryParameter = {
  parameterPath: ["options", "offset"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0,
    },
    serializedName: "offset",
    type: {
      name: "Number",
    },
  },
};

export const limit: OperationQueryParameter = {
  parameterPath: ["options", "limit"],
  mapper: {
    constraints: {
      InclusiveMaximum: 100,
      InclusiveMinimum: 1,
    },
    serializedName: "limit",
    type: {
      name: "Number",
    },
  },
};

export const workspace: OperationQueryParameter = {
  parameterPath: ["options", "workspace"],
  mapper: {
    serializedName: "workspace",
    type: {
      name: "String",
    },
  },
};

export const collection: OperationQueryParameter = {
  parameterPath: ["options", "collection"],
  mapper: {
    serializedName: "collection",
    type: {
      name: "String",
    },
  },
};

export const state: OperationQueryParameter = {
  parameterPath: ["options", "state"],
  mapper: {
    serializedName: "state",
    type: {
      name: "String",
    },
  },
};

export const tags: OperationQueryParameter = {
  parameterPath: ["options", "tags"],
  mapper: {
    serializedName: "tags",
    type: {
      name: "Sequence",
      element: {
        constraints: {
          InclusiveMinimum: 1,
        },
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const createdDt: OperationQueryParameter = {
  parameterPath: ["options", "createdDt"],
  mapper: {
    serializedName: "created_dt",
    type: {
      name: "String",
    },
  },
};

export const search: OperationQueryParameter = {
  parameterPath: ["options", "search"],
  mapper: {
    serializedName: "search",
    type: {
      name: "String",
    },
  },
};

export const ordering: OperationQueryParameter = {
  parameterPath: ["options", "ordering"],
  mapper: {
    serializedName: "ordering",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
};

export const includeData: OperationQueryParameter = {
  parameterPath: ["options", "includeData"],
  mapper: {
    serializedName: "include_data",
    type: {
      name: "Boolean",
    },
  },
};

export const exclude: OperationQueryParameter = {
  parameterPath: ["options", "exclude"],
  mapper: {
    serializedName: "exclude",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
};

export const inReview: OperationQueryParameter = {
  parameterPath: ["options", "inReview"],
  mapper: {
    serializedName: "in_review",
    type: {
      name: "Boolean",
    },
  },
};

export const failed: OperationQueryParameter = {
  parameterPath: ["options", "failed"],
  mapper: {
    serializedName: "failed",
    type: {
      name: "Boolean",
    },
  },
};

export const ready: OperationQueryParameter = {
  parameterPath: ["options", "ready"],
  mapper: {
    serializedName: "ready",
    type: {
      name: "Boolean",
    },
  },
};

export const validatable: OperationQueryParameter = {
  parameterPath: ["options", "validatable"],
  mapper: {
    serializedName: "validatable",
    type: {
      name: "Boolean",
    },
  },
};

export const hasChallenges: OperationQueryParameter = {
  parameterPath: ["options", "hasChallenges"],
  mapper: {
    serializedName: "has_challenges",
    type: {
      name: "Boolean",
    },
  },
};

export const customIdentifier: OperationQueryParameter = {
  parameterPath: ["options", "customIdentifier"],
  mapper: {
    serializedName: "custom_identifier",
    type: {
      name: "String",
    },
  },
};

export const compact: OperationQueryParameter = {
  parameterPath: ["options", "compact"],
  mapper: {
    serializedName: "compact",
    type: {
      name: "Boolean",
    },
  },
};

export const count: OperationQueryParameter = {
  parameterPath: ["options", "count"],
  mapper: {
    serializedName: "count",
    type: {
      name: "Boolean",
    },
  },
};

export const snakeCase: OperationQueryParameter = {
  parameterPath: ["options", "snakeCase"],
  mapper: {
    serializedName: "snake_case",
    type: {
      name: "Boolean",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const file: OperationParameter = {
  parameterPath: ["options", "file"],
  mapper: {
    serializedName: "file",
    type: {
      name: "Stream",
    },
  },
};

export const url: OperationParameter = {
  parameterPath: ["options", "url"],
  mapper: {
    serializedName: "url",
    type: {
      name: "String",
    },
  },
};

export const collection1: OperationParameter = {
  parameterPath: ["options", "collection"],
  mapper: {
    serializedName: "collection",
    type: {
      name: "String",
    },
  },
};

export const documentType: OperationParameter = {
  parameterPath: ["options", "documentType"],
  mapper: {
    serializedName: "documentType",
    type: {
      name: "String",
    },
  },
};

export const workspace1: OperationParameter = {
  parameterPath: ["options", "workspace"],
  mapper: {
    serializedName: "workspace",
    type: {
      name: "String",
    },
  },
};

export const wait: OperationParameter = {
  parameterPath: ["options", "wait"],
  mapper: {
    defaultValue: "true",
    serializedName: "wait",
    type: {
      name: "String",
    },
  },
};

export const identifier: OperationParameter = {
  parameterPath: ["options", "identifier"],
  mapper: {
    serializedName: "identifier",
    type: {
      name: "String",
    },
  },
};

export const customIdentifier1: OperationParameter = {
  parameterPath: ["options", "customIdentifier"],
  mapper: {
    serializedName: "customIdentifier",
    type: {
      name: "String",
    },
  },
};

export const fileName: OperationParameter = {
  parameterPath: ["options", "fileName"],
  mapper: {
    serializedName: "fileName",
    type: {
      name: "String",
    },
  },
};

export const expiryTime: OperationParameter = {
  parameterPath: ["options", "expiryTime"],
  mapper: {
    serializedName: "expiryTime",
    type: {
      name: "String",
    },
  },
};

export const language: OperationParameter = {
  parameterPath: ["options", "language"],
  mapper: {
    serializedName: "language",
    type: {
      name: "String",
    },
  },
};

export const rejectDuplicates: OperationParameter = {
  parameterPath: ["options", "rejectDuplicates"],
  mapper: {
    serializedName: "rejectDuplicates",
    type: {
      name: "String",
    },
  },
};

export const regionBias: OperationParameter = {
  parameterPath: ["options", "regionBias"],
  mapper: {
    serializedName: "regionBias",
    type: {
      name: "String",
    },
  },
};

export const lowPriority: OperationParameter = {
  parameterPath: ["options", "lowPriority"],
  mapper: {
    serializedName: "lowPriority",
    type: {
      name: "String",
    },
  },
};

export const compact1: OperationParameter = {
  parameterPath: ["options", "compact"],
  mapper: {
    serializedName: "compact",
    type: {
      name: "String",
    },
  },
};

export const deleteAfterParse: OperationParameter = {
  parameterPath: ["options", "deleteAfterParse"],
  mapper: {
    serializedName: "deleteAfterParse",
    type: {
      name: "String",
    },
  },
};

export const enableValidationTool: OperationParameter = {
  parameterPath: ["options", "enableValidationTool"],
  mapper: {
    serializedName: "enableValidationTool",
    type: {
      name: "String",
    },
  },
};

export const useOcr: OperationParameter = {
  parameterPath: ["options", "useOcr"],
  mapper: {
    serializedName: "useOcr",
    type: {
      name: "String",
    },
  },
};

export const llmHint: OperationParameter = {
  parameterPath: ["options", "llmHint"],
  mapper: {
    serializedName: "llmHint",
    type: {
      name: "String",
    },
  },
};

export const limitToExamples: OperationParameter = {
  parameterPath: ["options", "limitToExamples"],
  mapper: {
    serializedName: "limitToExamples",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
};

export const warningMessages: OperationParameter = {
  parameterPath: ["options", "warningMessages"],
  mapper: {
    serializedName: "warningMessages",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "DocumentWarning",
        },
      },
    },
  },
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const identifier1: OperationURLParameter = {
  parameterPath: "identifier",
  mapper: {
    serializedName: "identifier",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const format: OperationQueryParameter = {
  parameterPath: ["options", "format"],
  mapper: {
    serializedName: "format",
    type: {
      name: "String",
    },
  },
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: DocumentUpdateMapper,
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/pdf, application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const organization: OperationQueryParameter = {
  parameterPath: "organization",
  mapper: {
    serializedName: "organization",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const name: OperationQueryParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    type: {
      name: "String",
    },
  },
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: WorkspaceCreateMapper,
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: WorkspaceUpdateMapper,
};

export const start: OperationQueryParameter = {
  parameterPath: ["options", "start"],
  mapper: {
    serializedName: "start",
    type: {
      name: "String",
    },
  },
};

export const end: OperationQueryParameter = {
  parameterPath: ["options", "end"],
  mapper: {
    serializedName: "end",
    type: {
      name: "String",
    },
  },
};

export const user: OperationQueryParameter = {
  parameterPath: ["options", "user"],
  mapper: {
    serializedName: "user",
    type: {
      name: "String",
    },
  },
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: WorkspaceMembershipCreateMapper,
};

export const organization1: OperationQueryParameter = {
  parameterPath: ["options", "organization"],
  mapper: {
    serializedName: "organization",
    type: {
      name: "String",
    },
  },
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: DocumentTypeCreateMapper,
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: DocumentTypeUpdateMapper,
};

export const title: OperationQueryParameter = {
  parameterPath: ["options", "title"],
  mapper: {
    serializedName: "title",
    type: {
      name: "String",
    },
  },
};

export const modelName: OperationQueryParameter = {
  parameterPath: ["options", "modelName"],
  mapper: {
    serializedName: "model_name",
    type: {
      name: "String",
    },
  },
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: MappingDataSourceCreateMapper,
};

export const identifier2: OperationQueryParameter = {
  parameterPath: ["options", "identifier"],
  mapper: {
    serializedName: "identifier",
    type: {
      name: "String",
    },
  },
};

export const annotation: OperationQueryParameter = {
  parameterPath: ["options", "annotation"],
  mapper: {
    serializedName: "annotation",
    type: {
      name: "Number",
    },
  },
};

export const document: OperationQueryParameter = {
  parameterPath: ["options", "document"],
  mapper: {
    serializedName: "document",
    type: {
      name: "String",
    },
  },
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } },
    },
  },
};

export const value: OperationURLParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const document1: OperationQueryParameter = {
  parameterPath: "document",
  mapper: {
    serializedName: "document",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: ValidationResultCreateMapper,
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    constraints: {
      InclusiveMinimum: 1,
    },
    serializedName: "id",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const body10: OperationParameter = {
  parameterPath: "body",
  mapper: ValidationResultUpdateMapper,
};

export const body11: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "ValidationResultCreate",
        },
      },
    },
  },
};

export const body12: OperationParameter = {
  parameterPath: "body",
  mapper: BatchDeleteValidationResultsRequestMapper,
};

export const name1: OperationParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const avatar: OperationParameter = {
  parameterPath: ["options", "avatar"],
  mapper: {
    serializedName: "avatar",
    type: {
      name: "Stream",
    },
  },
};

export const resthookSignatureKey: OperationParameter = {
  parameterPath: ["options", "resthookSignatureKey"],
  mapper: {
    serializedName: "resthookSignatureKey",
    type: {
      name: "String",
    },
  },
};

export const name2: OperationParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    type: {
      name: "String",
    },
  },
};

export const validationToolConfig: OperationParameter = {
  parameterPath: ["options", "validationToolConfig"],
  mapper: ValidationToolConfigMapper,
};

export const body13: OperationParameter = {
  parameterPath: "body",
  mapper: TagCreateMapper,
};

export const body14: OperationParameter = {
  parameterPath: "body",
  mapper: TagUpdateMapper,
};

export const body15: OperationParameter = {
  parameterPath: "body",
  mapper: BatchAddTagRequestMapper,
};

export const body16: OperationParameter = {
  parameterPath: "body",
  mapper: BatchRemoveTagRequestMapper,
};

export const body17: OperationParameter = {
  parameterPath: "body",
  mapper: AnnotationCreateMapper,
};

export const body18: OperationParameter = {
  parameterPath: "body",
  mapper: AnnotationUpdateMapper,
};

export const body19: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "AnnotationCreate",
        },
      },
    },
  },
};

export const body20: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "AnnotationBatchUpdate",
        },
      },
    },
  },
};

export const body21: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Sequence",
      element: {
        constraints: {
          InclusiveMinimum: 1,
        },
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const body22: OperationParameter = {
  parameterPath: "body",
  mapper: ResthookSubscriptionCreateMapper,
};

export const id1: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const body23: OperationParameter = {
  parameterPath: "body",
  mapper: ResthookSubscriptionUpdateMapper,
};

export const xHookSecret: OperationParameter = {
  parameterPath: "xHookSecret",
  mapper: {
    serializedName: "X-Hook-Secret",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body24: OperationParameter = {
  parameterPath: "body",
  mapper: DocumentCreateFromDataMapper,
};

export const body25: OperationParameter = {
  parameterPath: "body",
  mapper:
    PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchemaMapper,
};

export const body26: OperationParameter = {
  parameterPath: "body",
  mapper: ResumeSearchParametersMapper,
};

export const limit1: OperationQueryParameter = {
  parameterPath: ["options", "limit"],
  mapper: {
    constraints: {
      InclusiveMaximum: 50,
      InclusiveMinimum: 1,
    },
    serializedName: "limit",
    type: {
      name: "Number",
    },
  },
};

export const body27: OperationParameter = {
  parameterPath: "body",
  mapper: ResumeSearchConfigMapper,
};

export const body28: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper:
    Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper,
};

export const resume: OperationQueryParameter = {
  parameterPath: "resume",
  mapper: {
    serializedName: "resume",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const jobDescription: OperationQueryParameter = {
  parameterPath: "jobDescription",
  mapper: {
    serializedName: "job_description",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const index: OperationQueryParameter = {
  parameterPath: ["options", "index"],
  mapper: {
    serializedName: "index",
    type: {
      name: "String",
    },
  },
};

export const searchExpression: OperationQueryParameter = {
  parameterPath: ["options", "searchExpression"],
  mapper: {
    serializedName: "search_expression",
    type: {
      name: "String",
    },
  },
};

export const jobTitlesWeight: OperationQueryParameter = {
  parameterPath: ["options", "jobTitlesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "job_titles_weight",
    type: {
      name: "Number",
    },
  },
};

export const yearsExperienceWeight: OperationQueryParameter = {
  parameterPath: ["options", "yearsExperienceWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "years_experience_weight",
    type: {
      name: "Number",
    },
  },
};

export const locationsWeight: OperationQueryParameter = {
  parameterPath: ["options", "locationsWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "locations_weight",
    type: {
      name: "Number",
    },
  },
};

export const languagesWeight: OperationQueryParameter = {
  parameterPath: ["options", "languagesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "languages_weight",
    type: {
      name: "Number",
    },
  },
};

export const skillsWeight: OperationQueryParameter = {
  parameterPath: ["options", "skillsWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "skills_weight",
    type: {
      name: "Number",
    },
  },
};

export const educationWeight: OperationQueryParameter = {
  parameterPath: ["options", "educationWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "education_weight",
    type: {
      name: "Number",
    },
  },
};

export const searchExpressionWeight: OperationQueryParameter = {
  parameterPath: ["options", "searchExpressionWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "search_expression_weight",
    type: {
      name: "Number",
    },
  },
};

export const socCodesWeight: OperationQueryParameter = {
  parameterPath: ["options", "socCodesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "soc_codes_weight",
    type: {
      name: "Number",
    },
  },
};

export const managementLevelWeight: OperationQueryParameter = {
  parameterPath: ["options", "managementLevelWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0,
    },
    serializedName: "management_level_weight",
    type: {
      name: "Number",
    },
  },
};

export const jobTitles: OperationQueryParameter = {
  parameterPath: "jobTitles",
  mapper: {
    serializedName: "job_titles",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
};

export const skills: OperationQueryParameter = {
  parameterPath: "skills",
  mapper: {
    serializedName: "skills",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
};

export const body29: OperationParameter = {
  parameterPath: "body",
  mapper: JobDescriptionSearchParametersMapper,
};

export const body30: OperationParameter = {
  parameterPath: "body",
  mapper: JobDescriptionSearchConfigMapper,
};

export const body31: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper:
    PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper,
};

export const documentType1: OperationQueryParameter = {
  parameterPath: ["options", "documentType"],
  mapper: {
    serializedName: "document_type",
    type: {
      name: "String",
    },
  },
};

export const body32: OperationParameter = {
  parameterPath: "body",
  mapper: IndexCreateMapper,
};

export const body33: OperationParameter = {
  parameterPath: "body",
  mapper: IndexUpdateMapper,
};

export const name3: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body34: OperationParameter = {
  parameterPath: "body",
  mapper:
    PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper,
};

export const workspace2: OperationQueryParameter = {
  parameterPath: "workspace",
  mapper: {
    serializedName: "workspace",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body35: OperationParameter = {
  parameterPath: "body",
  mapper: CollectionCreateMapper,
};

export const body36: OperationParameter = {
  parameterPath: "body",
  mapper: CollectionUpdateMapper,
};

export const body37: OperationParameter = {
  parameterPath: "body",
  mapper: DataFieldCreateMapper,
};

export const datapointIdentifier: OperationURLParameter = {
  parameterPath: "datapointIdentifier",
  mapper: {
    serializedName: "datapoint_identifier",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body38: OperationParameter = {
  parameterPath: "body",
  mapper: CollectionFieldMapper,
};

export const includePublic: OperationQueryParameter = {
  parameterPath: ["options", "includePublic"],
  mapper: {
    serializedName: "include_public",
    type: {
      name: "Boolean",
    },
  },
};

export const extractor: OperationQueryParameter = {
  parameterPath: ["options", "extractor"],
  mapper: {
    serializedName: "extractor",
    type: {
      name: "String",
    },
  },
};

export const slug: OperationQueryParameter = {
  parameterPath: ["options", "slug"],
  mapper: {
    serializedName: "slug",
    type: {
      name: "String",
    },
  },
};

export const description: OperationQueryParameter = {
  parameterPath: ["options", "description"],
  mapper: {
    serializedName: "description",
    type: {
      name: "String",
    },
  },
};

export const annotationContentType: OperationQueryParameter = {
  parameterPath: ["options", "annotationContentType"],
  mapper: {
    serializedName: "annotation_content_type",
    type: {
      name: "String",
    },
  },
};

export const identifier3: OperationQueryParameter = {
  parameterPath: ["options", "identifier"],
  mapper: {
    serializedName: "identifier",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
};

export const body39: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataPointCreateMapper,
};

export const body40: OperationParameter = {
  parameterPath: "body",
  mapper: DataPointUpdateMapper,
};

export const dataPoint: OperationQueryParameter = {
  parameterPath: "dataPoint",
  mapper: {
    serializedName: "data_point",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const collection2: OperationQueryParameter = {
  parameterPath: "collection",
  mapper: {
    serializedName: "collection",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body41: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataPointChoiceCreateMapper,
};

export const body42: OperationParameter = {
  parameterPath: "body",
  mapper: DataPointChoiceUpdateMapper,
};

export const body43: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataPointChoiceReplaceRequestMapper,
};

export const body44: OperationParameter = {
  parameterPath: "body",
  mapper: ApiUserCreateMapper,
};

export const body45: OperationParameter = {
  parameterPath: "body",
  mapper: ApiUserUpdateMapper,
};

export const body46: OperationParameter = {
  parameterPath: "body",
  mapper: DocumentEditRequestMapper,
};

export const includePublicExtractors: OperationQueryParameter = {
  parameterPath: ["options", "includePublicExtractors"],
  mapper: {
    serializedName: "include_public_extractors",
    type: {
      name: "Boolean",
    },
  },
};

export const body47: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ExtractorCreateMapper,
};

export const body48: OperationParameter = {
  parameterPath: "body",
  mapper: ExtractorUpdateMapper,
};

export const role: OperationQueryParameter = {
  parameterPath: ["options", "role"],
  mapper: {
    serializedName: "role",
    type: {
      name: "String",
    },
  },
};

export const body49: OperationParameter = {
  parameterPath: "body",
  mapper: OrganizationMembershipUpdateMapper,
};

export const status: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    serializedName: "status",
    type: {
      name: "String",
    },
  },
};

export const body50: OperationParameter = {
  parameterPath: "body",
  mapper: InvitationCreateMapper,
};

export const body51: OperationParameter = {
  parameterPath: "body",
  mapper: InvitationUpdateMapper,
};

export const token: OperationURLParameter = {
  parameterPath: "token",
  mapper: {
    serializedName: "token",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body52: OperationParameter = {
  parameterPath: "body",
  mapper: InvitationResponseMapper,
};

export const body53: OperationParameter = {
  parameterPath: "body",
  mapper: MappingCreateMapper,
};

export const mappingDataSource: OperationQueryParameter = {
  parameterPath: "mappingDataSource",
  mapper: {
    serializedName: "mapping_data_source",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body54: OperationParameter = {
  parameterPath: "body",
  mapper: MappingUpdateMapper,
};
