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

export const RequestError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RequestError",
    modelProperties: {
      detail: {
        serializedName: "detail",
        required: true,
        type: {
          name: "String"
        }
      },
      statusCode: {
        serializedName: "statusCode",
        required: true,
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
          name: "ByteArray"
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
      profession: {
        serializedName: "profession",
        nullable: true,
        type: {
          name: "String"
        }
      },
      linkedin: {
        serializedName: "linkedin",
        nullable: true,
        type: {
          name: "String"
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
      countryCode: {
        serializedName: "countryCode",
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
      },
      occupation: {
        serializedName: "occupation",
        type: {
          name: "Composite",
          className: "ResumeDataWorkExperienceItemOccupation"
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

export const ResumeDataWorkExperienceItemOccupation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataWorkExperienceItemOccupation",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        nullable: true,
        type: {
          name: "String"
        }
      },
      jobTitleNormalized: {
        serializedName: "jobTitleNormalized",
        nullable: true,
        type: {
          name: "String"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        type: {
          name: "Enum",
          allowedValues: ["Low", "Mid", "Upper"]
        }
      },
      classification: {
        serializedName: "classification",
        type: {
          name: "Composite",
          className:
            "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification"
        }
      }
    }
  }
};

export const Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      minorGroup: {
        serializedName: "minorGroup",
        type: {
          name: "String"
        }
      },
      subMajorGroup: {
        serializedName: "subMajorGroup",
        type: {
          name: "String"
        }
      },
      majorGroup: {
        serializedName: "majorGroup",
        type: {
          name: "String"
        }
      },
      socCode: {
        serializedName: "socCode",
        type: {
          name: "Number"
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

export const ResumeSearchParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParameters",
    modelProperties: {
      indices: {
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
      },
      jobDescription: {
        serializedName: "jobDescription",
        nullable: true,
        type: {
          name: "String"
        }
      },
      jobTitles: {
        serializedName: "jobTitles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      jobTitlesCurrentOnly: {
        serializedName: "jobTitlesCurrentOnly",
        type: {
          name: "Boolean"
        }
      },
      jobTitlesRequired: {
        serializedName: "jobTitlesRequired",
        type: {
          name: "Boolean"
        }
      },
      jobTitlesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "jobTitlesWeight",
        type: {
          name: "Number"
        }
      },
      yearsExperienceMin: {
        serializedName: "yearsExperienceMin",
        type: {
          name: "Number"
        }
      },
      yearsExperienceMax: {
        serializedName: "yearsExperienceMax",
        type: {
          name: "Number"
        }
      },
      yearsExperienceRequired: {
        serializedName: "yearsExperienceRequired",
        type: {
          name: "Boolean"
        }
      },
      yearsExperienceWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "yearsExperienceWeight",
        type: {
          name: "Number"
        }
      },
      locations: {
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
      },
      locationsWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "locationsWeight",
        type: {
          name: "Number"
        }
      },
      locationsRequired: {
        serializedName: "locationsRequired",
        type: {
          name: "Boolean"
        }
      },
      skills: {
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
      },
      skillsWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "skillsWeight",
        type: {
          name: "Number"
        }
      },
      languages: {
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
      },
      languagesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "languagesWeight",
        type: {
          name: "Number"
        }
      },
      institutions: {
        serializedName: "institutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      institutionsRequired: {
        serializedName: "institutionsRequired",
        type: {
          name: "Boolean"
        }
      },
      degrees: {
        serializedName: "degrees",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      degreesRequired: {
        serializedName: "degreesRequired",
        type: {
          name: "Boolean"
        }
      },
      highestDegreeTypes: {
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
      },
      highestDegreeTypesRequired: {
        serializedName: "highestDegreeTypesRequired",
        type: {
          name: "Boolean"
        }
      },
      isCurrentStudent: {
        serializedName: "isCurrentStudent",
        type: {
          name: "Boolean"
        }
      },
      isCurrentStudentRequired: {
        serializedName: "isCurrentStudentRequired",
        type: {
          name: "Boolean"
        }
      },
      isRecentGraduate: {
        serializedName: "isRecentGraduate",
        type: {
          name: "Boolean"
        }
      },
      isRecentGraduateRequired: {
        serializedName: "isRecentGraduateRequired",
        type: {
          name: "Boolean"
        }
      },
      educationWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "educationWeight",
        type: {
          name: "Number"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "String"
        }
      },
      searchExpressionRequired: {
        serializedName: "searchExpressionRequired",
        type: {
          name: "Boolean"
        }
      },
      searchExpressionWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "searchExpressionWeight",
        type: {
          name: "Number"
        }
      },
      socCodes: {
        serializedName: "socCodes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      socCodesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "socCodesWeight",
        type: {
          name: "Number"
        }
      },
      socCodesRequired: {
        serializedName: "socCodesRequired",
        type: {
          name: "Boolean"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        type: {
          name: "Enum",
          allowedValues: ["Low", "Mid", "Upper"]
        }
      },
      managementLevelRequired: {
        serializedName: "managementLevelRequired",
        type: {
          name: "Boolean"
        }
      },
      managementLevelWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "managementLevelWeight",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeSearchParametersLocationsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLocationsItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      coordinates: {
        serializedName: "coordinates",
        type: {
          name: "Composite",
          className: "ResumeSearchParametersLocationsItemCoordinates"
        }
      },
      distance: {
        serializedName: "distance",
        type: {
          name: "Number"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "Enum",
          allowedValues: ["km", "mi"]
        }
      }
    }
  }
};

