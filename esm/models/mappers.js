"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema = exports.Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema = exports.Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema = exports.ReformattedDocumentData = exports.ReformattedDocument = exports.Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema = exports.Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema = exports.Get200ApplicationJsonPropertiesItemsItem = exports.Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema = exports.RedactedDocumentData = exports.RedactedDocument = exports.Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema = exports.Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema = exports.ErrorModel = exports.ResumeDataSectionsItem = exports.ResumeDataRefereesItem = exports.ResumeDataSkillsDetailsPropertiesItemsItem = exports.ResumeDataSkillsDetailsItem = exports.ResumeDataWorkExperienceItemDates = exports.ResumeDataWorkExperienceItem = exports.ResumeDataEducationItemDates = exports.ResumeDataEducationItemGrade = exports.ResumeDataEducationItemAccreditation = exports.ResumeDataEducationItem = exports.Location = exports.ResumeDataName = exports.ResumeData = exports.Resume = exports.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema = exports.Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema = exports.PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema = exports.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema = exports.User = exports.Meta = exports.Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema = void 0;
exports.Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema = {
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
exports.Meta = {
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
exports.User = {
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
exports.ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema = {
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
exports.PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema = {
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
exports.Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema = {
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
exports.ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema = {
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
exports.Resume = {
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
exports.ResumeData = {
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
exports.ResumeDataName = {
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
exports.Location = {
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
exports.ResumeDataEducationItem = {
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
exports.ResumeDataEducationItemAccreditation = {
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
exports.ResumeDataEducationItemGrade = {
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
exports.ResumeDataEducationItemDates = {
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
exports.ResumeDataWorkExperienceItem = {
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
exports.ResumeDataWorkExperienceItemDates = {
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
exports.ResumeDataSkillsDetailsItem = {
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
exports.ResumeDataSkillsDetailsPropertiesItemsItem = {
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
exports.ResumeDataRefereesItem = {
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
exports.ResumeDataSectionsItem = {
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
exports.ErrorModel = {
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
exports.Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema = {
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
exports.Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema = {
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
exports.RedactedDocument = {
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
exports.RedactedDocumentData = {
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
exports.Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema = {
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
exports.Get200ApplicationJsonPropertiesItemsItem = {
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
exports.Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema = {
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
exports.Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema = {
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
exports.ReformattedDocument = {
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
exports.ReformattedDocumentData = {
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
exports.Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema = {
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
exports.Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema = {
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
exports.PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema = {
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
//# sourceMappingURL=mappers.js.map