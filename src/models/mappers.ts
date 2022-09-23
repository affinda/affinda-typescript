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
    additionalProperties: { type: { name: "Object" } },
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
      },
      language: {
        serializedName: "language",
        type: {
          name: "String"
        }
      },
      pdf: {
        serializedName: "pdf",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      parentDocument: {
        serializedName: "parentDocument",
        type: {
          name: "Composite",
          className: "SplitRelation"
        }
      },
      childDocuments: {
        serializedName: "childDocuments",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SplitRelation"
            }
          }
        }
      },
      pages: {
        serializedName: "pages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageMeta"
            }
          }
        }
      }
    }
  }
};

export const SplitRelation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SplitRelation",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageMeta: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PageMeta",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      pageIndex: {
        serializedName: "pageIndex",
        type: {
          name: "Number"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "String"
        }
      },
      height: {
        serializedName: "height",
        type: {
          name: "Number"
        }
      },
      width: {
        serializedName: "width",
        type: {
          name: "Number"
        }
      },
      rotation: {
        serializedName: "rotation",
        type: {
          name: "Number"
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
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      errors: {
        serializedName: "errors",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RequestErrorErrorsItem"
            }
          }
        }
      }
    }
  }
};

export const RequestErrorErrorsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RequestErrorErrorsItem",
    modelProperties: {
      attr: {
        serializedName: "attr",
        required: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      detail: {
        serializedName: "detail",
        required: true,
        type: {
          name: "String"
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
        nullable: true,
        type: {
          name: "String"
        }
      },
      languages: {
        serializedName: "languages",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      languageCodes: {
        serializedName: "languageCodes",
        readOnly: true,
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
        nullable: true,
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
        readOnly: true,
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
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      linkedin: {
        serializedName: "linkedin",
        readOnly: true,
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
        readOnly: true,
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
        readOnly: true,
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
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      country: {
        serializedName: "country",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        readOnly: true,
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
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      apartmentNumber: {
        serializedName: "apartmentNumber",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        readOnly: true,
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
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
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
        readOnly: true,
        type: {
          name: "String"
        }
      },
      matchStr: {
        serializedName: "matchStr",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      educationLevel: {
        serializedName: "educationLevel",
        readOnly: true,
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
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      jobTitle: {
        serializedName: "jobTitle",
        nullable: true,
        type: {
          name: "String"
        }
      },
      socCode: {
        serializedName: "socCode",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
      socName: {
        serializedName: "socName",
        readOnly: true,
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
      industry: {
        serializedName: "industry",
        readOnly: true,
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
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      emsiId: {
        serializedName: "emsiId",
        readOnly: true,
        nullable: true,
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
        readOnly: true,
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number"
        }
      },
      weighting: {
        serializedName: "weighting",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number"
        }
      },
      sources: {
        serializedName: "sources",
        readOnly: true,
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
      },
      workExperienceId: {
        serializedName: "workExperienceId",
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
      resume: {
        serializedName: "resume",
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
        nullable: true,
        type: {
          name: "Number"
        }
      },
      yearsExperienceMax: {
        serializedName: "yearsExperienceMax",
        nullable: true,
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
              className: "ResumeSearchParametersLocation"
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
              className: "ResumeSearchParametersSkill"
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
              className: "ResumeSearchParametersSkill"
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
      isTopStudent: {
        serializedName: "isTopStudent",
        type: {
          name: "Boolean"
        }
      },
      isTopStudentRequired: {
        serializedName: "isTopStudentRequired",
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
        nullable: true,
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

export const ResumeSearchParametersLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLocation",
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
          className: "ResumeSearchParametersLocationCoordinates"
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

export const ResumeSearchParametersLocationCoordinates: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLocationCoordinates",
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

export const ResumeSearchParametersSkill: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersSkill",
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
          className: "JobTitleSearchScoreComponent"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent"
        }
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent"
        }
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent"
        }
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent"
        }
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent"
        }
      }
    }
  }
};

export const JobTitleSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ManagementLevelSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagementLevelSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ExperienceSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExperienceSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SkillsSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkillsSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LanguagesSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LanguagesSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LocationSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EducationSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EducationSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const OccupationGroupSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OccupationGroupSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SearchExpressionSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchExpressionSearchScoreComponent",
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
        nullable: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeSearchDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetail",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailJobTitle"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLocation"
        }
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailEducation"
        }
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailSkills"
        }
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailExperience"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailOccupationGroup"
        }
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLanguages"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailManagementLevel"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailSearchExpression"
        }
      }
    }
  }
};