export const ResumeSearchParametersLocationsItemCoordinates: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLocationsItemCoordinates",
    modelProperties: {
      latitude: {
        serializedName: "latitude",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      longitude: {
        serializedName: "longitude",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeSearchParametersSkillsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersSkillsItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      required: {
        serializedName: "required",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchParametersLanguagesItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLanguagesItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      required: {
        serializedName: "required",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearch",
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
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Composite",
          className: "ResumeSearchParameters"
        }
      },
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchResult"
            }
          }
        }
      }
    }
  }
};

export const ResumeSearchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchResult",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        required: true,
        type: {
          name: "Number"
        }
      },
      pdf: {
        serializedName: "pdf",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "ResumeSearchScoreComponent"
        }
      }
    }
  }
};

export const ResumeSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchScoreComponent",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetAllJobDescriptionsResults: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAllJobDescriptionsResults",
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

export const JobDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescription",
    modelProperties: {
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "JobDescriptionData"
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

export const JobDescriptionData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionData",
    modelProperties: {
      contactEmail: {
        serializedName: "contactEmail",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      contactName: {
        serializedName: "contactName",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      contactPhone: {
        serializedName: "contactPhone",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      startDate: {
        serializedName: "startDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      endDate: {
        serializedName: "endDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      jobType: {
        serializedName: "jobType",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguageAnnotation"
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
              className: "SkillAnnotation"
            }
          }
        }
      },
      organizationName: {
        serializedName: "organizationName",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      organizationWebsite: {
        serializedName: "organizationWebsite",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      educationLevel: {
        serializedName: "educationLevel",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      educationAccreditation: {
        serializedName: "educationAccreditation",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      expectedRemuneration: {
        serializedName: "expectedRemuneration",
        type: {
          name: "Composite",
          className: "ExpectedRemunerationAnnotation"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      certifications: {
        serializedName: "certifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextAnnotation"
            }
          }
        }
      }
    }
  }
};

export const Annotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Annotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      rectangle: {
        serializedName: "rectangle",
        type: {
          name: "Composite",
          className: "Rectangle"
        }
      },
      pageIndex: {
        serializedName: "pageIndex",
        required: true,
        nullable: true,
        type: {
          name: "Number"
        }
      },
      raw: {
        serializedName: "raw",
        required: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      confidence: {
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      },
      isVerified: {
        serializedName: "isVerified",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      classification: {
        serializedName: "classification",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Rectangle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Rectangle",
    modelProperties: {
      x0: {
        serializedName: "x0",
        required: true,
        type: {
          name: "Number"
        }
      },
      y0: {
        serializedName: "y0",
        required: true,
        type: {
          name: "Number"
        }
      },
      x1: {
        serializedName: "x1",
        required: true,
        type: {
          name: "Number"
        }
      },
      y1: {
        serializedName: "y1",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ExpectedRemunerationAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExpectedRemunerationAnnotationParsed",
    modelProperties: {
      minimum: {
        serializedName: "minimum",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      maximum: {
        serializedName: "maximum",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      currency: {
        serializedName: "currency",
        nullable: true,
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema",
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
              className:
                "Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems"
            }
          }
        }
      }
    }
  }
};

export const Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema",
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
              className:
                "PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems"
            }
          }
        }
      }
    }
  }
};

