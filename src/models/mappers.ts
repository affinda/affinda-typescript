import * as coreClient from "@azure/core-client";

export const Workspace: coreClient.CompositeMapper = {
  serializedName: "Workspace",
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "Composite",
          className: "Organization"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      visibility: {
        serializedName: "visibility",
        xmlName: "visibility",
        type: {
          name: "String"
        }
      },
      collections: {
        serializedName: "collections",
        xmlName: "collections",
        xmlElementName: "WorkspaceCollectionsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WorkspaceCollectionsItem"
            }
          }
        }
      },
      rejectInvalidDocuments: {
        serializedName: "rejectInvalidDocuments",
        xmlName: "rejectInvalidDocuments",
        type: {
          name: "Boolean"
        }
      },
      rejectDuplicates: {
        defaultValue: "false",
        serializedName: "rejectDuplicates",
        xmlName: "rejectDuplicates",
        type: {
          name: "String"
        }
      },
      members: {
        serializedName: "members",
        xmlName: "members",
        xmlElementName: "User",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "User"
            }
          }
        }
      },
      unvalidatedDocsCount: {
        serializedName: "unvalidatedDocsCount",
        xmlName: "unvalidatedDocsCount",
        type: {
          name: "Number"
        }
      },
      confirmedDocsCount: {
        serializedName: "confirmedDocsCount",
        xmlName: "confirmedDocsCount",
        type: {
          name: "Number"
        }
      },
      ingestEmail: {
        serializedName: "ingestEmail",
        xmlName: "ingestEmail",
        type: {
          name: "String"
        }
      },
      whitelistIngestAddresses: {
        serializedName: "whitelistIngestAddresses",
        nullable: true,
        xmlName: "whitelistIngestAddresses",
        xmlElementName: "WorkspaceWhitelistIngestAddressesItem",
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

export const Organization: coreClient.CompositeMapper = {
  serializedName: "Organization",
  type: {
    name: "Composite",
    className: "Organization",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      userRole: {
        serializedName: "userRole",
        nullable: true,
        xmlName: "userRole",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        xmlName: "avatar",
        type: {
          name: "String"
        }
      },
      resthookSignatureKey: {
        serializedName: "resthookSignatureKey",
        nullable: true,
        xmlName: "resthookSignatureKey",
        type: {
          name: "String"
        }
      },
      isTrial: {
        serializedName: "isTrial",
        xmlName: "isTrial",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const WorkspaceCollectionsItem: coreClient.CompositeMapper = {
  serializedName: "WorkspaceCollectionsItem",
  type: {
    name: "Composite",
    className: "WorkspaceCollectionsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      extractor: {
        serializedName: "extractor",
        xmlName: "extractor",
        type: {
          name: "Composite",
          className: "WorkspaceCollectionsItemExtractor"
        }
      },
      unvalidatedDocsCount: {
        serializedName: "unvalidatedDocsCount",
        nullable: true,
        xmlName: "unvalidatedDocsCount",
        type: {
          name: "Number"
        }
      },
      confirmedDocsCount: {
        serializedName: "confirmedDocsCount",
        nullable: true,
        xmlName: "confirmedDocsCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const WorkspaceCollectionsItemExtractor: coreClient.CompositeMapper = {
  serializedName: "WorkspaceCollectionsItemExtractor",
  type: {
    name: "Composite",
    className: "WorkspaceCollectionsItemExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        xmlName: "namePlural",
        type: {
          name: "String"
        }
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        xmlName: "baseExtractor",
        type: {
          name: "Composite",
          className: "BaseExtractor"
        }
      },
      category: {
        serializedName: "category",
        nullable: true,
        xmlName: "category",
        type: {
          name: "String"
        }
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        xmlName: "validatable",
        type: {
          name: "Boolean"
        }
      },
      isCustom: {
        serializedName: "isCustom",
        xmlName: "isCustom",
        type: {
          name: "Boolean"
        }
      },
      createdDt: {
        serializedName: "createdDt",
        xmlName: "createdDt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const BaseExtractor: coreClient.CompositeMapper = {
  serializedName: "BaseExtractor",
  type: {
    name: "Composite",
    className: "BaseExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        xmlName: "namePlural",
        type: {
          name: "String"
        }
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        xmlName: "validatable",
        type: {
          name: "Boolean"
        }
      },
      isCustom: {
        serializedName: "isCustom",
        xmlName: "isCustom",
        type: {
          name: "Boolean"
        }
      },
      createdDt: {
        serializedName: "createdDt",
        xmlName: "createdDt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const User: coreClient.CompositeMapper = {
  serializedName: "User",
  type: {
    name: "Composite",
    className: "User",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "username",
        xmlName: "username",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        xmlName: "email",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        xmlName: "avatar",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RequestError: coreClient.CompositeMapper = {
  serializedName: "RequestError",
  type: {
    name: "Composite",
    className: "RequestError",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        xmlName: "type",
        type: {
          name: "String"
        }
      },
      errors: {
        serializedName: "errors",
        required: true,
        xmlName: "errors",
        xmlElementName: "RequestErrorErrorsItem",
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
  serializedName: "RequestErrorErrorsItem",
  type: {
    name: "Composite",
    className: "RequestErrorErrorsItem",
    modelProperties: {
      attr: {
        serializedName: "attr",
        required: true,
        nullable: true,
        xmlName: "attr",
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        required: true,
        xmlName: "code",
        type: {
          name: "String"
        }
      },
      detail: {
        serializedName: "detail",
        required: true,
        xmlName: "detail",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCreate: coreClient.CompositeMapper = {
  serializedName: "WorkspaceCreate",
  type: {
    name: "Composite",
    className: "WorkspaceCreate",
    modelProperties: {
      organization: {
        serializedName: "organization",
        required: true,
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      visibility: {
        serializedName: "visibility",
        xmlName: "visibility",
        type: {
          name: "String"
        }
      },
      rejectInvalidDocuments: {
        serializedName: "rejectInvalidDocuments",
        xmlName: "rejectInvalidDocuments",
        type: {
          name: "Boolean"
        }
      },
      rejectDuplicates: {
        defaultValue: "false",
        serializedName: "rejectDuplicates",
        xmlName: "rejectDuplicates",
        type: {
          name: "String"
        }
      },
      whitelistIngestAddresses: {
        serializedName: "whitelistIngestAddresses",
        nullable: true,
        xmlName: "whitelistIngestAddresses",
        xmlElementName: "WhitelistIngestAddressesItem",
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

export const WorkspaceUpdate: coreClient.CompositeMapper = {
  serializedName: "WorkspaceUpdate",
  type: {
    name: "Composite",
    className: "WorkspaceUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      visibility: {
        serializedName: "visibility",
        xmlName: "visibility",
        type: {
          name: "String"
        }
      },
      rejectInvalidDocuments: {
        serializedName: "rejectInvalidDocuments",
        xmlName: "rejectInvalidDocuments",
        type: {
          name: "Boolean"
        }
      },
      rejectDuplicates: {
        defaultValue: "false",
        serializedName: "rejectDuplicates",
        xmlName: "rejectDuplicates",
        type: {
          name: "String"
        }
      },
      whitelistIngestAddresses: {
        serializedName: "whitelistIngestAddresses",
        nullable: true,
        xmlName: "whitelistIngestAddresses",
        xmlElementName: "WhitelistIngestAddressesItem",
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

export const PaginatedResponse: coreClient.CompositeMapper = {
  serializedName: "PaginatedResponse",
  type: {
    name: "Composite",
    className: "PaginatedResponse",
    modelProperties: {
      count: {
        serializedName: "count",
        required: true,
        xmlName: "count",
        type: {
          name: "Number"
        }
      },
      next: {
        serializedName: "next",
        nullable: true,
        xmlName: "next",
        type: {
          name: "String"
        }
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        xmlName: "previous",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1",
  type: {
    name: "Composite",
    className:
      "Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1",
    modelProperties: {
      results: {
        serializedName: "results",
        required: true,
        xmlName: "results",
        xmlElementName: "WorkspaceMembership",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WorkspaceMembership"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceMembership: coreClient.CompositeMapper = {
  serializedName: "WorkspaceMembership",
  type: {
    name: "Composite",
    className: "WorkspaceMembership",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        xmlName: "workspace",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        xmlName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      }
    }
  }
};

export const WorkspaceMembershipCreate: coreClient.CompositeMapper = {
  serializedName: "WorkspaceMembershipCreate",
  type: {
    name: "Composite",
    className: "WorkspaceMembershipCreate",
    modelProperties: {
      workspace: {
        serializedName: "workspace",
        xmlName: "workspace",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        xmlName: "user",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Collection: coreClient.CompositeMapper = {
  serializedName: "Collection",
  type: {
    name: "Composite",
    className: "Collection",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        xmlName: "workspace",
        type: {
          name: "Composite",
          className: "CollectionWorkspace"
        }
      },
      extractor: {
        serializedName: "extractor",
        xmlName: "extractor",
        type: {
          name: "Composite",
          className: "Extractor"
        }
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        xmlName: "autoValidationThreshold",
        type: {
          name: "Number"
        }
      },
      fields: {
        serializedName: "fields",
        nullable: true,
        xmlName: "fields",
        xmlElementName: "FieldGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup"
            }
          }
        }
      },
      fieldsConfigured: {
        serializedName: "fieldsConfigured",
        xmlName: "fieldsConfigured",
        type: {
          name: "Boolean"
        }
      },
      dateFormatPreference: {
        serializedName: "dateFormatPreference",
        nullable: true,
        xmlName: "dateFormatPreference",
        type: {
          name: "String"
        }
      },
      dateFormatFromDocument: {
        serializedName: "dateFormatFromDocument",
        nullable: true,
        xmlName: "dateFormatFromDocument",
        type: {
          name: "Boolean"
        }
      },
      extractorConfig: {
        serializedName: "extractorConfig",
        xmlName: "extractorConfig",
        type: {
          name: "Composite",
          className: "ExtractorConfig"
        }
      },
      unvalidatedDocsCount: {
        serializedName: "unvalidatedDocsCount",
        nullable: true,
        xmlName: "unvalidatedDocsCount",
        type: {
          name: "Number"
        }
      },
      confirmedDocsCount: {
        serializedName: "confirmedDocsCount",
        nullable: true,
        xmlName: "confirmedDocsCount",
        type: {
          name: "Number"
        }
      },
      ingestEmail: {
        serializedName: "ingestEmail",
        xmlName: "ingestEmail",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CollectionWorkspace: coreClient.CompositeMapper = {
  serializedName: "CollectionWorkspace",
  type: {
    name: "Composite",
    className: "CollectionWorkspace",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "Composite",
          className: "Organization"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Extractor: coreClient.CompositeMapper = {
  serializedName: "Extractor",
  type: {
    name: "Composite",
    className: "Extractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        xmlName: "namePlural",
        type: {
          name: "String"
        }
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        xmlName: "baseExtractor",
        type: {
          name: "Composite",
          className: "ExtractorBaseExtractor"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "Composite",
          className: "Organization"
        }
      },
      category: {
        serializedName: "category",
        nullable: true,
        xmlName: "category",
        type: {
          name: "String"
        }
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        xmlName: "validatable",
        type: {
          name: "Boolean"
        }
      },
      isCustom: {
        serializedName: "isCustom",
        xmlName: "isCustom",
        type: {
          name: "Boolean"
        }
      },
      fieldGroups: {
        serializedName: "fieldGroups",
        nullable: true,
        xmlName: "fieldGroups",
        xmlElementName: "FieldGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup"
            }
          }
        }
      },
      createdDt: {
        serializedName: "createdDt",
        xmlName: "createdDt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ExtractorBaseExtractor: coreClient.CompositeMapper = {
  serializedName: "ExtractorBaseExtractor",
  type: {
    name: "Composite",
    className: "ExtractorBaseExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        xmlName: "namePlural",
        type: {
          name: "String"
        }
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        xmlName: "validatable",
        type: {
          name: "Boolean"
        }
      },
      isCustom: {
        serializedName: "isCustom",
        xmlName: "isCustom",
        type: {
          name: "Boolean"
        }
      },
      createdDt: {
        serializedName: "createdDt",
        xmlName: "createdDt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const FieldGroup: coreClient.CompositeMapper = {
  serializedName: "FieldGroup",
  type: {
    name: "Composite",
    className: "FieldGroup",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      fields: {
        serializedName: "fields",
        required: true,
        xmlName: "fields",
        xmlElementName: "Field",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field"
            }
          }
        }
      }
    }
  }
};

export const Field: coreClient.CompositeMapper = {
  serializedName: "Field",
  type: {
    name: "Composite",
    className: "Field",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      slug: {
        serializedName: "slug",
        xmlName: "slug",
        type: {
          name: "String"
        }
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        xmlName: "dataPoint",
        type: {
          name: "String"
        }
      },
      mandatory: {
        serializedName: "mandatory",
        xmlName: "mandatory",
        type: {
          name: "Boolean"
        }
      },
      disabled: {
        serializedName: "disabled",
        xmlName: "disabled",
        type: {
          name: "Boolean"
        }
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        xmlName: "autoValidationThreshold",
        type: {
          name: "Number"
        }
      },
      fields: {
        serializedName: "fields",
        xmlName: "fields",
        xmlElementName: "Field",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field"
            }
          }
        }
      }
    }
  }
};

export const ExtractorConfig: coreClient.CompositeMapper = {
  serializedName: "ExtractorConfig",
  type: {
    name: "Composite",
    className: "ExtractorConfig",
    modelProperties: {
      resumeRedact: {
        serializedName: "resumeRedact",
        xmlName: "resumeRedact",
        type: {
          name: "Composite",
          className: "RedactConfig"
        }
      }
    }
  }
};

export const RedactConfig: coreClient.CompositeMapper = {
  serializedName: "RedactConfig",
  type: {
    name: "Composite",
    className: "RedactConfig",
    modelProperties: {
      redactHeadshot: {
        serializedName: "redactHeadshot",
        xmlName: "redactHeadshot",
        type: {
          name: "Boolean"
        }
      },
      redactPersonalDetails: {
        serializedName: "redactPersonalDetails",
        xmlName: "redactPersonalDetails",
        type: {
          name: "Boolean"
        }
      },
      redactWorkDetails: {
        serializedName: "redactWorkDetails",
        xmlName: "redactWorkDetails",
        type: {
          name: "Boolean"
        }
      },
      redactReferees: {
        serializedName: "redactReferees",
        xmlName: "redactReferees",
        type: {
          name: "Boolean"
        }
      },
      redactEducationDetails: {
        serializedName: "redactEducationDetails",
        xmlName: "redactEducationDetails",
        type: {
          name: "Boolean"
        }
      },
      redactLocations: {
        serializedName: "redactLocations",
        xmlName: "redactLocations",
        type: {
          name: "Boolean"
        }
      },
      redactDates: {
        serializedName: "redactDates",
        xmlName: "redactDates",
        type: {
          name: "Boolean"
        }
      },
      redactGender: {
        serializedName: "redactGender",
        xmlName: "redactGender",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CollectionCreate: coreClient.CompositeMapper = {
  serializedName: "CollectionCreate",
  type: {
    name: "Composite",
    className: "CollectionCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        xmlName: "workspace",
        type: {
          name: "String"
        }
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        xmlName: "extractor",
        type: {
          name: "String"
        }
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        xmlName: "autoValidationThreshold",
        type: {
          name: "Number"
        }
      },
      fields: {
        serializedName: "fields",
        nullable: true,
        xmlName: "fields",
        xmlElementName: "FieldGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup"
            }
          }
        }
      },
      dateFormatPreference: {
        serializedName: "dateFormatPreference",
        nullable: true,
        xmlName: "dateFormatPreference",
        type: {
          name: "String"
        }
      },
      dateFormatFromDocument: {
        serializedName: "dateFormatFromDocument",
        nullable: true,
        xmlName: "dateFormatFromDocument",
        type: {
          name: "Boolean"
        }
      },
      extractorConfig: {
        serializedName: "extractorConfig",
        xmlName: "extractorConfig",
        type: {
          name: "Composite",
          className: "ExtractorConfig"
        }
      }
    }
  }
};

export const CollectionUpdate: coreClient.CompositeMapper = {
  serializedName: "CollectionUpdate",
  type: {
    name: "Composite",
    className: "CollectionUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        xmlName: "autoValidationThreshold",
        type: {
          name: "Number"
        }
      },
      fields: {
        serializedName: "fields",
        nullable: true,
        xmlName: "fields",
        xmlElementName: "FieldGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup"
            }
          }
        }
      },
      dateFormatPreference: {
        serializedName: "dateFormatPreference",
        nullable: true,
        xmlName: "dateFormatPreference",
        type: {
          name: "String"
        }
      },
      dateFormatFromDocument: {
        serializedName: "dateFormatFromDocument",
        nullable: true,
        xmlName: "dateFormatFromDocument",
        type: {
          name: "Boolean"
        }
      },
      extractorConfig: {
        serializedName: "extractorConfig",
        xmlName: "extractorConfig",
        type: {
          name: "Composite",
          className: "ExtractorConfig"
        }
      }
    }
  }
};

export const PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper = {
  serializedName:
    "PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1",
  type: {
    name: "Composite",
    className:
      "PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1",
    modelProperties: {
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "Document",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Document"
            }
          }
        }
      }
    }
  }
};

export const Document: coreClient.CompositeMapper = {
  serializedName: "Document",
  type: {
    name: "Composite",
    className: "Document",
    uberParent: "Document",
    polymorphicDiscriminator: {
      serializedName: "extractor",
      clientName: "extractor"
    },
    modelProperties: {
      data: {
        serializedName: "data",
        xmlName: "data",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        xmlName: "extractor",
        type: {
          name: "String"
        }
      },
      meta: {
        serializedName: "meta",
        xmlName: "meta",
        type: {
          name: "Composite",
          className: "DocumentMeta"
        }
      },
      error: {
        serializedName: "error",
        xmlName: "error",
        type: {
          name: "Composite",
          className: "DocumentError"
        }
      }
    }
  }
};

export const DocumentMeta: coreClient.CompositeMapper = {
  serializedName: "DocumentMeta",
  type: {
    name: "Composite",
    className: "DocumentMeta",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      fileName: {
        serializedName: "fileName",
        nullable: true,
        xmlName: "fileName",
        type: {
          name: "String"
        }
      },
      ready: {
        serializedName: "ready",
        xmlName: "ready",
        type: {
          name: "Boolean"
        }
      },
      readyDt: {
        serializedName: "readyDt",
        nullable: true,
        xmlName: "readyDt",
        type: {
          name: "DateTime"
        }
      },
      failed: {
        serializedName: "failed",
        xmlName: "failed",
        type: {
          name: "Boolean"
        }
      },
      expiryTime: {
        serializedName: "expiryTime",
        nullable: true,
        xmlName: "expiryTime",
        type: {
          name: "String"
        }
      },
      language: {
        serializedName: "language",
        nullable: true,
        xmlName: "language",
        type: {
          name: "String"
        }
      },
      pdf: {
        serializedName: "pdf",
        nullable: true,
        xmlName: "pdf",
        type: {
          name: "String"
        }
      },
      parentDocument: {
        serializedName: "parentDocument",
        xmlName: "parentDocument",
        type: {
          name: "Composite",
          className: "DocumentMetaParentDocument"
        }
      },
      childDocuments: {
        serializedName: "childDocuments",
        xmlName: "childDocuments",
        xmlElementName: "DocumentMetaChildDocumentsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentMetaChildDocumentsItem"
            }
          }
        }
      },
      pages: {
        serializedName: "pages",
        required: true,
        xmlName: "pages",
        xmlElementName: "PageMeta",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageMeta"
            }
          }
        }
      },
      isOcrd: {
        serializedName: "isOcrd",
        xmlName: "isOcrd",
        type: {
          name: "Boolean"
        }
      },
      ocrConfidence: {
        serializedName: "ocrConfidence",
        nullable: true,
        xmlName: "ocrConfidence",
        type: {
          name: "Number"
        }
      },
      reviewUrl: {
        serializedName: "reviewUrl",
        nullable: true,
        xmlName: "reviewUrl",
        type: {
          name: "String"
        }
      },
      collection: {
        serializedName: "collection",
        xmlName: "collection",
        type: {
          name: "Composite",
          className: "DocumentMetaCollection"
        }
      },
      workspace: {
        serializedName: "workspace",
        xmlName: "workspace",
        type: {
          name: "Composite",
          className: "DocumentMetaWorkspace"
        }
      },
      archivedDt: {
        serializedName: "archivedDt",
        nullable: true,
        xmlName: "archivedDt",
        type: {
          name: "DateTime"
        }
      },
      isArchived: {
        serializedName: "isArchived",
        xmlName: "isArchived",
        type: {
          name: "Boolean"
        }
      },
      confirmedDt: {
        serializedName: "confirmedDt",
        nullable: true,
        xmlName: "confirmedDt",
        type: {
          name: "DateTime"
        }
      },
      isConfirmed: {
        serializedName: "isConfirmed",
        xmlName: "isConfirmed",
        type: {
          name: "Boolean"
        }
      },
      rejectedDt: {
        serializedName: "rejectedDt",
        nullable: true,
        xmlName: "rejectedDt",
        type: {
          name: "DateTime"
        }
      },
      isRejected: {
        serializedName: "isRejected",
        xmlName: "isRejected",
        type: {
          name: "Boolean"
        }
      },
      createdDt: {
        serializedName: "createdDt",
        xmlName: "createdDt",
        type: {
          name: "DateTime"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        nullable: true,
        xmlName: "errorCode",
        type: {
          name: "String"
        }
      },
      errorDetail: {
        serializedName: "errorDetail",
        nullable: true,
        xmlName: "errorDetail",
        type: {
          name: "String"
        }
      },
      file: {
        serializedName: "file",
        nullable: true,
        xmlName: "file",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        xmlName: "tags",
        xmlElementName: "Tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Tag"
            }
          }
        }
      },
      confirmedBy: {
        serializedName: "confirmedBy",
        xmlName: "confirmedBy",
        type: {
          name: "Composite",
          className: "UserNullable"
        }
      },
      sourceEmail: {
        serializedName: "sourceEmail",
        nullable: true,
        xmlName: "sourceEmail",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentMetaParentDocument: coreClient.CompositeMapper = {
  serializedName: "DocumentMetaParentDocument",
  type: {
    name: "Composite",
    className: "DocumentMetaParentDocument",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentMetaChildDocumentsItem: coreClient.CompositeMapper = {
  serializedName: "DocumentMetaChildDocumentsItem",
  type: {
    name: "Composite",
    className: "DocumentMetaChildDocumentsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageMeta: coreClient.CompositeMapper = {
  serializedName: "PageMeta",
  type: {
    name: "Composite",
    className: "PageMeta",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      pageIndex: {
        serializedName: "pageIndex",
        required: true,
        xmlName: "pageIndex",
        type: {
          name: "Number"
        }
      },
      image: {
        serializedName: "image",
        required: true,
        nullable: true,
        xmlName: "image",
        type: {
          name: "String"
        }
      },
      height: {
        serializedName: "height",
        required: true,
        xmlName: "height",
        type: {
          name: "Number"
        }
      },
      width: {
        serializedName: "width",
        required: true,
        xmlName: "width",
        type: {
          name: "Number"
        }
      },
      rotation: {
        serializedName: "rotation",
        required: true,
        xmlName: "rotation",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentMetaCollection: coreClient.CompositeMapper = {
  serializedName: "DocumentMetaCollection",
  type: {
    name: "Composite",
    className: "DocumentMetaCollection",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      extractor: {
        serializedName: "extractor",
        xmlName: "extractor",
        type: {
          name: "Composite",
          className: "DocumentMetaCollectionExtractor"
        }
      }
    }
  }
};

export const DocumentMetaCollectionExtractor: coreClient.CompositeMapper = {
  serializedName: "DocumentMetaCollectionExtractor",
  type: {
    name: "Composite",
    className: "DocumentMetaCollectionExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        nullable: true,
        xmlName: "baseExtractor",
        type: {
          name: "String"
        }
      },
      validatable: {
        serializedName: "validatable",
        xmlName: "validatable",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DocumentMetaWorkspace: coreClient.CompositeMapper = {
  serializedName: "DocumentMetaWorkspace",
  type: {
    name: "Composite",
    className: "DocumentMetaWorkspace",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Tag: coreClient.CompositeMapper = {
  serializedName: "Tag",
  type: {
    name: "Composite",
    className: "Tag",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        xmlName: "workspace",
        type: {
          name: "String"
        }
      },
      documentCount: {
        serializedName: "documentCount",
        required: true,
        xmlName: "documentCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UserNullable: coreClient.CompositeMapper = {
  serializedName: "UserNullable",
  type: {
    name: "Composite",
    className: "UserNullable",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "username",
        xmlName: "username",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        xmlName: "email",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        xmlName: "avatar",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentError: coreClient.CompositeMapper = {
  serializedName: "DocumentError",
  type: {
    name: "Composite",
    className: "DocumentError",
    modelProperties: {
      errorCode: {
        serializedName: "errorCode",
        nullable: true,
        xmlName: "errorCode",
        type: {
          name: "String"
        }
      },
      errorDetail: {
        serializedName: "errorDetail",
        nullable: true,
        xmlName: "errorDetail",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentUpdate: coreClient.CompositeMapper = {
  serializedName: "DocumentUpdate",
  type: {
    name: "Composite",
    className: "DocumentUpdate",
    modelProperties: {
      collection: {
        serializedName: "collection",
        xmlName: "collection",
        type: {
          name: "String"
        }
      },
      fileName: {
        serializedName: "fileName",
        nullable: true,
        xmlName: "fileName",
        type: {
          name: "String"
        }
      },
      expiryTime: {
        serializedName: "expiryTime",
        nullable: true,
        xmlName: "expiryTime",
        type: {
          name: "String"
        }
      },
      isConfirmed: {
        serializedName: "isConfirmed",
        xmlName: "isConfirmed",
        type: {
          name: "Boolean"
        }
      },
      isRejected: {
        serializedName: "isRejected",
        xmlName: "isRejected",
        type: {
          name: "Boolean"
        }
      },
      isArchived: {
        serializedName: "isArchived",
        xmlName: "isArchived",
        type: {
          name: "Boolean"
        }
      },
      language: {
        serializedName: "language",
        nullable: true,
        xmlName: "language",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExtractorCreate: coreClient.CompositeMapper = {
  serializedName: "ExtractorCreate",
  type: {
    name: "Composite",
    className: "ExtractorCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      namePlural: {
        serializedName: "namePlural",
        xmlName: "namePlural",
        type: {
          name: "String"
        }
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        xmlName: "baseExtractor",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        required: true,
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      category: {
        serializedName: "category",
        nullable: true,
        xmlName: "category",
        type: {
          name: "String"
        }
      },
      validatable: {
        serializedName: "validatable",
        xmlName: "validatable",
        type: {
          name: "Boolean"
        }
      },
      fieldGroups: {
        serializedName: "fieldGroups",
        nullable: true,
        xmlName: "fieldGroups",
        xmlElementName: "FieldGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup"
            }
          }
        }
      }
    }
  }
};

export const ExtractorUpdate: coreClient.CompositeMapper = {
  serializedName: "ExtractorUpdate",
  type: {
    name: "Composite",
    className: "ExtractorUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      namePlural: {
        serializedName: "namePlural",
        xmlName: "namePlural",
        type: {
          name: "String"
        }
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        xmlName: "baseExtractor",
        type: {
          name: "String"
        }
      },
      category: {
        serializedName: "category",
        nullable: true,
        xmlName: "category",
        type: {
          name: "String"
        }
      },
      validatable: {
        serializedName: "validatable",
        xmlName: "validatable",
        type: {
          name: "Boolean"
        }
      },
      fieldGroups: {
        serializedName: "fieldGroups",
        nullable: true,
        xmlName: "fieldGroups",
        xmlElementName: "FieldGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup"
            }
          }
        }
      }
    }
  }
};

export const DataPoint: coreClient.CompositeMapper = {
  serializedName: "DataPoint",
  type: {
    name: "Composite",
    className: "DataPoint",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      slug: {
        serializedName: "slug",
        xmlName: "slug",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        nullable: true,
        xmlName: "description",
        type: {
          name: "String"
        }
      },
      annotationContentType: {
        serializedName: "annotationContentType",
        required: true,
        xmlName: "annotationContentType",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "Composite",
          className: "Organization"
        }
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        nullable: true,
        xmlName: "extractor",
        type: {
          name: "String"
        }
      },
      multiple: {
        serializedName: "multiple",
        xmlName: "multiple",
        type: {
          name: "Boolean"
        }
      },
      noRect: {
        serializedName: "noRect",
        xmlName: "noRect",
        type: {
          name: "Boolean"
        }
      },
      similarTo: {
        serializedName: "similarTo",
        xmlName: "similarTo",
        xmlElementName: "DataPointSimilarToItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      displayEnumValue: {
        serializedName: "displayEnumValue",
        xmlName: "displayEnumValue",
        type: {
          name: "Boolean"
        }
      },
      children: {
        serializedName: "children",
        xmlName: "children",
        xmlElementName: "DataPoint",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPoint"
            }
          }
        }
      }
    }
  }
};

export const DataPointCreate: coreClient.CompositeMapper = {
  serializedName: "DataPointCreate",
  type: {
    name: "Composite",
    className: "DataPointCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      slug: {
        serializedName: "slug",
        required: true,
        xmlName: "slug",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        nullable: true,
        xmlName: "description",
        type: {
          name: "String"
        }
      },
      annotationContentType: {
        serializedName: "annotationContentType",
        required: true,
        xmlName: "annotationContentType",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        required: true,
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        xmlName: "extractor",
        type: {
          name: "String"
        }
      },
      multiple: {
        serializedName: "multiple",
        xmlName: "multiple",
        type: {
          name: "Boolean"
        }
      },
      noRect: {
        serializedName: "noRect",
        xmlName: "noRect",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DataPointUpdate: coreClient.CompositeMapper = {
  serializedName: "DataPointUpdate",
  type: {
    name: "Composite",
    className: "DataPointUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      slug: {
        serializedName: "slug",
        xmlName: "slug",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        nullable: true,
        xmlName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1",
  type: {
    name: "Composite",
    className:
      "Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1",
    modelProperties: {
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "DataPointChoice",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPointChoice"
            }
          }
        }
      }
    }
  }
};

export const DataPointChoice: coreClient.CompositeMapper = {
  serializedName: "DataPointChoice",
  type: {
    name: "Composite",
    className: "DataPointChoice",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      synonyms: {
        serializedName: "synonyms",
        nullable: true,
        xmlName: "synonyms",
        xmlElementName: "DataPointChoiceSynonymsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      description: {
        serializedName: "description",
        nullable: true,
        xmlName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataPointChoiceCreate: coreClient.CompositeMapper = {
  serializedName: "DataPointChoiceCreate",
  type: {
    name: "Composite",
    className: "DataPointChoiceCreate",
    modelProperties: {
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        xmlName: "dataPoint",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      synonyms: {
        serializedName: "synonyms",
        nullable: true,
        xmlName: "synonyms",
        xmlElementName: "SynonymsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      description: {
        serializedName: "description",
        nullable: true,
        xmlName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataPointChoiceUpdate: coreClient.CompositeMapper = {
  serializedName: "DataPointChoiceUpdate",
  type: {
    name: "Composite",
    className: "DataPointChoiceUpdate",
    modelProperties: {
      dataPoint: {
        serializedName: "dataPoint",
        xmlName: "dataPoint",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      synonyms: {
        serializedName: "synonyms",
        nullable: true,
        xmlName: "synonyms",
        xmlElementName: "SynonymsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      description: {
        serializedName: "description",
        nullable: true,
        xmlName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagCreate: coreClient.CompositeMapper = {
  serializedName: "TagCreate",
  type: {
    name: "Composite",
    className: "TagCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        xmlName: "workspace",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagUpdate: coreClient.CompositeMapper = {
  serializedName: "TagUpdate",
  type: {
    name: "Composite",
    className: "TagUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        xmlName: "workspace",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1",
  type: {
    name: "Composite",
    className:
      "Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1",
    modelProperties: {
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "OrganizationMembership",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OrganizationMembership"
            }
          }
        }
      }
    }
  }
};

export const OrganizationMembership: coreClient.CompositeMapper = {
  serializedName: "OrganizationMembership",
  type: {
    name: "Composite",
    className: "OrganizationMembership",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        required: true,
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        xmlName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      },
      role: {
        serializedName: "role",
        required: true,
        xmlName: "role",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OrganizationMembershipUpdate: coreClient.CompositeMapper = {
  serializedName: "OrganizationMembershipUpdate",
  type: {
    name: "Composite",
    className: "OrganizationMembershipUpdate",
    modelProperties: {
      role: {
        serializedName: "role",
        xmlName: "role",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper = {
  serializedName:
    "PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1",
  type: {
    name: "Composite",
    className:
      "PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1",
    modelProperties: {
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "Invitation",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Invitation"
            }
          }
        }
      }
    }
  }
};

export const Invitation: coreClient.CompositeMapper = {
  serializedName: "Invitation",
  type: {
    name: "Composite",
    className: "Invitation",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "Composite",
          className: "Organization"
        }
      },
      email: {
        serializedName: "email",
        xmlName: "email",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        xmlName: "role",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        xmlName: "status",
        type: {
          name: "String"
        }
      },
      expiryDate: {
        serializedName: "expiryDate",
        xmlName: "expiryDate",
        type: {
          name: "Date"
        }
      },
      invitedBy: {
        serializedName: "invitedBy",
        xmlName: "invitedBy",
        type: {
          name: "Composite",
          className: "User"
        }
      },
      respondedBy: {
        serializedName: "respondedBy",
        xmlName: "respondedBy",
        type: {
          name: "Composite",
          className: "InvitationRespondedBy"
        }
      },
      createdDt: {
        serializedName: "createdDt",
        xmlName: "createdDt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const InvitationCreate: coreClient.CompositeMapper = {
  serializedName: "InvitationCreate",
  type: {
    name: "Composite",
    className: "InvitationCreate",
    modelProperties: {
      organization: {
        serializedName: "organization",
        required: true,
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        required: true,
        xmlName: "email",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        required: true,
        xmlName: "role",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvitationUpdate: coreClient.CompositeMapper = {
  serializedName: "InvitationUpdate",
  type: {
    name: "Composite",
    className: "InvitationUpdate",
    modelProperties: {
      role: {
        serializedName: "role",
        xmlName: "role",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvitationResponse: coreClient.CompositeMapper = {
  serializedName: "InvitationResponse",
  type: {
    name: "Composite",
    className: "InvitationResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        xmlName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1",
  type: {
    name: "Composite",
    className:
      "Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1",
    modelProperties: {
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "ResthookSubscription",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResthookSubscription"
            }
          }
        }
      }
    }
  }
};

export const ResthookSubscription: coreClient.CompositeMapper = {
  serializedName: "ResthookSubscription",
  type: {
    name: "Composite",
    className: "ResthookSubscription",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      event: {
        serializedName: "event",
        xmlName: "event",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "Composite",
          className: "Organization"
        }
      },
      targetUrl: {
        serializedName: "targetUrl",
        xmlName: "targetUrl",
        type: {
          name: "String"
        }
      },
      active: {
        serializedName: "active",
        xmlName: "active",
        type: {
          name: "Boolean"
        }
      },
      autoDeactivated: {
        serializedName: "autoDeactivated",
        xmlName: "autoDeactivated",
        type: {
          name: "Boolean"
        }
      },
      autoDeactivateReason: {
        serializedName: "autoDeactivateReason",
        xmlName: "autoDeactivateReason",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        xmlName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResthookSubscriptionCreate: coreClient.CompositeMapper = {
  serializedName: "ResthookSubscriptionCreate",
  type: {
    name: "Composite",
    className: "ResthookSubscriptionCreate",
    modelProperties: {
      targetUrl: {
        serializedName: "targetUrl",
        required: true,
        xmlName: "targetUrl",
        type: {
          name: "String"
        }
      },
      event: {
        serializedName: "event",
        required: true,
        xmlName: "event",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        xmlName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResthookSubscriptionUpdate: coreClient.CompositeMapper = {
  serializedName: "ResthookSubscriptionUpdate",
  type: {
    name: "Composite",
    className: "ResthookSubscriptionUpdate",
    modelProperties: {
      event: {
        serializedName: "event",
        xmlName: "event",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        xmlName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OccupationGroup: coreClient.CompositeMapper = {
  serializedName: "OccupationGroup",
  type: {
    name: "Composite",
    className: "OccupationGroup",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        xmlName: "code",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      children: {
        serializedName: "children",
        required: true,
        xmlName: "children",
        xmlElementName: "OccupationGroup",
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

export const JobDescriptionSearchParameters: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchParameters",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchParameters",
    modelProperties: {
      indices: {
        serializedName: "indices",
        required: true,
        xmlName: "indices",
        xmlElementName: "JobDescriptionSearchParametersIndicesItem",
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
        xmlName: "resume",
        type: {
          name: "String"
        }
      },
      jobTitles: {
        serializedName: "jobTitles",
        xmlName: "jobTitles",
        xmlElementName: "JobDescriptionSearchParametersJobTitlesItem",
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
        xmlName: "jobTitlesRequired",
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
        xmlName: "jobTitlesWeight",
        type: {
          name: "Number"
        }
      },
      totalYearsExperience: {
        serializedName: "totalYearsExperience",
        nullable: true,
        xmlName: "totalYearsExperience",
        type: {
          name: "Number"
        }
      },
      yearsExperienceRequired: {
        serializedName: "yearsExperienceRequired",
        xmlName: "yearsExperienceRequired",
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
        xmlName: "yearsExperienceWeight",
        type: {
          name: "Number"
        }
      },
      locations: {
        serializedName: "locations",
        xmlName: "locations",
        xmlElementName: "ResumeSearchParametersLocation",
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
        xmlName: "locationsWeight",
        type: {
          name: "Number"
        }
      },
      locationsRequired: {
        serializedName: "locationsRequired",
        xmlName: "locationsRequired",
        type: {
          name: "Boolean"
        }
      },
      skills: {
        serializedName: "skills",
        xmlName: "skills",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "skillsWeight",
        type: {
          name: "Number"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "languagesWeight",
        type: {
          name: "Number"
        }
      },
      degrees: {
        serializedName: "degrees",
        xmlName: "degrees",
        xmlElementName: "JobDescriptionSearchParametersDegreesItem",
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
        xmlName: "degreesRequired",
        type: {
          name: "Boolean"
        }
      },
      degreeTypes: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "degreeTypes",
        xmlName: "degreeTypes",
        xmlElementName: "EducationLevel",
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
        xmlName: "degreeTypesRequired",
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
        xmlName: "educationWeight",
        type: {
          name: "Number"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        nullable: true,
        xmlName: "searchExpression",
        type: {
          name: "String"
        }
      },
      searchExpressionRequired: {
        serializedName: "searchExpressionRequired",
        xmlName: "searchExpressionRequired",
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
        xmlName: "searchExpressionWeight",
        type: {
          name: "Number"
        }
      },
      socCodes: {
        serializedName: "socCodes",
        xmlName: "socCodes",
        xmlElementName: "ArrayItemschema",
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
        xmlName: "socCodesWeight",
        type: {
          name: "Number"
        }
      },
      socCodesRequired: {
        serializedName: "socCodesRequired",
        xmlName: "socCodesRequired",
        type: {
          name: "Boolean"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        xmlName: "managementLevel",
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"]
        }
      },
      managementLevelRequired: {
        serializedName: "managementLevelRequired",
        xmlName: "managementLevelRequired",
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
        xmlName: "managementLevelWeight",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeSearchParametersLocation: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchParametersLocation",
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLocation",
    modelProperties: {
      name: {
        defaultValue: "",
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      coordinates: {
        serializedName: "coordinates",
        xmlName: "coordinates",
        type: {
          name: "Composite",
          className: "ResumeSearchParametersLocationCoordinates"
        }
      },
      distance: {
        defaultValue: 100,
        serializedName: "distance",
        xmlName: "distance",
        type: {
          name: "Number"
        }
      },
      unit: {
        defaultValue: "km",
        serializedName: "unit",
        xmlName: "unit",
        type: {
          name: "Enum",
          allowedValues: ["km", "mi"]
        }
      }
    }
  }
};

export const ResumeSearchParametersLocationCoordinates: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchParametersLocationCoordinates",
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLocationCoordinates",
    modelProperties: {
      latitude: {
        serializedName: "latitude",
        nullable: true,
        xmlName: "latitude",
        type: {
          name: "Number"
        }
      },
      longitude: {
        serializedName: "longitude",
        nullable: true,
        xmlName: "longitude",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeSearchParametersSkill: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchParametersSkill",
  type: {
    name: "Composite",
    className: "ResumeSearchParametersSkill",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      required: {
        serializedName: "required",
        xmlName: "required",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearch: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearch",
  type: {
    name: "Composite",
    className: "JobDescriptionSearch",
    modelProperties: {
      count: {
        serializedName: "count",
        xmlName: "count",
        type: {
          name: "Number"
        }
      },
      next: {
        serializedName: "next",
        nullable: true,
        xmlName: "next",
        type: {
          name: "String"
        }
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        xmlName: "previous",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        xmlName: "parameters",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchParameters"
        }
      },
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "JobDescriptionSearchResult",
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
  serializedName: "JobDescriptionSearchResult",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchResult",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        required: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      },
      pdf: {
        serializedName: "pdf",
        required: true,
        xmlName: "pdf",
        type: {
          name: "String"
        }
      },
      jobTitle: {
        serializedName: "jobTitle",
        xmlName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleSearchScoreComponent"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        xmlName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent"
        }
      },
      experience: {
        serializedName: "experience",
        xmlName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent"
        }
      },
      skills: {
        serializedName: "skills",
        xmlName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent"
        }
      },
      education: {
        serializedName: "education",
        xmlName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        xmlName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        xmlName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent"
        }
      },
      organizationName: {
        serializedName: "organizationName",
        required: true,
        nullable: true,
        xmlName: "organizationName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JobTitleSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "JobTitleSearchScoreComponent",
  type: {
    name: "Composite",
    className: "JobTitleSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ManagementLevelSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "ManagementLevelSearchScoreComponent",
  type: {
    name: "Composite",
    className: "ManagementLevelSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ExperienceSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "ExperienceSearchScoreComponent",
  type: {
    name: "Composite",
    className: "ExperienceSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SkillsSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "SkillsSearchScoreComponent",
  type: {
    name: "Composite",
    className: "SkillsSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LanguagesSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "LanguagesSearchScoreComponent",
  type: {
    name: "Composite",
    className: "LanguagesSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LocationSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "LocationSearchScoreComponent",
  type: {
    name: "Composite",
    className: "LocationSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EducationSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "EducationSearchScoreComponent",
  type: {
    name: "Composite",
    className: "EducationSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const OccupationGroupSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "OccupationGroupSearchScoreComponent",
  type: {
    name: "Composite",
    className: "OccupationGroupSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SearchExpressionSearchScoreComponent: coreClient.CompositeMapper = {
  serializedName: "SearchExpressionSearchScoreComponent",
  type: {
    name: "Composite",
    className: "SearchExpressionSearchScoreComponent",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetail: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetail",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetail",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        xmlName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailJobTitle"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLocation"
        }
      },
      education: {
        serializedName: "education",
        xmlName: "education",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducation"
        }
      },
      skills: {
        serializedName: "skills",
        xmlName: "skills",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailSkills"
        }
      },
      experience: {
        serializedName: "experience",
        xmlName: "experience",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailExperience"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        xmlName: "occupationGroup",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailOccupationGroup"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLanguages"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        xmlName: "managementLevel",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailManagementLevel"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        xmlName: "searchExpression",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailSearchExpression"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailJobTitle: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailJobTitle",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailJobTitle",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "JobDescriptionSearchDetailJobTitleMissingItem",
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
        xmlName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailJobTitleValue"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailJobTitleValue: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailJobTitleValue",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailJobTitleValue",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      companyName: {
        serializedName: "companyName",
        nullable: true,
        xmlName: "companyName",
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailLocation: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailLocation",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailLocation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchParametersLocation",
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
        xmlName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLocationValue"
        }
      }
    }
  }
};

export const Location: coreClient.CompositeMapper = {
  serializedName: "Location",
  type: {
    name: "Composite",
    className: "Location",
    modelProperties: {
      formatted: {
        serializedName: "formatted",
        readOnly: true,
        nullable: true,
        xmlName: "formatted",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        readOnly: true,
        nullable: true,
        xmlName: "postalCode",
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        nullable: true,
        xmlName: "state",
        type: {
          name: "String"
        }
      },
      country: {
        serializedName: "country",
        readOnly: true,
        nullable: true,
        xmlName: "country",
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        readOnly: true,
        nullable: true,
        xmlName: "countryCode",
        type: {
          name: "String"
        }
      },
      rawInput: {
        serializedName: "rawInput",
        required: true,
        xmlName: "rawInput",
        type: {
          name: "String"
        }
      },
      streetNumber: {
        serializedName: "streetNumber",
        readOnly: true,
        nullable: true,
        xmlName: "streetNumber",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        readOnly: true,
        nullable: true,
        xmlName: "street",
        type: {
          name: "String"
        }
      },
      apartmentNumber: {
        serializedName: "apartmentNumber",
        readOnly: true,
        nullable: true,
        xmlName: "apartmentNumber",
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        readOnly: true,
        nullable: true,
        xmlName: "city",
        type: {
          name: "String"
        }
      },
      latitude: {
        serializedName: "latitude",
        readOnly: true,
        nullable: true,
        xmlName: "latitude",
        type: {
          name: "Number"
        }
      },
      longitude: {
        serializedName: "longitude",
        readOnly: true,
        nullable: true,
        xmlName: "longitude",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1",
  type: {
    name: "Composite",
    className:
      "Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailEducation: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailEducation",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailEducation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducationMissing"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducationValue"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailEducationMissing: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailEducationMissing",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailEducationMissing",
    modelProperties: {
      degrees: {
        serializedName: "degrees",
        xmlName: "degrees",
        xmlElementName: "JobDescriptionSearchDetailEducationMissingDegreesItem",
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
        xmlName: "degreeTypes",
        xmlElementName:
          "JobDescriptionSearchDetailEducationMissingDegreeTypesItem",
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
  serializedName: "JobDescriptionSearchDetailEducationValue",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailEducationValue",
    modelProperties: {
      degrees: {
        serializedName: "degrees",
        xmlName: "degrees",
        xmlElementName: "JobDescriptionSearchDetailEducationValueDegreesItem",
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
        xmlName: "degreeTypes",
        xmlElementName:
          "JobDescriptionSearchDetailEducationValueDegreeTypesItem",
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
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailSkills: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailSkills",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailSkills",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "value",
        xmlElementName: "JobDescriptionSearchDetailSkillsValueItem",
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
  serializedName: "JobDescriptionSearchDetailSkillsValueItem",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailSkillsValueItem",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailExperience: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailExperience",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailExperience",
    modelProperties: {
      minimumExperience: {
        serializedName: "minimumExperience",
        nullable: true,
        xmlName: "minimumExperience",
        type: {
          name: "Number"
        }
      },
      maximumExperience: {
        serializedName: "maximumExperience",
        nullable: true,
        xmlName: "maximumExperience",
        type: {
          name: "Number"
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailOccupationGroup: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailOccupationGroup",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailOccupationGroup",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ArrayItemschema",
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
        xmlName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailOccupationGroupValue"
        }
      }
    }
  }
};

export const OccupationGroupSearchResult: coreClient.CompositeMapper = {
  serializedName: "OccupationGroupSearchResult",
  type: {
    name: "Composite",
    className: "OccupationGroupSearchResult",
    modelProperties: {
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      },
      code: {
        serializedName: "code",
        required: true,
        xmlName: "code",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      children: {
        serializedName: "children",
        required: true,
        xmlName: "children",
        xmlElementName: "OccupationGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OccupationGroup"
            }
          }
        }
      },
      parents: {
        serializedName: "parents",
        xmlName: "parents",
        xmlElementName: "OccupationGroup",
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

export const JobDescriptionSearchDetailLanguages: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailLanguages",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailLanguages",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "value",
        xmlElementName: "JobDescriptionSearchDetailLanguagesValueItem",
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
  serializedName: "JobDescriptionSearchDetailLanguagesValueItem",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailLanguagesValueItem",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailManagementLevel: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailManagementLevel",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailManagementLevel",
    modelProperties: {
      level: {
        serializedName: "level",
        nullable: true,
        xmlName: "level",
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"]
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailSearchExpression: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailSearchExpression",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailSearchExpression",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "JobDescriptionSearchDetailSearchExpressionMissingItem",
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
        xmlName: "value",
        xmlElementName: "JobDescriptionSearchDetailSearchExpressionValueItem",
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
  serializedName: "JobDescriptionSearchConfig",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchConfig",
    modelProperties: {
      allowPdfDownload: {
        serializedName: "allowPdfDownload",
        xmlName: "allowPdfDownload",
        type: {
          name: "Boolean"
        }
      },
      maxResults: {
        serializedName: "maxResults",
        nullable: true,
        xmlName: "maxResults",
        type: {
          name: "Number"
        }
      },
      displayJobTitle: {
        serializedName: "displayJobTitle",
        xmlName: "displayJobTitle",
        type: {
          name: "Boolean"
        }
      },
      displayLocation: {
        serializedName: "displayLocation",
        xmlName: "displayLocation",
        type: {
          name: "Boolean"
        }
      },
      displayYearsExperience: {
        serializedName: "displayYearsExperience",
        xmlName: "displayYearsExperience",
        type: {
          name: "Boolean"
        }
      },
      displayOccupationGroup: {
        serializedName: "displayOccupationGroup",
        xmlName: "displayOccupationGroup",
        type: {
          name: "Boolean"
        }
      },
      displayEducation: {
        serializedName: "displayEducation",
        xmlName: "displayEducation",
        type: {
          name: "Boolean"
        }
      },
      displaySkills: {
        serializedName: "displaySkills",
        xmlName: "displaySkills",
        type: {
          name: "Boolean"
        }
      },
      displayLanguages: {
        serializedName: "displayLanguages",
        xmlName: "displayLanguages",
        type: {
          name: "Boolean"
        }
      },
      displayManagementLevel: {
        serializedName: "displayManagementLevel",
        xmlName: "displayManagementLevel",
        type: {
          name: "Boolean"
        }
      },
      displayKeywords: {
        serializedName: "displayKeywords",
        xmlName: "displayKeywords",
        type: {
          name: "Boolean"
        }
      },
      weightJobTitle: {
        serializedName: "weightJobTitle",
        xmlName: "weightJobTitle",
        type: {
          name: "Number"
        }
      },
      weightLocation: {
        serializedName: "weightLocation",
        xmlName: "weightLocation",
        type: {
          name: "Number"
        }
      },
      weightYearsExperience: {
        serializedName: "weightYearsExperience",
        xmlName: "weightYearsExperience",
        type: {
          name: "Number"
        }
      },
      weightOccupationGroup: {
        serializedName: "weightOccupationGroup",
        xmlName: "weightOccupationGroup",
        type: {
          name: "Number"
        }
      },
      weightEducation: {
        serializedName: "weightEducation",
        xmlName: "weightEducation",
        type: {
          name: "Number"
        }
      },
      weightSkills: {
        serializedName: "weightSkills",
        xmlName: "weightSkills",
        type: {
          name: "Number"
        }
      },
      weightLanguages: {
        serializedName: "weightLanguages",
        xmlName: "weightLanguages",
        type: {
          name: "Number"
        }
      },
      weightManagementLevel: {
        serializedName: "weightManagementLevel",
        xmlName: "weightManagementLevel",
        type: {
          name: "Number"
        }
      },
      weightKeywords: {
        serializedName: "weightKeywords",
        xmlName: "weightKeywords",
        type: {
          name: "Number"
        }
      },
      indices: {
        serializedName: "indices",
        xmlName: "indices",
        xmlElementName: "JobDescriptionSearchConfigIndicesItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      showIndexDropdown: {
        serializedName: "showIndexDropdown",
        nullable: true,
        xmlName: "showIndexDropdown",
        type: {
          name: "Boolean"
        }
      },
      searchToolTheme: {
        serializedName: "searchToolTheme",
        nullable: true,
        xmlName: "searchToolTheme",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userId: {
        serializedName: "userId",
        readOnly: true,
        xmlName: "userId",
        type: {
          name: "Number"
        }
      },
      username: {
        serializedName: "username",
        readOnly: true,
        xmlName: "username",
        type: {
          name: "String"
        }
      },
      actions: {
        serializedName: "actions",
        nullable: true,
        xmlName: "actions",
        xmlElementName: "SearchConfigAction",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchConfigAction"
            }
          }
        }
      },
      hideToolbar: {
        serializedName: "hideToolbar",
        xmlName: "hideToolbar",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SearchConfigAction: coreClient.CompositeMapper = {
  serializedName: "SearchConfigAction",
  type: {
    name: "Composite",
    className: "SearchConfigAction",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      eventName: {
        serializedName: "eventName",
        required: true,
        xmlName: "eventName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      configOverride: {
        serializedName: "configOverride",
        xmlName: "configOverride",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchConfig"
        }
      }
    }
  }
};

export const JobDescriptionSearchEmbed: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchEmbed",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchEmbed",
    modelProperties: {
      url: {
        serializedName: "url",
        xmlName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className: "PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      count: {
        serializedName: "count",
        xmlName: "count",
        type: {
          name: "Number"
        }
      },
      next: {
        serializedName: "next",
        nullable: true,
        xmlName: "next",
        type: {
          name: "String"
        }
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        xmlName: "previous",
        type: {
          name: "String"
        }
      },
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "Get200ApplicationJsonPropertiesItemsItem",
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
  serializedName: "Get200ApplicationJsonPropertiesItemsItem",
  type: {
    name: "Composite",
    className: "Get200ApplicationJsonPropertiesItemsItem",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      documentType: {
        serializedName: "documentType",
        xmlName: "documentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      documentType: {
        serializedName: "documentType",
        xmlName: "documentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      count: {
        serializedName: "count",
        xmlName: "count",
        type: {
          name: "Number"
        }
      },
      next: {
        serializedName: "next",
        nullable: true,
        xmlName: "next",
        type: {
          name: "String"
        }
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        xmlName: "previous",
        type: {
          name: "String"
        }
      },
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName:
          "Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems"
            }
          }
        }
      }
    }
  }
};

export const Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems: coreClient.CompositeMapper = {
  serializedName:
    "Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems",
  type: {
    name: "Composite",
    className:
      "Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems",
    modelProperties: {
      document: {
        serializedName: "document",
        xmlName: "document",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      document: {
        serializedName: "document",
        xmlName: "document",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema",
    modelProperties: {
      document: {
        serializedName: "document",
        xmlName: "document",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResumeSearchParameters: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchParameters",
  type: {
    name: "Composite",
    className: "ResumeSearchParameters",
    modelProperties: {
      indices: {
        serializedName: "indices",
        required: true,
        xmlName: "indices",
        xmlElementName: "ResumeSearchParametersIndicesItem",
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
        xmlName: "jobDescription",
        type: {
          name: "String"
        }
      },
      resume: {
        serializedName: "resume",
        nullable: true,
        xmlName: "resume",
        type: {
          name: "String"
        }
      },
      jobTitles: {
        serializedName: "jobTitles",
        xmlName: "jobTitles",
        xmlElementName: "ResumeSearchParametersJobTitlesItem",
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
        xmlName: "jobTitlesCurrentOnly",
        type: {
          name: "Boolean"
        }
      },
      jobTitlesRequired: {
        serializedName: "jobTitlesRequired",
        xmlName: "jobTitlesRequired",
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
        xmlName: "jobTitlesWeight",
        type: {
          name: "Number"
        }
      },
      yearsExperienceMin: {
        serializedName: "yearsExperienceMin",
        nullable: true,
        xmlName: "yearsExperienceMin",
        type: {
          name: "Number"
        }
      },
      yearsExperienceMax: {
        serializedName: "yearsExperienceMax",
        nullable: true,
        xmlName: "yearsExperienceMax",
        type: {
          name: "Number"
        }
      },
      yearsExperienceRequired: {
        serializedName: "yearsExperienceRequired",
        xmlName: "yearsExperienceRequired",
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
        xmlName: "yearsExperienceWeight",
        type: {
          name: "Number"
        }
      },
      locations: {
        serializedName: "locations",
        xmlName: "locations",
        xmlElementName: "ResumeSearchParametersLocation",
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
        xmlName: "locationsWeight",
        type: {
          name: "Number"
        }
      },
      locationsRequired: {
        serializedName: "locationsRequired",
        xmlName: "locationsRequired",
        type: {
          name: "Boolean"
        }
      },
      skills: {
        serializedName: "skills",
        xmlName: "skills",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "skillsWeight",
        type: {
          name: "Number"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "languagesWeight",
        type: {
          name: "Number"
        }
      },
      institutions: {
        serializedName: "institutions",
        xmlName: "institutions",
        xmlElementName: "ResumeSearchParametersInstitutionsItem",
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
        xmlName: "institutionsRequired",
        type: {
          name: "Boolean"
        }
      },
      degrees: {
        serializedName: "degrees",
        xmlName: "degrees",
        xmlElementName: "ResumeSearchParametersDegreesItem",
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
        xmlName: "degreesRequired",
        type: {
          name: "Boolean"
        }
      },
      highestDegreeTypes: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "highestDegreeTypes",
        xmlName: "highestDegreeTypes",
        xmlElementName: "EducationLevel",
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
        xmlName: "highestDegreeTypesRequired",
        type: {
          name: "Boolean"
        }
      },
      isCurrentStudent: {
        serializedName: "isCurrentStudent",
        xmlName: "isCurrentStudent",
        type: {
          name: "Boolean"
        }
      },
      isCurrentStudentRequired: {
        serializedName: "isCurrentStudentRequired",
        xmlName: "isCurrentStudentRequired",
        type: {
          name: "Boolean"
        }
      },
      isRecentGraduate: {
        serializedName: "isRecentGraduate",
        xmlName: "isRecentGraduate",
        type: {
          name: "Boolean"
        }
      },
      isRecentGraduateRequired: {
        serializedName: "isRecentGraduateRequired",
        xmlName: "isRecentGraduateRequired",
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
        xmlName: "educationWeight",
        type: {
          name: "Number"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        nullable: true,
        xmlName: "searchExpression",
        type: {
          name: "String"
        }
      },
      searchExpressionRequired: {
        serializedName: "searchExpressionRequired",
        xmlName: "searchExpressionRequired",
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
        xmlName: "searchExpressionWeight",
        type: {
          name: "Number"
        }
      },
      socCodes: {
        serializedName: "socCodes",
        xmlName: "socCodes",
        xmlElementName: "ArrayItemschema",
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
        xmlName: "socCodesWeight",
        type: {
          name: "Number"
        }
      },
      socCodesRequired: {
        serializedName: "socCodesRequired",
        xmlName: "socCodesRequired",
        type: {
          name: "Boolean"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        xmlName: "managementLevel",
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"]
        }
      },
      managementLevelRequired: {
        serializedName: "managementLevelRequired",
        xmlName: "managementLevelRequired",
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
        xmlName: "managementLevelWeight",
        type: {
          name: "Number"
        }
      },
      customData: {
        serializedName: "customData",
        xmlName: "customData",
        xmlElementName: "ResumeSearchParametersCustomData",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersCustomData"
            }
          }
        }
      }
    }
  }
};

export const ResumeSearchParametersCustomData: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchParametersCustomData",
  type: {
    name: "Composite",
    className: "ResumeSearchParametersCustomData",
    modelProperties: {
      filterType: {
        serializedName: "filterType",
        required: true,
        xmlName: "filterType",
        type: {
          name: "String"
        }
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        xmlName: "dataPoint",
        type: {
          name: "String"
        }
      },
      query: {
        serializedName: "query",
        required: true,
        xmlName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      required: {
        serializedName: "required",
        xmlName: "required",
        type: {
          name: "Boolean"
        }
      },
      weight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "weight",
        xmlName: "weight",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeSearch: coreClient.CompositeMapper = {
  serializedName: "ResumeSearch",
  type: {
    name: "Composite",
    className: "ResumeSearch",
    modelProperties: {
      count: {
        serializedName: "count",
        xmlName: "count",
        type: {
          name: "Number"
        }
      },
      next: {
        serializedName: "next",
        nullable: true,
        xmlName: "next",
        type: {
          name: "String"
        }
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        xmlName: "previous",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        xmlName: "parameters",
        type: {
          name: "Composite",
          className: "ResumeSearchParameters"
        }
      },
      results: {
        serializedName: "results",
        xmlName: "results",
        xmlElementName: "ResumeSearchResult",
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
  serializedName: "ResumeSearchResult",
  type: {
    name: "Composite",
    className: "ResumeSearchResult",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        required: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      },
      pdf: {
        serializedName: "pdf",
        required: true,
        xmlName: "pdf",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      jobTitle: {
        serializedName: "jobTitle",
        xmlName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleSearchScoreComponent"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        xmlName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent"
        }
      },
      experience: {
        serializedName: "experience",
        xmlName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent"
        }
      },
      skills: {
        serializedName: "skills",
        xmlName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent"
        }
      },
      education: {
        serializedName: "education",
        xmlName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        xmlName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        xmlName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent"
        }
      },
      customData: {
        serializedName: "customData",
        required: true,
        xmlName: "customData",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className:
                "ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties"
            }
          }
        }
      }
    }
  }
};

export const ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties",
  type: {
    name: "Composite",
    className:
      "ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties",
    modelProperties: {
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        xmlName: "label",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        nullable: true,
        xmlName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeSearchDetail: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetail",
  type: {
    name: "Composite",
    className: "ResumeSearchDetail",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        xmlName: "jobTitle",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailJobTitle"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLocation"
        }
      },
      education: {
        serializedName: "education",
        xmlName: "education",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailEducation"
        }
      },
      skills: {
        serializedName: "skills",
        xmlName: "skills",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailSkills"
        }
      },
      experience: {
        serializedName: "experience",
        xmlName: "experience",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailExperience"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        xmlName: "occupationGroup",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailOccupationGroup"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLanguages"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        xmlName: "managementLevel",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailManagementLevel"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        xmlName: "searchExpression",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailSearchExpression"
        }
      }
    }
  }
};

export const ResumeSearchDetailJobTitle: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailJobTitle",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailJobTitle",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchDetailJobTitleMissingItem",
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
        xmlName: "value",
        xmlElementName: "ResumeSearchDetailJobTitleValueItem",
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
  serializedName: "ResumeSearchDetailJobTitleValueItem",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailJobTitleValueItem",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      startDate: {
        serializedName: "startDate",
        nullable: true,
        xmlName: "startDate",
        type: {
          name: "String"
        }
      },
      endDate: {
        serializedName: "endDate",
        nullable: true,
        xmlName: "endDate",
        type: {
          name: "String"
        }
      },
      companyName: {
        serializedName: "companyName",
        nullable: true,
        xmlName: "companyName",
        type: {
          name: "String"
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailLocation: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailLocation",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailLocation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchParametersLocation",
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
        xmlName: "value",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLocationValue"
        }
      }
    }
  }
};

export const ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailEducation: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailEducation",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailEducation",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailEducationMissing"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        xmlElementName: "ResumeSearchDetailEducationValueItem",
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
  serializedName: "ResumeSearchDetailEducationMissing",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailEducationMissing",
    modelProperties: {
      degrees: {
        serializedName: "degrees",
        xmlName: "degrees",
        xmlElementName: "ResumeSearchDetailEducationMissingDegreesItem",
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
        xmlName: "highestDegreeTypes",
        xmlElementName:
          "ResumeSearchDetailEducationMissingHighestDegreeTypesItem",
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
        xmlName: "institutions",
        xmlElementName: "ResumeSearchDetailEducationMissingInstitutionsItem",
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
        xmlName: "currentStudent",
        type: {
          name: "Boolean"
        }
      },
      recentGraduate: {
        serializedName: "recentGraduate",
        xmlName: "recentGraduate",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Education: coreClient.CompositeMapper = {
  serializedName: "Education",
  type: {
    name: "Composite",
    className: "Education",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      organization: {
        serializedName: "organization",
        nullable: true,
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      accreditation: {
        serializedName: "accreditation",
        xmlName: "accreditation",
        type: {
          name: "Composite",
          className: "Accreditation"
        }
      },
      grade: {
        serializedName: "grade",
        xmlName: "grade",
        type: {
          name: "Composite",
          className: "EducationGrade"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "Location"
        }
      },
      dates: {
        serializedName: "dates",
        xmlName: "dates",
        type: {
          name: "Composite",
          className: "EducationDates"
        }
      }
    }
  }
};

export const Accreditation: coreClient.CompositeMapper = {
  serializedName: "Accreditation",
  type: {
    name: "Composite",
    className: "Accreditation",
    modelProperties: {
      education: {
        serializedName: "education",
        xmlName: "education",
        type: {
          name: "String"
        }
      },
      inputStr: {
        serializedName: "inputStr",
        readOnly: true,
        xmlName: "inputStr",
        type: {
          name: "String"
        }
      },
      matchStr: {
        serializedName: "matchStr",
        readOnly: true,
        nullable: true,
        xmlName: "matchStr",
        type: {
          name: "String"
        }
      },
      educationLevel: {
        serializedName: "educationLevel",
        readOnly: true,
        nullable: true,
        xmlName: "educationLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EducationGrade: coreClient.CompositeMapper = {
  serializedName: "EducationGrade",
  type: {
    name: "Composite",
    className: "EducationGrade",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      raw: {
        serializedName: "raw",
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      metric: {
        serializedName: "metric",
        nullable: true,
        xmlName: "metric",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EducationDates: coreClient.CompositeMapper = {
  serializedName: "EducationDates",
  type: {
    name: "Composite",
    className: "EducationDates",
    modelProperties: {
      completionDate: {
        serializedName: "completionDate",
        xmlName: "completionDate",
        type: {
          name: "Date"
        }
      },
      isCurrent: {
        serializedName: "isCurrent",
        xmlName: "isCurrent",
        type: {
          name: "Boolean"
        }
      },
      startDate: {
        serializedName: "startDate",
        nullable: true,
        xmlName: "startDate",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailSkills: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailSkills",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailSkills",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "value",
        xmlElementName: "ResumeSearchDetailSkillsValueItem",
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
  serializedName: "ResumeSkill",
  type: {
    name: "Composite",
    className: "ResumeSkill",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      lastUsed: {
        serializedName: "lastUsed",
        nullable: true,
        xmlName: "lastUsed",
        type: {
          name: "String"
        }
      },
      numberOfMonths: {
        serializedName: "numberOfMonths",
        nullable: true,
        xmlName: "numberOfMonths",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        nullable: true,
        xmlName: "type",
        type: {
          name: "String"
        }
      },
      sources: {
        serializedName: "sources",
        xmlName: "sources",
        xmlElementName: "ResumeSkillSourcesItem",
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
  serializedName: "ResumeSkillSourcesItem",
  type: {
    name: "Composite",
    className: "ResumeSkillSourcesItem",
    modelProperties: {
      section: {
        serializedName: "section",
        xmlName: "section",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        nullable: true,
        xmlName: "position",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailExperience: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailExperience",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailExperience",
    modelProperties: {
      years: {
        serializedName: "years",
        nullable: true,
        xmlName: "years",
        type: {
          name: "Number"
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailOccupationGroup: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailOccupationGroup",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailOccupationGroup",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ArrayItemschema",
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
        xmlName: "value",
        xmlElementName: "OccupationGroupSearchResult",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OccupationGroupSearchResult"
            }
          }
        }
      }
    }
  }
};

export const ResumeSearchDetailLanguages: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailLanguages",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailLanguages",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchParametersSkill",
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
        xmlName: "value",
        xmlElementName: "ResumeSearchDetailLanguagesValueItem",
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
  serializedName:
    "Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1",
  type: {
    name: "Composite",
    className:
      "Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1",
    modelProperties: {
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailManagementLevel: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailManagementLevel",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailManagementLevel",
    modelProperties: {
      level: {
        serializedName: "level",
        nullable: true,
        xmlName: "level",
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"]
        }
      },
      match: {
        serializedName: "match",
        xmlName: "match",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeSearchDetailSearchExpression: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailSearchExpression",
  type: {
    name: "Composite",
    className: "ResumeSearchDetailSearchExpression",
    modelProperties: {
      missing: {
        serializedName: "missing",
        xmlName: "missing",
        xmlElementName: "ResumeSearchDetailSearchExpressionMissingItem",
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
        xmlName: "value",
        xmlElementName: "ResumeSearchDetailSearchExpressionValueItem",
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
  serializedName: "ResumeSearchMatch",
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
        xmlName: "score",
        type: {
          name: "Number"
        }
      },
      details: {
        serializedName: "details",
        xmlName: "details",
        type: {
          name: "Composite",
          className: "ResumeSearchMatchDetails"
        }
      }
    }
  }
};

export const ResumeSearchMatchDetails: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchMatchDetails",
  type: {
    name: "Composite",
    className: "ResumeSearchMatchDetails",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        xmlName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleSearchScoreComponent"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        xmlName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent"
        }
      },
      experience: {
        serializedName: "experience",
        xmlName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent"
        }
      },
      skills: {
        serializedName: "skills",
        xmlName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent"
        }
      },
      education: {
        serializedName: "education",
        xmlName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent"
        }
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        xmlName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent"
        }
      },
      searchExpression: {
        serializedName: "searchExpression",
        xmlName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent"
        }
      }
    }
  }
};

export const ResumeSearchConfig: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchConfig",
  type: {
    name: "Composite",
    className: "ResumeSearchConfig",
    modelProperties: {
      allowPdfDownload: {
        serializedName: "allowPdfDownload",
        xmlName: "allowPdfDownload",
        type: {
          name: "Boolean"
        }
      },
      maxResults: {
        serializedName: "maxResults",
        nullable: true,
        xmlName: "maxResults",
        type: {
          name: "Number"
        }
      },
      displayJobTitle: {
        serializedName: "displayJobTitle",
        xmlName: "displayJobTitle",
        type: {
          name: "Boolean"
        }
      },
      displayLocation: {
        serializedName: "displayLocation",
        xmlName: "displayLocation",
        type: {
          name: "Boolean"
        }
      },
      displayYearsExperience: {
        serializedName: "displayYearsExperience",
        xmlName: "displayYearsExperience",
        type: {
          name: "Boolean"
        }
      },
      displayOccupationGroup: {
        serializedName: "displayOccupationGroup",
        xmlName: "displayOccupationGroup",
        type: {
          name: "Boolean"
        }
      },
      displayEducation: {
        serializedName: "displayEducation",
        xmlName: "displayEducation",
        type: {
          name: "Boolean"
        }
      },
      displaySkills: {
        serializedName: "displaySkills",
        xmlName: "displaySkills",
        type: {
          name: "Boolean"
        }
      },
      displayLanguages: {
        serializedName: "displayLanguages",
        xmlName: "displayLanguages",
        type: {
          name: "Boolean"
        }
      },
      displayManagementLevel: {
        serializedName: "displayManagementLevel",
        xmlName: "displayManagementLevel",
        type: {
          name: "Boolean"
        }
      },
      displayKeywords: {
        serializedName: "displayKeywords",
        xmlName: "displayKeywords",
        type: {
          name: "Boolean"
        }
      },
      weightJobTitle: {
        serializedName: "weightJobTitle",
        xmlName: "weightJobTitle",
        type: {
          name: "Number"
        }
      },
      weightLocation: {
        serializedName: "weightLocation",
        xmlName: "weightLocation",
        type: {
          name: "Number"
        }
      },
      weightYearsExperience: {
        serializedName: "weightYearsExperience",
        xmlName: "weightYearsExperience",
        type: {
          name: "Number"
        }
      },
      weightOccupationGroup: {
        serializedName: "weightOccupationGroup",
        xmlName: "weightOccupationGroup",
        type: {
          name: "Number"
        }
      },
      weightEducation: {
        serializedName: "weightEducation",
        xmlName: "weightEducation",
        type: {
          name: "Number"
        }
      },
      weightSkills: {
        serializedName: "weightSkills",
        xmlName: "weightSkills",
        type: {
          name: "Number"
        }
      },
      weightLanguages: {
        serializedName: "weightLanguages",
        xmlName: "weightLanguages",
        type: {
          name: "Number"
        }
      },
      weightManagementLevel: {
        serializedName: "weightManagementLevel",
        xmlName: "weightManagementLevel",
        type: {
          name: "Number"
        }
      },
      weightKeywords: {
        serializedName: "weightKeywords",
        xmlName: "weightKeywords",
        type: {
          name: "Number"
        }
      },
      indices: {
        serializedName: "indices",
        xmlName: "indices",
        xmlElementName: "ResumeSearchConfigIndicesItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      showIndexDropdown: {
        serializedName: "showIndexDropdown",
        nullable: true,
        xmlName: "showIndexDropdown",
        type: {
          name: "Boolean"
        }
      },
      searchToolTheme: {
        serializedName: "searchToolTheme",
        nullable: true,
        xmlName: "searchToolTheme",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userId: {
        serializedName: "userId",
        readOnly: true,
        xmlName: "userId",
        type: {
          name: "Number"
        }
      },
      username: {
        serializedName: "username",
        readOnly: true,
        xmlName: "username",
        type: {
          name: "String"
        }
      },
      actions: {
        serializedName: "actions",
        nullable: true,
        xmlName: "actions",
        xmlElementName: "SearchConfigAction",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchConfigAction"
            }
          }
        }
      },
      hideToolbar: {
        serializedName: "hideToolbar",
        xmlName: "hideToolbar",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      configOverride: {
        serializedName: "configOverride",
        xmlName: "configOverride",
        type: {
          name: "Composite",
          className: "ResumeSearchConfig"
        }
      }
    }
  }
};

export const ResumeSearchEmbed: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchEmbed",
  type: {
    name: "Composite",
    className: "ResumeSearchEmbed",
    modelProperties: {
      url: {
        serializedName: "url",
        xmlName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsEyyf0ZSchemasResumedataAdditionalproperties: coreClient.CompositeMapper = {
  serializedName: "ComponentsEyyf0ZSchemasResumedataAdditionalproperties",
  type: {
    name: "Composite",
    className: "ComponentsEyyf0ZSchemasResumedataAdditionalproperties"
  }
};

export const ResumeData: coreClient.CompositeMapper = {
  serializedName: "ResumeData",
  type: {
    name: "Composite",
    className: "ResumeData",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "Composite",
          className: "ResumeDataName"
        }
      },
      phoneNumbers: {
        serializedName: "phoneNumbers",
        xmlName: "phoneNumbers",
        xmlElementName: "ResumeDataPhoneNumbersItem",
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
        xmlName: "websites",
        xmlElementName: "ResumeDataWebsitesItem",
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
        xmlName: "emails",
        xmlElementName: "ResumeDataEmailsItem",
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
        xmlName: "dateOfBirth",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "Location"
        }
      },
      objective: {
        defaultValue: "",
        serializedName: "objective",
        nullable: true,
        xmlName: "objective",
        type: {
          name: "String"
        }
      },
      languages: {
        serializedName: "languages",
        readOnly: true,
        xmlName: "languages",
        xmlElementName: "ResumeDataLanguagesItem",
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
        xmlName: "languageCodes",
        xmlElementName: "ResumeDataLanguageCodesItem",
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
        defaultValue: "",
        serializedName: "summary",
        nullable: true,
        xmlName: "summary",
        type: {
          name: "String"
        }
      },
      totalYearsExperience: {
        serializedName: "totalYearsExperience",
        nullable: true,
        xmlName: "totalYearsExperience",
        type: {
          name: "Number"
        }
      },
      headShot: {
        serializedName: "headShot",
        readOnly: true,
        nullable: true,
        xmlName: "headShot",
        type: {
          name: "ByteArray"
        }
      },
      education: {
        serializedName: "education",
        xmlName: "education",
        xmlElementName: "Education",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Education"
            }
          }
        }
      },
      profession: {
        serializedName: "profession",
        readOnly: true,
        nullable: true,
        xmlName: "profession",
        type: {
          name: "String"
        }
      },
      linkedin: {
        serializedName: "linkedin",
        readOnly: true,
        nullable: true,
        xmlName: "linkedin",
        type: {
          name: "String"
        }
      },
      workExperience: {
        serializedName: "workExperience",
        xmlName: "workExperience",
        xmlElementName: "ResumeDataWorkExperienceItem",
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
        xmlName: "skills",
        xmlElementName: "ResumeDataSkillsItem",
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
        xmlName: "certifications",
        xmlElementName: "ResumeDataCertificationsItem",
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
        xmlName: "publications",
        xmlElementName: "ResumeDataPublicationsItem",
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
        xmlName: "referees",
        xmlElementName: "ResumeDataRefereesItem",
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
        xmlName: "sections",
        xmlElementName: "ResumeDataSectionsItem",
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
        nullable: true,
        xmlName: "isResumeProbability",
        type: {
          name: "Number"
        }
      },
      rawText: {
        serializedName: "rawText",
        xmlName: "rawText",
        type: {
          name: "String"
        }
      },
      redactedText: {
        serializedName: "redactedText",
        xmlName: "redactedText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResumeDataName: coreClient.CompositeMapper = {
  serializedName: "ResumeDataName",
  type: {
    name: "Composite",
    className: "ResumeDataName",
    modelProperties: {
      raw: {
        serializedName: "raw",
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      first: {
        serializedName: "first",
        xmlName: "first",
        type: {
          name: "String"
        }
      },
      last: {
        serializedName: "last",
        xmlName: "last",
        type: {
          name: "String"
        }
      },
      middle: {
        serializedName: "middle",
        xmlName: "middle",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        xmlName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResumeDataWorkExperienceItem: coreClient.CompositeMapper = {
  serializedName: "ResumeDataWorkExperienceItem",
  type: {
    name: "Composite",
    className: "ResumeDataWorkExperienceItem",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      jobTitle: {
        serializedName: "jobTitle",
        nullable: true,
        xmlName: "jobTitle",
        type: {
          name: "String"
        }
      },
      socCode: {
        serializedName: "socCode",
        readOnly: true,
        nullable: true,
        xmlName: "socCode",
        type: {
          name: "String"
        }
      },
      socName: {
        serializedName: "socName",
        readOnly: true,
        nullable: true,
        xmlName: "socName",
        type: {
          name: "String"
        }
      },
      organization: {
        serializedName: "organization",
        nullable: true,
        xmlName: "organization",
        type: {
          name: "String"
        }
      },
      industry: {
        serializedName: "industry",
        readOnly: true,
        nullable: true,
        xmlName: "industry",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "Location"
        }
      },
      jobDescription: {
        serializedName: "jobDescription",
        nullable: true,
        xmlName: "jobDescription",
        type: {
          name: "String"
        }
      },
      dates: {
        serializedName: "dates",
        xmlName: "dates",
        type: {
          name: "Composite",
          className: "ResumeDataWorkExperienceItemDates"
        }
      },
      occupation: {
        serializedName: "occupation",
        xmlName: "occupation",
        type: {
          name: "Composite",
          className: "ResumeDataWorkExperienceItemOccupation"
        }
      }
    }
  }
};

export const ResumeDataWorkExperienceItemDates: coreClient.CompositeMapper = {
  serializedName: "ResumeDataWorkExperienceItemDates",
  type: {
    name: "Composite",
    className: "ResumeDataWorkExperienceItemDates",
    modelProperties: {
      startDate: {
        serializedName: "startDate",
        nullable: true,
        xmlName: "startDate",
        type: {
          name: "Date"
        }
      },
      endDate: {
        serializedName: "endDate",
        nullable: true,
        xmlName: "endDate",
        type: {
          name: "Date"
        }
      },
      monthsInPosition: {
        serializedName: "monthsInPosition",
        nullable: true,
        xmlName: "monthsInPosition",
        type: {
          name: "Number"
        }
      },
      isCurrent: {
        serializedName: "isCurrent",
        xmlName: "isCurrent",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResumeDataWorkExperienceItemOccupation: coreClient.CompositeMapper = {
  serializedName: "ResumeDataWorkExperienceItemOccupation",
  type: {
    name: "Composite",
    className: "ResumeDataWorkExperienceItemOccupation",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        nullable: true,
        xmlName: "jobTitle",
        type: {
          name: "String"
        }
      },
      jobTitleNormalized: {
        serializedName: "jobTitleNormalized",
        nullable: true,
        xmlName: "jobTitleNormalized",
        type: {
          name: "String"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        xmlName: "managementLevel",
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"]
        }
      },
      classification: {
        serializedName: "classification",
        xmlName: "classification",
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
  serializedName:
    "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification",
  type: {
    name: "Composite",
    className:
      "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification",
    modelProperties: {
      title: {
        serializedName: "title",
        xmlName: "title",
        type: {
          name: "String"
        }
      },
      minorGroup: {
        serializedName: "minorGroup",
        xmlName: "minorGroup",
        type: {
          name: "String"
        }
      },
      subMajorGroup: {
        serializedName: "subMajorGroup",
        xmlName: "subMajorGroup",
        type: {
          name: "String"
        }
      },
      majorGroup: {
        serializedName: "majorGroup",
        xmlName: "majorGroup",
        type: {
          name: "String"
        }
      },
      socCode: {
        serializedName: "socCode",
        xmlName: "socCode",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeDataSkillsItem: coreClient.CompositeMapper = {
  serializedName: "ResumeDataSkillsItem",
  type: {
    name: "Composite",
    className: "ResumeDataSkillsItem",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      emsiId: {
        serializedName: "emsiId",
        readOnly: true,
        nullable: true,
        xmlName: "emsiId",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      lastUsed: {
        serializedName: "lastUsed",
        nullable: true,
        xmlName: "lastUsed",
        type: {
          name: "String"
        }
      },
      numberOfMonths: {
        serializedName: "numberOfMonths",
        nullable: true,
        xmlName: "numberOfMonths",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        xmlName: "type",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        readOnly: true,
        nullable: true,
        xmlName: "count",
        type: {
          name: "Number"
        }
      },
      weighting: {
        serializedName: "weighting",
        readOnly: true,
        nullable: true,
        xmlName: "weighting",
        type: {
          name: "Number"
        }
      },
      sources: {
        serializedName: "sources",
        readOnly: true,
        xmlName: "sources",
        xmlElementName: "ResumeDataSkillsPropertiesItemsItem",
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
  serializedName: "ResumeDataSkillsPropertiesItemsItem",
  type: {
    name: "Composite",
    className: "ResumeDataSkillsPropertiesItemsItem",
    modelProperties: {
      section: {
        serializedName: "section",
        xmlName: "section",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        nullable: true,
        xmlName: "position",
        type: {
          name: "Number"
        }
      },
      workExperienceId: {
        serializedName: "workExperienceId",
        nullable: true,
        xmlName: "workExperienceId",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResumeDataRefereesItem: coreClient.CompositeMapper = {
  serializedName: "ResumeDataRefereesItem",
  type: {
    name: "Composite",
    className: "ResumeDataRefereesItem",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        xmlName: "text",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        nullable: true,
        xmlName: "email",
        type: {
          name: "String"
        }
      },
      number: {
        serializedName: "number",
        nullable: true,
        xmlName: "number",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        nullable: true,
        xmlName: "position",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResumeDataSectionsItem: coreClient.CompositeMapper = {
  serializedName: "ResumeDataSectionsItem",
  type: {
    name: "Composite",
    className: "ResumeDataSectionsItem",
    modelProperties: {
      sectionType: {
        serializedName: "sectionType",
        xmlName: "sectionType",
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
        xmlName: "bbox",
        xmlElementName: "ArrayItemschema",
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
        xmlName: "pageIndex",
        type: {
          name: "Number"
        }
      },
      text: {
        serializedName: "text",
        xmlName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoiceData: coreClient.CompositeMapper = {
  serializedName: "InvoiceData",
  type: {
    name: "Composite",
    className: "InvoiceData",
    modelProperties: {
      tables: {
        serializedName: "tables",
        xmlName: "tables",
        xmlElementName: "InvoiceDataTablesItem",
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
        xmlName: "invoiceDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      invoiceOrderDate: {
        serializedName: "invoiceOrderDate",
        xmlName: "invoiceOrderDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      paymentDateDue: {
        serializedName: "paymentDateDue",
        xmlName: "paymentDateDue",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      paymentAmountBase: {
        serializedName: "paymentAmountBase",
        xmlName: "paymentAmountBase",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountBase"
        }
      },
      paymentAmountTax: {
        serializedName: "paymentAmountTax",
        xmlName: "paymentAmountTax",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountTax"
        }
      },
      paymentAmountTotal: {
        serializedName: "paymentAmountTotal",
        xmlName: "paymentAmountTotal",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountTotal"
        }
      },
      paymentAmountPaid: {
        serializedName: "paymentAmountPaid",
        xmlName: "paymentAmountPaid",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountPaid"
        }
      },
      paymentAmountDue: {
        serializedName: "paymentAmountDue",
        xmlName: "paymentAmountDue",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentAmountDue"
        }
      },
      invoiceNumber: {
        serializedName: "invoiceNumber",
        xmlName: "invoiceNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataInvoiceNumber"
        }
      },
      invoicePurchaseOrderNumber: {
        serializedName: "invoicePurchaseOrderNumber",
        xmlName: "invoicePurchaseOrderNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataInvoicePurchaseOrderNumber"
        }
      },
      supplierBusinessNumber: {
        serializedName: "supplierBusinessNumber",
        xmlName: "supplierBusinessNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierBusinessNumber"
        }
      },
      customerNumber: {
        serializedName: "customerNumber",
        xmlName: "customerNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerNumber"
        }
      },
      customerBusinessNumber: {
        serializedName: "customerBusinessNumber",
        xmlName: "customerBusinessNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerBusinessNumber"
        }
      },
      paymentReference: {
        serializedName: "paymentReference",
        xmlName: "paymentReference",
        type: {
          name: "Composite",
          className: "InvoiceDataPaymentReference"
        }
      },
      bankAccountNumber: {
        serializedName: "bankAccountNumber",
        xmlName: "bankAccountNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataBankAccountNumber"
        }
      },
      supplierVat: {
        serializedName: "supplierVat",
        xmlName: "supplierVat",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierVat"
        }
      },
      customerVat: {
        serializedName: "customerVat",
        xmlName: "customerVat",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerVat"
        }
      },
      bpayBillerCode: {
        serializedName: "bpayBillerCode",
        xmlName: "bpayBillerCode",
        type: {
          name: "Composite",
          className: "InvoiceDataBpayBillerCode"
        }
      },
      bpayReference: {
        serializedName: "bpayReference",
        xmlName: "bpayReference",
        type: {
          name: "Composite",
          className: "InvoiceDataBpayReference"
        }
      },
      bankSortCode: {
        serializedName: "bankSortCode",
        xmlName: "bankSortCode",
        type: {
          name: "Composite",
          className: "InvoiceDataBankSortCode"
        }
      },
      bankIban: {
        serializedName: "bankIban",
        xmlName: "bankIban",
        type: {
          name: "Composite",
          className: "InvoiceDataBankIban"
        }
      },
      bankSwift: {
        serializedName: "bankSwift",
        xmlName: "bankSwift",
        type: {
          name: "Composite",
          className: "InvoiceDataBankSwift"
        }
      },
      bankBsb: {
        serializedName: "bankBsb",
        xmlName: "bankBsb",
        type: {
          name: "Composite",
          className: "InvoiceDataBankBsb"
        }
      },
      customerContactName: {
        serializedName: "customerContactName",
        xmlName: "customerContactName",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerContactName"
        }
      },
      customerCompanyName: {
        serializedName: "customerCompanyName",
        xmlName: "customerCompanyName",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerCompanyName"
        }
      },
      supplierCompanyName: {
        serializedName: "supplierCompanyName",
        xmlName: "supplierCompanyName",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierCompanyName"
        }
      },
      customerBillingAddress: {
        serializedName: "customerBillingAddress",
        xmlName: "customerBillingAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      customerDeliveryAddress: {
        serializedName: "customerDeliveryAddress",
        xmlName: "customerDeliveryAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      supplierAddress: {
        serializedName: "supplierAddress",
        xmlName: "supplierAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      customerPhoneNumber: {
        serializedName: "customerPhoneNumber",
        xmlName: "customerPhoneNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerPhoneNumber"
        }
      },
      supplierPhoneNumber: {
        serializedName: "supplierPhoneNumber",
        xmlName: "supplierPhoneNumber",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierPhoneNumber"
        }
      },
      supplierFax: {
        serializedName: "supplierFax",
        xmlName: "supplierFax",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierFax"
        }
      },
      customerEmail: {
        serializedName: "customerEmail",
        xmlName: "customerEmail",
        type: {
          name: "Composite",
          className: "InvoiceDataCustomerEmail"
        }
      },
      supplierEmail: {
        serializedName: "supplierEmail",
        xmlName: "supplierEmail",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierEmail"
        }
      },
      supplierWebsite: {
        serializedName: "supplierWebsite",
        xmlName: "supplierWebsite",
        type: {
          name: "Composite",
          className: "InvoiceDataSupplierWebsite"
        }
      },
      currencyCode: {
        serializedName: "currencyCode",
        xmlName: "currencyCode",
        type: {
          name: "Composite",
          className: "CurrencyCodeAnnotation"
        }
      },
      customFields: {
        serializedName: "customFields",
        nullable: true,
        xmlName: "customFields",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const InvoiceDataTablesItem: coreClient.CompositeMapper = {
  serializedName: "InvoiceDataTablesItem",
  type: {
    name: "Composite",
    className: "InvoiceDataTablesItem",
    modelProperties: {
      rows: {
        serializedName: "rows",
        xmlName: "rows",
        xmlElementName: "RowAnnotation",
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
  serializedName: "RowAnnotation",
  type: {
    name: "Composite",
    className: "RowAnnotation",
    modelProperties: {
      code: {
        serializedName: "code",
        nullable: true,
        xmlName: "code",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        nullable: true,
        xmlName: "date",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        nullable: true,
        xmlName: "description",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        nullable: true,
        xmlName: "unit",
        type: {
          name: "String"
        }
      },
      unitPrice: {
        serializedName: "unitPrice",
        nullable: true,
        xmlName: "unitPrice",
        type: {
          name: "Number"
        }
      },
      quantity: {
        serializedName: "quantity",
        nullable: true,
        xmlName: "quantity",
        type: {
          name: "Number"
        }
      },
      discount: {
        serializedName: "discount",
        nullable: true,
        xmlName: "discount",
        type: {
          name: "String"
        }
      },
      baseTotal: {
        serializedName: "baseTotal",
        nullable: true,
        xmlName: "baseTotal",
        type: {
          name: "Number"
        }
      },
      taxRate: {
        serializedName: "taxRate",
        nullable: true,
        xmlName: "taxRate",
        type: {
          name: "String"
        }
      },
      taxTotal: {
        serializedName: "taxTotal",
        nullable: true,
        xmlName: "taxTotal",
        type: {
          name: "Number"
        }
      },
      total: {
        serializedName: "total",
        nullable: true,
        xmlName: "total",
        type: {
          name: "Number"
        }
      },
      other: {
        serializedName: "other",
        nullable: true,
        xmlName: "other",
        type: {
          name: "String"
        }
      },
      customFields: {
        serializedName: "customFields",
        xmlName: "customFields",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Annotation: coreClient.CompositeMapper = {
  serializedName: "Annotation",
  type: {
    name: "Composite",
    className: "Annotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      rectangle: {
        serializedName: "rectangle",
        xmlName: "rectangle",
        type: {
          name: "Composite",
          className: "Rectangle"
        }
      },
      rectangles: {
        serializedName: "rectangles",
        required: true,
        nullable: true,
        xmlName: "rectangles",
        xmlElementName: "Rectangle",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rectangle"
            }
          }
        }
      },
      pageIndex: {
        serializedName: "pageIndex",
        required: true,
        nullable: true,
        xmlName: "pageIndex",
        type: {
          name: "Number"
        }
      },
      raw: {
        serializedName: "raw",
        required: true,
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      confidence: {
        serializedName: "confidence",
        required: true,
        nullable: true,
        xmlName: "confidence",
        type: {
          name: "Number"
        }
      },
      classificationConfidence: {
        serializedName: "classificationConfidence",
        required: true,
        nullable: true,
        xmlName: "classificationConfidence",
        type: {
          name: "Number"
        }
      },
      textExtractionConfidence: {
        serializedName: "textExtractionConfidence",
        required: true,
        nullable: true,
        xmlName: "textExtractionConfidence",
        type: {
          name: "Number"
        }
      },
      isVerified: {
        serializedName: "isVerified",
        required: true,
        xmlName: "isVerified",
        type: {
          name: "Boolean"
        }
      },
      isClientVerified: {
        serializedName: "isClientVerified",
        required: true,
        xmlName: "isClientVerified",
        type: {
          name: "Boolean"
        }
      },
      isAutoVerified: {
        serializedName: "isAutoVerified",
        required: true,
        xmlName: "isAutoVerified",
        type: {
          name: "Boolean"
        }
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        xmlName: "dataPoint",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "contentType",
        required: true,
        xmlName: "contentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Rectangle: coreClient.CompositeMapper = {
  serializedName: "Rectangle",
  type: {
    name: "Composite",
    className: "Rectangle",
    modelProperties: {
      x0: {
        serializedName: "x0",
        required: true,
        xmlName: "x0",
        type: {
          name: "Number"
        }
      },
      y0: {
        serializedName: "y0",
        required: true,
        xmlName: "y0",
        type: {
          name: "Number"
        }
      },
      x1: {
        serializedName: "x1",
        required: true,
        xmlName: "x1",
        type: {
          name: "Number"
        }
      },
      y1: {
        serializedName: "y1",
        required: true,
        xmlName: "y1",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1",
  type: {
    name: "Composite",
    className:
      "Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1",
  type: {
    name: "Composite",
    className:
      "Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1",
  type: {
    name: "Composite",
    className:
      "Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1",
  type: {
    name: "Composite",
    className:
      "Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1",
  type: {
    name: "Composite",
    className:
      "Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1",
  type: {
    name: "Composite",
    className:
      "Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1",
  type: {
    name: "Composite",
    className:
      "Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1",
  type: {
    name: "Composite",
    className:
      "Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1",
  type: {
    name: "Composite",
    className:
      "Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1",
  type: {
    name: "Composite",
    className:
      "Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1",
  type: {
    name: "Composite",
    className: "ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1",
  type: {
    name: "Composite",
    className: "ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1",
  type: {
    name: "Composite",
    className:
      "Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1: coreClient.CompositeMapper = {
  serializedName: "Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1",
  type: {
    name: "Composite",
    className: "Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1",
  type: {
    name: "Composite",
    className: "Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1: coreClient.CompositeMapper = {
  serializedName: "Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1",
  type: {
    name: "Composite",
    className: "Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1: coreClient.CompositeMapper = {
  serializedName:
    "ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1",
  type: {
    name: "Composite",
    className:
      "ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1",
  type: {
    name: "Composite",
    className:
      "Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1",
  type: {
    name: "Composite",
    className:
      "Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1",
  type: {
    name: "Composite",
    className:
      "Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1",
  type: {
    name: "Composite",
    className:
      "Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1",
  type: {
    name: "Composite",
    className: "Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1",
  type: {
    name: "Composite",
    className:
      "Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1",
  type: {
    name: "Composite",
    className:
      "Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1: coreClient.CompositeMapper = {
  serializedName:
    "Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1",
  type: {
    name: "Composite",
    className:
      "Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1",
    modelProperties: {
      raw: {
        serializedName: "raw",
        nullable: true,
        xmlName: "raw",
        type: {
          name: "String"
        }
      },
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JobDescriptionData: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionData",
  type: {
    name: "Composite",
    className: "JobDescriptionData",
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        xmlName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleAnnotation"
        }
      },
      contactEmail: {
        serializedName: "contactEmail",
        xmlName: "contactEmail",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      contactName: {
        serializedName: "contactName",
        xmlName: "contactName",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      contactPhone: {
        serializedName: "contactPhone",
        xmlName: "contactPhone",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      startDate: {
        serializedName: "startDate",
        xmlName: "startDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      endDate: {
        serializedName: "endDate",
        xmlName: "endDate",
        type: {
          name: "Composite",
          className: "DateAnnotation"
        }
      },
      jobType: {
        serializedName: "jobType",
        xmlName: "jobType",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      languages: {
        serializedName: "languages",
        xmlName: "languages",
        xmlElementName: "LanguageAnnotation",
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
        xmlName: "skills",
        xmlElementName: "SkillAnnotation",
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
        xmlName: "organizationName",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      organizationWebsite: {
        serializedName: "organizationWebsite",
        xmlName: "organizationWebsite",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      educationLevel: {
        serializedName: "educationLevel",
        xmlName: "educationLevel",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      educationAccreditation: {
        serializedName: "educationAccreditation",
        xmlName: "educationAccreditation",
        type: {
          name: "Composite",
          className: "TextAnnotation"
        }
      },
      expectedRemuneration: {
        serializedName: "expectedRemuneration",
        xmlName: "expectedRemuneration",
        type: {
          name: "Composite",
          className: "ExpectedRemunerationAnnotation"
        }
      },
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "Composite",
          className: "LocationAnnotation"
        }
      },
      certifications: {
        serializedName: "certifications",
        xmlName: "certifications",
        xmlElementName: "TextAnnotation",
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
        xmlName: "yearsExperience",
        type: {
          name: "Composite",
          className: "YearsExperienceAnnotation"
        }
      }
    }
  }
};

export const JobTitleAnnotationParsed: coreClient.CompositeMapper = {
  serializedName: "JobTitleAnnotationParsed",
  type: {
    name: "Composite",
    className: "JobTitleAnnotationParsed",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        xmlName: "managementLevel",
        type: {
          name: "String"
        }
      },
      classification: {
        serializedName: "classification",
        xmlName: "classification",
        type: {
          name: "Composite",
          className: "JobTitleAnnotationParsedClassification"
        }
      }
    }
  }
};

export const JobTitleAnnotationParsedClassification: coreClient.CompositeMapper = {
  serializedName: "JobTitleAnnotationParsedClassification",
  type: {
    name: "Composite",
    className: "JobTitleAnnotationParsedClassification",
    modelProperties: {
      socCode: {
        serializedName: "socCode",
        xmlName: "socCode",
        type: {
          name: "Number"
        }
      },
      title: {
        serializedName: "title",
        xmlName: "title",
        type: {
          name: "String"
        }
      },
      minorGroup: {
        serializedName: "minorGroup",
        xmlName: "minorGroup",
        type: {
          name: "String"
        }
      },
      subMajorGroup: {
        serializedName: "subMajorGroup",
        xmlName: "subMajorGroup",
        type: {
          name: "String"
        }
      },
      majorGroup: {
        serializedName: "majorGroup",
        xmlName: "majorGroup",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExpectedRemunerationAnnotationParsed: coreClient.CompositeMapper = {
  serializedName: "ExpectedRemunerationAnnotationParsed",
  type: {
    name: "Composite",
    className: "ExpectedRemunerationAnnotationParsed",
    modelProperties: {
      minimum: {
        serializedName: "minimum",
        nullable: true,
        xmlName: "minimum",
        type: {
          name: "Number"
        }
      },
      maximum: {
        serializedName: "maximum",
        nullable: true,
        xmlName: "maximum",
        type: {
          name: "Number"
        }
      },
      currency: {
        serializedName: "currency",
        nullable: true,
        xmlName: "currency",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        nullable: true,
        xmlName: "unit",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const YearsExperienceAnnotationParsed: coreClient.CompositeMapper = {
  serializedName: "YearsExperienceAnnotationParsed",
  type: {
    name: "Composite",
    className: "YearsExperienceAnnotationParsed",
    modelProperties: {
      minimum: {
        serializedName: "minimum",
        nullable: true,
        xmlName: "minimum",
        type: {
          name: "Number"
        }
      },
      maximum: {
        serializedName: "maximum",
        nullable: true,
        xmlName: "maximum",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentCreate: coreClient.CompositeMapper = {
  serializedName: "DocumentCreate",
  type: {
    name: "Composite",
    className: "DocumentCreate",
    modelProperties: {
      file: {
        serializedName: "file",
        xmlName: "file",
        type: {
          name: "Stream"
        }
      },
      url: {
        serializedName: "url",
        nullable: true,
        xmlName: "url",
        type: {
          name: "String"
        }
      },
      collection: {
        serializedName: "collection",
        xmlName: "collection",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        xmlName: "workspace",
        type: {
          name: "String"
        }
      },
      wait: {
        defaultValue: "true",
        serializedName: "wait",
        xmlName: "wait",
        type: {
          name: "String"
        }
      },
      identifier: {
        serializedName: "identifier",
        xmlName: "identifier",
        type: {
          name: "String"
        }
      },
      fileName: {
        serializedName: "fileName",
        nullable: true,
        xmlName: "fileName",
        type: {
          name: "String"
        }
      },
      expiryTime: {
        serializedName: "expiryTime",
        nullable: true,
        xmlName: "expiryTime",
        type: {
          name: "String"
        }
      },
      language: {
        serializedName: "language",
        nullable: true,
        xmlName: "language",
        type: {
          name: "String"
        }
      },
      rejectDuplicates: {
        defaultValue: "false",
        serializedName: "rejectDuplicates",
        xmlName: "rejectDuplicates",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OrganizationCreate: coreClient.CompositeMapper = {
  serializedName: "OrganizationCreate",
  type: {
    name: "Composite",
    className: "OrganizationCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        xmlName: "avatar",
        type: {
          name: "Stream"
        }
      },
      resthookSignatureKey: {
        serializedName: "resthookSignatureKey",
        nullable: true,
        xmlName: "resthookSignatureKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OrganizationUpdate: coreClient.CompositeMapper = {
  serializedName: "OrganizationUpdate",
  type: {
    name: "Composite",
    className: "OrganizationUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        xmlName: "avatar",
        type: {
          name: "Stream"
        }
      },
      resthookSignatureKey: {
        serializedName: "resthookSignatureKey",
        nullable: true,
        xmlName: "resthookSignatureKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IndexRequestBody: coreClient.CompositeMapper = {
  serializedName: "IndexRequestBody",
  type: {
    name: "Composite",
    className: "IndexRequestBody",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      documentType: {
        serializedName: "documentType",
        xmlName: "documentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvitationRespondedBy: coreClient.CompositeMapper = {
  serializedName: "InvitationRespondedBy",
  type: {
    name: "Composite",
    className: "InvitationRespondedBy",
    modelProperties: {
      ...User.type.modelProperties
    }
  }
};

export const PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      ...PaginatedResponse.type.modelProperties,
      ...Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1
        .type.modelProperties
    }
  }
};

export const PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      ...PaginatedResponse.type.modelProperties,
      ...PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1
        .type.modelProperties
    }
  }
};

export const PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      ...PaginatedResponse.type.modelProperties,
      ...Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1
        .type.modelProperties
    }
  }
};

export const PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      ...PaginatedResponse.type.modelProperties,
      ...Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1
        .type.modelProperties
    }
  }
};

export const Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      ...PaginatedResponse.type.modelProperties,
      ...PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1
        .type.modelProperties
    }
  }
};

export const PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema",
  type: {
    name: "Composite",
    className:
      "PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      ...PaginatedResponse.type.modelProperties,
      ...Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1
        .type.modelProperties
    }
  }
};

export const Resume: coreClient.CompositeMapper = {
  serializedName: "resume",
  type: {
    name: "Composite",
    className: "Resume",
    uberParent: "Document",
    polymorphicDiscriminator: Document.type.polymorphicDiscriminator,
    modelProperties: {
      ...Document.type.modelProperties,
      data: {
        serializedName: "data",
        xmlName: "data",
        type: {
          name: "Composite",
          className: "ResumeData"
        }
      }
    }
  }
};

export const Invoice: coreClient.CompositeMapper = {
  serializedName: "invoice",
  type: {
    name: "Composite",
    className: "Invoice",
    uberParent: "Document",
    polymorphicDiscriminator: Document.type.polymorphicDiscriminator,
    modelProperties: {
      ...Document.type.modelProperties,
      data: {
        serializedName: "data",
        xmlName: "data",
        type: {
          name: "Composite",
          className: "InvoiceData"
        }
      }
    }
  }
};

export const JobDescription: coreClient.CompositeMapper = {
  serializedName: "job-description",
  type: {
    name: "Composite",
    className: "JobDescription",
    uberParent: "Document",
    polymorphicDiscriminator: Document.type.polymorphicDiscriminator,
    modelProperties: {
      ...Document.type.modelProperties,
      data: {
        serializedName: "data",
        xmlName: "data",
        type: {
          name: "Composite",
          className: "JobDescriptionData"
        }
      }
    }
  }
};

export const JobDescriptionSearchDetailLocationValue: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailLocationValue",
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

export const ResumeSearchDetailLocationValue: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailLocationValue",
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

export const JobDescriptionSearchDetailOccupationGroupValue: coreClient.CompositeMapper = {
  serializedName: "JobDescriptionSearchDetailOccupationGroupValue",
  type: {
    name: "Composite",
    className: "JobDescriptionSearchDetailOccupationGroupValue",
    modelProperties: {
      ...OccupationGroupSearchResult.type.modelProperties
    }
  }
};

export const ResumeSearchDetailEducationValueItem: coreClient.CompositeMapper = {
  serializedName: "ResumeSearchDetailEducationValueItem",
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
  serializedName: "ResumeSearchDetailSkillsValueItem",
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
  serializedName: "ResumeSearchDetailLanguagesValueItem",
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

export const DateAnnotation: coreClient.CompositeMapper = {
  serializedName: "DateAnnotation",
  type: {
    name: "Composite",
    className: "DateAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const TextAnnotation: coreClient.CompositeMapper = {
  serializedName: "TextAnnotation",
  type: {
    name: "Composite",
    className: "TextAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LocationAnnotation: coreClient.CompositeMapper = {
  serializedName: "LocationAnnotation",
  type: {
    name: "Composite",
    className: "LocationAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        xmlName: "parsed",
        type: {
          name: "Composite",
          className: "Location"
        }
      }
    }
  }
};

export const CurrencyCodeAnnotation: coreClient.CompositeMapper = {
  serializedName: "CurrencyCodeAnnotation",
  type: {
    name: "Composite",
    className: "CurrencyCodeAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        xmlName: "parsed",
        type: {
          name: "Composite",
          className: "DataPointChoice"
        }
      }
    }
  }
};

export const JobTitleAnnotation: coreClient.CompositeMapper = {
  serializedName: "JobTitleAnnotation",
  type: {
    name: "Composite",
    className: "JobTitleAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        xmlName: "parsed",
        type: {
          name: "Composite",
          className: "JobTitleAnnotationParsed"
        }
      }
    }
  }
};

export const LanguageAnnotation: coreClient.CompositeMapper = {
  serializedName: "LanguageAnnotation",
  type: {
    name: "Composite",
    className: "LanguageAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        readOnly: true,
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkillAnnotation: coreClient.CompositeMapper = {
  serializedName: "SkillAnnotation",
  type: {
    name: "Composite",
    className: "SkillAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        readOnly: true,
        nullable: true,
        xmlName: "parsed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExpectedRemunerationAnnotation: coreClient.CompositeMapper = {
  serializedName: "ExpectedRemunerationAnnotation",
  type: {
    name: "Composite",
    className: "ExpectedRemunerationAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        xmlName: "parsed",
        type: {
          name: "Composite",
          className: "ExpectedRemunerationAnnotationParsed"
        }
      }
    }
  }
};

export const YearsExperienceAnnotation: coreClient.CompositeMapper = {
  serializedName: "YearsExperienceAnnotation",
  type: {
    name: "Composite",
    className: "YearsExperienceAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        xmlName: "parsed",
        type: {
          name: "Composite",
          className: "YearsExperienceAnnotationParsed"
        }
      }
    }
  }
};

export const InvoiceDataPaymentAmountBase: coreClient.CompositeMapper = {
  serializedName: "InvoiceDataPaymentAmountBase",
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
  serializedName: "InvoiceDataPaymentAmountTax",
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
  serializedName: "InvoiceDataPaymentAmountTotal",
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
  serializedName: "InvoiceDataPaymentAmountPaid",
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
  serializedName: "InvoiceDataPaymentAmountDue",
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
  serializedName: "InvoiceDataInvoiceNumber",
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
  serializedName: "InvoiceDataInvoicePurchaseOrderNumber",
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
  serializedName: "InvoiceDataSupplierBusinessNumber",
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
  serializedName: "InvoiceDataCustomerNumber",
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
  serializedName: "InvoiceDataCustomerBusinessNumber",
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
  serializedName: "InvoiceDataPaymentReference",
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
  serializedName: "InvoiceDataBankAccountNumber",
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
  serializedName: "InvoiceDataSupplierVat",
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
  serializedName: "InvoiceDataCustomerVat",
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
  serializedName: "InvoiceDataBpayBillerCode",
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
  serializedName: "InvoiceDataBpayReference",
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
  serializedName: "InvoiceDataBankSortCode",
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
  serializedName: "InvoiceDataBankIban",
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
  serializedName: "InvoiceDataBankSwift",
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
  serializedName: "InvoiceDataBankBsb",
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
  serializedName: "InvoiceDataCustomerContactName",
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
  serializedName: "InvoiceDataCustomerCompanyName",
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
  serializedName: "InvoiceDataSupplierCompanyName",
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
  serializedName: "InvoiceDataCustomerPhoneNumber",
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
  serializedName: "InvoiceDataSupplierPhoneNumber",
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
  serializedName: "InvoiceDataSupplierFax",
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
  serializedName: "InvoiceDataCustomerEmail",
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
  serializedName: "InvoiceDataSupplierEmail",
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
  serializedName: "InvoiceDataSupplierWebsite",
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

export let discriminators = {
  Document: Document,
  "Document.resume": Resume,
  "Document.invoice": Invoice,
  "Document.job-description": JobDescription
};