export const ResumeSearchDetailJobTitle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailJobTitle",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailJobTitleValueItem"
            }
          }
        }
      }
    }
  }
};

export const ResumeSearchDetailJobTitleValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailJobTitleValueItem",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String"
        }
      },
      startDate: {
        serializedName: "startDate",
        nullable: true,
        type: {
          name: "String"
        }
      },
      endDate: {
        serializedName: "endDate",
        nullable: true,
        type: {
          name: "String"
        }
      },
      companyName: {
        serializedName: "companyName",
        nullable: true,
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailLocation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersLocation"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLocationValue"
        }
      }
    }
  }
};

export const ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailEducation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailEducation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailEducationMissing"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailEducationValueItem"
            }
          }
        }
      }
    }
  }
};

export const ResumeSearchDetailEducationMissing: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailEducationMissing",
    modelProperties: {
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
      highestDegreeTypes: {
        serializedName: "highestDegreeTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
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
      currentStudent: {
        serializedName: "currentStudent",
        type: {
          name: "Boolean"
        }
      },
      recentGraduate: {
        serializedName: "recentGraduate",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Education: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Education",
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
          className: "Accreditation"
        }
      },
      grade: {
        serializedName: "grade",
        type: {
          name: "Composite",
          className: "EducationGrade"
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
          className: "EducationDates"
        }
      }
    }
  }
};

export const Accreditation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Accreditation",
    modelProperties: {
      education: {
        serializedName: "education",
        type: {
          name: "String"
        }
      },
      educationLevel: {
        serializedName: "educationLevel",
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
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EducationGrade: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EducationGrade",
    modelProperties: {
      raw: {
        serializedName: "raw",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        nullable: true,
        type: {
          name: "String"
        }
      },
      metric: {
        serializedName: "metric",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EducationDates: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EducationDates",
    modelProperties: {
      startDate: {
        serializedName: "startDate",
        nullable: true,
        type: {
          name: "String"
        }
      },
      completionDate: {
        serializedName: "completionDate",
        nullable: true,
        type: {
          name: "String"
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

export const ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailSkills: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailSkills",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailSkillsValueItem"
            }
          }
        }
      }
    }
  }
};

export const ResumeSkill: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSkill",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
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
        nullable: true,
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
              className: "ResumeSkillSourcesItem"
            }
          }
        }
      }
    }
  }
};

export const ResumeSkillSourcesItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSkillSourcesItem",
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

export const ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailExperience: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailExperience",
    modelProperties: {
      years: {
        serializedName: "years",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailOccupationGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailOccupationGroup",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailOccupationGroupValueItem"
            }
          }
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

export const ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailLanguages: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailLanguages",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailLanguagesValueItem"
            }
          }
        }
      }
    }
  }
};

export const Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailManagementLevel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailManagementLevel",
    modelProperties: {
      level: {
        serializedName: "level",
        nullable: true,
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"]
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailSearchExpression: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailSearchExpression",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResumeSearchMatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchMatch",
    modelProperties: {
      score: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "score",
        type: {
          name: "Number"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Composite",
          className: "ResumeSearchMatchDetails"
        }
      }
    }
  }
};

export const ResumeSearchMatchDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchMatchDetails",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleSearchScoreComponent"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent"
        }
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent"
        }
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent"
        }
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent"
        }
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent"
        }
      }
    }
  }
};