export const PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems",
    modelProperties: {
      document: {
        serializedName: "document",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      document: {
        serializedName: "document",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema",
    modelProperties: {
      document: {
        serializedName: "document",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetAllInvoicesResults: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAllInvoicesResults",
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

export const Invoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Invoice",
    modelProperties: {
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "InvoiceData"
        }
      },
      meta: {
        serializedName: "meta",
        type: {
          name: "Composite",
          className: "InvoiceMeta"
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

export const InvoiceData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceData",
    modelProperties: {
      invoiceDate: {
        serializedName: "invoiceDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      invoiceOrderDate: {
        serializedName: "invoiceOrderDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      paymentDateDue: {
        serializedName: "paymentDateDue",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      paymentAmountBase: {
        serializedName: "paymentAmountBase",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountBase"
        }
      },
      paymentAmountTax: {
        serializedName: "paymentAmountTax",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountTax"
        }
      },
      paymentAmountTotal: {
        serializedName: "paymentAmountTotal",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountTotal"
        }
      },
      paymentAmountPaid: {
        serializedName: "paymentAmountPaid",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountPaid"
        }
      },
      paymentAmountDue: {
        serializedName: "paymentAmountDue",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountDue"
        }
      },
      invoiceNumber: {
        serializedName: "invoiceNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataInvoiceNumber"
        }
      },
      invoicePurchaseOrderNumber: {
        serializedName: "invoicePurchaseOrderNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataInvoicePurchaseOrderNumber"
        }
      },
      supplierBusinessNumber: {
        serializedName: "supplierBusinessNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierBusinessNumber"
        }
      },
      customerNumber: {
        serializedName: "customerNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerNumber"
        }
      },
      customerBusinessNumber: {
        serializedName: "customerBusinessNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerBusinessNumber"
        }
      },
      paymentReference: {
        serializedName: "paymentReference",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentReference"
        }
      },
      bankAccountNumber: {
        serializedName: "bankAccountNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataBankAccountNumber"
        }
      },
      supplierVAT: {
        serializedName: "supplierVAT",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierVAT"
        }
      },
      customerVAT: {
        serializedName: "customerVAT",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerVAT"
        }
      },
      bpayBillerCode: {
        serializedName: "bpayBillerCode",
        type: {
          name: "Composite",
          className: "InvoiceDataBpayBillerCode"
        }
      },
      bpayReference: {
        serializedName: "bpayReference",
        type: {
          name: "Composite",
          className: "InvoiceDataBpayReference"
        }
      },
      bankSortCode: {
        serializedName: "bankSortCode",
        type: {
          name: "Composite",
          className: "InvoiceDataBankSortCode"
        }
      },
      bankIban: {
        serializedName: "bankIBAN",
        type: {
          name: "Composite",
          className: "InvoiceDataBankIban"
        }
      },
      bankSwift: {
        serializedName: "bankSwift",
        type: {
          name: "Composite",
          className: "InvoiceDataBankSwift"
        }
      },
      bankBSB: {
        serializedName: "bankBSB",
        type: {
          name: "Composite",
          className: "InvoiceDataBankBSB"
        }
      },
      customerContactName: {
        serializedName: "customerContactName",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerContactName"
        }
      },
      customerCompanyName: {
        serializedName: "customerCompanyName",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerCompanyName"
        }
      },
      supplierCompanyName: {
        serializedName: "supplierCompanyName",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierCompanyName"
        }
      },
      customerBillingAddress: {
        serializedName: "customerBillingAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      customerDeliveryAddress: {
        serializedName: "customerDeliveryAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      supplierAddress: {
        serializedName: "supplierAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      customerPhoneNumber: {
        serializedName: "customerPhoneNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerPhoneNumber"
        }
      },
      supplierPhoneNumber: {
        serializedName: "supplierPhoneNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierPhoneNumber"
        }
      },
      supplierFax: {
        serializedName: "supplierFax",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierFax"
        }
      },
      customerEmail: {
        serializedName: "customerEmail",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerEmail"
        }
      },
      supplierEmail: {
        serializedName: "supplierEmail",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierEmail"
        }
      },
      supplierWebsite: {
        serializedName: "supplierWebsite",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierWebsite"
        }
      }
    }
  }
};

