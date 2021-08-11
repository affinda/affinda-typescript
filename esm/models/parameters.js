"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeFormat = exports.redactDates = exports.redactLocations = exports.redactReferees = exports.redactEducationDetails = exports.redactWorkDetails = exports.redactPersonalDetails = exports.redactHeadshot = exports.identifier1 = exports.accept1 = exports.expiryTime = exports.resumeLanguage = exports.wait = exports.url = exports.fileName = exports.identifier = exports.file = exports.contentType = exports.offset = exports.limit = exports.$host = exports.accept = void 0;
exports.accept = {
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
exports.$host = {
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
exports.limit = {
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
exports.offset = {
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
exports.contentType = {
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
exports.file = {
    parameterPath: ["options", "file"],
    mapper: {
        serializedName: "file",
        type: {
            name: "Stream"
        }
    }
};
exports.identifier = {
    parameterPath: ["options", "identifier"],
    mapper: {
        serializedName: "identifier",
        type: {
            name: "String"
        }
    }
};
exports.fileName = {
    parameterPath: ["options", "fileName"],
    mapper: {
        serializedName: "fileName",
        type: {
            name: "String"
        }
    }
};
exports.url = {
    parameterPath: ["options", "url"],
    mapper: {
        serializedName: "url",
        type: {
            name: "String"
        }
    }
};
exports.wait = {
    parameterPath: ["options", "wait"],
    mapper: {
        serializedName: "wait",
        type: {
            name: "Boolean"
        }
    }
};
exports.resumeLanguage = {
    parameterPath: ["options", "resumeLanguage"],
    mapper: {
        serializedName: "resumeLanguage",
        type: {
            name: "String"
        }
    }
};
exports.expiryTime = {
    parameterPath: ["options", "expiryTime"],
    mapper: {
        serializedName: "expiryTime",
        type: {
            name: "String"
        }
    }
};
exports.accept1 = {
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
exports.identifier1 = {
    parameterPath: "identifier",
    mapper: {
        serializedName: "identifier",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.redactHeadshot = {
    parameterPath: ["options", "redactHeadshot"],
    mapper: {
        defaultValue: true,
        serializedName: "redactHeadshot",
        type: {
            name: "Boolean"
        }
    }
};
exports.redactPersonalDetails = {
    parameterPath: ["options", "redactPersonalDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactPersonalDetails",
        type: {
            name: "Boolean"
        }
    }
};
exports.redactWorkDetails = {
    parameterPath: ["options", "redactWorkDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactWorkDetails",
        type: {
            name: "Boolean"
        }
    }
};
exports.redactEducationDetails = {
    parameterPath: ["options", "redactEducationDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactEducationDetails",
        type: {
            name: "Boolean"
        }
    }
};
exports.redactReferees = {
    parameterPath: ["options", "redactReferees"],
    mapper: {
        defaultValue: true,
        serializedName: "redactReferees",
        type: {
            name: "Boolean"
        }
    }
};
exports.redactLocations = {
    parameterPath: ["options", "redactLocations"],
    mapper: {
        defaultValue: true,
        serializedName: "redactLocations",
        type: {
            name: "Boolean"
        }
    }
};
exports.redactDates = {
    parameterPath: ["options", "redactDates"],
    mapper: {
        defaultValue: true,
        serializedName: "redactDates",
        type: {
            name: "Boolean"
        }
    }
};
exports.resumeFormat = {
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