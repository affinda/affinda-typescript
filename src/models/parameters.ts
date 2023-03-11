import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  ResumeData as ResumeDataMapper,
  JobDescriptionDataUpdate as JobDescriptionDataUpdateMapper,
  JobDescriptionSearchParameters as JobDescriptionSearchParametersMapper,
  JobDescriptionSearchConfig as JobDescriptionSearchConfigMapper,
  Paths15O3Zn5V2JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema as Paths15O3Zn5V2JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper,
  ResumeSearchParameters as ResumeSearchParametersMapper,
  ResumeSearchConfig as ResumeSearchConfigMapper,
  Paths23Ubd8V2ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema as Paths23Ubd8V2ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper,
  PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema as PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper,
  ResthookSubscriptionCreate as ResthookSubscriptionCreateMapper,
  ResthookSubscriptionUpdate as ResthookSubscriptionUpdateMapper
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

export const contentType: OperationParameter = {
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

export const data: OperationParameter = {
  parameterPath: ["options", "data"],
  mapper: ResumeDataMapper
};

export const identifier: OperationParameter = {
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

export const rejectDuplicates: OperationParameter = {
  parameterPath: ["options", "rejectDuplicates"],
  mapper: {
    defaultValue: "false",
    serializedName: "rejectDuplicates",
    xmlName: "rejectDuplicates",
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

export const identifier1: OperationURLParameter = {
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

export const contentType1: OperationParameter = {
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
  mapper: ResumeDataMapper
};

export const redactHeadshot: OperationParameter = {
  parameterPath: ["options", "redactHeadshot"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactHeadshot",
    xmlName: "redactHeadshot",
    type: {
      name: "String"
    }
  }
};

export const redactPersonalDetails: OperationParameter = {
  parameterPath: ["options", "redactPersonalDetails"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactPersonalDetails",
    xmlName: "redactPersonalDetails",
    type: {
      name: "String"
    }
  }
};

export const redactWorkDetails: OperationParameter = {
  parameterPath: ["options", "redactWorkDetails"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactWorkDetails",
    xmlName: "redactWorkDetails",
    type: {
      name: "String"
    }
  }
};

export const redactEducationDetails: OperationParameter = {
  parameterPath: ["options", "redactEducationDetails"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactEducationDetails",
    xmlName: "redactEducationDetails",
    type: {
      name: "String"
    }
  }
};

export const redactReferees: OperationParameter = {
  parameterPath: ["options", "redactReferees"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactReferees",
    xmlName: "redactReferees",
    type: {
      name: "String"
    }
  }
};

export const redactLocations: OperationParameter = {
  parameterPath: ["options", "redactLocations"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactLocations",
    xmlName: "redactLocations",
    type: {
      name: "String"
    }
  }
};

export const redactDates: OperationParameter = {
  parameterPath: ["options", "redactDates"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactDates",
    xmlName: "redactDates",
    type: {
      name: "String"
    }
  }
};

export const redactGender: OperationParameter = {
  parameterPath: ["options", "redactGender"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactGender",
    xmlName: "redactGender",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: JobDescriptionDataUpdateMapper
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: JobDescriptionSearchParametersMapper
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: JobDescriptionSearchConfigMapper
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: Paths15O3Zn5V2JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper
};

export const body5: OperationParameter = {
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

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: ResumeSearchConfigMapper
};

export const body7: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: Paths23Ubd8V2ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchemaMapper
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

export const name: OperationParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    xmlName: "name",
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

export const name1: OperationURLParameter = {
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

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: ResthookSubscriptionCreateMapper
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

export const body10: OperationParameter = {
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