export const ComponentsTz04ToSchemasInvoicedataPropertiesPaymentamountbaseAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsTz04ToSchemasInvoicedataPropertiesPaymentamountbaseAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsY49P83SchemasInvoicedataPropertiesPaymentamounttaxAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsY49P83SchemasInvoicedataPropertiesPaymentamounttaxAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components15Ayv0YSchemasInvoicedataPropertiesPaymentamounttotalAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components15Ayv0YSchemasInvoicedataPropertiesPaymentamounttotalAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1LdfgdeSchemasInvoicedataPropertiesPaymentamountpaidAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1LdfgdeSchemasInvoicedataPropertiesPaymentamountpaidAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components14V23KqSchemasInvoicedataPropertiesPaymentamountdueAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components14V23KqSchemasInvoicedataPropertiesPaymentamountdueAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components7CqvqpSchemasInvoicedataPropertiesInvoicenumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components7CqvqpSchemasInvoicedataPropertiesInvoicenumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components55Nj82SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components55Nj82SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsYe0TzySchemasInvoicedataPropertiesSupplierbusinessnumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsYe0TzySchemasInvoicedataPropertiesSupplierbusinessnumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components2Hu973SchemasInvoicedataPropertiesCustomernumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components2Hu973SchemasInvoicedataPropertiesCustomernumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsRft7JdSchemasInvoicedataPropertiesCustomerbusinessnumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsRft7JdSchemasInvoicedataPropertiesCustomerbusinessnumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Wx56HlSchemasInvoicedataPropertiesPaymentreferenceAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Wx56HlSchemasInvoicedataPropertiesPaymentreferenceAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components14Dm0XSchemasInvoicedataPropertiesBankaccountnumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components14Dm0XSchemasInvoicedataPropertiesBankaccountnumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Fdmi0OSchemasInvoicedataPropertiesSuppliervatAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components1Fdmi0OSchemasInvoicedataPropertiesSuppliervatAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsRsi73USchemasInvoicedataPropertiesCustomervatAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComponentsRsi73USchemasInvoicedataPropertiesCustomervatAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Bh8NlbSchemasInvoicedataPropertiesBpaybillercodeAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Bh8NlbSchemasInvoicedataPropertiesBpaybillercodeAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1OmsnpSchemasInvoicedataPropertiesBpayreferenceAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1OmsnpSchemasInvoicedataPropertiesBpayreferenceAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Rbm6P1SchemasInvoicedataPropertiesBanksortcodeAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Rbm6P1SchemasInvoicedataPropertiesBanksortcodeAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsE6Bjv3SchemasInvoicedataPropertiesBankibanAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComponentsE6Bjv3SchemasInvoicedataPropertiesBankibanAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components11Zi81FSchemasInvoicedataPropertiesBankswiftAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components11Zi81FSchemasInvoicedataPropertiesBankswiftAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsUilt2MSchemasInvoicedataPropertiesBankbsbAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComponentsUilt2MSchemasInvoicedataPropertiesBankbsbAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsWywi9WSchemasInvoicedataPropertiesCustomercontactnameAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsWywi9WSchemasInvoicedataPropertiesCustomercontactnameAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components6DhvidSchemasInvoicedataPropertiesCustomercompanynameAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components6DhvidSchemasInvoicedataPropertiesCustomercompanynameAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1O4BmpySchemasInvoicedataPropertiesSuppliercompanynameAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1O4BmpySchemasInvoicedataPropertiesSuppliercompanynameAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsPs8Uo7SchemasInvoicedataPropertiesCustomerphonenumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsPs8Uo7SchemasInvoicedataPropertiesCustomerphonenumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsBvthtoSchemasInvoicedataPropertiesSupplierphonenumberAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsBvthtoSchemasInvoicedataPropertiesSupplierphonenumberAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1ByjheSchemasInvoicedataPropertiesSupplierfaxAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components1ByjheSchemasInvoicedataPropertiesSupplierfaxAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components5PwavySchemasInvoicedataPropertiesCustomeremailAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components5PwavySchemasInvoicedataPropertiesCustomeremailAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsVyrnzuSchemasInvoicedataPropertiesSupplieremailAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsVyrnzuSchemasInvoicedataPropertiesSupplieremailAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components179Pdz6SchemasInvoicedataPropertiesSupplierwebsiteAllof2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components179Pdz6SchemasInvoicedataPropertiesSupplierwebsiteAllof2",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components17Ashz6SchemasInvoicePropertiesMetaAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components17Ashz6SchemasInvoicePropertiesMetaAllof1",
    modelProperties: {
      reviewUrl: {
        serializedName: "reviewUrl",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OccupationGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OccupationGroup",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      children: {
        serializedName: "children",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OccupationGroup"
            }
          }
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
        defaultValue: "true",
        serializedName: "wait",
        type: {
          name: "String"
        }
      },
      language: {
        serializedName: "language",
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
      language: {
        serializedName: "language",
        nullable: true,
        type: {
          name: "String"
        }
      },
      wait: {
        defaultValue: "true",
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
      redactGender: {
        defaultValue: "true",
        serializedName: "redactGender",
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
      language: {
        serializedName: "language",
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
        defaultValue: "true",
        serializedName: "wait",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsYlw96JobDescriptionsPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsYlw96JobDescriptionsPostRequestbodyContentMultipartFormDataSchema",
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
        defaultValue: "true",
        serializedName: "wait",
        type: {
          name: "String"
        }
      },
      language: {
        serializedName: "language",
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

export const PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema",
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
        defaultValue: "true",
        serializedName: "wait",
        type: {
          name: "String"
        }
      },
      language: {
        serializedName: "language",
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

export const InvoiceMeta: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceMeta",
    modelProperties: {
      ...Meta.type.modelProperties,
      ...Components17Ashz6SchemasInvoicePropertiesMetaAllof1.type
        .modelProperties
    }
  }
};

export const TextAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DateAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DateAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const LanguageAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LanguageAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkillAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkillAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExpectedRemunerationAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExpectedRemunerationAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "ExpectedRemunerationAnnotationParsed"
        }
      }
    }
  }
};

