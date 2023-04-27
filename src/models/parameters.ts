import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  WorkspaceCreate as WorkspaceCreateMapper,
  WorkspaceUpdate as WorkspaceUpdateMapper,
  WorkspaceMembershipCreate as WorkspaceMembershipCreateMapper,
  CollectionCreate as CollectionCreateMapper,
  CollectionUpdate as CollectionUpdateMapper,
  DocumentUpdate as DocumentUpdateMapper,
  DocumentEditRequest as DocumentEditRequestMapper,
  ExtractorCreate as ExtractorCreateMapper,
  ExtractorUpdate as ExtractorUpdateMapper,
  DataPointCreate as DataPointCreateMapper,
  DataPointUpdate as DataPointUpdateMapper,
  DataPointChoiceCreate as DataPointChoiceCreateMapper,
  DataPointChoiceUpdate as DataPointChoiceUpdateMapper,
  AnnotationCreate as AnnotationCreateMapper,
  AnnotationUpdate as AnnotationUpdateMapper,
  TagCreate as TagCreateMapper,
  TagUpdate as TagUpdateMapper,
  ValidationToolConfig as ValidationToolConfigMapper,
  OrganizationMembershipUpdate as OrganizationMembershipUpdateMapper,
  InvitationCreate as InvitationCreateMapper,
  InvitationUpdate as InvitationUpdateMapper,
  InvitationResponse as InvitationResponseMapper,
  ResthookSubscriptionCreate as ResthookSubscriptionCreateMapper,
  ResthookSubscriptionUpdate as ResthookSubscriptionUpdateMapper,
  JobDescriptionSearchParameters as JobDescriptionSearchParametersMapper,
  JobDescriptionSearchConfig as JobDescriptionSearchConfigMapper,
  PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema as PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper,
  PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema as PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper,
  ResumeSearchParameters as ResumeSearchParametersMapper,
  ResumeSearchConfig as ResumeSearchConfigMapper,
  Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema as Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const region: OperationURLParameter = {
  parameterPath: "region",
  mapper: {
    serializedName: "region",
    required: true,
    xmlName: "region",
    type: {
      name: "String"
    }
  }
};

export const organization: OperationQueryParameter = {
  parameterPath: "organization",
  mapper: {
    serializedName: "organization",
    required: true,
    xmlName: "organization",
    type: {
      name: "String"
    }
  }
};

export const name: OperationQueryParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    xmlName: "name",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: WorkspaceCreateMapper
};

