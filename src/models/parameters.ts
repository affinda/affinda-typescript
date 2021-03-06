import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  ResumeData as ResumeDataMapper,
  ResumeSearchParameters as ResumeSearchParametersMapper,
  PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema as PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper
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

export const limit: OperationQueryParameter = {
  parameterPath: "limit",
  mapper: {
    defaultValue: 300,
    constraints: {
      InclusiveMaximum: 300,
      InclusiveMinimum: 1
    },
    serializedName: "limit",
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

export const url: OperationParameter = {
  parameterPath: ["options", "url"],
  mapper: {
    serializedName: "url",
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

export const wait: OperationParameter = {
  parameterPath: ["options", "wait"],
  mapper: {
    defaultValue: true,
    serializedName: "wait",
    type: {
      name: "Boolean"
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
      name: "DateTime"
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

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: ResumeSearchParametersMapper
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

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchemaMapper
};

export const id: OperationParameter = {
  parameterPath: ["options", "id"],
  mapper: {
    serializedName: "id",
    type: {
      name: "Number"
    }
  }
};

export const username: OperationParameter = {
  parameterPath: "username",
  mapper: {
    serializedName: "username",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const email: OperationParameter = {
  parameterPath: ["options", "email"],
  mapper: {
    serializedName: "email",
    type: {
      name: "String"
    }
  }
};