export const ResumeSearchConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchConfig",
    modelProperties: {
      allowPdfDownload: {
        serializedName: "allowPdfDownload",
        type: {
          name: "Boolean"
        }
      },
      maxResults: {
        serializedName: "maxResults",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      displayJobTitle: {
        serializedName: "displayJobTitle",
        type: {
          name: "Boolean"
        }
      },
      displayLocation: {
        serializedName: "displayLocation",
        type: {
          name: "Boolean"
        }
      },
      displayYearsExperience: {
        serializedName: "displayYearsExperience",
        type: {
          name: "Boolean"
        }
      },
      displayOccupationGroup: {
        serializedName: "displayOccupationGroup",
        type: {
          name: "Boolean"
        }
      },
      displayEducation: {
        serializedName: "displayEducation",
        type: {
          name: "Boolean"
        }
      },
      displaySkills: {
        serializedName: "displaySkills",
        type: {
          name: "Boolean"
        }
      },
      displayLanguages: {
        serializedName: "displayLanguages",
        type: {
          name: "Boolean"
        }
      },
      displayManagementLevel: {
        serializedName: "displayManagementLevel",
        type: {
          name: "Boolean"
        }
      },
      displayKeywords: {
        serializedName: "displayKeywords",
        type: {
          name: "Boolean"
        }
      },
      weightJobTitle: {
        serializedName: "weightJobTitle",
        type: {
          name: "Number"
        }
      },
      weightLocation: {
        serializedName: "weightLocation",
        type: {
          name: "Number"
        }
      },
      weightYearsExperience: {
        serializedName: "weightYearsExperience",
        type: {
          name: "Number"
        }
      },
      weightOccupationGroup: {
        serializedName: "weightOccupationGroup",
        type: {
          name: "Number"
        }
      },
      weightEducation: {
        serializedName: "weightEducation",
        type: {
          name: "Number"
        }
      },
      weightSkills: {
        serializedName: "weightSkills",
        type: {
          name: "Number"
        }
      },
      weightLanguages: {
        serializedName: "weightLanguages",
        type: {
          name: "Number"
        }
      },
      weightManagementLevel: {
        serializedName: "weightManagementLevel",
        type: {
          name: "Number"
        }
      },
      weightKeywords: {
        serializedName: "weightKeywords",
        type: {
          name: "Number"
        }
      },
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
      searchToolTheme: {
        serializedName: "searchToolTheme",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userId: {
        serializedName: "userId",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      username: {
        serializedName: "username",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths2T1Oc0ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths2T1Oc0ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      configOverride: {
        serializedName: "configOverride",
        type: {
          name: "Composite",
          className: "ResumeSearchConfig"
        }
      }
    }
  }
};

export const ResumeSearchEmbed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchEmbed",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
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
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleAnnotation"
        }
      },
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
      },
      yearsExperience: {
        serializedName: "yearsExperience",
        type: {
          name: "Composite",
          className: "YearsExperienceAnnotation"
        }
      }
    }
  }
};

export const JobTitleAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleAnnotationParsed",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        type: {
          name: "String"
        }
      },
      classification: {
        serializedName: "classification",
        type: {
          name: "Composite",
          className: "JobTitleAnnotationParsedClassification"
        }
      }
    }
  }
};

export const JobTitleAnnotationParsedClassification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleAnnotationParsedClassification",
    modelProperties: {
      socCode: {
        serializedName: "socCode",
        type: {
          name: "Number"
        }
      },
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
      id: {
        serializedName: "id",
        nullable: true,
        type: {
          name: "Number"
        }
      },
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
        nullable: true,
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

export const YearsExperienceAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "YearsExperienceAnnotationParsed",
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
      }
    }
  }
};

export const JobDescriptionSearchParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchParameters",
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
      resume: {
        serializedName: "resume",
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
      totalYearsExperience: {
        serializedName: "totalYearsExperience",
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
              className: "ResumeSearchParametersLocation"
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
              className: "ResumeSearchParametersSkill"
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
              className: "ResumeSearchParametersSkill"
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
      degreeTypes: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "degreeTypes",
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
      degreeTypesRequired: {
        serializedName: "degreeTypesRequired",
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
        nullable: true,
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

export const JobDescriptionSearch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearch",
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
          className: "JobDescriptionSearchParameters"
        }
      },
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobDescriptionSearchResult"
            }
          }
        }
      }
    }
  }
};