export const identifier: OperationURLParameter = {
  parameterPath: "identifier",
  mapper: {
    serializedName: "identifier",
    required: true,
    xmlName: "identifier",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: WorkspaceUpdateMapper
};

export const offset: OperationQueryParameter = {
  parameterPath: ["options", "offset"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "offset",
    xmlName: "offset",
    type: {
      name: "Number"
    }
  }
};

export const limit: OperationQueryParameter = {
  parameterPath: ["options", "limit"],
  mapper: {
    defaultValue: 300,
    constraints: {
      InclusiveMaximum: 300,
      InclusiveMinimum: 1
    },
    serializedName: "limit",
    xmlName: "limit",
    type: {
      name: "Number"
    }
  }
};

export const workspace: OperationQueryParameter = {
  parameterPath: ["options", "workspace"],
  mapper: {
    serializedName: "workspace",
    xmlName: "workspace",
    type: {
      name: "String"
    }
  }
};

export const user: OperationQueryParameter = {
  parameterPath: ["options", "user"],
  mapper: {
    serializedName: "user",
    xmlName: "user",
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: WorkspaceMembershipCreateMapper
};

export const workspace1: OperationQueryParameter = {
  parameterPath: "workspace",
  mapper: {
    serializedName: "workspace",
    required: true,
    xmlName: "workspace",
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: CollectionCreateMapper
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: CollectionUpdateMapper
};

export const collection: OperationQueryParameter = {
  parameterPath: ["options", "collection"],
  mapper: {
    serializedName: "collection",
    xmlName: "collection",
    type: {
      name: "String"
    }
  }
};

export const state: OperationQueryParameter = {
  parameterPath: ["options", "state"],
  mapper: {
    serializedName: "state",
    xmlName: "state",
    type: {
      name: "String"
    }
  }
};

export const tags: OperationQueryParameter = {
  parameterPath: ["options", "tags"],
  mapper: {
    serializedName: "tags",
    xmlName: "tags",
    xmlElementName: "PropertiesId",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const createdDt: OperationQueryParameter = {
  parameterPath: ["options", "createdDt"],
  mapper: {
    serializedName: "created_dt",
    xmlName: "created_dt",
    type: {
      name: "String"
    }
  }
};

export const search: OperationQueryParameter = {
  parameterPath: ["options", "search"],
  mapper: {
    serializedName: "search",
    xmlName: "search",
    type: {
      name: "String"
    }
  }
};

export const ordering: OperationQueryParameter = {
  parameterPath: ["options", "ordering"],
  mapper: {
    serializedName: "ordering",
    xmlName: "ordering",
    xmlElementName: "Get8ItemsItem",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  }
};

export const includeData: OperationQueryParameter = {
  parameterPath: ["options", "includeData"],
  mapper: {
    serializedName: "include_data",
    xmlName: "include_data",
    type: {
      name: "Boolean"
    }
  }
};

export const exclude: OperationQueryParameter = {
  parameterPath: ["options", "exclude"],
  mapper: {
    serializedName: "exclude",
    xmlName: "exclude",
    xmlElementName: "DocumentMetaPropertiesIdentifier",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  }
};

export const inReview: OperationQueryParameter = {
  parameterPath: ["options", "inReview"],
  mapper: {
    serializedName: "in_review",
    xmlName: "in_review",
    type: {
      name: "Boolean"
    }
  }
};

export const failed: OperationQueryParameter = {
  parameterPath: ["options", "failed"],
  mapper: {
    serializedName: "failed",
    xmlName: "failed",
    type: {
      name: "Boolean"
    }
  }
};

export const ready: OperationQueryParameter = {
  parameterPath: ["options", "ready"],
  mapper: {
    serializedName: "ready",
    xmlName: "ready",
    type: {
      name: "Boolean"
    }
  }
};

export const validatable: OperationQueryParameter = {
  parameterPath: ["options", "validatable"],
  mapper: {
    serializedName: "validatable",
    xmlName: "validatable",
    type: {
      name: "Boolean"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const file: OperationParameter = {
  parameterPath: ["options", "file"],
  mapper: {
    serializedName: "file",
    xmlName: "file",
    type: {
      name: "Stream"
    }
  }
};

export const url: OperationParameter = {
  parameterPath: ["options", "url"],
  mapper: {
    serializedName: "url",
    xmlName: "url",
    type: {
      name: "String"
    }
  }
};

export const collection1: OperationParameter = {
  parameterPath: ["options", "collection"],
  mapper: {
    serializedName: "collection",
    xmlName: "collection",
    type: {
      name: "String"
    }
  }
};

export const workspace2: OperationParameter = {
  parameterPath: ["options", "workspace"],
  mapper: {
    serializedName: "workspace",
    xmlName: "workspace",
    type: {
      name: "String"
    }
  }
};

export const wait: OperationParameter = {
  parameterPath: ["options", "wait"],
  mapper: {
    defaultValue: "true",
    serializedName: "wait",
    xmlName: "wait",
    type: {
      name: "String"
    }
  }
};

export const identifier1: OperationParameter = {
  parameterPath: ["options", "identifier"],
  mapper: {
    serializedName: "identifier",
    xmlName: "identifier",
    type: {
      name: "String"
    }
  }
};

export const fileName: OperationParameter = {
  parameterPath: ["options", "fileName"],
  mapper: {
    serializedName: "fileName",
    xmlName: "fileName",
    type: {
      name: "String"
    }
  }
};

export const expiryTime: OperationParameter = {
  parameterPath: ["options", "expiryTime"],
  mapper: {
    serializedName: "expiryTime",
    xmlName: "expiryTime",
    type: {
      name: "String"
    }
  }
};

export const language: OperationParameter = {
  parameterPath: ["options", "language"],
  mapper: {
    serializedName: "language",
    xmlName: "language",
    type: {
      name: "String"
    }
  }
};

export const rejectDuplicates: OperationParameter = {
  parameterPath: ["options", "rejectDuplicates"],
  mapper: {
    serializedName: "rejectDuplicates",
    xmlName: "rejectDuplicates",
    type: {
      name: "Boolean"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const format: OperationQueryParameter = {
  parameterPath: ["options", "format"],
  mapper: {
    serializedName: "format",
    xmlName: "format",
    type: {
      name: "String"
    }
  }
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: DocumentUpdateMapper
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: DocumentEditRequestMapper
};

export const includePublicExtractors: OperationQueryParameter = {
  parameterPath: ["options", "includePublicExtractors"],
  mapper: {
    serializedName: "include_public_extractors",
    xmlName: "include_public_extractors",
    type: {
      name: "Boolean"
    }
  }
};

export const body7: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ExtractorCreateMapper
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: ExtractorUpdateMapper
};

export const organization1: OperationQueryParameter = {
  parameterPath: ["options", "organization"],
  mapper: {
    serializedName: "organization",
    xmlName: "organization",
    type: {
      name: "String"
    }
  }
};

export const extractor: OperationQueryParameter = {
  parameterPath: ["options", "extractor"],
  mapper: {
    serializedName: "extractor",
    xmlName: "extractor",
    type: {
      name: "String"
    }
  }
};

export const slug: OperationQueryParameter = {
  parameterPath: ["options", "slug"],
  mapper: {
    serializedName: "slug",
    xmlName: "slug",
    type: {
      name: "String"
    }
  }
};

export const description: OperationQueryParameter = {
  parameterPath: ["options", "description"],
  mapper: {
    serializedName: "description",
    xmlName: "description",
    type: {
      name: "String"
    }
  }
};

export const annotationContentType: OperationQueryParameter = {
  parameterPath: ["options", "annotationContentType"],
  mapper: {
    serializedName: "annotation_content_type",
    xmlName: "annotation_content_type",
    type: {
      name: "String"
    }
  }
};

export const includeChild: OperationQueryParameter = {
  parameterPath: ["options", "includeChild"],
  mapper: {
    serializedName: "include_child",
    xmlName: "include_child",
    type: {
      name: "Boolean"
    }
  }
};

export const identifier2: OperationQueryParameter = {
  parameterPath: ["options", "identifier"],
  mapper: {
    serializedName: "identifier",
    xmlName: "identifier",
    xmlElementName: "DataPointPropertiesIdentifier",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  }
};

export const body9: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataPointCreateMapper
};

export const body10: OperationParameter = {
  parameterPath: "body",
  mapper: DataPointUpdateMapper
};

export const dataPoint: OperationQueryParameter = {
  parameterPath: "dataPoint",
  mapper: {
    serializedName: "data_point",
    required: true,
    xmlName: "data_point",
    type: {
      name: "String"
    }
  }
};

export const collection2: OperationQueryParameter = {
  parameterPath: "collection",
  mapper: {
    serializedName: "collection",
    required: true,
    xmlName: "collection",
    type: {
      name: "String"
    }
  }
};

export const body11: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataPointChoiceCreateMapper
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    xmlName: "id",
    type: {
      name: "Number"
    }
  }
};

export const body12: OperationParameter = {
  parameterPath: "body",
  mapper: DataPointChoiceUpdateMapper
};

export const document: OperationQueryParameter = {
  parameterPath: "document",
  mapper: {
    serializedName: "document",
    required: true,
    xmlName: "document",
    type: {
      name: "String"
    }
  }
};

export const body13: OperationParameter = {
  parameterPath: "body",
  mapper: AnnotationCreateMapper
};

export const body14: OperationParameter = {
  parameterPath: "body",
  mapper: AnnotationUpdateMapper
};

export const body15: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    xmlElementName: "AnnotationCreate",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "AnnotationCreate"
        }
      }
    }
  }
};

export const body16: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    xmlElementName: "AnnotationBatchUpdate",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "AnnotationBatchUpdate"
        }
      }
    }
  }
};

