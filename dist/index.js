'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var coreClient = require('@azure/core-client');

const accept = {
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
const $host = {
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
const limit = {
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
const offset = {
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
const contentType = {
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
const file = {
    parameterPath: ["options", "file"],
    mapper: {
        serializedName: "file",
        type: {
            name: "Stream"
        }
    }
};
const identifier = {
    parameterPath: ["options", "identifier"],
    mapper: {
        serializedName: "identifier",
        type: {
            name: "String"
        }
    }
};
const fileName = {
    parameterPath: ["options", "fileName"],
    mapper: {
        serializedName: "fileName",
        type: {
            name: "String"
        }
    }
};
const url = {
    parameterPath: ["options", "url"],
    mapper: {
        serializedName: "url",
        type: {
            name: "String"
        }
    }
};
const wait = {
    parameterPath: ["options", "wait"],
    mapper: {
        serializedName: "wait",
        type: {
            name: "Boolean"
        }
    }
};
const resumeLanguage = {
    parameterPath: ["options", "resumeLanguage"],
    mapper: {
        serializedName: "resumeLanguage",
        type: {
            name: "String"
        }
    }
};
const expiryTime = {
    parameterPath: ["options", "expiryTime"],
    mapper: {
        serializedName: "expiryTime",
        type: {
            name: "String"
        }
    }
};
const accept1 = {
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
const identifier1 = {
    parameterPath: "identifier",
    mapper: {
        serializedName: "identifier",
        required: true,
        type: {
            name: "String"
        }
    }
};
const redactHeadshot = {
    parameterPath: ["options", "redactHeadshot"],
    mapper: {
        defaultValue: true,
        serializedName: "redactHeadshot",
        type: {
            name: "Boolean"
        }
    }
};
const redactPersonalDetails = {
    parameterPath: ["options", "redactPersonalDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactPersonalDetails",
        type: {
            name: "Boolean"
        }
    }
};
const redactWorkDetails = {
    parameterPath: ["options", "redactWorkDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactWorkDetails",
        type: {
            name: "Boolean"
        }
    }
};
const redactEducationDetails = {
    parameterPath: ["options", "redactEducationDetails"],
    mapper: {
        defaultValue: true,
        serializedName: "redactEducationDetails",
        type: {
            name: "Boolean"
        }
    }
};
const redactReferees = {
    parameterPath: ["options", "redactReferees"],
    mapper: {
        defaultValue: true,
        serializedName: "redactReferees",
        type: {
            name: "Boolean"
        }
    }
};
const redactLocations = {
    parameterPath: ["options", "redactLocations"],
    mapper: {
        defaultValue: true,
        serializedName: "redactLocations",
        type: {
            name: "Boolean"
        }
    }
};
const redactDates = {
    parameterPath: ["options", "redactDates"],
    mapper: {
        defaultValue: true,
        serializedName: "redactDates",
        type: {
            name: "Boolean"
        }
    }
};
const resumeFormat = {
    parameterPath: "resumeFormat",
    mapper: {
        serializedName: "resumeFormat",
        required: true,
        type: {
            name: "String"
        }
    }
};

const Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Meta"
                        }
                    }
                }
            }
        }
    }
};
const Meta = {
    type: {
        name: "Composite",
        className: "Meta",
        modelProperties: {
            identifier: {
                serializedName: "identifier",
                required: true,
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            ready: {
                serializedName: "ready",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            readyDt: {
                serializedName: "readyDt",
                required: true,
                nullable: true,
                type: {
                    name: "DateTime"
                }
            },
            failed: {
                serializedName: "failed",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            user: {
                serializedName: "user",
                type: {
                    name: "Composite",
                    className: "User"
                }
            },
            expiryTime: {
                serializedName: "expiryTime",
                required: true,
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const User = {
    type: {
        name: "Composite",
        className: "User",
        modelProperties: {
            documentCount: {
                serializedName: "documentCount",
                type: {
                    name: "Number"
                }
            },
            redactedDocumentCount: {
                serializedName: "redactedDocumentCount",
                type: {
                    name: "Number"
                }
            },
            reformattedResumeCount: {
                serializedName: "reformattedResumeCount",
                type: {
                    name: "Number"
                }
            },
            parsingCredits: {
                serializedName: "parsingCredits",
                type: {
                    name: "Number"
                }
            },
            redactionCredits: {
                serializedName: "redactionCredits",
                type: {
                    name: "Number"
                }
            },
            reformattingCredits: {
                serializedName: "reformattingCredits",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema",
        modelProperties: {
            detail: {
                serializedName: "detail",
                type: {
                    name: "String"
                }
            },
            statusCode: {
                serializedName: "statusCode",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema",
        modelProperties: {
            fileForConversion: {
                serializedName: "fileForConversion",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema",
        modelProperties: {
            detail: {
                serializedName: "detail",
                type: {
                    name: "String"
                }
            },
            statusCode: {
                serializedName: "statusCode",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Resume = {
    type: {
        name: "Composite",
        className: "Resume",
        modelProperties: {
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "ResumeData"
                }
            },
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "Meta"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const ResumeData = {
    type: {
        name: "Composite",
        className: "ResumeData",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "Composite",
                    className: "ResumeDataName"
                }
            },
            phoneNumbers: {
                serializedName: "phoneNumbers",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            websites: {
                serializedName: "websites",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            emails: {
                serializedName: "emails",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            dateOfBirth: {
                serializedName: "dateOfBirth",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            objective: {
                serializedName: "objective",
                type: {
                    name: "String"
                }
            },
            languages: {
                serializedName: "languages",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            summary: {
                serializedName: "summary",
                type: {
                    name: "String"
                }
            },
            totalYearsExperience: {
                serializedName: "totalYearsExperience",
                type: {
                    name: "Number"
                }
            },
            headShot: {
                serializedName: "headShot",
                nullable: true,
                type: {
                    name: "Stream"
                }
            },
            education: {
                serializedName: "education",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataEducationItem"
                        }
                    }
                }
            },
            workExperience: {
                serializedName: "workExperience",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataWorkExperienceItem"
                        }
                    }
                }
            },
            skills: {
                serializedName: "skills",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            skillsDetails: {
                serializedName: "skillsDetails",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataSkillsDetailsItem"
                        }
                    }
                }
            },
            certifications: {
                serializedName: "certifications",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            publications: {
                serializedName: "publications",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            referees: {
                serializedName: "referees",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataRefereesItem"
                        }
                    }
                }
            },
            sections: {
                serializedName: "sections",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataSectionsItem"
                        }
                    }
                }
            },
            isResumeProbability: {
                serializedName: "isResumeProbability",
                nullable: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const ResumeDataName = {
    type: {
        name: "Composite",
        className: "ResumeDataName",
        modelProperties: {
            raw: {
                serializedName: "raw",
                type: {
                    name: "String"
                }
            },
            first: {
                serializedName: "first",
                type: {
                    name: "String"
                }
            },
            last: {
                serializedName: "last",
                type: {
                    name: "String"
                }
            },
            middle: {
                serializedName: "middle",
                type: {
                    name: "String"
                }
            },
            title: {
                serializedName: "title",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Location = {
    type: {
        name: "Composite",
        className: "Location",
        modelProperties: {
            formatted: {
                serializedName: "formatted",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            postalCode: {
                serializedName: "postalCode",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            state: {
                serializedName: "state",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            country: {
                serializedName: "country",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            rawInput: {
                serializedName: "rawInput",
                required: true,
                type: {
                    name: "String"
                }
            },
            streetNumber: {
                serializedName: "streetNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            street: {
                serializedName: "street",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            apartmentNumber: {
                serializedName: "apartmentNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            city: {
                serializedName: "city",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataEducationItem = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItem",
        modelProperties: {
            organization: {
                serializedName: "organization",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            accreditation: {
                serializedName: "accreditation",
                type: {
                    name: "Composite",
                    className: "ResumeDataEducationItemAccreditation"
                }
            },
            grade: {
                serializedName: "grade",
                type: {
                    name: "Composite",
                    className: "ResumeDataEducationItemGrade"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            dates: {
                serializedName: "dates",
                type: {
                    name: "Composite",
                    className: "ResumeDataEducationItemDates"
                }
            }
        }
    }
};
const ResumeDataEducationItemAccreditation = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItemAccreditation",
        modelProperties: {
            education: {
                serializedName: "education",
                type: {
                    name: "String"
                }
            },
            inputStr: {
                serializedName: "inputStr",
                type: {
                    name: "String"
                }
            },
            matchStr: {
                serializedName: "matchStr",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            educationLevel: {
                serializedName: "educationLevel",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataEducationItemGrade = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItemGrade",
        modelProperties: {
            raw: {
                serializedName: "raw",
                type: {
                    name: "String"
                }
            },
            metric: {
                serializedName: "metric",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataEducationItemDates = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItemDates",
        modelProperties: {
            completionDate: {
                serializedName: "completionDate",
                type: {
                    name: "Date"
                }
            },
            isCurrent: {
                serializedName: "isCurrent",
                type: {
                    name: "Boolean"
                }
            },
            startDate: {
                serializedName: "startDate",
                nullable: true,
                type: {
                    name: "Date"
                }
            }
        }
    }
};
const ResumeDataWorkExperienceItem = {
    type: {
        name: "Composite",
        className: "ResumeDataWorkExperienceItem",
        modelProperties: {
            jobTitle: {
                serializedName: "jobTitle",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            organization: {
                serializedName: "organization",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            jobDescription: {
                serializedName: "jobDescription",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            dates: {
                serializedName: "dates",
                type: {
                    name: "Composite",
                    className: "ResumeDataWorkExperienceItemDates"
                }
            }
        }
    }
};
const ResumeDataWorkExperienceItemDates = {
    type: {
        name: "Composite",
        className: "ResumeDataWorkExperienceItemDates",
        modelProperties: {
            startDate: {
                serializedName: "startDate",
                nullable: true,
                type: {
                    name: "Date"
                }
            },
            endDate: {
                serializedName: "endDate",
                nullable: true,
                type: {
                    name: "Date"
                }
            },
            monthsInPosition: {
                serializedName: "monthsInPosition",
                nullable: true,
                type: {
                    name: "Number"
                }
            },
            isCurrent: {
                serializedName: "isCurrent",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const ResumeDataSkillsDetailsItem = {
    type: {
        name: "Composite",
        className: "ResumeDataSkillsDetailsItem",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            lastUsed: {
                serializedName: "lastUsed",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            numberOfMonths: {
                serializedName: "numberOfMonths",
                nullable: true,
                type: {
                    name: "Number"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            sources: {
                serializedName: "sources",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataSkillsDetailsPropertiesItemsItem"
                        }
                    }
                }
            }
        }
    }
};
const ResumeDataSkillsDetailsPropertiesItemsItem = {
    type: {
        name: "Composite",
        className: "ResumeDataSkillsDetailsPropertiesItemsItem",
        modelProperties: {
            section: {
                serializedName: "section",
                type: {
                    name: "String"
                }
            },
            position: {
                serializedName: "position",
                nullable: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const ResumeDataRefereesItem = {
    type: {
        name: "Composite",
        className: "ResumeDataRefereesItem",
        modelProperties: {
            name: {
                serializedName: "name",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            text: {
                serializedName: "text",
                type: {
                    name: "String"
                }
            },
            email: {
                serializedName: "email",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            number: {
                serializedName: "number",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataSectionsItem = {
    type: {
        name: "Composite",
        className: "ResumeDataSectionsItem",
        modelProperties: {
            sectionType: {
                serializedName: "sectionType",
                type: {
                    name: "String"
                }
            },
            bbox: {
                constraints: {
                    MinItems: 4,
                    MaxItems: 4
                },
                serializedName: "bbox",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Number"
                        }
                    }
                }
            },
            pageIndex: {
                serializedName: "pageIndex",
                type: {
                    name: "Number"
                }
            },
            text: {
                serializedName: "text",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ErrorModel = {
    type: {
        name: "Composite",
        className: "ErrorModel",
        modelProperties: {
            errorCode: {
                serializedName: "errorCode",
                required: true,
                nullable: true,
                type: {
                    name: "Number"
                }
            },
            errorDetail: {
                serializedName: "errorDetail",
                required: true,
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Meta"
                        }
                    }
                }
            }
        }
    }
};
const Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            identifier: {
                serializedName: "identifier",
                type: {
                    name: "String"
                }
            },
            redactHeadshot: {
                serializedName: "redactHeadshot",
                type: {
                    name: "Boolean"
                }
            },
            redactPersonalDetails: {
                serializedName: "redactPersonalDetails",
                type: {
                    name: "Boolean"
                }
            },
            redactWorkDetails: {
                serializedName: "redactWorkDetails",
                type: {
                    name: "Boolean"
                }
            },
            redactEducationDetails: {
                serializedName: "redactEducationDetails",
                type: {
                    name: "Boolean"
                }
            },
            redactReferees: {
                serializedName: "redactReferees",
                type: {
                    name: "Boolean"
                }
            },
            redactLocations: {
                serializedName: "redactLocations",
                type: {
                    name: "Boolean"
                }
            },
            redactDates: {
                serializedName: "redactDates",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const RedactedDocument = {
    type: {
        name: "Composite",
        className: "RedactedDocument",
        modelProperties: {
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "RedactedDocumentData"
                }
            },
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "Meta"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const RedactedDocumentData = {
    type: {
        name: "Composite",
        className: "RedactedDocumentData",
        modelProperties: {
            redactedPdf: {
                serializedName: "redactedPdf",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Get200ApplicationJsonPropertiesItemsItem"
                        }
                    }
                }
            }
        }
    }
};
const Get200ApplicationJsonPropertiesItemsItem = {
    type: {
        name: "Composite",
        className: "Get200ApplicationJsonPropertiesItemsItem",
        modelProperties: {
            identifier: {
                serializedName: "identifier",
                required: true,
                type: {
                    name: "String"
                }
            },
            formatFile: {
                serializedName: "formatFile",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Meta"
                        }
                    }
                }
            }
        }
    }
};
const Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            resumeFormat: {
                serializedName: "resumeFormat",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ReformattedDocument = {
    type: {
        name: "Composite",
        className: "ReformattedDocument",
        modelProperties: {
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "ReformattedDocumentData"
                }
            },
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "Meta"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const ReformattedDocumentData = {
    type: {
        name: "Composite",
        className: "ReformattedDocumentData",
        modelProperties: {
            reformattedFile: {
                serializedName: "reformattedFile",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            wait: {
                serializedName: "wait",
                nullable: true,
                type: {
                    name: "Boolean"
                }
            },
            resumeLanguage: {
                serializedName: "resumeLanguage",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            expiryTime: {
                serializedName: "expiryTime",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            resumeLanguage: {
                serializedName: "resumeLanguage",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            redactHeadshot: {
                defaultValue: true,
                serializedName: "redactHeadshot",
                type: {
                    name: "Boolean"
                }
            },
            redactPersonalDetails: {
                defaultValue: true,
                serializedName: "redactPersonalDetails",
                type: {
                    name: "Boolean"
                }
            },
            redactWorkDetails: {
                defaultValue: true,
                serializedName: "redactWorkDetails",
                type: {
                    name: "Boolean"
                }
            },
            redactEducationDetails: {
                defaultValue: true,
                serializedName: "redactEducationDetails",
                type: {
                    name: "Boolean"
                }
            },
            redactReferees: {
                defaultValue: true,
                serializedName: "redactReferees",
                type: {
                    name: "Boolean"
                }
            },
            redactLocations: {
                defaultValue: true,
                serializedName: "redactLocations",
                type: {
                    name: "Boolean"
                }
            },
            redactDates: {
                defaultValue: true,
                serializedName: "redactDates",
                type: {
                    name: "Boolean"
                }
            },
            expiryTime: {
                serializedName: "expiryTime",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            resumeLanguage: {
                serializedName: "resumeLanguage",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            resumeFormat: {
                serializedName: "resumeFormat",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};

var Mappers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema: Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema,
    Meta: Meta,
    User: User,
    ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema,
    PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema: PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema,
    Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema: Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema,
    ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema,
    Resume: Resume,
    ResumeData: ResumeData,
    ResumeDataName: ResumeDataName,
    Location: Location,
    ResumeDataEducationItem: ResumeDataEducationItem,
    ResumeDataEducationItemAccreditation: ResumeDataEducationItemAccreditation,
    ResumeDataEducationItemGrade: ResumeDataEducationItemGrade,
    ResumeDataEducationItemDates: ResumeDataEducationItemDates,
    ResumeDataWorkExperienceItem: ResumeDataWorkExperienceItem,
    ResumeDataWorkExperienceItemDates: ResumeDataWorkExperienceItemDates,
    ResumeDataSkillsDetailsItem: ResumeDataSkillsDetailsItem,
    ResumeDataSkillsDetailsPropertiesItemsItem: ResumeDataSkillsDetailsPropertiesItemsItem,
    ResumeDataRefereesItem: ResumeDataRefereesItem,
    ResumeDataSectionsItem: ResumeDataSectionsItem,
    ErrorModel: ErrorModel,
    Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema: Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema,
    Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema: Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema,
    RedactedDocument: RedactedDocument,
    RedactedDocumentData: RedactedDocumentData,
    Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema: Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema,
    Get200ApplicationJsonPropertiesItemsItem: Get200ApplicationJsonPropertiesItemsItem,
    Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema: Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema,
    Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema: Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema,
    ReformattedDocument: ReformattedDocument,
    ReformattedDocumentData: ReformattedDocumentData,
    Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema: Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema,
    Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema: Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema,
    PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema: PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema
});

class AffindaAPIContext extends coreClient.ServiceClient {
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8",
            credential: credentials
        };
        const packageDetails = `azsdk-js-affinda/0.1.0`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        if (!options.credentialScopes) {
            options.credentialScopes = ["https://management.azure.com/.default"];
        }
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix
            }, baseUri: options.endpoint || "https://api.affinda.com/v1" });
        super(optionsWithDefaults);
        // Assigning values to Constant parameters
        this.$host = options.$host || "https://api.affinda.com/v1";
    }
}

class AffindaAPI extends AffindaAPIContext {
    /**
     * Initializes a new instance of the AffindaAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        super(credentials, options);
    }
    /**
     * Returns all the resume summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllResumes(options) {
        return this.sendOperationRequest({ options }, getAllResumesOperationSpec);
    }
    /**
     * Uploads a resume for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createResume(options) {
        return this.sendOperationRequest({ options }, createResumeOperationSpec);
    }
    /**
     * Returns all the parse results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#operation/createResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteResumeOperationSpec);
    }
    /**
     * Returns all the redacted resume information for that resume
     * @param options The options parameters.
     */
    getAllRedactedResumes(options) {
        return this.sendOperationRequest({ options }, getAllRedactedResumesOperationSpec);
    }
    /**
     * Uploads a resume for redacting.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/redacted_resumes/{identifier}](#operation/getRedactedResume) endpoint to check processing status
     * and retrieve results.
     * @param options The options parameters.
     */
    createRedactedResume(options) {
        return this.sendOperationRequest({ options }, createRedactedResumeOperationSpec);
    }
    /**
     * Returns all the redaction results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/redacted_resumes](#operation/createRedactedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getRedactedResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteRedactedResumeOperationSpec);
    }
    /**
     * Returns all the resume formats
     * @param options The options parameters.
     */
    getAllResumeFormats(options) {
        return this.sendOperationRequest({ options }, getAllResumeFormatsOperationSpec);
    }
    /**
     * Returns all the reformatted resume information for that resume
     * @param options The options parameters.
     */
    getAllReformattedResumes(options) {
        return this.sendOperationRequest({ options }, getAllReformattedResumesOperationSpec);
    }
    /**
     * Uploads a resume for reformatting.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/reformatted_resumes/{identifier}](#operation/getReformattedResume) endpoint to check processing
     * status and retrieve results.
     * @param resumeFormat Identifier of the format used
     * @param options The options parameters.
     */
    createReformattedResume(resumeFormat, options) {
        return this.sendOperationRequest({ resumeFormat, options }, createReformattedResumeOperationSpec);
    }
    /**
     * Returns all the reformatting results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/reformatted_resumes](#operation/createReformattedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getReformattedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getReformattedResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteReformattedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteReformattedResumeOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getAllResumesOperationSpec = {
    path: "/resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [limit, offset],
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const createResumeOperationSpec = {
    path: "/resumes",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    formDataParameters: [
        file,
        identifier,
        fileName,
        url,
        wait,
        resumeLanguage,
        expiryTime
    ],
    urlParameters: [$host],
    headerParameters: [contentType, accept1],
    serializer
};
const getResumeOperationSpec = {
    path: "/resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Resume
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [$host, identifier1],
    headerParameters: [accept],
    serializer
};
const deleteResumeOperationSpec = {
    path: "/resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [$host, identifier1],
    headerParameters: [accept],
    serializer
};
const getAllRedactedResumesOperationSpec = {
    path: "/redacted_resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [limit, offset],
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const createRedactedResumeOperationSpec = {
    path: "/redacted_resumes",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    formDataParameters: [
        file,
        identifier,
        fileName,
        url,
        resumeLanguage,
        expiryTime,
        redactHeadshot,
        redactPersonalDetails,
        redactWorkDetails,
        redactEducationDetails,
        redactReferees,
        redactLocations,
        redactDates
    ],
    urlParameters: [$host],
    headerParameters: [contentType, accept1],
    serializer
};
const getRedactedResumeOperationSpec = {
    path: "/redacted_resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: RedactedDocument
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [$host, identifier1],
    headerParameters: [accept],
    serializer
};
const deleteRedactedResumeOperationSpec = {
    path: "/redacted_resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [$host, identifier1],
    headerParameters: [accept],
    serializer
};
const getAllResumeFormatsOperationSpec = {
    path: "/resume_formats",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [limit, offset],
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const getAllReformattedResumesOperationSpec = {
    path: "/reformatted_resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    queryParameters: [limit, offset],
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const createReformattedResumeOperationSpec = {
    path: "/reformatted_resumes",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    formDataParameters: [
        file,
        identifier,
        fileName,
        url,
        resumeLanguage,
        resumeFormat
    ],
    urlParameters: [$host],
    headerParameters: [contentType, accept1],
    serializer
};
const getReformattedResumeOperationSpec = {
    path: "/reformatted_resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: ReformattedDocument
        },
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [$host, identifier1],
    headerParameters: [accept],
    serializer
};
const deleteReformattedResumeOperationSpec = {
    path: "/reformatted_resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        401: {
            bodyMapper: ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema
        },
        404: {
            bodyMapper: ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema
        }
    },
    urlParameters: [$host, identifier1],
    headerParameters: [accept],
    serializer
};

exports.AffindaAPI = AffindaAPI;
exports.AffindaAPIContext = AffindaAPIContext;
//# sourceMappingURL=index.js.map