export const JobDescriptionSearchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchResult",
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
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleSearchScoreComponent"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent"
        }
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent"
        }
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent"
        }
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent"
        }
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetail",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailJobTitle"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLocation"
        }
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducation"
        }
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailSkills"
        }
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailExperience"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailOccupationGroup"
        }
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLanguages"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailManagementLevel"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailSearchExpression"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailJobTitle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailJobTitle",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailJobTitleValue"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailJobTitleValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailJobTitleValue",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String"
        }
      },
      companyName: {
        serializedName: "companyName",
        nullable: true,
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailLocation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersLocation"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLocationValue"
        }
      }
    }
  }
};

export const Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailEducation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailEducation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducationMissing"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducationValue"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailEducationMissing: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailEducationMissing",
    modelProperties: {
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
      degreeTypes: {
        serializedName: "degreeTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailEducationValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailEducationValue",
    modelProperties: {
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
      degreeTypes: {
        serializedName: "degreeTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailSkills: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailSkills",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobDescriptionSearchDetailSkillsValueItem"
            }
          }
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailSkillsValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailSkillsValueItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailExperience: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailExperience",
    modelProperties: {
      minimumExperience: {
        serializedName: "minimumExperience",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      maximumExperience: {
        serializedName: "maximumExperience",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailOccupationGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailOccupationGroup",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobDescriptionSearchDetailOccupationGroupValueItem"
            }
          }
        }
      }
    }
  }
};

export const Components1Bq3Q31SchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Bq3Q31SchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailLanguages: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailLanguages",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobDescriptionSearchDetailLanguagesValueItem"
            }
          }
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailLanguagesValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailLanguagesValueItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailManagementLevel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailManagementLevel",
    modelProperties: {
      level: {
        serializedName: "level",
        nullable: true,
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"]
        }
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailSearchExpression: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailSearchExpression",
    modelProperties: {
      missing: {
        serializedName: "missing",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const JobDescriptionSearchConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchConfig",
    modelProperties: {
      allowPdfDownload: {
        serializedName: "allowPdfDownload",
        type: {
          name: "Boolean"
        }
      },
      maxResults: {
        serializedName: "maxResults",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      displayJobTitle: {
        serializedName: "displayJobTitle",
        type: {
          name: "Boolean"
        }
      },
      displayLocation: {
        serializedName: "displayLocation",
        type: {
          name: "Boolean"
        }
      },
      displayYearsExperience: {
        serializedName: "displayYearsExperience",
        type: {
          name: "Boolean"
        }
      },
      displayOccupationGroup: {
        serializedName: "displayOccupationGroup",
        type: {
          name: "Boolean"
        }
      },
      displayEducation: {
        serializedName: "displayEducation",
        type: {
          name: "Boolean"
        }
      },
      displaySkills: {
        serializedName: "displaySkills",
        type: {
          name: "Boolean"
        }
      },
      displayLanguages: {
        serializedName: "displayLanguages",
        type: {
          name: "Boolean"
        }
      },
      displayManagementLevel: {
        serializedName: "displayManagementLevel",
        type: {
          name: "Boolean"
        }
      },
      displayKeywords: {
        serializedName: "displayKeywords",
        type: {
          name: "Boolean"
        }
      },
      weightJobTitle: {
        serializedName: "weightJobTitle",
        type: {
          name: "Number"
        }
      },
      weightLocation: {
        serializedName: "weightLocation",
        type: {
          name: "Number"
        }
      },
      weightYearsExperience: {
        serializedName: "weightYearsExperience",
        type: {
          name: "Number"
        }
      },
      weightOccupationGroup: {
        serializedName: "weightOccupationGroup",
        type: {
          name: "Number"
        }
      },
      weightEducation: {
        serializedName: "weightEducation",
        type: {
          name: "Number"
        }
      },
      weightSkills: {
        serializedName: "weightSkills",
        type: {
          name: "Number"
        }
      },
      weightLanguages: {
        serializedName: "weightLanguages",
        type: {
          name: "Number"
        }
      },
      weightManagementLevel: {
        serializedName: "weightManagementLevel",
        type: {
          name: "Number"
        }
      },
      weightKeywords: {
        serializedName: "weightKeywords",
        type: {
          name: "Number"
        }
      },
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
      searchToolTheme: {
        serializedName: "searchToolTheme",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userId: {
        serializedName: "userId",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      username: {
        serializedName: "username",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsFqn8P8JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsFqn8P8JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      configOverride: {
        serializedName: "configOverride",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchConfig"
        }
      }
    }
  }
};

export const JobDescriptionSearchEmbed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchEmbed",
    modelProperties: {
      url: {
        serializedName: "url",
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
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      documentType: {
        serializedName: "documentType",
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
      },
      documentType: {
        serializedName: "documentType",
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
      clientVerifiedDt: {
        serializedName: "clientVerifiedDt",
        required: true,
        nullable: true,
        type: {
          name: "String"
        }
      },
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
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InvoiceDataTablesItem"
            }
          }
        }
      },
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
      supplierVat: {
        serializedName: "supplierVat",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierVat"
        }
      },
      customerVat: {
        serializedName: "customerVat",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerVat"
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
        serializedName: "bankIban",
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
      bankBsb: {
        serializedName: "bankBsb",
        type: {
          name: "Composite",
          className: "InvoiceDataBankBsb"
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
      },
      currencyCode: {
        serializedName: "currencyCode",
        type: {
          name: "Composite",
          className: "EnumAnnotationSerializer"
        }
      },
      customFields: {
        serializedName: "customFields",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const InvoiceDataTablesItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataTablesItem",
    modelProperties: {
      rows: {
        serializedName: "rows",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RowAnnotation"
            }
          }
        }
      }
    }
  }
};