export const body17: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    xmlElementName: "AnnotationPropertiesId",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const body18: OperationParameter = {
  parameterPath: "body",
  mapper: TagCreateMapper
};

export const body19: OperationParameter = {
  parameterPath: "body",
  mapper: TagUpdateMapper
};

export const name1: OperationParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    xmlName: "name",
    type: {
      name: "String"
    }
  }
};

export const avatar: OperationParameter = {
  parameterPath: ["options", "avatar"],
  mapper: {
    serializedName: "avatar",
    xmlName: "avatar",
    type: {
      name: "Stream"
    }
  }
};

export const resthookSignatureKey: OperationParameter = {
  parameterPath: ["options", "resthookSignatureKey"],
  mapper: {
    serializedName: "resthookSignatureKey",
    xmlName: "resthookSignatureKey",
    type: {
      name: "String"
    }
  }
};

export const name2: OperationParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    xmlName: "name",
    type: {
      name: "String"
    }
  }
};

export const validationToolConfig: OperationParameter = {
  parameterPath: ["options", "validationToolConfig"],
  mapper: ValidationToolConfigMapper
};

export const role: OperationQueryParameter = {
  parameterPath: ["options", "role"],
  mapper: {
    serializedName: "role",
    xmlName: "role",
    type: {
      name: "String"
    }
  }
};

export const body20: OperationParameter = {
  parameterPath: "body",
  mapper: OrganizationMembershipUpdateMapper
};

export const status: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    serializedName: "status",
    xmlName: "status",
    type: {
      name: "String"
    }
  }
};

export const body21: OperationParameter = {
  parameterPath: "body",
  mapper: InvitationCreateMapper
};

export const body22: OperationParameter = {
  parameterPath: "body",
  mapper: InvitationUpdateMapper
};

export const token: OperationURLParameter = {
  parameterPath: "token",
  mapper: {
    serializedName: "token",
    required: true,
    xmlName: "token",
    type: {
      name: "String"
    }
  }
};

export const body23: OperationParameter = {
  parameterPath: "body",
  mapper: InvitationResponseMapper
};

