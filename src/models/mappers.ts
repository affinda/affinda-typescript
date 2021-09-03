import * as coreClient from "@azure/core-client";

export const GetAllDocumentsResults: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAllDocumentsResults",
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

export const Meta: coreClient.CompositeMapper = {
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

export const ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema: coreClient.CompositeMapper = {
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

export const Resume: coreClient.CompositeMapper = {
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

export const ResumeData: coreClient.CompositeMapper = {
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
              name: "Composite",
              className: "ResumeDataSkillsItem"
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
        type: {
          name: "Number"
        }
      },
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResumeDataName: coreClient.CompositeMapper = {
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

export const Location: coreClient.CompositeMapper = {
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

export const ResumeDataEducationItem: coreClient.CompositeMapper = {
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

export const ResumeDataEducationItemAccreditation: coreClient.CompositeMapper = {
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

export const ResumeDataEducationItemGrade: coreClient.CompositeMapper = {
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

export const ResumeDataEducationItemDates: coreClient.CompositeMapper = {
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

export const ResumeDataWorkExperienceItem: coreClient.CompositeMapper = {
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

export const ResumeDataWorkExperienceItemDates: coreClient.CompositeMapper = {
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

export const ResumeDataSkillsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataSkillsItem",
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
              className: "ResumeDataSkillsPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const ResumeDataSkillsPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataSkillsPropertiesItemsItem",
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

export const ResumeDataRefereesItem: coreClient.CompositeMapper = {
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

export const ResumeDataSectionsItem: coreClient.CompositeMapper = {
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

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      errorCode: {
        serializedName: "errorCode",
        nullable: true,
        type: {
          name: "String"
        }
      },
      errorDetail: {
        serializedName: "errorDetail",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components8Sxs33Responses400ErrorContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components8Sxs33Responses400ErrorContentApplicationJsonSchema",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number"
        }
      },
      detail: {
        serializedName: "detail",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema: coreClient.CompositeMapper = {
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

export const RedactedResume: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedactedResume",
    modelProperties: {
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "RedactedResumeData"
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

export const RedactedResumeData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedactedResumeData",
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

export const Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema",
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

export const Get200ApplicationJsonPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Get200ApplicationJsonPropertiesItemsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        nullable: true,
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

export const ReformattedResume: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReformattedResume",
    modelProperties: {
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "ReformattedResumeData"
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

export const ReformattedResumeData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReformattedResumeData",
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

export const Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema",
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

export const Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema",
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
      wait: {
        serializedName: "wait",
        type: {
          name: "String"
        }
      },
      redactHeadshot: {
        defaultValue: "true",
        serializedName: "redactHeadshot",
        type: {
          name: "String"
        }
      },
      redactPersonalDetails: {
        defaultValue: "true",
        serializedName: "redactPersonalDetails",
        type: {
          name: "String"
        }
      },
      redactWorkDetails: {
        defaultValue: "true",
        serializedName: "redactWorkDetails",
        type: {
          name: "String"
        }
      },
      redactEducationDetails: {
        defaultValue: "true",
        serializedName: "redactEducationDetails",
        type: {
          name: "String"
        }
      },
      redactReferees: {
        defaultValue: "true",
        serializedName: "redactReferees",
        type: {
          name: "String"
        }
      },
      redactLocations: {
        defaultValue: "true",
        serializedName: "redactLocations",
        type: {
          name: "String"
        }
      },
      redactDates: {
        defaultValue: "true",
        serializedName: "redactDates",
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

export const PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema",
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
      },
      wait: {
        serializedName: "wait",
        type: {
          name: "String"
        }
      }
    }
  }
};