export const RowAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RowAnnotation",
    modelProperties: {
      code: {
        serializedName: "code",
        nullable: true,
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        nullable: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
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
      },
      unitPrice: {
        serializedName: "unitPrice",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      quantity: {
        serializedName: "quantity",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      discount: {
        serializedName: "discount",
        nullable: true,
        type: {
          name: "String"
        }
      },
      baseTotal: {
        serializedName: "baseTotal",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      taxRate: {
        serializedName: "taxRate",
        nullable: true,
        type: {
          name: "String"
        }
      },
      taxTotal: {
        serializedName: "taxTotal",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      total: {
        serializedName: "total",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      other: {
        serializedName: "other",
        nullable: true,
        type: {
          name: "String"
        }
      },
      customFields: {
        serializedName: "customFields",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1",
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

export const Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1",
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

export const Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1",
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

export const Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1",
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

export const ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1",
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

export const Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1",
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

export const ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1",
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

export const Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1",
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

export const Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1",
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

export const Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1",
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

export const Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1",
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

export const Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1",
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

export const ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1",
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

export const ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1",
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

export const ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1",
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

export const ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1",
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

export const Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1",
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

export const Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1",
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

export const Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1",
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

export const Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1",
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

export const ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1",
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

export const Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1",
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

export const Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1",
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

export const Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1",
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

export const Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1",
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

export const Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1",
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

export const Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1",
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

export const Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1",
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

export const Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1",
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
      clientVerifiedDt: {
        serializedName: "clientVerifiedDt",
        nullable: true,
        type: {
          name: "Boolean"
        }
      },
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

export const PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema",
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
              className: "User"
            }
          }
        }
      }
    }
  }
};

