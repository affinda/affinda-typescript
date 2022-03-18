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
          allowedValues: ["None", "Low", "Mid", "Upper"]
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
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
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
          allowedValues: ["None", "Low", "Mid", "Upper"]
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

export const ResumeSearchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchResult",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        nullable: true,
        type: {
          name: "String"
        }
      },
      pdf: {
        serializedName: "pdf",
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

export const Paths1Ud8LkzIndexNamePatchRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Ud8LkzIndexNamePatchRequestbodyContentApplicationJsonSchema",
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

export const PathsEzsbycIndexNamePatchResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsEzsbycIndexNamePatchResponses200ContentApplicationJsonSchema",
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

export const InvoiceData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceData",
    modelProperties: {
      invoiceDate: {
        serializedName: "invoiceDate",
        nullable: true,
        type: {
          name: "String"
        }
      },
      invoiceOrderDate: {
        serializedName: "invoiceOrderDate",
        nullable: true,
        type: {
          name: "String"
        }
      },
      paymentDateDue: {
        serializedName: "paymentDateDue",
        nullable: true,
        type: {
          name: "String"
        }
      },
      paymentAmountBase: {
        serializedName: "paymentAmountBase",
        nullable: true,
        type: {
          name: "String"
        }
      },
      paymentAmountTax: {
        serializedName: "paymentAmountTax",
        nullable: true,
        type: {
          name: "String"
        }
      },
      paymentAmountTotal: {
        serializedName: "paymentAmountTotal",
        nullable: true,
        type: {
          name: "String"
        }
      },
      paymentAmountPaid: {
        serializedName: "paymentAmountPaid",
        nullable: true,
        type: {
          name: "String"
        }
      },
      paymentAmountDue: {
        serializedName: "paymentAmountDue",
        nullable: true,
        type: {
          name: "String"
        }
      },
      invoiceNumber: {
        serializedName: "invoiceNumber",
        nullable: true,
        type: {
          name: "String"
        }
      },
      invoicePurchaseOrderNumber: {
        serializedName: "invoicePurchaseOrderNumber",
        nullable: true,
        type: {
          name: "String"
        }
      },
      supplierBusinessNumber: {
        serializedName: "supplierBusinessNumber",
        nullable: true,
        type: {
          name: "String"
        }
      },
      customerNumber: {
        serializedName: "customerNumber",
        nullable: true,
        type: {
          name: "String"
        }
      },
      customerBusinessNumber: {
        serializedName: "customerBusinessNumber",
        nullable: true,
        type: {
          name: "String"
        }
      },
      paymentReference: {
        serializedName: "paymentReference",
        nullable: true,
        type: {
          name: "String"
        }
      },
      bankAccountNumber: {
        serializedName: "bankAccountNumber",
        nullable: true,
        type: {
          name: "String"
        }
      },
      supplierVAT: {
        serializedName: "supplierVAT",
        nullable: true,
        type: {
          name: "String"
        }
      },
      customerVAT: {
        serializedName: "customerVAT",
        nullable: true,
        type: {
          name: "String"
        }
      },
      bpayBillerCode: {
        serializedName: "bpayBillerCode",
        nullable: true,
        type: {
          name: "String"
        }
      },
      bpayReference: {
        serializedName: "bpayReference",
        nullable: true,
        type: {
          name: "String"
        }
      },
      bankSortCode: {
        serializedName: "bankSortCode",
        nullable: true,
        type: {
          name: "String"
        }
      },
      bankIban: {
        serializedName: "bankIBAN",
        nullable: true,
        type: {
          name: "String"
        }
      },
      bankSwift: {
        serializedName: "bankSwift",
        nullable: true,
        type: {
          name: "String"
        }
      },
      bankBSB: {
        serializedName: "bankBSB",
        nullable: true,
        type: {
          name: "String"
        }
      },
      customerContactName: {
        serializedName: "customerContactName",
        nullable: true,
        type: {
          name: "String"
        }
      },
      customerCompanyName: {
        serializedName: "customerCompanyName",
        nullable: true,
        type: {
          name: "String"
        }
      },
      supplierCompanyName: {
        serializedName: "supplierCompanyName",
        nullable: true,
        type: {
          name: "String"
        }
      },
      customerBillingAddress: {
        serializedName: "customerBillingAddress",
        type: {
          name: "Composite",
          className: "Location"
        }
      },
      customerDeliveryAddress: {
        serializedName: "customerDeliveryAddress",
        type: {
          name: "Composite",
          className: "Location"
        }
      },
      supplierAddress: {
        serializedName: "supplierAddress",
        type: {
          name: "Composite",
          className: "Location"
        }
      },
      customerPhoneNumber: {
        serializedName: "customerPhoneNumber",
        type: {
          name: "String"
        }
      },
      supplierPhoneNumber: {
        serializedName: "supplierPhoneNumber",
        type: {
          name: "String"
        }
      },
      supplierFax: {
        serializedName: "supplierFax",
        type: {
          name: "String"
        }
      },
      customerEmail: {
        serializedName: "customerEmail",
        type: {
          name: "String"
        }
      },
      supplierEmail: {
        serializedName: "supplierEmail",
        type: {
          name: "String"
        }
      },
      supplierWebsite: {
        serializedName: "supplierWebsite",
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
