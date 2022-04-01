import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import { PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema as PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper } from "../models/mappers";

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

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const limit: OperationQueryParameter = {
  parameterPath: "limit",
  mapper: {
    defaultValue: 300,
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "limit",
    type: {
      name: "Number"
    }
  }
};

export const offset: OperationQueryParameter = {
  parameterPath: "offset",
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "offset",
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
    type: {
      name: "Stream"
    }
  }
};

export const identifier: OperationParameter = {
  parameterPath: ["options", "identifier"],
  mapper: {
    serializedName: "identifier",
    type: {
      name: "String"
    }
  }
};

export const fileName: OperationParameter = {
  parameterPath: ["options", "fileName"],
  mapper: {
    serializedName: "fileName",
    type: {
      name: "String"
    }
  }
};

export const url: OperationParameter = {
  parameterPath: ["options", "url"],
  mapper: {
    serializedName: "url",
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
    type: {
      name: "String"
    }
  }
};

export const language: OperationParameter = {
  parameterPath: ["options", "language"],
  mapper: {
    serializedName: "language",
    type: {
      name: "String"
    }
  }
};

export const expiryTime: OperationParameter = {
  parameterPath: ["options", "expiryTime"],
  mapper: {
    serializedName: "expiryTime",
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

export const identifier1: OperationURLParameter = {
  parameterPath: "identifier",
  mapper: {
    serializedName: "identifier",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const redactHeadshot: OperationParameter = {
  parameterPath: ["options", "redactHeadshot"],
  mapper: {
    defaultValue: "true",
    serializedName: "redactHeadshot",
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
    type: {
      name: "String"
    }
  }
};

export const resumeFormat: OperationParameter = {
  parameterPath: "resumeFormat",
  mapper: {
    serializedName: "resumeFormat",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const indices: OperationParameter = {
  parameterPath: "indices",
  mapper: {
    serializedName: "indices",
    required: true,
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

export const jobTitles: OperationParameter = {
  parameterPath: ["options", "jobTitles"],
  mapper: {
    serializedName: "jobTitles",
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

export const jobTitlesCurrentOnly: OperationParameter = {
  parameterPath: ["options", "jobTitlesCurrentOnly"],
  mapper: {
    serializedName: "jobTitlesCurrentOnly",
    type: {
      name: "Boolean"
    }
  }
};

export const jobTitlesRequired: OperationParameter = {
  parameterPath: ["options", "jobTitlesRequired"],
  mapper: {
    serializedName: "jobTitlesRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const jobTitlesWeight: OperationParameter = {
  parameterPath: ["options", "jobTitlesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "jobTitlesWeight",
    type: {
      name: "Number"
    }
  }
};

export const yearsExperienceMin: OperationParameter = {
  parameterPath: ["options", "yearsExperienceMin"],
  mapper: {
    serializedName: "yearsExperienceMin",
    type: {
      name: "Number"
    }
  }
};

export const yearsExperienceMax: OperationParameter = {
  parameterPath: ["options", "yearsExperienceMax"],
  mapper: {
    serializedName: "yearsExperienceMax",
    type: {
      name: "Number"
    }
  }
};

export const yearsExperienceRequired: OperationParameter = {
  parameterPath: ["options", "yearsExperienceRequired"],
  mapper: {
    serializedName: "yearsExperienceRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const yearsExperienceWeight: OperationParameter = {
  parameterPath: ["options", "yearsExperienceWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "yearsExperienceWeight",
    type: {
      name: "Number"
    }
  }
};

export const locations: OperationParameter = {
  parameterPath: ["options", "locations"],
  mapper: {
    serializedName: "locations",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "ResumeSearchParametersLocationsItem"
        }
      }
    }
  }
};

export const locationsWeight: OperationParameter = {
  parameterPath: ["options", "locationsWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "locationsWeight",
    type: {
      name: "Number"
    }
  }
};

export const locationsRequired: OperationParameter = {
  parameterPath: ["options", "locationsRequired"],
  mapper: {
    serializedName: "locationsRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const skills: OperationParameter = {
  parameterPath: ["options", "skills"],
  mapper: {
    serializedName: "skills",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "ResumeSearchParametersSkillsItem"
        }
      }
    }
  }
};

export const skillsWeight: OperationParameter = {
  parameterPath: ["options", "skillsWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "skillsWeight",
    type: {
      name: "Number"
    }
  }
};

export const languages: OperationParameter = {
  parameterPath: ["options", "languages"],
  mapper: {
    serializedName: "languages",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "ResumeSearchParametersLanguagesItem"
        }
      }
    }
  }
};

export const languagesWeight: OperationParameter = {
  parameterPath: ["options", "languagesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "languagesWeight",
    type: {
      name: "Number"
    }
  }
};

export const institutions: OperationParameter = {
  parameterPath: ["options", "institutions"],
  mapper: {
    serializedName: "institutions",
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

export const institutionsRequired: OperationParameter = {
  parameterPath: ["options", "institutionsRequired"],
  mapper: {
    serializedName: "institutionsRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const degrees: OperationParameter = {
  parameterPath: ["options", "degrees"],
  mapper: {
    serializedName: "degrees",
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

export const degreesRequired: OperationParameter = {
  parameterPath: ["options", "degreesRequired"],
  mapper: {
    serializedName: "degreesRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const highestDegreeTypes: OperationParameter = {
  parameterPath: ["options", "highestDegreeTypes"],
  mapper: {
    constraints: {
      UniqueItems: true
    },
    serializedName: "highestDegreeTypes",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: [
            "school",
            "certificate",
            "bachelors",
            "masters",
            "doctoral"
          ]
        }
      }
    }
  }
};

export const highestDegreeTypesRequired: OperationParameter = {
  parameterPath: ["options", "highestDegreeTypesRequired"],
  mapper: {
    serializedName: "highestDegreeTypesRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const isCurrentStudent: OperationParameter = {
  parameterPath: ["options", "isCurrentStudent"],
  mapper: {
    serializedName: "isCurrentStudent",
    type: {
      name: "Boolean"
    }
  }
};

export const isCurrentStudentRequired: OperationParameter = {
  parameterPath: ["options", "isCurrentStudentRequired"],
  mapper: {
    serializedName: "isCurrentStudentRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const isRecentGraduate: OperationParameter = {
  parameterPath: ["options", "isRecentGraduate"],
  mapper: {
    serializedName: "isRecentGraduate",
    type: {
      name: "Boolean"
    }
  }
};

export const isRecentGraduateRequired: OperationParameter = {
  parameterPath: ["options", "isRecentGraduateRequired"],
  mapper: {
    serializedName: "isRecentGraduateRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const educationWeight: OperationParameter = {
  parameterPath: ["options", "educationWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "educationWeight",
    type: {
      name: "Number"
    }
  }
};

export const searchExpression: OperationParameter = {
  parameterPath: ["options", "searchExpression"],
  mapper: {
    serializedName: "searchExpression",
    type: {
      name: "String"
    }
  }
};

export const searchExpressionRequired: OperationParameter = {
  parameterPath: ["options", "searchExpressionRequired"],
  mapper: {
    serializedName: "searchExpressionRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const searchExpressionWeight: OperationParameter = {
  parameterPath: ["options", "searchExpressionWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "searchExpressionWeight",
    type: {
      name: "Number"
    }
  }
};

export const socCodes: OperationParameter = {
  parameterPath: ["options", "socCodes"],
  mapper: {
    serializedName: "socCodes",
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

export const socCodesWeight: OperationParameter = {
  parameterPath: ["options", "socCodesWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "socCodesWeight",
    type: {
      name: "Number"
    }
  }
};

export const socCodesRequired: OperationParameter = {
  parameterPath: ["options", "socCodesRequired"],
  mapper: {
    serializedName: "socCodesRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const managementLevel: OperationParameter = {
  parameterPath: ["options", "managementLevel"],
  mapper: {
    serializedName: "managementLevel",
    type: {
      name: "Enum",
      allowedValues: ["Low", "Mid", "Upper"]
    }
  }
};

export const managementLevelRequired: OperationParameter = {
  parameterPath: ["options", "managementLevelRequired"],
  mapper: {
    serializedName: "managementLevelRequired",
    type: {
      name: "Boolean"
    }
  }
};

export const managementLevelWeight: OperationParameter = {
  parameterPath: ["options", "managementLevelWeight"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1,
      InclusiveMinimum: 0
    },
    serializedName: "managementLevelWeight",
    type: {
      name: "Number"
    }
  }
};

export const limit1: OperationQueryParameter = {
  parameterPath: ["options", "limit"],
  mapper: {
    defaultValue: 20,
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "limit",
    type: {
      name: "Number"
    }
  }
};

export const name: OperationParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
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
  mapper: PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper
};