export const LocationAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "Location"
        }
      }
    }
  }
};

export const InvoiceDataPaymentAmountBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataPaymentAmountBase",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsTz04ToSchemasInvoicedataPropertiesPaymentamountbaseAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataPaymentAmountTax: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataPaymentAmountTax",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsY49P83SchemasInvoicedataPropertiesPaymentamounttaxAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataPaymentAmountTotal: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataPaymentAmountTotal",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components15Ayv0YSchemasInvoicedataPropertiesPaymentamounttotalAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataPaymentAmountPaid: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataPaymentAmountPaid",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1LdfgdeSchemasInvoicedataPropertiesPaymentamountpaidAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataPaymentAmountDue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataPaymentAmountDue",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components14V23KqSchemasInvoicedataPropertiesPaymentamountdueAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataInvoiceNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataInvoiceNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components7CqvqpSchemasInvoicedataPropertiesInvoicenumberAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataInvoicePurchaseOrderNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataInvoicePurchaseOrderNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components55Nj82SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataSupplierBusinessNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierBusinessNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsYe0TzySchemasInvoicedataPropertiesSupplierbusinessnumberAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataCustomerNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components2Hu973SchemasInvoicedataPropertiesCustomernumberAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataCustomerBusinessNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerBusinessNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsRft7JdSchemasInvoicedataPropertiesCustomerbusinessnumberAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataPaymentReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataPaymentReference",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1Wx56HlSchemasInvoicedataPropertiesPaymentreferenceAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataBankAccountNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBankAccountNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components14Dm0XSchemasInvoicedataPropertiesBankaccountnumberAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataSupplierVAT: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierVAT",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1Fdmi0OSchemasInvoicedataPropertiesSuppliervatAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataCustomerVAT: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerVAT",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsRsi73USchemasInvoicedataPropertiesCustomervatAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataBpayBillerCode: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBpayBillerCode",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1Bh8NlbSchemasInvoicedataPropertiesBpaybillercodeAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataBpayReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBpayReference",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1OmsnpSchemasInvoicedataPropertiesBpayreferenceAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataBankSortCode: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBankSortCode",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1Rbm6P1SchemasInvoicedataPropertiesBanksortcodeAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataBankIban: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBankIban",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsE6Bjv3SchemasInvoicedataPropertiesBankibanAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataBankSwift: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBankSwift",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components11Zi81FSchemasInvoicedataPropertiesBankswiftAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataBankBSB: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBankBSB",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsUilt2MSchemasInvoicedataPropertiesBankbsbAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataCustomerContactName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerContactName",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsWywi9WSchemasInvoicedataPropertiesCustomercontactnameAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataCustomerCompanyName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerCompanyName",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components6DhvidSchemasInvoicedataPropertiesCustomercompanynameAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataSupplierCompanyName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierCompanyName",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1O4BmpySchemasInvoicedataPropertiesSuppliercompanynameAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataCustomerPhoneNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerPhoneNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsPs8Uo7SchemasInvoicedataPropertiesCustomerphonenumberAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataSupplierPhoneNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierPhoneNumber",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsBvthtoSchemasInvoicedataPropertiesSupplierphonenumberAllof2
        .type.modelProperties
    }
  }
};

export const InvoiceDataSupplierFax: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierFax",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1ByjheSchemasInvoicedataPropertiesSupplierfaxAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataCustomerEmail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerEmail",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components5PwavySchemasInvoicedataPropertiesCustomeremailAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataSupplierEmail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierEmail",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsVyrnzuSchemasInvoicedataPropertiesSupplieremailAllof2.type
        .modelProperties
    }
  }
};

export const InvoiceDataSupplierWebsite: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierWebsite",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components179Pdz6SchemasInvoicedataPropertiesSupplierwebsiteAllof2.type
        .modelProperties
    }
  }
};