export const User: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "User",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      apiKey: {
        serializedName: "apiKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1Y6A2MfUsersPostResponses201ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Y6A2MfUsersPostResponses201ContentApplicationJsonSchemaAllof1",
    modelProperties: {
      apiKey: {
        serializedName: "apiKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResumeRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeRequestBody",
    modelProperties: {
      file: {
        serializedName: "file",
        type: {
          name: "Stream"
        }
      },
      url: {
        serializedName: "url",
        nullable: true,
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "ResumeData"
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

export const RedactedResumeRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedactedResumeRequestBody",
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

export const JobDescriptionRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionRequestBody",
    modelProperties: {
      file: {
        serializedName: "file",
        type: {
          name: "Stream"
        }
      },
      url: {
        serializedName: "url",
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
      fileName: {
        serializedName: "fileName",
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

export const IndexRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexRequestBody",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      documentType: {
        serializedName: "documentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoiceRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceRequestBody",
    modelProperties: {
      file: {
        serializedName: "file",
        type: {
          name: "Stream"
        }
      },
      url: {
        serializedName: "url",
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
      fileName: {
        serializedName: "fileName",
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
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Meta.type.modelProperties,
      ...Components17Ashz6SchemasInvoicePropertiesMetaAllof1.type
        .modelProperties
    }
  }
};

export const ResumeSearchDetailLocationValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailLocationValue",
    modelProperties: {
      ...Location.type.modelProperties,
      ...ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1
        .type.modelProperties
    }
  }
};

export const JobDescriptionSearchDetailLocationValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailLocationValue",
    modelProperties: {
      ...Location.type.modelProperties,
      ...Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1
        .type.modelProperties
    }
  }
};

export const ResumeSearchDetailEducationValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailEducationValueItem",
    modelProperties: {
      ...Education.type.modelProperties,
      ...ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1
        .type.modelProperties
    }
  }
};

export const ResumeSearchDetailSkillsValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailSkillsValueItem",
    modelProperties: {
      ...ResumeSkill.type.modelProperties,
      ...ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1
        .type.modelProperties
    }
  }
};

export const ResumeSearchDetailLanguagesValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailLanguagesValueItem",
    modelProperties: {
      ...ResumeSkill.type.modelProperties,
      ...Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1
        .type.modelProperties
    }
  }
};

export const ResumeSearchDetailOccupationGroupValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailOccupationGroupValueItem",
    modelProperties: {
      ...OccupationGroup.type.modelProperties,
      ...ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1
        .type.modelProperties
    }
  }
};

export const JobDescriptionSearchDetailOccupationGroupValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailOccupationGroupValueItem",
    modelProperties: {
      ...OccupationGroup.type.modelProperties,
      ...Components1Bq3Q31SchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1
        .type.modelProperties
    }
  }
};

export const JobTitleAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "JobTitleAnnotationParsed"
        }
      }
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

export const YearsExperienceAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "YearsExperienceAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "YearsExperienceAnnotationParsed"
        }
      }
    }
  }
};

export const EnumAnnotationSerializer: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EnumAnnotationSerializer",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "String"
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
      ...Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1
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
      ...Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1.type
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
      ...Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1
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
      ...Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1
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
      ...ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1.type
        .modelProperties
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
      ...Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1.type
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
      ...ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1
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
      ...Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1
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
      ...Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1.type
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
      ...Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1
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
      ...Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1.type
        .modelProperties
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
      ...Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1
        .type.modelProperties
    }
  }
};

export const InvoiceDataSupplierVat: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataSupplierVat",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1.type
        .modelProperties
    }
  }
};

export const InvoiceDataCustomerVat: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataCustomerVat",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1.type
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
      ...ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1.type
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
      ...ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1.type
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
      ...Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1.type
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
      ...Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1.type
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
      ...Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1.type
        .modelProperties
    }
  }
};

export const InvoiceDataBankBsb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceDataBankBsb",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...TextAnnotation.type.modelProperties,
      ...Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1.type
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
      ...ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1
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
      ...Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1
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
      ...Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1
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
      ...Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1
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
      ...Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1
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
      ...Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1.type
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
      ...Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1.type
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
      ...Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1.type
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
      ...Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1.type
        .modelProperties
    }
  }
};

export const PathsTop5ZkUsersPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PathsTop5ZkUsersPostResponses201ContentApplicationJsonSchema",
    modelProperties: {
      ...User.type.modelProperties,
      ...Paths1Y6A2MfUsersPostResponses201ContentApplicationJsonSchemaAllof1
        .type.modelProperties
    }
  }
};