export const body24: OperationParameter = {
  parameterPath: "body",
  mapper: ResthookSubscriptionCreateMapper
};

export const body25: OperationParameter = {
  parameterPath: "body",
  mapper: ResthookSubscriptionUpdateMapper
};

export const xHookSecret: OperationParameter = {
  parameterPath: "xHookSecret",
  mapper: {
    serializedName: "X-Hook-Secret",
    required: true,
    xmlName: "X-Hook-Secret",
    type: {
      name: "String"
    }
  }
};

export const body26: OperationParameter = {
  parameterPath: "body",
  mapper: JobDescriptionSearchParametersMapper
};

export const body27: OperationParameter = {
  parameterPath: "body",
  mapper: JobDescriptionSearchConfigMapper
};

export const body28: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper
};

export const documentType: OperationQueryParameter = {
  parameterPath: ["options", "documentType"],
  mapper: {
    serializedName: "document_type",
    xmlName: "document_type",
    type: {
      name: "String"
    }
  }
};

export const documentType1: OperationParameter = {
  parameterPath: ["options", "documentType"],
  mapper: {
    serializedName: "documentType",
    xmlName: "documentType",
    type: {
      name: "String"
    }
  }
};

export const name3: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    xmlName: "name",
    type: {
      name: "String"
    }
  }
};

export const body29: OperationParameter = {
  parameterPath: "body",
  mapper: PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper
};

export const body30: OperationParameter = {
  parameterPath: "body",
  mapper: ResumeSearchParametersMapper
};

export const resume: OperationQueryParameter = {
  parameterPath: "resume",
  mapper: {
    serializedName: "resume",
    required: true,
    xmlName: "resume",
    type: {
      name: "String"
    }
  }
};

export const jobDescription: OperationQueryParameter = {
  parameterPath: "jobDescription",
  mapper: {
    serializedName: "job_description",
    required: true,
    xmlName: "job_description",
    type: {
      name: "String"
    }
  }
};

export const index: OperationQueryParameter = {
  parameterPath: ["options", "index"],
  mapper: {
    serializedName: "index",
    xmlName: "index",
    type: {
      name: "String"
    }
  }
};

export const searchExpression: OperationQueryParameter = {
  parameterPath: ["options", "searchExpression"],
  mapper: {
    serializedName: "search_expression",
    xmlName: "search_expression",
    type: {
      name: "String"
    }
  }
};

export const jobTitlesWeight: OperationQueryParameter = {
  parameterPath: ["options", "jobTitlesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "job_titles_weight",
    xmlName: "job_titles_weight",
    type: {
      name: "Number"
    }
  }
};

export const yearsExperienceWeight: OperationQueryParameter = {
  parameterPath: ["options", "yearsExperienceWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "years_experience_weight",
    xmlName: "years_experience_weight",
    type: {
      name: "Number"
    }
  }
};

export const locationsWeight: OperationQueryParameter = {
  parameterPath: ["options", "locationsWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "locations_weight",
    xmlName: "locations_weight",
    type: {
      name: "Number"
    }
  }
};

export const languagesWeight: OperationQueryParameter = {
  parameterPath: ["options", "languagesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "languages_weight",
    xmlName: "languages_weight",
    type: {
      name: "Number"
    }
  }
};

export const skillsWeight: OperationQueryParameter = {
  parameterPath: ["options", "skillsWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "skills_weight",
    xmlName: "skills_weight",
    type: {
      name: "Number"
    }
  }
};

export const educationWeight: OperationQueryParameter = {
  parameterPath: ["options", "educationWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "education_weight",
    xmlName: "education_weight",
    type: {
      name: "Number"
    }
  }
};

export const searchExpressionWeight: OperationQueryParameter = {
  parameterPath: ["options", "searchExpressionWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "search_expression_weight",
    xmlName: "search_expression_weight",
    type: {
      name: "Number"
    }
  }
};

export const socCodesWeight: OperationQueryParameter = {
  parameterPath: ["options", "socCodesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "soc_codes_weight",
    xmlName: "soc_codes_weight",
    type: {
      name: "Number"
    }
  }
};

export const managementLevelWeight: OperationQueryParameter = {
  parameterPath: ["options", "managementLevelWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "management_level_weight",
    xmlName: "management_level_weight",
    type: {
      name: "Number"
    }
  }
};

export const body31: OperationParameter = {
  parameterPath: "body",
  mapper: ResumeSearchConfigMapper
};

export const body32: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper
};

export const jobTitles: OperationQueryParameter = {
  parameterPath: "jobTitles",
  mapper: {
    serializedName: "job_titles",
    required: true,
    xmlName: "job_titles",
    xmlElementName: "Get0ItemsItem",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const skills: OperationQueryParameter = {
  parameterPath: "skills",
  mapper: {
    serializedName: "skills",
    required: true,
    xmlName: "skills",
    xmlElementName: "String",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};
