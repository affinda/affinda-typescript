export const accept = {
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
export const $host = {
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
export const limit = {
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
export const offset = {
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
export const contentType = {
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
export const file = {
    parameterPath: ["options", "file"],
    mapper: {
        serializedName: "file",
        type: {
            name: "Stream"
        }
    }
};
export const identifier = {
    parameterPath: ["options", "identifier"],
    mapper: {
        serializedName: "identifier",
        type: {
            name: "String"
        }
    }
};
export const fileName = {
    parameterPath: ["options", "fileName"],
    mapper: {
        serializedName: "fileName",
        type: {
            name: "String"
        }
    }
};
export const url = {
    parameterPath: ["options", "url"],
    mapper: {
        serializedName: "url",
        type: {
            name: "String"
        }
    }
};
export const wait = {
    parameterPath: ["options", "wait"],
    mapper: {
        serializedName: "wait",
        type: {
            name: "Boolean"
        }
    }
};
export const resumeLanguage = {
    parameterPath: ["options", "resumeLanguage"],
    mapper: {
        serializedName: "resumeLanguage",
        type: {
            name: "String"
        }
    }
};
export const expiryTime = {
    parameterPath: ["options", "expiryTime"],
    mapper: {
        serializedName: "expiryTime",
        type: {
            name: "String"
        }
    }
};
export const accept1 = {
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
export const identifier1 = {
    parameterPath: "identifier",
    mapper: {
        serializedName: "identifier",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const redactHeadshot = {
    parameterPath: ["options", "redactHeadshot"],
    mapper: {
        defaultValue: true,
        serializedName: "redactHeadshot",
        type: {
            name: "Boolean"
        }
    }
};
export const redactPersonalDetails = {
    parameterPath: ["options", "redactPersonalDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactPersonalDetails",
        type: {
            name: "Boolean"
        }
    }
};
export const redactWorkDetails = {
    parameterPath: ["options", "redactWorkDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactWorkDetails",
        type: {
            name: "Boolean"
        }
    }
};
export const redactEducationDetails = {
    parameterPath: ["options", "redactEducationDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactEducationDetails",
        type: {
            name: "Boolean"
        }
    }
};
export const redactReferees = {
    parameterPath: ["options", "redactReferees"],
    mapper: {
        defaultValue: true,
        serializedName: "redactReferees",
        type: {
            name: "Boolean"
        }
    }
};
export const redactLocations = {
    parameterPath: ["options", "redactLocations"],
    mapper: {
        defaultValue: true,
        serializedName: "redactLocations",
        type: {
            name: "Boolean"
        }
    }
};
export const redactDates = {
    parameterPath: ["options", "redactDates"],
    mapper: {
        defaultValue: true,
        serializedName: "redactDates",
        type: {
            name: "Boolean"
        }
    }
};
export const resumeFormat = {
    parameterPath: "resumeFormat",
    mapper: {
        serializedName: "resumeFormat",
        required: true,
        type: {
            name: "String"
        }
    }
};
//# sourceMappingURL=parameters.js.map