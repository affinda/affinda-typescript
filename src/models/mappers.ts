import * as coreClient from "@azure/core-client";

export const Workspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "Composite",
          className: "Organization",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      visibility: {
        serializedName: "visibility",
        type: {
          name: "String",
        },
      },
      collections: {
        serializedName: "collections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WorkspaceCollectionsItem",
            },
          },
        },
      },
      rejectInvalidDocuments: {
        serializedName: "rejectInvalidDocuments",
        type: {
          name: "Boolean",
        },
      },
      rejectDuplicates: {
        defaultValue: "false",
        serializedName: "rejectDuplicates",
        nullable: true,
        type: {
          name: "String",
        },
      },
      members: {
        serializedName: "members",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "User",
            },
          },
        },
      },
      unvalidatedDocsCount: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "unvalidatedDocsCount",
        type: {
          name: "Number",
        },
      },
      confirmedDocsCount: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "confirmedDocsCount",
        type: {
          name: "Number",
        },
      },
      ingestEmail: {
        serializedName: "ingestEmail",
        type: {
          name: "String",
        },
      },
      whitelistIngestAddresses: {
        serializedName: "whitelistIngestAddresses",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      documentSplitter: {
        serializedName: "documentSplitter",
        type: {
          name: "Composite",
          className: "WorkspaceDocumentSplitter",
        },
      },
    },
  },
};

export const Organization: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Organization",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      userRole: {
        serializedName: "userRole",
        nullable: true,
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        type: {
          name: "String",
        },
      },
      resthookSignatureKey: {
        serializedName: "resthookSignatureKey",
        nullable: true,
        type: {
          name: "String",
        },
      },
      isTrial: {
        serializedName: "isTrial",
        type: {
          name: "Boolean",
        },
      },
      validationToolConfig: {
        serializedName: "validationToolConfig",
        type: {
          name: "Composite",
          className: "OrganizationValidationToolConfig",
        },
      },
      showCustomFieldCreation: {
        serializedName: "showCustomFieldCreation",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const OrganizationValidationToolConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationValidationToolConfig",
    modelProperties: {
      theme: {
        serializedName: "theme",
        type: {
          name: "Composite",
          className: "ThemeConfig",
        },
      },
      hideActions: {
        serializedName: "hideActions",
        type: {
          name: "Boolean",
        },
      },
      hideCollection: {
        serializedName: "hideCollection",
        type: {
          name: "Boolean",
        },
      },
      hideEditPages: {
        serializedName: "hideEditPages",
        type: {
          name: "Boolean",
        },
      },
      hideExport: {
        serializedName: "hideExport",
        type: {
          name: "Boolean",
        },
      },
      hideFilename: {
        serializedName: "hideFilename",
        type: {
          name: "Boolean",
        },
      },
      hideReject: {
        serializedName: "hideReject",
        type: {
          name: "Boolean",
        },
      },
      hideReparse: {
        serializedName: "hideReparse",
        type: {
          name: "Boolean",
        },
      },
      hideRunOcr: {
        serializedName: "hideRunOcr",
        type: {
          name: "Boolean",
        },
      },
      hideTags: {
        serializedName: "hideTags",
        type: {
          name: "Boolean",
        },
      },
      hideWarnings: {
        serializedName: "hideWarnings",
        type: {
          name: "Boolean",
        },
      },
      restrictDocumentSplitting: {
        serializedName: "restrictDocumentSplitting",
        type: {
          name: "Boolean",
        },
      },
      disableCurrencyFormatting: {
        serializedName: "disableCurrencyFormatting",
        type: {
          name: "Boolean",
        },
      },
      disableEditDocumentMetadata: {
        serializedName: "disableEditDocumentMetadata",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ThemeConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ThemeConfig",
    modelProperties: {
      palette: {
        serializedName: "palette",
        type: {
          name: "Composite",
          className: "ThemeConfigPalette",
        },
      },
      typography: {
        serializedName: "typography",
        type: {
          name: "Composite",
          className: "ThemeConfigTypography",
        },
      },
      borderRadius: {
        serializedName: "borderRadius",
        type: {
          name: "Number",
        },
      },
      fontUrl: {
        serializedName: "fontUrl",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ThemeConfigPalette: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ThemeConfigPalette",
    modelProperties: {
      mode: {
        serializedName: "mode",
        type: {
          name: "String",
        },
      },
      background: {
        serializedName: "background",
        type: {
          name: "any",
        },
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "ThemeConfigPaletteText",
        },
      },
      divider: {
        serializedName: "divider",
        type: {
          name: "String",
        },
      },
      primary: {
        serializedName: "primary",
        type: {
          name: "Composite",
          className: "PaletteColorOptions",
        },
      },
      secondary: {
        serializedName: "secondary",
        type: {
          name: "Composite",
          className: "PaletteColorOptions",
        },
      },
      success: {
        serializedName: "success",
        type: {
          name: "Composite",
          className: "PaletteColorOptions",
        },
      },
      annotation: {
        serializedName: "annotation",
        type: {
          name: "Composite",
          className: "PaletteColorOptions",
        },
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "PaletteColorOptions",
        },
      },
      info: {
        serializedName: "info",
        type: {
          name: "Composite",
          className: "PaletteColorOptions",
        },
      },
      warning: {
        serializedName: "warning",
        type: {
          name: "Composite",
          className: "PaletteColorOptions",
        },
      },
    },
  },
};

export const ThemeConfigPaletteText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ThemeConfigPaletteText",
    modelProperties: {
      primary: {
        serializedName: "primary",
        type: {
          name: "String",
        },
      },
      secondary: {
        serializedName: "secondary",
        type: {
          name: "String",
        },
      },
      disabled: {
        serializedName: "disabled",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PaletteColorOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaletteColorOptions",
    modelProperties: {
      main: {
        serializedName: "main",
        required: true,
        type: {
          name: "String",
        },
      },
      light: {
        serializedName: "light",
        type: {
          name: "String",
        },
      },
      dark: {
        serializedName: "dark",
        type: {
          name: "String",
        },
      },
      contrastText: {
        serializedName: "contrastText",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ThemeConfigTypography: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ThemeConfigTypography",
    modelProperties: {
      fontFamily: {
        serializedName: "fontFamily",
        type: {
          name: "String",
        },
      },
      fontSize: {
        serializedName: "fontSize",
        type: {
          name: "any",
        },
      },
      fontWeightRegular: {
        serializedName: "fontWeightRegular",
        type: {
          name: "String",
        },
      },
      fontWeightMedium: {
        serializedName: "fontWeightMedium",
        type: {
          name: "String",
        },
      },
      fontWeightBold: {
        serializedName: "fontWeightBold",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const WorkspaceCollectionsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCollectionsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      extractor: {
        serializedName: "extractor",
        type: {
          name: "Composite",
          className: "WorkspaceCollectionsItemExtractor",
        },
      },
      unvalidatedDocsCount: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "unvalidatedDocsCount",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      confirmedDocsCount: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "confirmedDocsCount",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const WorkspaceCollectionsItemExtractor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCollectionsItemExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        type: {
          name: "String",
        },
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        type: {
          name: "Composite",
          className: "BaseExtractor",
        },
      },
      category: {
        serializedName: "category",
        nullable: true,
        type: {
          name: "String",
        },
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      isCustom: {
        serializedName: "isCustom",
        type: {
          name: "Boolean",
        },
      },
      createdDt: {
        serializedName: "createdDt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const BaseExtractor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BaseExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        type: {
          name: "String",
        },
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      isCustom: {
        serializedName: "isCustom",
        type: {
          name: "Boolean",
        },
      },
      createdDt: {
        serializedName: "createdDt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const User: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "User",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const WorkspaceDocumentSplitter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceDocumentSplitter",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
          name: "String",
        },
      },
      errors: {
        serializedName: "errors",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RequestErrorErrorsItem",
            },
          },
        },
      },
    },
  },
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
          name: "String",
        },
      },
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String",
        },
      },
      detail: {
        serializedName: "detail",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const WorkspaceCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCreate",
    modelProperties: {
      organization: {
        serializedName: "organization",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      visibility: {
        serializedName: "visibility",
        type: {
          name: "String",
        },
      },
      rejectInvalidDocuments: {
        serializedName: "rejectInvalidDocuments",
        type: {
          name: "Boolean",
        },
      },
      rejectDuplicates: {
        defaultValue: "false",
        serializedName: "rejectDuplicates",
        nullable: true,
        type: {
          name: "String",
        },
      },
      whitelistIngestAddresses: {
        serializedName: "whitelistIngestAddresses",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      documentSplitter: {
        serializedName: "documentSplitter",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const WorkspaceUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      visibility: {
        serializedName: "visibility",
        type: {
          name: "String",
        },
      },
      rejectInvalidDocuments: {
        serializedName: "rejectInvalidDocuments",
        type: {
          name: "Boolean",
        },
      },
      rejectDuplicates: {
        defaultValue: "false",
        serializedName: "rejectDuplicates",
        nullable: true,
        type: {
          name: "String",
        },
      },
      whitelistIngestAddresses: {
        serializedName: "whitelistIngestAddresses",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      documentSplitter: {
        serializedName: "documentSplitter",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UsageByWorkspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsageByWorkspace",
    modelProperties: {
      month: {
        serializedName: "month",
        required: true,
        type: {
          name: "String",
        },
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const PaginatedResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaginatedResponse",
    modelProperties: {
      count: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "count",
        required: true,
        type: {
          name: "Number",
        },
      },
      next: {
        serializedName: "next",
        nullable: true,
        type: {
          name: "String",
        },
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          required: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "WorkspaceMembership",
              },
            },
          },
        },
      },
    },
  };

export const WorkspaceMembership: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceMembership",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "String",
        },
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User",
        },
      },
    },
  },
};

export const WorkspaceMembershipCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceMembershipCreate",
    modelProperties: {
      workspace: {
        serializedName: "workspace",
        type: {
          name: "String",
        },
      },
      user: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "user",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const Collection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Collection",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "Composite",
          className: "CollectionWorkspace",
        },
      },
      extractor: {
        serializedName: "extractor",
        type: {
          name: "Composite",
          className: "Extractor",
        },
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        type: {
          name: "Number",
        },
      },
      enableAutoValidationThreshold: {
        defaultValue: false,
        serializedName: "enableAutoValidationThreshold",
        type: {
          name: "Boolean",
        },
      },
      autoValidateIfValidationRulesPass: {
        defaultValue: false,
        serializedName: "autoValidateIfValidationRulesPass",
        type: {
          name: "Boolean",
        },
      },
      fields: {
        serializedName: "fields",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup",
            },
          },
        },
      },
      fieldsLayout: {
        serializedName: "fieldsLayout",
        type: {
          name: "Composite",
          className: "FieldsLayout",
        },
      },
      fieldsConfigured: {
        serializedName: "fieldsConfigured",
        type: {
          name: "Boolean",
        },
      },
      dateFormatPreference: {
        serializedName: "dateFormatPreference",
        nullable: true,
        type: {
          name: "String",
        },
      },
      dateFormatFromDocument: {
        serializedName: "dateFormatFromDocument",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      extractorConfig: {
        serializedName: "extractorConfig",
        type: {
          name: "Composite",
          className: "ExtractorConfig",
        },
      },
      unvalidatedDocsCount: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "unvalidatedDocsCount",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      confirmedDocsCount: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "confirmedDocsCount",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      ingestEmail: {
        serializedName: "ingestEmail",
        type: {
          name: "String",
        },
      },
      tailoredExtractorRequested: {
        serializedName: "tailoredExtractorRequested",
        type: {
          name: "Boolean",
        },
      },
      allowOpenai: {
        defaultValue: false,
        serializedName: "allowOpenai",
        type: {
          name: "Boolean",
        },
      },
      trainsExtractor: {
        serializedName: "trainsExtractor",
        type: {
          name: "Boolean",
        },
      },
      disableConfirmationIfValidationRulesFail: {
        defaultValue: false,
        serializedName: "disableConfirmationIfValidationRulesFail",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const CollectionWorkspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CollectionWorkspace",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "Composite",
          className: "Organization",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Extractor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Extractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        type: {
          name: "String",
        },
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        type: {
          name: "Composite",
          className: "ExtractorBaseExtractor",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "Composite",
          className: "Organization",
        },
      },
      category: {
        serializedName: "category",
        nullable: true,
        type: {
          name: "String",
        },
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      isCustom: {
        serializedName: "isCustom",
        type: {
          name: "Boolean",
        },
      },
      fieldGroups: {
        serializedName: "fieldGroups",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup",
            },
          },
        },
      },
      createdDt: {
        serializedName: "createdDt",
        type: {
          name: "DateTime",
        },
      },
      lastTrainedDt: {
        serializedName: "lastTrainedDt",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const ExtractorBaseExtractor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtractorBaseExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      namePlural: {
        serializedName: "namePlural",
        required: true,
        type: {
          name: "String",
        },
      },
      validatable: {
        serializedName: "validatable",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      isCustom: {
        serializedName: "isCustom",
        type: {
          name: "Boolean",
        },
      },
      createdDt: {
        serializedName: "createdDt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const FieldGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FieldGroup",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      fields: {
        serializedName: "fields",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldDeprecated",
            },
          },
        },
      },
    },
  },
};

export const FieldDeprecated: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FieldDeprecated",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      slug: {
        serializedName: "slug",
        nullable: true,
        type: {
          name: "String",
        },
      },
      fieldType: {
        serializedName: "fieldType",
        required: true,
        type: {
          name: "String",
        },
      },
      dataSource: {
        serializedName: "dataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
      mapping: {
        serializedName: "mapping",
        nullable: true,
        type: {
          name: "String",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      mandatory: {
        serializedName: "mandatory",
        type: {
          name: "Boolean",
        },
      },
      disabled: {
        serializedName: "disabled",
        type: {
          name: "Boolean",
        },
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      showDropdown: {
        serializedName: "showDropdown",
        type: {
          name: "Boolean",
        },
      },
      displayRawText: {
        serializedName: "displayRawText",
        type: {
          name: "Boolean",
        },
      },
      dropNull: {
        serializedName: "dropNull",
        type: {
          name: "Boolean",
        },
      },
      displayEnumValue: {
        serializedName: "displayEnumValue",
        type: {
          name: "Boolean",
        },
      },
      fields: {
        serializedName: "fields",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldDeprecated",
            },
          },
        },
      },
    },
  },
};

export const FieldsLayout: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FieldsLayout",
    modelProperties: {
      defaultCategory: {
        serializedName: "defaultCategory",
        type: {
          name: "Composite",
          className: "FieldCategory",
        },
      },
      categories: {
        serializedName: "categories",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldCategory",
            },
          },
        },
      },
    },
  },
};

export const FieldCategory: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FieldCategory",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      enabledFields: {
        serializedName: "enabledFields",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field",
            },
          },
        },
      },
      disabledFields: {
        serializedName: "disabledFields",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field",
            },
          },
        },
      },
    },
  },
};

export const Field: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Field",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      fieldType: {
        serializedName: "fieldType",
        required: true,
        type: {
          name: "String",
        },
      },
      dataSource: {
        serializedName: "dataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
      mapping: {
        serializedName: "mapping",
        nullable: true,
        type: {
          name: "String",
        },
      },
      mandatory: {
        serializedName: "mandatory",
        type: {
          name: "Boolean",
        },
      },
      autoValidationThreshold: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "autoValidationThreshold",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      enableAutoValidationThreshold: {
        serializedName: "enableAutoValidationThreshold",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      showDropdown: {
        serializedName: "showDropdown",
        type: {
          name: "Boolean",
        },
      },
      displayEnumValue: {
        serializedName: "displayEnumValue",
        type: {
          name: "Boolean",
        },
      },
      hideEnumDetail: {
        serializedName: "hideEnumDetail",
        type: {
          name: "Boolean",
        },
      },
      dropNull: {
        serializedName: "dropNull",
        type: {
          name: "Boolean",
        },
      },
      enabledChildFields: {
        serializedName: "enabledChildFields",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field",
            },
          },
        },
      },
      disabledChildFields: {
        serializedName: "disabledChildFields",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field",
            },
          },
        },
      },
      slug: {
        serializedName: "slug",
        nullable: true,
        type: {
          name: "String",
        },
      },
      displayRawText: {
        serializedName: "displayRawText",
        type: {
          name: "Boolean",
        },
      },
      fields: {
        serializedName: "fields",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } },
            },
          },
        },
      },
    },
  },
};

export const ExtractorConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtractorConfig",
    modelProperties: {
      resumeRedact: {
        serializedName: "resumeRedact",
        type: {
          name: "Composite",
          className: "RedactConfig",
        },
      },
    },
  },
};

export const RedactConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedactConfig",
    modelProperties: {
      redactHeadshot: {
        serializedName: "redactHeadshot",
        type: {
          name: "Boolean",
        },
      },
      redactPersonalDetails: {
        serializedName: "redactPersonalDetails",
        type: {
          name: "Boolean",
        },
      },
      redactWorkDetails: {
        serializedName: "redactWorkDetails",
        type: {
          name: "Boolean",
        },
      },
      redactReferees: {
        serializedName: "redactReferees",
        type: {
          name: "Boolean",
        },
      },
      redactEducationDetails: {
        serializedName: "redactEducationDetails",
        type: {
          name: "Boolean",
        },
      },
      redactLocations: {
        serializedName: "redactLocations",
        type: {
          name: "Boolean",
        },
      },
      redactDates: {
        serializedName: "redactDates",
        type: {
          name: "Boolean",
        },
      },
      redactGender: {
        serializedName: "redactGender",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const CollectionCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CollectionCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        type: {
          name: "String",
        },
      },
      extractor: {
        serializedName: "extractor",
        type: {
          name: "String",
        },
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        type: {
          name: "String",
        },
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        type: {
          name: "Number",
        },
      },
      enableAutoValidationThreshold: {
        defaultValue: false,
        serializedName: "enableAutoValidationThreshold",
        type: {
          name: "Boolean",
        },
      },
      fields: {
        serializedName: "fields",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup",
            },
          },
        },
      },
      fieldsLayout: {
        serializedName: "fieldsLayout",
        type: {
          name: "Composite",
          className: "FieldsLayout",
        },
      },
      dateFormatPreference: {
        serializedName: "dateFormatPreference",
        nullable: true,
        type: {
          name: "String",
        },
      },
      dateFormatFromDocument: {
        serializedName: "dateFormatFromDocument",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      extractorConfig: {
        serializedName: "extractorConfig",
        type: {
          name: "Composite",
          className: "ExtractorConfig",
        },
      },
      allowOpenai: {
        defaultValue: false,
        serializedName: "allowOpenai",
        type: {
          name: "Boolean",
        },
      },
      trainsExtractor: {
        serializedName: "trainsExtractor",
        type: {
          name: "Boolean",
        },
      },
      disableConfirmationIfValidationRulesFail: {
        defaultValue: false,
        serializedName: "disableConfirmationIfValidationRulesFail",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const CollectionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CollectionUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      autoValidationThreshold: {
        serializedName: "autoValidationThreshold",
        type: {
          name: "Number",
        },
      },
      enableAutoValidationThreshold: {
        defaultValue: false,
        serializedName: "enableAutoValidationThreshold",
        type: {
          name: "Boolean",
        },
      },
      fields: {
        serializedName: "fields",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup",
            },
          },
        },
      },
      fieldsLayout: {
        serializedName: "fieldsLayout",
        type: {
          name: "Composite",
          className: "FieldsLayout",
        },
      },
      dateFormatPreference: {
        serializedName: "dateFormatPreference",
        nullable: true,
        type: {
          name: "String",
        },
      },
      dateFormatFromDocument: {
        serializedName: "dateFormatFromDocument",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      extractorConfig: {
        serializedName: "extractorConfig",
        type: {
          name: "Composite",
          className: "ExtractorConfig",
        },
      },
      allowOpenai: {
        defaultValue: false,
        serializedName: "allowOpenai",
        type: {
          name: "Boolean",
        },
      },
      trainsExtractor: {
        serializedName: "trainsExtractor",
        type: {
          name: "Boolean",
        },
      },
      disableConfirmationIfValidationRulesFail: {
        defaultValue: false,
        serializedName: "disableConfirmationIfValidationRulesFail",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const DataFieldCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFieldCreate",
    modelProperties: {
      categoryLabel: {
        serializedName: "categoryLabel",
        type: {
          name: "String",
        },
      },
      field: {
        serializedName: "field",
        type: {
          name: "Composite",
          className: "DataFieldCreateField",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        type: {
          name: "Composite",
          className: "DataFieldCreateDataPoint",
        },
      },
    },
  },
};

export const DataFieldCreateField: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFieldCreateField",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      fieldType: {
        serializedName: "fieldType",
        type: {
          name: "String",
        },
      },
      mandatory: {
        serializedName: "mandatory",
        type: {
          name: "Boolean",
        },
      },
      showDropdown: {
        serializedName: "showDropdown",
        type: {
          name: "Boolean",
        },
      },
      displayEnumValue: {
        serializedName: "displayEnumValue",
        type: {
          name: "Boolean",
        },
      },
      autoValidationThreshold: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "autoValidationThreshold",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      enableAutoValidationThreshold: {
        serializedName: "enableAutoValidationThreshold",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      dataSource: {
        serializedName: "dataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
      mapping: {
        serializedName: "mapping",
        nullable: true,
        type: {
          name: "String",
        },
      },
      displayRawText: {
        serializedName: "displayRawText",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const DataFieldCreateDataPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFieldCreateDataPoint",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      slug: {
        serializedName: "slug",
        required: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      multiple: {
        serializedName: "multiple",
        type: {
          name: "Boolean",
        },
      },
      noRect: {
        serializedName: "noRect",
        type: {
          name: "Boolean",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "String",
        },
      },
      manualEntry: {
        serializedName: "manualEntry",
        type: {
          name: "Boolean",
        },
      },
      mappingDataSource: {
        serializedName: "mappingDataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DataField: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataField",
    modelProperties: {
      categoryLabel: {
        serializedName: "categoryLabel",
        type: {
          name: "String",
        },
      },
      field: {
        serializedName: "field",
        type: {
          name: "Composite",
          className: "DataFieldField",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        type: {
          name: "Composite",
          className: "DataFieldDataPoint",
        },
      },
    },
  },
};

export const DataFieldField: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFieldField",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      fieldType: {
        serializedName: "fieldType",
        type: {
          name: "String",
        },
      },
      mandatory: {
        serializedName: "mandatory",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      showDropdown: {
        serializedName: "showDropdown",
        type: {
          name: "Boolean",
        },
      },
      displayEnumValue: {
        serializedName: "displayEnumValue",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      autoValidationThreshold: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "autoValidationThreshold",
        required: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      enableAutoValidationThreshold: {
        serializedName: "enableAutoValidationThreshold",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      enabledChildFields: {
        serializedName: "enabledChildFields",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field",
            },
          },
        },
      },
      disabledChildFields: {
        serializedName: "disabledChildFields",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Field",
            },
          },
        },
      },
      dataSource: {
        serializedName: "dataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
      mapping: {
        serializedName: "mapping",
        nullable: true,
        type: {
          name: "String",
        },
      },
      displayRawText: {
        serializedName: "displayRawText",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const DataFieldDataPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFieldDataPoint",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      slug: {
        serializedName: "slug",
        required: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      multiple: {
        serializedName: "multiple",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      noRect: {
        serializedName: "noRect",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      parent: {
        serializedName: "parent",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      children: {
        serializedName: "children",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPoint",
            },
          },
        },
      },
      manualEntry: {
        serializedName: "manualEntry",
        type: {
          name: "Boolean",
        },
      },
      availableDataSources: {
        serializedName: "availableDataSources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MappingDataSource",
            },
          },
        },
      },
    },
  },
};

export const DataPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPoint",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      slug: {
        serializedName: "slug",
        required: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      annotationContentType: {
        serializedName: "annotationContentType",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "Composite",
          className: "Organization",
        },
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      multiple: {
        serializedName: "multiple",
        type: {
          name: "Boolean",
        },
      },
      noRect: {
        serializedName: "noRect",
        type: {
          name: "Boolean",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "String",
        },
      },
      children: {
        serializedName: "children",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPoint",
            },
          },
        },
      },
      availableDataSources: {
        serializedName: "availableDataSources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MappingDataSource",
            },
          },
        },
      },
      mappingDataSource: {
        serializedName: "mappingDataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
      manualEntry: {
        serializedName: "manualEntry",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const MappingDataSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MappingDataSource",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      keyProperty: {
        serializedName: "keyProperty",
        required: true,
        type: {
          name: "String",
        },
      },
      displayProperty: {
        serializedName: "displayProperty",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      schema: {
        serializedName: "schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const CollectionField: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CollectionField",
    modelProperties: {
      label: {
        serializedName: "label",
        type: {
          name: "String",
        },
      },
      fieldType: {
        serializedName: "fieldType",
        type: {
          name: "String",
        },
      },
      mandatory: {
        serializedName: "mandatory",
        type: {
          name: "Boolean",
        },
      },
      showDropdown: {
        serializedName: "showDropdown",
        type: {
          name: "Boolean",
        },
      },
      displayEnumValue: {
        serializedName: "displayEnumValue",
        type: {
          name: "Boolean",
        },
      },
      autoValidationThreshold: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "autoValidationThreshold",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      enableAutoValidationThreshold: {
        serializedName: "enableAutoValidationThreshold",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      dataSource: {
        serializedName: "dataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
      mapping: {
        serializedName: "mapping",
        nullable: true,
        type: {
          name: "String",
        },
      },
      displayRawText: {
        serializedName: "displayRawText",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UsageByCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsageByCollection",
    modelProperties: {
      month: {
        serializedName: "month",
        required: true,
        type: {
          name: "String",
        },
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "Document",
              },
            },
          },
        },
      },
    },
  };

export const Document: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Document",
    uberParent: "Document",
    polymorphicDiscriminator: {
      serializedName: "extractor",
      clientName: "extractor",
    },
    modelProperties: {
      data: {
        serializedName: "data",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        type: {
          name: "String",
        },
      },
      meta: {
        serializedName: "meta",
        type: {
          name: "Composite",
          className: "DocumentMeta",
        },
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "DocumentError",
        },
      },
      warnings: {
        serializedName: "warnings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentWarning",
            },
          },
        },
      },
    },
  },
};

export const DocumentMeta: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentMeta",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      customIdentifier: {
        serializedName: "customIdentifier",
        nullable: true,
        type: {
          name: "String",
        },
      },
      fileName: {
        serializedName: "fileName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      ready: {
        serializedName: "ready",
        type: {
          name: "Boolean",
        },
      },
      readyDt: {
        serializedName: "readyDt",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      failed: {
        serializedName: "failed",
        type: {
          name: "Boolean",
        },
      },
      expiryTime: {
        serializedName: "expiryTime",
        nullable: true,
        type: {
          name: "String",
        },
      },
      language: {
        serializedName: "language",
        nullable: true,
        type: {
          name: "String",
        },
      },
      pdf: {
        serializedName: "pdf",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parentDocument: {
        serializedName: "parentDocument",
        type: {
          name: "Composite",
          className: "DocumentMetaParentDocument",
        },
      },
      childDocuments: {
        serializedName: "childDocuments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentMetaChildDocumentsItem",
            },
          },
        },
      },
      pages: {
        serializedName: "pages",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageMeta",
            },
          },
        },
      },
      isOcrd: {
        serializedName: "isOcrd",
        type: {
          name: "Boolean",
        },
      },
      ocrConfidence: {
        serializedName: "ocrConfidence",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      reviewUrl: {
        serializedName: "reviewUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      collection: {
        serializedName: "collection",
        type: {
          name: "Composite",
          className: "DocumentMetaCollection",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "Composite",
          className: "DocumentMetaWorkspace",
        },
      },
      archivedDt: {
        serializedName: "archivedDt",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      isArchived: {
        serializedName: "isArchived",
        type: {
          name: "Boolean",
        },
      },
      skipParse: {
        serializedName: "skipParse",
        type: {
          name: "Boolean",
        },
      },
      confirmedDt: {
        serializedName: "confirmedDt",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      confirmedBy: {
        serializedName: "confirmedBy",
        type: {
          name: "Composite",
          className: "UserNullable",
        },
      },
      isConfirmed: {
        serializedName: "isConfirmed",
        type: {
          name: "Boolean",
        },
      },
      rejectedDt: {
        serializedName: "rejectedDt",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      rejectedBy: {
        serializedName: "rejectedBy",
        type: {
          name: "Composite",
          className: "UserNullable",
        },
      },
      isRejected: {
        serializedName: "isRejected",
        type: {
          name: "Boolean",
        },
      },
      createdDt: {
        serializedName: "createdDt",
        type: {
          name: "DateTime",
        },
      },
      errorCode: {
        serializedName: "errorCode",
        nullable: true,
        type: {
          name: "String",
        },
      },
      errorDetail: {
        serializedName: "errorDetail",
        nullable: true,
        type: {
          name: "String",
        },
      },
      file: {
        serializedName: "file",
        nullable: true,
        type: {
          name: "String",
        },
      },
      html: {
        serializedName: "html",
        nullable: true,
        type: {
          name: "String",
        },
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Tag",
            },
          },
        },
      },
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "Composite",
          className: "User",
        },
      },
      sourceEmail: {
        serializedName: "sourceEmail",
        nullable: true,
        type: {
          name: "String",
        },
      },
      sourceEmailAddress: {
        serializedName: "sourceEmailAddress",
        nullable: true,
        type: {
          name: "String",
        },
      },
      regionBias: {
        serializedName: "regionBias",
        type: {
          name: "Composite",
          className: "RegionBias",
        },
      },
    },
  },
};

export const DocumentMetaParentDocument: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentMetaParentDocument",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      customIdentifier: {
        serializedName: "customIdentifier",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DocumentMetaChildDocumentsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentMetaChildDocumentsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      customIdentifier: {
        serializedName: "customIdentifier",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PageMeta: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PageMeta",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      pageIndex: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "pageIndex",
        required: true,
        type: {
          name: "Number",
        },
      },
      image: {
        serializedName: "image",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageTranslated: {
        serializedName: "imageTranslated",
        nullable: true,
        type: {
          name: "String",
        },
      },
      height: {
        serializedName: "height",
        required: true,
        type: {
          name: "Number",
        },
      },
      width: {
        serializedName: "width",
        required: true,
        type: {
          name: "Number",
        },
      },
      rotation: {
        constraints: {
          InclusiveMaximum: 360,
          InclusiveMinimum: -360,
        },
        serializedName: "rotation",
        required: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const DocumentMetaCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentMetaCollection",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      extractor: {
        serializedName: "extractor",
        type: {
          name: "Composite",
          className: "DocumentMetaCollectionExtractor",
        },
      },
      validationRules: {
        serializedName: "validationRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ValidationRule",
            },
          },
        },
      },
    },
  },
};

export const DocumentMetaCollectionExtractor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentMetaCollectionExtractor",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        nullable: true,
        type: {
          name: "String",
        },
      },
      validatable: {
        serializedName: "validatable",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ValidationRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidationRule",
    modelProperties: {
      slug: {
        constraints: {
          Pattern: new RegExp("^[a-z0-9_]+$"),
        },
        serializedName: "slug",
        required: true,
        type: {
          name: "String",
        },
      },
      dataPoints: {
        serializedName: "dataPoints",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const DocumentMetaWorkspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentMetaWorkspace",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UserNullable: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserNullable",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Tag: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Tag",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        type: {
          name: "String",
        },
      },
      documentCount: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "documentCount",
        required: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const RegionBias: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegionBias",
    modelProperties: {
      country: {
        serializedName: "country",
        nullable: true,
        type: {
          name: "String",
        },
      },
      countries: {
        serializedName: "countries",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      squareCoordinates: {
        serializedName: "squareCoordinates",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
      strict: {
        serializedName: "strict",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const DocumentError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentError",
    modelProperties: {
      errorCode: {
        serializedName: "errorCode",
        nullable: true,
        type: {
          name: "String",
        },
      },
      errorDetail: {
        serializedName: "errorDetail",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DocumentWarning: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentWarning",
    modelProperties: {
      warningCode: {
        serializedName: "warningCode",
        nullable: true,
        type: {
          name: "String",
        },
      },
      warningDetail: {
        serializedName: "warningDetail",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DocumentCreateData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentCreateData",
  },
};

export const ResumeData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeData",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "ResumeDataName",
        },
      },
      phoneNumbers: {
        serializedName: "phoneNumbers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      phoneNumberDetails: {
        serializedName: "phoneNumberDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeDataPhoneNumberDetailsItem",
            },
          },
        },
      },
      websites: {
        serializedName: "websites",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      emails: {
        serializedName: "emails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      dateOfBirth: {
        serializedName: "dateOfBirth",
        nullable: true,
        type: {
          name: "String",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "Location",
        },
      },
      objective: {
        defaultValue: "",
        serializedName: "objective",
        nullable: true,
        type: {
          name: "String",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      languageCodes: {
        serializedName: "languageCodes",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      summary: {
        defaultValue: "",
        serializedName: "summary",
        nullable: true,
        type: {
          name: "String",
        },
      },
      totalYearsExperience: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "totalYearsExperience",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      headShot: {
        serializedName: "headShot",
        readOnly: true,
        nullable: true,
        type: {
          name: "ByteArray",
        },
      },
      education: {
        serializedName: "education",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Education",
            },
          },
        },
      },
      profession: {
        serializedName: "profession",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      linkedin: {
        serializedName: "linkedin",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      workExperience: {
        serializedName: "workExperience",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeDataWorkExperienceItem",
            },
          },
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeDataSkillsItem",
            },
          },
        },
      },
      certifications: {
        serializedName: "certifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      publications: {
        serializedName: "publications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      referees: {
        serializedName: "referees",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeDataRefereesItem",
            },
          },
        },
      },
      sections: {
        serializedName: "sections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeDataSectionsItem",
            },
          },
        },
      },
      isResumeProbability: {
        serializedName: "isResumeProbability",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String",
        },
      },
      redactedText: {
        serializedName: "redactedText",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResumeDataName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataName",
    modelProperties: {
      raw: {
        serializedName: "raw",
        type: {
          name: "String",
        },
      },
      first: {
        serializedName: "first",
        type: {
          name: "String",
        },
      },
      last: {
        serializedName: "last",
        type: {
          name: "String",
        },
      },
      middle: {
        serializedName: "middle",
        type: {
          name: "String",
        },
      },
      title: {
        serializedName: "title",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResumeDataPhoneNumberDetailsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataPhoneNumberDetailsItem",
    modelProperties: {
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String",
        },
      },
      formattedNumber: {
        serializedName: "formattedNumber",
        nullable: true,
        type: {
          name: "String",
        },
      },
      countryCode: {
        serializedName: "countryCode",
        nullable: true,
        type: {
          name: "String",
        },
      },
      internationalCountryCode: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "internationalCountryCode",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      nationalNumber: {
        serializedName: "nationalNumber",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
          name: "String",
        },
      },
      postalCode: {
        serializedName: "postalCode",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      state: {
        serializedName: "state",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      stateCode: {
        serializedName: "stateCode",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      country: {
        serializedName: "country",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      countryCode: {
        serializedName: "countryCode",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      rawInput: {
        serializedName: "rawInput",
        required: true,
        type: {
          name: "String",
        },
      },
      streetNumber: {
        serializedName: "streetNumber",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      street: {
        serializedName: "street",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      apartmentNumber: {
        serializedName: "apartmentNumber",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      city: {
        serializedName: "city",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      latitude: {
        serializedName: "latitude",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      longitude: {
        serializedName: "longitude",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      poBox: {
        serializedName: "poBox",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Education: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Education",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        type: {
          name: "Number",
        },
      },
      organization: {
        serializedName: "organization",
        nullable: true,
        type: {
          name: "String",
        },
      },
      accreditation: {
        serializedName: "accreditation",
        type: {
          name: "Composite",
          className: "Accreditation",
        },
      },
      grade: {
        serializedName: "grade",
        type: {
          name: "Composite",
          className: "EducationGrade",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "Location",
        },
      },
      dates: {
        serializedName: "dates",
        type: {
          name: "Composite",
          className: "EducationDates",
        },
      },
    },
  },
};

export const Accreditation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Accreditation",
    modelProperties: {
      education: {
        serializedName: "education",
        type: {
          name: "String",
        },
      },
      inputStr: {
        serializedName: "inputStr",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      matchStr: {
        serializedName: "matchStr",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      educationLevel: {
        serializedName: "educationLevel",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const EducationGrade: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EducationGrade",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      raw: {
        serializedName: "raw",
        type: {
          name: "String",
        },
      },
      metric: {
        serializedName: "metric",
        nullable: true,
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const EducationDates: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EducationDates",
    modelProperties: {
      completionDate: {
        serializedName: "completionDate",
        type: {
          name: "Date",
        },
      },
      isCurrent: {
        serializedName: "isCurrent",
        type: {
          name: "Boolean",
        },
      },
      startDate: {
        serializedName: "startDate",
        nullable: true,
        type: {
          name: "Date",
        },
      },
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResumeDataWorkExperienceItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataWorkExperienceItem",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        type: {
          name: "Number",
        },
      },
      jobTitle: {
        serializedName: "jobTitle",
        nullable: true,
        type: {
          name: "String",
        },
      },
      socCode: {
        serializedName: "socCode",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      socName: {
        serializedName: "socName",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        nullable: true,
        type: {
          name: "String",
        },
      },
      industry: {
        serializedName: "industry",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "Location",
        },
      },
      jobDescription: {
        serializedName: "jobDescription",
        nullable: true,
        type: {
          name: "String",
        },
      },
      dates: {
        serializedName: "dates",
        type: {
          name: "Composite",
          className: "ResumeDataWorkExperienceItemDates",
        },
      },
      occupation: {
        serializedName: "occupation",
        type: {
          name: "Composite",
          className: "ResumeDataWorkExperienceItemOccupation",
        },
      },
    },
  },
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
          name: "Date",
        },
      },
      endDate: {
        serializedName: "endDate",
        nullable: true,
        type: {
          name: "Date",
        },
      },
      monthsInPosition: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "monthsInPosition",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      isCurrent: {
        serializedName: "isCurrent",
        type: {
          name: "Boolean",
        },
      },
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResumeDataWorkExperienceItemOccupation: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ResumeDataWorkExperienceItemOccupation",
      modelProperties: {
        jobTitle: {
          serializedName: "jobTitle",
          nullable: true,
          type: {
            name: "String",
          },
        },
        jobTitleNormalized: {
          serializedName: "jobTitleNormalized",
          nullable: true,
          type: {
            name: "String",
          },
        },
        emsiId: {
          serializedName: "emsiId",
          nullable: true,
          type: {
            name: "String",
          },
        },
        managementLevel: {
          serializedName: "managementLevel",
          nullable: true,
          type: {
            name: "Enum",
            allowedValues: ["None", "Low", "Mid", "Upper"],
          },
        },
        classification: {
          serializedName: "classification",
          type: {
            name: "Composite",
            className:
              "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification",
          },
        },
      },
    },
  };

export const Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification",
      modelProperties: {
        title: {
          serializedName: "title",
          type: {
            name: "String",
          },
        },
        minorGroup: {
          serializedName: "minorGroup",
          type: {
            name: "String",
          },
        },
        subMajorGroup: {
          serializedName: "subMajorGroup",
          type: {
            name: "String",
          },
        },
        majorGroup: {
          serializedName: "majorGroup",
          type: {
            name: "String",
          },
        },
        socCode: {
          constraints: {
            InclusiveMaximum: 9999,
            InclusiveMinimum: 1,
          },
          serializedName: "socCode",
          type: {
            name: "Number",
          },
        },
        minorGroupCode: {
          constraints: {
            InclusiveMaximum: 9999,
            InclusiveMinimum: 1,
          },
          serializedName: "minorGroupCode",
          type: {
            name: "Number",
          },
        },
        subMajorGroupCode: {
          constraints: {
            InclusiveMaximum: 9999,
            InclusiveMinimum: 1,
          },
          serializedName: "subMajorGroupCode",
          type: {
            name: "Number",
          },
        },
        majorGroupCode: {
          constraints: {
            InclusiveMaximum: 9999,
            InclusiveMinimum: 1,
          },
          serializedName: "majorGroupCode",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const ResumeDataSkillsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataSkillsItem",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        type: {
          name: "Number",
        },
      },
      emsiId: {
        serializedName: "emsiId",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      lastUsed: {
        serializedName: "lastUsed",
        nullable: true,
        type: {
          name: "String",
        },
      },
      numberOfMonths: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "numberOfMonths",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      count: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "count",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      weighting: {
        serializedName: "weighting",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      sources: {
        serializedName: "sources",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeDataSkillsPropertiesItemsItem",
            },
          },
        },
      },
    },
  },
};

export const ResumeDataSkillsPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataSkillsPropertiesItemsItem",
    modelProperties: {
      section: {
        serializedName: "section",
        type: {
          name: "String",
        },
      },
      position: {
        serializedName: "position",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      workExperienceId: {
        serializedName: "workExperienceId",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ResumeDataRefereesItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataRefereesItem",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      text: {
        serializedName: "text",
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        nullable: true,
        type: {
          name: "String",
        },
      },
      number: {
        serializedName: "number",
        nullable: true,
        type: {
          name: "String",
        },
      },
      position: {
        serializedName: "position",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResumeDataSectionsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeDataSectionsItem",
    modelProperties: {
      sectionType: {
        serializedName: "sectionType",
        type: {
          name: "String",
        },
      },
      bbox: {
        constraints: {
          MinItems: 4,
          MaxItems: 4,
        },
        serializedName: "bbox",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
      pageIndex: {
        serializedName: "pageIndex",
        type: {
          name: "Number",
        },
      },
      text: {
        serializedName: "text",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const JobDescriptionData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionData",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleAnnotation",
        },
      },
      contactEmail: {
        serializedName: "contactEmail",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      contactName: {
        serializedName: "contactName",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      contactPhone: {
        serializedName: "contactPhone",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      startDate: {
        serializedName: "startDate",
        type: {
          name: "Composite",
          className: "DateAnnotation",
        },
      },
      endDate: {
        serializedName: "endDate",
        type: {
          name: "Composite",
          className: "DateAnnotation",
        },
      },
      jobType: {
        serializedName: "jobType",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguageAnnotation",
            },
          },
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkillAnnotation",
            },
          },
        },
      },
      organizationName: {
        serializedName: "organizationName",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      organizationWebsite: {
        serializedName: "organizationWebsite",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      educationLevel: {
        serializedName: "educationLevel",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      educationAccreditation: {
        serializedName: "educationAccreditation",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      expectedRemuneration: {
        serializedName: "expectedRemuneration",
        type: {
          name: "Composite",
          className: "ExpectedRemunerationAnnotation",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationAnnotation",
        },
      },
      certifications: {
        serializedName: "certifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextAnnotation",
            },
          },
        },
      },
      yearsExperience: {
        serializedName: "yearsExperience",
        type: {
          name: "Composite",
          className: "YearsExperienceAnnotation",
        },
      },
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String",
        },
      },
    },
  },
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
          name: "String",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        type: {
          name: "String",
        },
      },
      classification: {
        serializedName: "classification",
        type: {
          name: "Composite",
          className: "JobTitleAnnotationParsedClassification",
        },
      },
    },
  },
};

export const JobTitleAnnotationParsedClassification: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobTitleAnnotationParsedClassification",
      modelProperties: {
        socCode: {
          serializedName: "socCode",
          type: {
            name: "Number",
          },
        },
        title: {
          serializedName: "title",
          type: {
            name: "String",
          },
        },
        minorGroup: {
          serializedName: "minorGroup",
          type: {
            name: "String",
          },
        },
        subMajorGroup: {
          serializedName: "subMajorGroup",
          type: {
            name: "String",
          },
        },
        majorGroup: {
          serializedName: "majorGroup",
          type: {
            name: "String",
          },
        },
        minorGroupCode: {
          constraints: {
            InclusiveMaximum: 9999,
            InclusiveMinimum: 1,
          },
          serializedName: "minorGroupCode",
          type: {
            name: "Number",
          },
        },
        subMajorGroupCode: {
          constraints: {
            InclusiveMaximum: 9999,
            InclusiveMinimum: 1,
          },
          serializedName: "subMajorGroupCode",
          type: {
            name: "Number",
          },
        },
        majorGroupCode: {
          constraints: {
            InclusiveMaximum: 9999,
            InclusiveMinimum: 1,
          },
          serializedName: "majorGroupCode",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const Annotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Annotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      rectangle: {
        serializedName: "rectangle",
        type: {
          name: "Composite",
          className: "Rectangle",
        },
      },
      rectangles: {
        serializedName: "rectangles",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rectangle",
            },
          },
        },
      },
      document: {
        serializedName: "document",
        required: true,
        type: {
          name: "String",
        },
      },
      pageIndex: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "pageIndex",
        required: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      raw: {
        serializedName: "raw",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      confidence: {
        serializedName: "confidence",
        required: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      classificationConfidence: {
        serializedName: "classificationConfidence",
        required: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      textExtractionConfidence: {
        serializedName: "textExtractionConfidence",
        required: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      isVerified: {
        serializedName: "isVerified",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      isClientVerified: {
        serializedName: "isClientVerified",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      isAutoVerified: {
        serializedName: "isAutoVerified",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      contentType: {
        serializedName: "contentType",
        required: true,
        type: {
          name: "String",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const Rectangle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Rectangle",
    modelProperties: {
      pageIndex: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "pageIndex",
        type: {
          name: "Number",
        },
      },
      x0: {
        serializedName: "x0",
        required: true,
        type: {
          name: "Number",
        },
      },
      y0: {
        serializedName: "y0",
        required: true,
        type: {
          name: "Number",
        },
      },
      x1: {
        serializedName: "x1",
        required: true,
        type: {
          name: "Number",
        },
      },
      y1: {
        serializedName: "y1",
        required: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ExpectedRemunerationAnnotationParsed: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExpectedRemunerationAnnotationParsed",
      modelProperties: {
        minimum: {
          serializedName: "minimum",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        maximum: {
          serializedName: "maximum",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        currency: {
          serializedName: "currency",
          nullable: true,
          type: {
            name: "String",
          },
        },
        unit: {
          serializedName: "unit",
          nullable: true,
          type: {
            name: "String",
          },
        },
      },
    },
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
          name: "Number",
        },
      },
      maximum: {
        serializedName: "maximum",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const DocumentUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentUpdate",
    modelProperties: {
      collection: {
        serializedName: "collection",
        type: {
          name: "String",
        },
      },
      fileName: {
        serializedName: "fileName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      expiryTime: {
        serializedName: "expiryTime",
        nullable: true,
        type: {
          name: "String",
        },
      },
      isConfirmed: {
        serializedName: "isConfirmed",
        type: {
          name: "Boolean",
        },
      },
      isRejected: {
        serializedName: "isRejected",
        type: {
          name: "Boolean",
        },
      },
      isArchived: {
        serializedName: "isArchived",
        type: {
          name: "Boolean",
        },
      },
      skipParse: {
        serializedName: "skipParse",
        type: {
          name: "Boolean",
        },
      },
      language: {
        serializedName: "language",
        nullable: true,
        type: {
          name: "String",
        },
      },
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      customIdentifier: {
        serializedName: "customIdentifier",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema",
    },
  };

export const JobDescriptionDataUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionDataUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleAnnotationUpdate",
        },
      },
      contactEmail: {
        serializedName: "contactEmail",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      contactName: {
        serializedName: "contactName",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      contactPhone: {
        serializedName: "contactPhone",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      startDate: {
        serializedName: "startDate",
        type: {
          name: "Composite",
          className: "DateAnnotationUpdate",
        },
      },
      endDate: {
        serializedName: "endDate",
        type: {
          name: "Composite",
          className: "DateAnnotationUpdate",
        },
      },
      jobType: {
        serializedName: "jobType",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguageAnnotationUpdate",
            },
          },
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkillAnnotationUpdate",
            },
          },
        },
      },
      organizationName: {
        serializedName: "organizationName",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      organizationWebsite: {
        serializedName: "organizationWebsite",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      educationLevel: {
        serializedName: "educationLevel",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      educationAccreditation: {
        serializedName: "educationAccreditation",
        type: {
          name: "Composite",
          className: "TextAnnotationUpdate",
        },
      },
      expectedRemuneration: {
        serializedName: "expectedRemuneration",
        type: {
          name: "Composite",
          className: "ExpectedRemunerationAnnotationUpdate",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationAnnotationUpdate",
        },
      },
      certifications: {
        serializedName: "certifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextAnnotationUpdate",
            },
          },
        },
      },
      yearsExperience: {
        serializedName: "yearsExperience",
        type: {
          name: "Composite",
          className: "YearsExperienceAnnotationUpdate",
        },
      },
    },
  },
};

export const AnnotationBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnnotationBase",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number",
        },
      },
      rectangle: {
        serializedName: "rectangle",
        type: {
          name: "Composite",
          className: "Rectangle",
        },
      },
      rectangles: {
        serializedName: "rectangles",
        readOnly: true,
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rectangle",
            },
          },
        },
      },
      pageIndex: {
        serializedName: "pageIndex",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String",
        },
      },
      confidence: {
        serializedName: "confidence",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      classificationConfidence: {
        serializedName: "classificationConfidence",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      textExtractionConfidence: {
        serializedName: "textExtractionConfidence",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      isVerified: {
        serializedName: "isVerified",
        type: {
          name: "Boolean",
        },
      },
      isClientVerified: {
        serializedName: "isClientVerified",
        type: {
          name: "Boolean",
        },
      },
      isAutoVerified: {
        serializedName: "isAutoVerified",
        type: {
          name: "Boolean",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        type: {
          name: "String",
        },
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const JobTitleParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleParsed",
    modelProperties: {
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "JobTitleParsedParsed",
        },
      },
    },
  },
};

export const JobTitleParsedParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleParsedParsed",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        type: {
          name: "String",
        },
      },
      classification: {
        serializedName: "classification",
        type: {
          name: "Composite",
          className: "JobTitleParsedClassification",
        },
      },
    },
  },
};

export const JobTitleParsedClassification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleParsedClassification",
    modelProperties: {
      socCode: {
        serializedName: "socCode",
        type: {
          name: "Number",
        },
      },
      title: {
        serializedName: "title",
        type: {
          name: "String",
        },
      },
      minorGroup: {
        serializedName: "minorGroup",
        type: {
          name: "String",
        },
      },
      subMajorGroup: {
        serializedName: "subMajorGroup",
        type: {
          name: "String",
        },
      },
      majorGroup: {
        serializedName: "majorGroup",
        type: {
          name: "String",
        },
      },
      minorGroupCode: {
        serializedName: "minorGroupCode",
        type: {
          name: "Number",
        },
      },
      subMajorGroupCode: {
        serializedName: "subMajorGroupCode",
        type: {
          name: "Number",
        },
      },
      majorGroupCode: {
        serializedName: "majorGroupCode",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ExpectedRemunerationAnnotationUpdateParsed: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExpectedRemunerationAnnotationUpdateParsed",
      modelProperties: {
        minimum: {
          serializedName: "minimum",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        maximum: {
          serializedName: "maximum",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        currency: {
          serializedName: "currency",
          nullable: true,
          type: {
            name: "String",
          },
        },
        unit: {
          serializedName: "unit",
          nullable: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const YearsExperienceAnnotationUpdateParsed: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "YearsExperienceAnnotationUpdateParsed",
      modelProperties: {
        minimum: {
          serializedName: "minimum",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        maximum: {
          serializedName: "maximum",
          nullable: true,
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const BatchAddTagRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchAddTagRequest",
    modelProperties: {
      identifiers: {
        serializedName: "identifiers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const BatchRemoveTagRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchRemoveTagRequest",
    modelProperties: {
      identifiers: {
        serializedName: "identifiers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ValidationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidationResult",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      annotations: {
        serializedName: "annotations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
      passed: {
        serializedName: "passed",
        required: true,
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      ruleSlug: {
        constraints: {
          Pattern: new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$"),
        },
        serializedName: "ruleSlug",
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
      document: {
        serializedName: "document",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ValidationResultCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidationResultCreate",
    modelProperties: {
      annotations: {
        serializedName: "annotations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
      passed: {
        serializedName: "passed",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      ruleSlug: {
        constraints: {
          Pattern: new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$"),
        },
        serializedName: "ruleSlug",
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
      document: {
        serializedName: "document",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ValidationResultUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidationResultUpdate",
    modelProperties: {
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
      passed: {
        serializedName: "passed",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      ruleSlug: {
        constraints: {
          Pattern: new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$"),
        },
        serializedName: "ruleSlug",
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
      document: {
        serializedName: "document",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BatchDeleteValidationResultsRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchDeleteValidationResultsRequest",
    modelProperties: {
      ids: {
        serializedName: "ids",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
    },
  },
};

export const DocumentSplitter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentSplitter",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      llmModel: {
        serializedName: "llmModel",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      llmHint: {
        serializedName: "llmHint",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DocumentEditRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentEditRequest",
    modelProperties: {
      splits: {
        serializedName: "splits",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSplit",
            },
          },
        },
      },
    },
  },
};

export const DocumentSplit: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentSplit",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "any",
        },
      },
      pages: {
        serializedName: "pages",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSplitPage",
            },
          },
        },
      },
    },
  },
};

export const DocumentSplitPage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentSplitPage",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      rotation: {
        constraints: {
          InclusiveMaximum: 360,
          InclusiveMinimum: -360,
        },
        serializedName: "rotation",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const Meta: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Meta",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      customIdentifier: {
        serializedName: "customIdentifier",
        nullable: true,
        type: {
          name: "String",
        },
      },
      fileName: {
        serializedName: "fileName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      ready: {
        serializedName: "ready",
        type: {
          name: "Boolean",
        },
      },
      readyDt: {
        serializedName: "readyDt",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      failed: {
        serializedName: "failed",
        type: {
          name: "Boolean",
        },
      },
      expiryTime: {
        serializedName: "expiryTime",
        nullable: true,
        type: {
          name: "String",
        },
      },
      language: {
        serializedName: "language",
        nullable: true,
        type: {
          name: "String",
        },
      },
      pdf: {
        serializedName: "pdf",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parentDocument: {
        serializedName: "parentDocument",
        type: {
          name: "Composite",
          className: "MetaParentDocument",
        },
      },
      childDocuments: {
        serializedName: "childDocuments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetaChildDocumentsItem",
            },
          },
        },
      },
      pages: {
        serializedName: "pages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageMeta",
            },
          },
        },
      },
      isVerified: {
        serializedName: "isVerified",
        type: {
          name: "Boolean",
        },
      },
      reviewUrl: {
        serializedName: "reviewUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      ocrConfidence: {
        serializedName: "ocrConfidence",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      createdDt: {
        serializedName: "createdDt",
        type: {
          name: "DateTime",
        },
      },
      documentType: {
        serializedName: "documentType",
        type: {
          name: "String",
        },
      },
      regionBias: {
        serializedName: "regionBias",
        type: {
          name: "Composite",
          className: "RegionBias",
        },
      },
      isOcrd: {
        serializedName: "isOcrd",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const MetaParentDocument: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetaParentDocument",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const MetaChildDocumentsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetaChildDocumentsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ExtractorCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtractorCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      namePlural: {
        serializedName: "namePlural",
        type: {
          name: "String",
        },
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        required: true,
        type: {
          name: "String",
        },
      },
      category: {
        serializedName: "category",
        nullable: true,
        type: {
          name: "String",
        },
      },
      validatable: {
        serializedName: "validatable",
        type: {
          name: "Boolean",
        },
      },
      fieldGroups: {
        serializedName: "fieldGroups",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup",
            },
          },
        },
      },
    },
  },
};

export const ExtractorUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtractorUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      namePlural: {
        serializedName: "namePlural",
        type: {
          name: "String",
        },
      },
      baseExtractor: {
        serializedName: "baseExtractor",
        type: {
          name: "String",
        },
      },
      category: {
        serializedName: "category",
        nullable: true,
        type: {
          name: "String",
        },
      },
      validatable: {
        serializedName: "validatable",
        type: {
          name: "Boolean",
        },
      },
      fieldGroups: {
        serializedName: "fieldGroups",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldGroup",
            },
          },
        },
      },
    },
  },
};

export const DataPointCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      slug: {
        serializedName: "slug",
        required: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      annotationContentType: {
        serializedName: "annotationContentType",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        required: true,
        type: {
          name: "String",
        },
      },
      extractor: {
        serializedName: "extractor",
        required: true,
        type: {
          name: "String",
        },
      },
      multiple: {
        serializedName: "multiple",
        type: {
          name: "Boolean",
        },
      },
      noRect: {
        serializedName: "noRect",
        type: {
          name: "Boolean",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "String",
        },
      },
      manualEntry: {
        serializedName: "manualEntry",
        type: {
          name: "Boolean",
        },
      },
      mappingDataSource: {
        serializedName: "mappingDataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DataPointUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      slug: {
        serializedName: "slug",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "String",
        },
      },
      mappingDataSource: {
        serializedName: "mappingDataSource",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "DataPointChoice",
              },
            },
          },
        },
      },
    },
  };

export const DataPointChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointChoice",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String",
        },
      },
      synonyms: {
        serializedName: "synonyms",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DataPointChoiceCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointChoiceCreate",
    modelProperties: {
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "String",
        },
      },
      collection: {
        serializedName: "collection",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String",
        },
      },
      synonyms: {
        serializedName: "synonyms",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DataPointChoiceUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointChoiceUpdate",
    modelProperties: {
      dataPoint: {
        serializedName: "dataPoint",
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "String",
        },
      },
      collection: {
        serializedName: "collection",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      synonyms: {
        serializedName: "synonyms",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DataPointChoiceReplaceRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointChoiceReplaceRequest",
    modelProperties: {
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      collection: {
        serializedName: "collection",
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "String",
        },
      },
      choices: {
        serializedName: "choices",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPointChoiceForReplace",
            },
          },
        },
      },
    },
  },
};

export const DataPointChoiceForReplace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointChoiceForReplace",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        type: {
          name: "String",
        },
      },
      synonyms: {
        serializedName: "synonyms",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DataPointChoiceReplaceResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPointChoiceReplaceResponse",
    modelProperties: {
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      collection: {
        serializedName: "collection",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      choices: {
        serializedName: "choices",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPointChoiceReplaceResponseChoicesItem",
            },
          },
        },
      },
    },
  },
};

export const DataPointChoiceReplaceResponseChoicesItem: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "DataPointChoiceReplaceResponseChoicesItem",
      modelProperties: {
        id: {
          constraints: {
            InclusiveMinimum: 1,
          },
          serializedName: "id",
          required: true,
          type: {
            name: "Number",
          },
        },
        value: {
          serializedName: "value",
          required: true,
          type: {
            name: "String",
          },
        },
        label: {
          serializedName: "label",
          required: true,
          type: {
            name: "String",
          },
        },
        synonyms: {
          serializedName: "synonyms",
          required: true,
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
        description: {
          serializedName: "description",
          required: true,
          nullable: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "Annotation",
              },
            },
          },
        },
      },
    },
  };

export const AnnotationCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnnotationCreate",
    modelProperties: {
      rectangles: {
        serializedName: "rectangles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rectangle",
            },
          },
        },
      },
      document: {
        serializedName: "document",
        required: true,
        type: {
          name: "String",
        },
      },
      pageIndex: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "pageIndex",
        required: true,
        nullable: true,
        type: {
          name: "Number",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parsed: {
        serializedName: "parsed",
        type: {
          name: "any",
        },
      },
      isClientVerified: {
        serializedName: "isClientVerified",
        type: {
          name: "Boolean",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      validationResults: {
        serializedName: "validationResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChangedValidationResults",
            },
          },
        },
      },
    },
  },
};

export const ChangedValidationResults: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChangedValidationResults",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      created: {
        serializedName: "created",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ValidationResult",
            },
          },
        },
      },
      updated: {
        serializedName: "updated",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ValidationResult",
            },
          },
        },
      },
      deleted: {
        serializedName: "deleted",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ValidationResult",
            },
          },
        },
      },
    },
  },
};

export const AnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnnotationUpdate",
    modelProperties: {
      rectangles: {
        serializedName: "rectangles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rectangle",
            },
          },
        },
      },
      document: {
        serializedName: "document",
        type: {
          name: "String",
        },
      },
      pageIndex: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "pageIndex",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parsed: {
        serializedName: "parsed",
        type: {
          name: "any",
        },
      },
      isClientVerified: {
        serializedName: "isClientVerified",
        type: {
          name: "Boolean",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        type: {
          name: "String",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      validationResults: {
        serializedName: "validationResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChangedValidationResults",
            },
          },
        },
      },
    },
  },
};

export const AnotationDelete: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnotationDelete",
    modelProperties: {
      validationResults: {
        serializedName: "validationResults",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const AnnotationBatchUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnnotationBatchUpdate",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      rectangles: {
        serializedName: "rectangles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rectangle",
            },
          },
        },
      },
      document: {
        serializedName: "document",
        type: {
          name: "String",
        },
      },
      pageIndex: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "pageIndex",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      raw: {
        serializedName: "raw",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parsed: {
        serializedName: "parsed",
        type: {
          name: "any",
        },
      },
      isClientVerified: {
        serializedName: "isClientVerified",
        type: {
          name: "Boolean",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        type: {
          name: "String",
        },
      },
      parent: {
        serializedName: "parent",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      validationResults: {
        serializedName: "validationResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChangedValidationResults",
            },
          },
        },
      },
    },
  },
};

export const BatchDeleteAnnotationsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchDeleteAnnotationsResponse",
    modelProperties: {
      validationResults: {
        serializedName: "validationResults",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const MappingDataSourceCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MappingDataSourceCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        nullable: true,
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        nullable: true,
        type: {
          name: "String",
        },
      },
      keyProperty: {
        serializedName: "keyProperty",
        type: {
          name: "String",
        },
      },
      displayProperty: {
        serializedName: "displayProperty",
        type: {
          name: "String",
        },
      },
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } },
            },
          },
        },
      },
      schema: {
        serializedName: "schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const Paths1UmoszuV3MappingDataSourcesGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1UmoszuV3MappingDataSourcesGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "MappingDataSource",
              },
            },
          },
        },
      },
    },
  };

export const Paths1O6IvdaV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1O6IvdaV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Dictionary",
                value: { type: { name: "any" } },
              },
            },
          },
        },
      },
    },
  };

export const MappingCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MappingCreate",
    modelProperties: {
      dataSource: {
        serializedName: "dataSource",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      scoreCutoff: {
        serializedName: "scoreCutoff",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      organization: {
        serializedName: "organization",
        nullable: true,
        type: {
          name: "String",
        },
      },
      orderBy: {
        serializedName: "orderBy",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Mapping: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Mapping",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        readOnly: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        nullable: true,
        type: {
          name: "String",
        },
      },
      dataSource: {
        serializedName: "dataSource",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      scoreCutoff: {
        serializedName: "scoreCutoff",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      orderBy: {
        serializedName: "orderBy",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PathsWvcyp9V3MappingsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsWvcyp9V3MappingsGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "Mapping",
              },
            },
          },
        },
      },
    },
  };

export const MappingUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MappingUpdate",
    modelProperties: {
      scoreCutoff: {
        serializedName: "scoreCutoff",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      orderBy: {
        serializedName: "orderBy",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const TagCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const TagUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ValidationToolConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidationToolConfig",
    modelProperties: {
      theme: {
        serializedName: "theme",
        type: {
          name: "Composite",
          className: "ThemeConfig",
        },
      },
      hideActions: {
        serializedName: "hideActions",
        type: {
          name: "Boolean",
        },
      },
      hideCollection: {
        serializedName: "hideCollection",
        type: {
          name: "Boolean",
        },
      },
      hideEditPages: {
        serializedName: "hideEditPages",
        type: {
          name: "Boolean",
        },
      },
      hideExport: {
        serializedName: "hideExport",
        type: {
          name: "Boolean",
        },
      },
      hideFilename: {
        serializedName: "hideFilename",
        type: {
          name: "Boolean",
        },
      },
      hideReject: {
        serializedName: "hideReject",
        type: {
          name: "Boolean",
        },
      },
      hideReparse: {
        serializedName: "hideReparse",
        type: {
          name: "Boolean",
        },
      },
      hideRunOcr: {
        serializedName: "hideRunOcr",
        type: {
          name: "Boolean",
        },
      },
      hideTags: {
        serializedName: "hideTags",
        type: {
          name: "Boolean",
        },
      },
      hideWarnings: {
        serializedName: "hideWarnings",
        type: {
          name: "Boolean",
        },
      },
      restrictDocumentSplitting: {
        serializedName: "restrictDocumentSplitting",
        type: {
          name: "Boolean",
        },
      },
      disableCurrencyFormatting: {
        serializedName: "disableCurrencyFormatting",
        type: {
          name: "Boolean",
        },
      },
      disableEditDocumentMetadata: {
        serializedName: "disableEditDocumentMetadata",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "OrganizationMembership",
              },
            },
          },
        },
      },
    },
  };

export const OrganizationMembership: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationMembership",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        required: true,
        type: {
          name: "String",
        },
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User",
        },
      },
      role: {
        serializedName: "role",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OrganizationMembershipUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationMembershipUpdate",
    modelProperties: {
      role: {
        serializedName: "role",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "Invitation",
              },
            },
          },
        },
      },
    },
  };

export const Invitation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Invitation",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "Composite",
          className: "Organization",
        },
      },
      email: {
        serializedName: "email",
        type: {
          name: "String",
        },
      },
      role: {
        serializedName: "role",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        type: {
          name: "String",
        },
      },
      expiryDate: {
        serializedName: "expiryDate",
        type: {
          name: "Date",
        },
      },
      invitedBy: {
        serializedName: "invitedBy",
        type: {
          name: "Composite",
          className: "User",
        },
      },
      respondedBy: {
        serializedName: "respondedBy",
        type: {
          name: "Composite",
          className: "InvitationRespondedBy",
        },
      },
      createdDt: {
        serializedName: "createdDt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const InvitationCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvitationCreate",
    modelProperties: {
      organization: {
        serializedName: "organization",
        required: true,
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String",
        },
      },
      role: {
        serializedName: "role",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const InvitationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvitationUpdate",
    modelProperties: {
      role: {
        serializedName: "role",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const InvitationResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvitationResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "ApiUserWithoutKey",
              },
            },
          },
        },
      },
    },
  };

export const ApiUserWithoutKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiUserWithoutKey",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      organizations: {
        serializedName: "organizations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiUserWithoutKeyOrganizationsItem",
            },
          },
        },
      },
      apiKeyLastChars: {
        serializedName: "apiKeyLastChars",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ApiUserWithoutKeyOrganizationsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiUserWithoutKeyOrganizationsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ApiUserCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiUserCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ApiUserWithKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiUserWithKey",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      organizations: {
        serializedName: "organizations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiUserWithKeyOrganizationsItem",
            },
          },
        },
      },
      apiKey: {
        serializedName: "apiKey",
        required: true,
        type: {
          name: "String",
        },
      },
      apiKeyLastChars: {
        serializedName: "apiKeyLastChars",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ApiUserWithKeyOrganizationsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiUserWithKeyOrganizationsItem",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ApiUserUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiUserUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "ResthookSubscription",
              },
            },
          },
        },
      },
    },
  };

export const ResthookSubscription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResthookSubscription",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      event: {
        serializedName: "event",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "Composite",
          className: "Organization",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "Composite",
          className: "ResthookSubscriptionWorkspace",
        },
      },
      targetUrl: {
        serializedName: "targetUrl",
        required: true,
        type: {
          name: "String",
        },
      },
      active: {
        serializedName: "active",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      autoDeactivated: {
        serializedName: "autoDeactivated",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      autoDeactivateReason: {
        serializedName: "autoDeactivateReason",
        required: true,
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResthookSubscriptionWorkspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResthookSubscriptionWorkspace",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "Composite",
          className: "Organization",
        },
      },
    },
  },
};

export const ResthookSubscriptionCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResthookSubscriptionCreate",
    modelProperties: {
      targetUrl: {
        serializedName: "targetUrl",
        required: true,
        type: {
          name: "String",
        },
      },
      event: {
        serializedName: "event",
        required: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResthookSubscriptionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResthookSubscriptionUpdate",
    modelProperties: {
      event: {
        serializedName: "event",
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "organization",
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        type: {
          name: "String",
        },
      },
    },
  },
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
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      children: {
        serializedName: "children",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OccupationGroup",
            },
          },
        },
      },
    },
  },
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
              name: "String",
            },
          },
        },
      },
      jobDescription: {
        serializedName: "jobDescription",
        nullable: true,
        type: {
          name: "String",
        },
      },
      resume: {
        serializedName: "resume",
        nullable: true,
        type: {
          name: "String",
        },
      },
      jobTitles: {
        serializedName: "jobTitles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      jobTitlesCurrentOnly: {
        serializedName: "jobTitlesCurrentOnly",
        type: {
          name: "Boolean",
        },
      },
      jobTitlesRequired: {
        serializedName: "jobTitlesRequired",
        type: {
          name: "Boolean",
        },
      },
      jobTitlesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "jobTitlesWeight",
        type: {
          name: "Number",
        },
      },
      yearsExperienceMin: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "yearsExperienceMin",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      yearsExperienceMax: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "yearsExperienceMax",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      yearsExperienceRequired: {
        serializedName: "yearsExperienceRequired",
        type: {
          name: "Boolean",
        },
      },
      yearsExperienceWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "yearsExperienceWeight",
        type: {
          name: "Number",
        },
      },
      locations: {
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersLocation",
            },
          },
        },
      },
      locationsWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "locationsWeight",
        type: {
          name: "Number",
        },
      },
      locationsRequired: {
        serializedName: "locationsRequired",
        type: {
          name: "Boolean",
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      skillsWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "skillsWeight",
        type: {
          name: "Number",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      languagesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "languagesWeight",
        type: {
          name: "Number",
        },
      },
      institutions: {
        serializedName: "institutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      institutionsRequired: {
        serializedName: "institutionsRequired",
        type: {
          name: "Boolean",
        },
      },
      degrees: {
        serializedName: "degrees",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      degreesRequired: {
        serializedName: "degreesRequired",
        type: {
          name: "Boolean",
        },
      },
      highestDegreeTypes: {
        constraints: {
          UniqueItems: true,
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
                "doctoral",
              ],
            },
          },
        },
      },
      highestDegreeTypesRequired: {
        serializedName: "highestDegreeTypesRequired",
        type: {
          name: "Boolean",
        },
      },
      isCurrentStudent: {
        serializedName: "isCurrentStudent",
        type: {
          name: "Boolean",
        },
      },
      isCurrentStudentRequired: {
        serializedName: "isCurrentStudentRequired",
        type: {
          name: "Boolean",
        },
      },
      isRecentGraduate: {
        serializedName: "isRecentGraduate",
        type: {
          name: "Boolean",
        },
      },
      isRecentGraduateRequired: {
        serializedName: "isRecentGraduateRequired",
        type: {
          name: "Boolean",
        },
      },
      educationWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "educationWeight",
        type: {
          name: "Number",
        },
      },
      searchExpression: {
        serializedName: "searchExpression",
        nullable: true,
        type: {
          name: "String",
        },
      },
      searchExpressionRequired: {
        serializedName: "searchExpressionRequired",
        type: {
          name: "Boolean",
        },
      },
      searchExpressionWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "searchExpressionWeight",
        type: {
          name: "Number",
        },
      },
      socCodes: {
        serializedName: "socCodes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
      socCodesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "socCodesWeight",
        type: {
          name: "Number",
        },
      },
      socCodesRequired: {
        serializedName: "socCodesRequired",
        type: {
          name: "Boolean",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"],
        },
      },
      managementLevelRequired: {
        serializedName: "managementLevelRequired",
        type: {
          name: "Boolean",
        },
      },
      managementLevelWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "managementLevelWeight",
        type: {
          name: "Number",
        },
      },
      customData: {
        serializedName: "customData",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersCustomData",
            },
          },
        },
      },
    },
  },
};

export const ResumeSearchParametersLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersLocation",
    modelProperties: {
      name: {
        defaultValue: "",
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      coordinates: {
        serializedName: "coordinates",
        type: {
          name: "Composite",
          className: "ResumeSearchParametersLocationCoordinates",
        },
      },
      distance: {
        defaultValue: 100,
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "distance",
        type: {
          name: "Number",
        },
      },
      unit: {
        defaultValue: "km",
        serializedName: "unit",
        type: {
          name: "Enum",
          allowedValues: ["km", "mi"],
        },
      },
    },
  },
};

export const ResumeSearchParametersLocationCoordinates: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ResumeSearchParametersLocationCoordinates",
      modelProperties: {
        latitude: {
          serializedName: "latitude",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        longitude: {
          serializedName: "longitude",
          nullable: true,
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const ResumeSearchParametersSkill: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersSkill",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      required: {
        serializedName: "required",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const SearchParametersCustomData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchParametersCustomData",
    modelProperties: {
      filterType: {
        serializedName: "filterType",
        required: true,
        type: {
          name: "String",
        },
      },
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      query: {
        serializedName: "query",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
      required: {
        serializedName: "required",
        type: {
          name: "Boolean",
        },
      },
      weight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "weight",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ResumeSearch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearch",
    modelProperties: {
      count: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "count",
        type: {
          name: "Number",
        },
      },
      next: {
        serializedName: "next",
        nullable: true,
        type: {
          name: "String",
        },
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Composite",
          className: "ResumeSearchParameters",
        },
      },
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchResult",
            },
          },
        },
      },
    },
  },
};

export const ResumeSearchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchResult",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        required: true,
        type: {
          name: "Number",
        },
      },
      pdf: {
        serializedName: "pdf",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleSearchScoreComponent",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent",
        },
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent",
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent",
        },
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent",
        },
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent",
        },
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent",
        },
      },
      customData: {
        serializedName: "customData",
        required: true,
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className:
                "ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties",
            },
          },
        },
      },
    },
  },
};

export const JobTitleSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ManagementLevelSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagementLevelSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ExperienceSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExperienceSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const SkillsSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkillsSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const LanguagesSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LanguagesSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const LocationSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const EducationSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EducationSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const OccupationGroupSearchScoreComponent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OccupationGroupSearchScoreComponent",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const SearchExpressionSearchScoreComponent: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "SearchExpressionSearchScoreComponent",
      modelProperties: {
        label: {
          serializedName: "label",
          required: true,
          type: {
            name: "String",
          },
        },
        value: {
          serializedName: "value",
          type: {
            name: "String",
          },
        },
        score: {
          serializedName: "score",
          nullable: true,
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties",
      modelProperties: {
        value: {
          serializedName: "value",
          type: {
            name: "String",
          },
        },
        label: {
          serializedName: "label",
          required: true,
          type: {
            name: "String",
          },
        },
        score: {
          serializedName: "score",
          nullable: true,
          type: {
            name: "Number",
          },
        },
      },
    },
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
          className: "ResumeSearchDetailJobTitle",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLocation",
        },
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailEducation",
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailSkills",
        },
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailExperience",
        },
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailOccupationGroup",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLanguages",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailManagementLevel",
        },
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailSearchExpression",
        },
      },
    },
  },
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
              name: "String",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailJobTitleValueItem",
            },
          },
        },
      },
    },
  },
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
          name: "String",
        },
      },
      startDate: {
        serializedName: "startDate",
        nullable: true,
        type: {
          name: "String",
        },
      },
      endDate: {
        serializedName: "endDate",
        nullable: true,
        type: {
          name: "String",
        },
      },
      companyName: {
        serializedName: "companyName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean",
        },
      },
    },
  },
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
              className: "ResumeSearchParametersLocation",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "ResumeSearchDetailLocationValue",
        },
      },
    },
  },
};

export const ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1",
      modelProperties: {
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
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
          className: "ResumeSearchDetailEducationMissing",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailEducationValueItem",
            },
          },
        },
      },
    },
  },
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
              name: "String",
            },
          },
        },
      },
      highestDegreeTypes: {
        serializedName: "highestDegreeTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      institutions: {
        serializedName: "institutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      currentStudent: {
        serializedName: "currentStudent",
        type: {
          name: "Boolean",
        },
      },
      recentGraduate: {
        serializedName: "recentGraduate",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1",
      modelProperties: {
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
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
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailSkillsValueItem",
            },
          },
        },
      },
    },
  },
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
          name: "String",
        },
      },
      lastUsed: {
        serializedName: "lastUsed",
        nullable: true,
        type: {
          name: "String",
        },
      },
      numberOfMonths: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "numberOfMonths",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      type: {
        serializedName: "type",
        nullable: true,
        type: {
          name: "String",
        },
      },
      sources: {
        serializedName: "sources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSkillSourcesItem",
            },
          },
        },
      },
    },
  },
};

export const ResumeSkillSourcesItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSkillSourcesItem",
    modelProperties: {
      section: {
        serializedName: "section",
        type: {
          name: "String",
        },
      },
      position: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "position",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1",
      modelProperties: {
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
  };

export const ResumeSearchDetailExperience: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailExperience",
    modelProperties: {
      years: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "years",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean",
        },
      },
    },
  },
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
              name: "Number",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OccupationGroupSearchResult",
            },
          },
        },
      },
    },
  },
};

export const OccupationGroupSearchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OccupationGroupSearchResult",
    modelProperties: {
      match: {
        serializedName: "match",
        type: {
          name: "Boolean",
        },
      },
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      children: {
        serializedName: "children",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OccupationGroup",
            },
          },
        },
      },
      parents: {
        serializedName: "parents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OccupationGroup",
            },
          },
        },
      },
    },
  },
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
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchDetailLanguagesValueItem",
            },
          },
        },
      },
    },
  },
};

export const Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1",
      modelProperties: {
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
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
          allowedValues: ["None", "Low", "Mid", "Upper"],
        },
      },
      match: {
        serializedName: "match",
        type: {
          name: "Boolean",
        },
      },
    },
  },
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
              name: "String",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const ResumeSearchConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchConfig",
    modelProperties: {
      allowPdfDownload: {
        serializedName: "allowPdfDownload",
        type: {
          name: "Boolean",
        },
      },
      maxResults: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "maxResults",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      displayJobTitle: {
        serializedName: "displayJobTitle",
        type: {
          name: "Boolean",
        },
      },
      displayLocation: {
        serializedName: "displayLocation",
        type: {
          name: "Boolean",
        },
      },
      displayYearsExperience: {
        serializedName: "displayYearsExperience",
        type: {
          name: "Boolean",
        },
      },
      displayOccupationGroup: {
        serializedName: "displayOccupationGroup",
        type: {
          name: "Boolean",
        },
      },
      displayEducation: {
        serializedName: "displayEducation",
        type: {
          name: "Boolean",
        },
      },
      displaySkills: {
        serializedName: "displaySkills",
        type: {
          name: "Boolean",
        },
      },
      displayLanguages: {
        serializedName: "displayLanguages",
        type: {
          name: "Boolean",
        },
      },
      displayManagementLevel: {
        serializedName: "displayManagementLevel",
        type: {
          name: "Boolean",
        },
      },
      displayKeywords: {
        serializedName: "displayKeywords",
        type: {
          name: "Boolean",
        },
      },
      weightJobTitle: {
        serializedName: "weightJobTitle",
        type: {
          name: "Number",
        },
      },
      weightLocation: {
        serializedName: "weightLocation",
        type: {
          name: "Number",
        },
      },
      weightYearsExperience: {
        serializedName: "weightYearsExperience",
        type: {
          name: "Number",
        },
      },
      weightOccupationGroup: {
        serializedName: "weightOccupationGroup",
        type: {
          name: "Number",
        },
      },
      weightEducation: {
        serializedName: "weightEducation",
        type: {
          name: "Number",
        },
      },
      weightSkills: {
        serializedName: "weightSkills",
        type: {
          name: "Number",
        },
      },
      weightLanguages: {
        serializedName: "weightLanguages",
        type: {
          name: "Number",
        },
      },
      weightManagementLevel: {
        serializedName: "weightManagementLevel",
        type: {
          name: "Number",
        },
      },
      weightKeywords: {
        serializedName: "weightKeywords",
        type: {
          name: "Number",
        },
      },
      indices: {
        serializedName: "indices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      showIndexDropdown: {
        serializedName: "showIndexDropdown",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      searchToolTheme: {
        serializedName: "searchToolTheme",
        type: {
          name: "Composite",
          className: "ResumeSearchConfigSearchToolTheme",
        },
      },
      userId: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "userId",
        readOnly: true,
        type: {
          name: "Number",
        },
      },
      username: {
        serializedName: "username",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actions: {
        serializedName: "actions",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchConfigAction",
            },
          },
        },
      },
      hideToolbar: {
        serializedName: "hideToolbar",
        type: {
          name: "Boolean",
        },
      },
      hideSidePanel: {
        serializedName: "hideSidePanel",
        type: {
          name: "Boolean",
        },
      },
      customFieldsConfig: {
        serializedName: "customFieldsConfig",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CustomFieldConfig",
            },
          },
        },
      },
      distanceUnit: {
        serializedName: "distanceUnit",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SearchConfigAction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchConfigAction",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String",
        },
      },
      eventName: {
        serializedName: "eventName",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CustomFieldConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomFieldConfig",
    modelProperties: {
      dataPoint: {
        serializedName: "dataPoint",
        required: true,
        type: {
          name: "String",
        },
      },
      weight: {
        defaultValue: 0.5,
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "weight",
        required: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema",
      modelProperties: {
        configOverride: {
          serializedName: "configOverride",
          type: {
            name: "Composite",
            className: "ResumeSearchConfig",
          },
        },
      },
    },
  };

export const ResumeSearchEmbed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchEmbed",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResumeSearchMatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchMatch",
    modelProperties: {
      score: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "score",
        type: {
          name: "Number",
        },
      },
      details: {
        serializedName: "details",
        type: {
          name: "Composite",
          className: "ResumeSearchMatchDetails",
        },
      },
    },
  },
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
          className: "JobTitleSearchScoreComponent",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent",
        },
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent",
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent",
        },
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent",
        },
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent",
        },
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent",
        },
      },
    },
  },
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
              name: "String",
            },
          },
        },
      },
      resume: {
        serializedName: "resume",
        nullable: true,
        type: {
          name: "String",
        },
      },
      jobTitles: {
        serializedName: "jobTitles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      jobTitlesRequired: {
        serializedName: "jobTitlesRequired",
        type: {
          name: "Boolean",
        },
      },
      jobTitlesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "jobTitlesWeight",
        type: {
          name: "Number",
        },
      },
      totalYearsExperience: {
        serializedName: "totalYearsExperience",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      yearsExperienceRequired: {
        serializedName: "yearsExperienceRequired",
        type: {
          name: "Boolean",
        },
      },
      yearsExperienceWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "yearsExperienceWeight",
        type: {
          name: "Number",
        },
      },
      locations: {
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersLocation",
            },
          },
        },
      },
      locationsWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "locationsWeight",
        type: {
          name: "Number",
        },
      },
      locationsRequired: {
        serializedName: "locationsRequired",
        type: {
          name: "Boolean",
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      skillsWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "skillsWeight",
        type: {
          name: "Number",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      languagesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "languagesWeight",
        type: {
          name: "Number",
        },
      },
      degrees: {
        serializedName: "degrees",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      degreesRequired: {
        serializedName: "degreesRequired",
        type: {
          name: "Boolean",
        },
      },
      degreeTypes: {
        constraints: {
          UniqueItems: true,
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
                "doctoral",
              ],
            },
          },
        },
      },
      degreeTypesRequired: {
        serializedName: "degreeTypesRequired",
        type: {
          name: "Boolean",
        },
      },
      educationWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "educationWeight",
        type: {
          name: "Number",
        },
      },
      searchExpression: {
        serializedName: "searchExpression",
        nullable: true,
        type: {
          name: "String",
        },
      },
      searchExpressionRequired: {
        serializedName: "searchExpressionRequired",
        type: {
          name: "Boolean",
        },
      },
      searchExpressionWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "searchExpressionWeight",
        type: {
          name: "Number",
        },
      },
      socCodes: {
        serializedName: "socCodes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number",
            },
          },
        },
      },
      socCodesWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "socCodesWeight",
        type: {
          name: "Number",
        },
      },
      socCodesRequired: {
        serializedName: "socCodesRequired",
        type: {
          name: "Boolean",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        nullable: true,
        type: {
          name: "Enum",
          allowedValues: ["None", "Low", "Mid", "Upper"],
        },
      },
      managementLevelRequired: {
        serializedName: "managementLevelRequired",
        type: {
          name: "Boolean",
        },
      },
      managementLevelWeight: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0,
        },
        serializedName: "managementLevelWeight",
        type: {
          name: "Number",
        },
      },
      customData: {
        serializedName: "customData",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchParametersCustomData",
            },
          },
        },
      },
    },
  },
};

export const JobDescriptionSearch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearch",
    modelProperties: {
      count: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: "count",
        type: {
          name: "Number",
        },
      },
      next: {
        serializedName: "next",
        nullable: true,
        type: {
          name: "String",
        },
      },
      previous: {
        serializedName: "previous",
        nullable: true,
        type: {
          name: "String",
        },
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchParameters",
        },
      },
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobDescriptionSearchResult",
            },
          },
        },
      },
    },
  },
};

export const JobDescriptionSearchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchResult",
    modelProperties: {
      identifier: {
        serializedName: "identifier",
        required: true,
        type: {
          name: "String",
        },
      },
      score: {
        serializedName: "score",
        required: true,
        type: {
          name: "Number",
        },
      },
      pdf: {
        serializedName: "pdf",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      jobTitle: {
        serializedName: "jobTitle",
        type: {
          name: "Composite",
          className: "JobTitleSearchScoreComponent",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "ManagementLevelSearchScoreComponent",
        },
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "ExperienceSearchScoreComponent",
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "SkillsSearchScoreComponent",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "LanguagesSearchScoreComponent",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "LocationSearchScoreComponent",
        },
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "EducationSearchScoreComponent",
        },
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "OccupationGroupSearchScoreComponent",
        },
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "SearchExpressionSearchScoreComponent",
        },
      },
      organizationName: {
        serializedName: "organizationName",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
      customData: {
        serializedName: "customData",
        required: true,
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className:
                "ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties",
            },
          },
        },
      },
    },
  },
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
          className: "JobDescriptionSearchDetailJobTitle",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLocation",
        },
      },
      education: {
        serializedName: "education",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducation",
        },
      },
      skills: {
        serializedName: "skills",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailSkills",
        },
      },
      experience: {
        serializedName: "experience",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailExperience",
        },
      },
      occupationGroup: {
        serializedName: "occupationGroup",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailOccupationGroup",
        },
      },
      languages: {
        serializedName: "languages",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLanguages",
        },
      },
      managementLevel: {
        serializedName: "managementLevel",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailManagementLevel",
        },
      },
      searchExpression: {
        serializedName: "searchExpression",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailSearchExpression",
        },
      },
    },
  },
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
              name: "String",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailJobTitleValue",
        },
      },
    },
  },
};

export const JobDescriptionSearchDetailJobTitleValue: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchDetailJobTitleValue",
      modelProperties: {
        name: {
          serializedName: "name",
          nullable: true,
          type: {
            name: "String",
          },
        },
        companyName: {
          serializedName: "companyName",
          nullable: true,
          type: {
            name: "String",
          },
        },
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
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
              className: "ResumeSearchParametersLocation",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailLocationValue",
        },
      },
    },
  },
};

export const Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1",
      modelProperties: {
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
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
          className: "JobDescriptionSearchDetailEducationMissing",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchDetailEducationValue",
        },
      },
    },
  },
};

export const JobDescriptionSearchDetailEducationMissing: coreClient.CompositeMapper =
  {
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
                name: "String",
              },
            },
          },
        },
        degreeTypes: {
          serializedName: "degreeTypes",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
      },
    },
  };

export const JobDescriptionSearchDetailEducationValue: coreClient.CompositeMapper =
  {
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
                name: "String",
              },
            },
          },
        },
        degreeTypes: {
          serializedName: "degreeTypes",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
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
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobDescriptionSearchDetailSkillsValueItem",
            },
          },
        },
      },
    },
  },
};

export const JobDescriptionSearchDetailSkillsValueItem: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchDetailSkillsValueItem",
      modelProperties: {
        name: {
          serializedName: "name",
          type: {
            name: "String",
          },
        },
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
  };

export const JobDescriptionSearchDetailExperience: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchDetailExperience",
      modelProperties: {
        minimumExperience: {
          constraints: {
            InclusiveMinimum: 0,
          },
          serializedName: "minimumExperience",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        maximumExperience: {
          constraints: {
            InclusiveMinimum: 0,
          },
          serializedName: "maximumExperience",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
  };

export const JobDescriptionSearchDetailOccupationGroup: coreClient.CompositeMapper =
  {
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
                name: "Number",
              },
            },
          },
        },
        value: {
          serializedName: "value",
          type: {
            name: "Composite",
            className: "JobDescriptionSearchDetailOccupationGroupValue",
          },
        },
      },
    },
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
              className: "ResumeSearchParametersSkill",
            },
          },
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JobDescriptionSearchDetailLanguagesValueItem",
            },
          },
        },
      },
    },
  },
};

export const JobDescriptionSearchDetailLanguagesValueItem: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchDetailLanguagesValueItem",
      modelProperties: {
        name: {
          serializedName: "name",
          type: {
            name: "String",
          },
        },
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
  };

export const JobDescriptionSearchDetailManagementLevel: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchDetailManagementLevel",
      modelProperties: {
        level: {
          serializedName: "level",
          nullable: true,
          type: {
            name: "Enum",
            allowedValues: ["None", "Low", "Mid", "Upper"],
          },
        },
        match: {
          serializedName: "match",
          type: {
            name: "Boolean",
          },
        },
      },
    },
  };

export const JobDescriptionSearchDetailSearchExpression: coreClient.CompositeMapper =
  {
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
                name: "String",
              },
            },
          },
        },
        value: {
          serializedName: "value",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
      },
    },
  };

export const JobDescriptionSearchConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchConfig",
    modelProperties: {
      allowPdfDownload: {
        serializedName: "allowPdfDownload",
        type: {
          name: "Boolean",
        },
      },
      maxResults: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "maxResults",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      displayJobTitle: {
        serializedName: "displayJobTitle",
        type: {
          name: "Boolean",
        },
      },
      displayLocation: {
        serializedName: "displayLocation",
        type: {
          name: "Boolean",
        },
      },
      displayYearsExperience: {
        serializedName: "displayYearsExperience",
        type: {
          name: "Boolean",
        },
      },
      displayOccupationGroup: {
        serializedName: "displayOccupationGroup",
        type: {
          name: "Boolean",
        },
      },
      displayEducation: {
        serializedName: "displayEducation",
        type: {
          name: "Boolean",
        },
      },
      displaySkills: {
        serializedName: "displaySkills",
        type: {
          name: "Boolean",
        },
      },
      displayLanguages: {
        serializedName: "displayLanguages",
        type: {
          name: "Boolean",
        },
      },
      displayManagementLevel: {
        serializedName: "displayManagementLevel",
        type: {
          name: "Boolean",
        },
      },
      displayKeywords: {
        serializedName: "displayKeywords",
        type: {
          name: "Boolean",
        },
      },
      weightJobTitle: {
        serializedName: "weightJobTitle",
        type: {
          name: "Number",
        },
      },
      weightLocation: {
        serializedName: "weightLocation",
        type: {
          name: "Number",
        },
      },
      weightYearsExperience: {
        serializedName: "weightYearsExperience",
        type: {
          name: "Number",
        },
      },
      weightOccupationGroup: {
        serializedName: "weightOccupationGroup",
        type: {
          name: "Number",
        },
      },
      weightEducation: {
        serializedName: "weightEducation",
        type: {
          name: "Number",
        },
      },
      weightSkills: {
        serializedName: "weightSkills",
        type: {
          name: "Number",
        },
      },
      weightLanguages: {
        serializedName: "weightLanguages",
        type: {
          name: "Number",
        },
      },
      weightManagementLevel: {
        serializedName: "weightManagementLevel",
        type: {
          name: "Number",
        },
      },
      weightKeywords: {
        serializedName: "weightKeywords",
        type: {
          name: "Number",
        },
      },
      indices: {
        serializedName: "indices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      showIndexDropdown: {
        serializedName: "showIndexDropdown",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      searchToolTheme: {
        serializedName: "searchToolTheme",
        type: {
          name: "Composite",
          className: "JobDescriptionSearchConfigSearchToolTheme",
        },
      },
      userId: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "userId",
        readOnly: true,
        type: {
          name: "Number",
        },
      },
      username: {
        serializedName: "username",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actions: {
        serializedName: "actions",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchConfigAction",
            },
          },
        },
      },
      hideToolbar: {
        serializedName: "hideToolbar",
        type: {
          name: "Boolean",
        },
      },
      hideSidePanel: {
        serializedName: "hideSidePanel",
        type: {
          name: "Boolean",
        },
      },
      customFieldsConfig: {
        serializedName: "customFieldsConfig",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CustomFieldConfig",
            },
          },
        },
      },
      distanceUnit: {
        serializedName: "distanceUnit",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema",
      modelProperties: {
        configOverride: {
          serializedName: "configOverride",
          type: {
            name: "Composite",
            className: "JobDescriptionSearchConfig",
          },
        },
      },
    },
  };

export const JobDescriptionSearchEmbed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobDescriptionSearchEmbed",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Paths4T5Cm5V3IndexGetResponses200ContentApplicationJsonSchemaAllof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths4T5Cm5V3IndexGetResponses200ContentApplicationJsonSchemaAllof1",
      modelProperties: {
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "Index",
              },
            },
          },
        },
      },
    },
  };

export const Index: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Index",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      documentType: {
        serializedName: "documentType",
        required: true,
        type: {
          name: "String",
        },
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "IndexUser",
        },
      },
    },
  },
};

export const IndexUser: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexUser",
    modelProperties: {
      id: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        required: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const IndexCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      documentType: {
        serializedName: "documentType",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const IndexUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        count: {
          constraints: {
            InclusiveMinimum: 1,
          },
          serializedName: "count",
          type: {
            name: "Number",
          },
        },
        next: {
          serializedName: "next",
          nullable: true,
          type: {
            name: "String",
          },
        },
        previous: {
          serializedName: "previous",
          nullable: true,
          type: {
            name: "String",
          },
        },
        results: {
          serializedName: "results",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "Get200ApplicationJsonPropertiesItemsItem",
              },
            },
          },
        },
      },
    },
  };

export const Get200ApplicationJsonPropertiesItemsItem: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "Get200ApplicationJsonPropertiesItemsItem",
      modelProperties: {
        document: {
          serializedName: "document",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema",
      modelProperties: {
        document: {
          serializedName: "document",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema",
      modelProperties: {
        document: {
          serializedName: "document",
          type: {
            name: "String",
          },
        },
      },
    },
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
              className: "TableAnnotation",
            },
          },
        },
      },
      tablesBeta: {
        serializedName: "tablesBeta",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TableBetaAnnotation",
            },
          },
        },
      },
      invoiceDate: {
        serializedName: "invoiceDate",
        type: {
          name: "Composite",
          className: "DateAnnotation",
        },
      },
      invoiceOrderDate: {
        serializedName: "invoiceOrderDate",
        type: {
          name: "Composite",
          className: "DateAnnotation",
        },
      },
      paymentDateDue: {
        serializedName: "paymentDateDue",
        type: {
          name: "Composite",
          className: "DateAnnotation",
        },
      },
      paymentAmountBase: {
        serializedName: "paymentAmountBase",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      paymentAmountTax: {
        serializedName: "paymentAmountTax",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      paymentAmountTotal: {
        serializedName: "paymentAmountTotal",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      paymentAmountPaid: {
        serializedName: "paymentAmountPaid",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      paymentAmountDue: {
        serializedName: "paymentAmountDue",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      invoiceNumber: {
        serializedName: "invoiceNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      invoicePurchaseOrderNumber: {
        serializedName: "invoicePurchaseOrderNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      supplierBusinessNumber: {
        serializedName: "supplierBusinessNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      customerNumber: {
        serializedName: "customerNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      customerBusinessNumber: {
        serializedName: "customerBusinessNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      paymentReference: {
        serializedName: "paymentReference",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      bankAccountNumber: {
        serializedName: "bankAccountNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      supplierVat: {
        serializedName: "supplierVat",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      customerVat: {
        serializedName: "customerVat",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      bpayBillerCode: {
        serializedName: "bpayBillerCode",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      bpayReference: {
        serializedName: "bpayReference",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      bankSortCode: {
        serializedName: "bankSortCode",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      bankIban: {
        serializedName: "bankIban",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      bankSwift: {
        serializedName: "bankSwift",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      bankBsb: {
        serializedName: "bankBsb",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      customerContactName: {
        serializedName: "customerContactName",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      customerCompanyName: {
        serializedName: "customerCompanyName",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      supplierCompanyName: {
        serializedName: "supplierCompanyName",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      customerBillingAddress: {
        serializedName: "customerBillingAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation",
        },
      },
      customerDeliveryAddress: {
        serializedName: "customerDeliveryAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation",
        },
      },
      supplierAddress: {
        serializedName: "supplierAddress",
        type: {
          name: "Composite",
          className: "LocationAnnotation",
        },
      },
      customerPhoneNumber: {
        serializedName: "customerPhoneNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      supplierPhoneNumber: {
        serializedName: "supplierPhoneNumber",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      supplierFax: {
        serializedName: "supplierFax",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      customerEmail: {
        serializedName: "customerEmail",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      supplierEmail: {
        serializedName: "supplierEmail",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      supplierWebsite: {
        serializedName: "supplierWebsite",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      currencyCode: {
        serializedName: "currencyCode",
        type: {
          name: "Composite",
          className: "CurrencyCodeAnnotation",
        },
      },
      customFields: {
        serializedName: "customFields",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const TableAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TableAnnotationParsed",
    modelProperties: {
      rows: {
        serializedName: "rows",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RowAnnotation",
            },
          },
        },
      },
    },
  },
};

export const RowAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RowAnnotationParsed",
    modelProperties: {
      itemCode: {
        serializedName: "itemCode",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemDate: {
        serializedName: "itemDate",
        type: {
          name: "Composite",
          className: "DateAnnotation",
        },
      },
      itemDescription: {
        serializedName: "itemDescription",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemUnit: {
        serializedName: "itemUnit",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemUnitPrice: {
        serializedName: "itemUnitPrice",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemQuantity: {
        serializedName: "itemQuantity",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemDiscount: {
        serializedName: "itemDiscount",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemBaseTotal: {
        serializedName: "itemBaseTotal",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemTaxRate: {
        serializedName: "itemTaxRate",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemTaxTotal: {
        serializedName: "itemTaxTotal",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemTotal: {
        serializedName: "itemTotal",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemOther: {
        serializedName: "itemOther",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
    },
  },
};

export const TableBetaAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TableBetaAnnotationParsed",
    modelProperties: {
      rows: {
        serializedName: "rows",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RowBetaAnnotation",
            },
          },
        },
      },
    },
  },
};

export const RowBetaAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RowBetaAnnotationParsed",
    modelProperties: {
      itemCodeBeta: {
        serializedName: "itemCodeBeta",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemDateBeta: {
        serializedName: "itemDateBeta",
        type: {
          name: "Composite",
          className: "DateAnnotation",
        },
      },
      itemDescriptionBeta: {
        serializedName: "itemDescriptionBeta",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemUnitBeta: {
        serializedName: "itemUnitBeta",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemUnitPriceBeta: {
        serializedName: "itemUnitPriceBeta",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemQuantityBeta: {
        serializedName: "itemQuantityBeta",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemDiscountBeta: {
        serializedName: "itemDiscountBeta",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemBaseTotalBeta: {
        serializedName: "itemBaseTotalBeta",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemTaxRateBeta: {
        serializedName: "itemTaxRateBeta",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
      itemTaxTotalBeta: {
        serializedName: "itemTaxTotalBeta",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemTotalBeta: {
        serializedName: "itemTotalBeta",
        type: {
          name: "Composite",
          className: "FloatAnnotation",
        },
      },
      itemOtherBeta: {
        serializedName: "itemOtherBeta",
        type: {
          name: "Composite",
          className: "TextAnnotation",
        },
      },
    },
  },
};

export const ResumeRedactData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeRedactData",
    modelProperties: {
      redactedPdf: {
        serializedName: "redactedPdf",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DateRangeAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DateRangeAnnotationParsed",
    modelProperties: {
      start: {
        serializedName: "start",
        type: {
          name: "Composite",
          className: "DateRangeValue",
        },
      },
      end: {
        serializedName: "end",
        type: {
          name: "Composite",
          className: "DateRangeValue",
        },
      },
    },
  },
};

export const DateRangeValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DateRangeValue",
    modelProperties: {
      date: {
        serializedName: "date",
        type: {
          name: "Date",
        },
      },
      isCurrent: {
        serializedName: "isCurrent",
        type: {
          name: "Boolean",
        },
      },
      day: {
        serializedName: "day",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      month: {
        serializedName: "month",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      year: {
        serializedName: "year",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const PhoneNumberAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberAnnotationParsed",
    modelProperties: {
      rawText: {
        serializedName: "rawText",
        type: {
          name: "String",
        },
      },
      formattedNumber: {
        serializedName: "formattedNumber",
        nullable: true,
        type: {
          name: "String",
        },
      },
      countryCode: {
        serializedName: "countryCode",
        nullable: true,
        type: {
          name: "String",
        },
      },
      internationalCountryCode: {
        constraints: {
          InclusiveMinimum: 1,
        },
        serializedName: "internationalCountryCode",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      nationalNumber: {
        serializedName: "nationalNumber",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UrlAnnotationParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UrlAnnotationParsed",
    modelProperties: {
      url: {
        serializedName: "url",
        nullable: true,
        type: {
          name: "String",
        },
      },
      domain: {
        serializedName: "domain",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Components1Kwk9B6SchemasThemeconfigPropertiesPalettePropertiesBackgroundOneof1: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Components1Kwk9B6SchemasThemeconfigPropertiesPalettePropertiesBackgroundOneof1",
      modelProperties: {
        default: {
          serializedName: "default",
          type: {
            name: "String",
          },
        },
        paper: {
          serializedName: "paper",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const DocumentCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentCreate",
    modelProperties: {
      file: {
        serializedName: "file",
        type: {
          name: "Stream",
        },
      },
      url: {
        serializedName: "url",
        nullable: true,
        type: {
          name: "String",
        },
      },
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "DocumentCreateData",
        },
      },
      collection: {
        serializedName: "collection",
        type: {
          name: "String",
        },
      },
      workspace: {
        serializedName: "workspace",
        type: {
          name: "String",
        },
      },
      wait: {
        defaultValue: "true",
        serializedName: "wait",
        type: {
          name: "String",
        },
      },
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String",
        },
      },
      customIdentifier: {
        serializedName: "customIdentifier",
        type: {
          name: "String",
        },
      },
      fileName: {
        serializedName: "fileName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      expiryTime: {
        serializedName: "expiryTime",
        nullable: true,
        type: {
          name: "String",
        },
      },
      language: {
        serializedName: "language",
        nullable: true,
        type: {
          name: "String",
        },
      },
      rejectDuplicates: {
        serializedName: "rejectDuplicates",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      regionBias: {
        serializedName: "regionBias",
        type: {
          name: "String",
        },
      },
      lowPriority: {
        serializedName: "lowPriority",
        type: {
          name: "String",
        },
      },
      compact: {
        serializedName: "compact",
        type: {
          name: "String",
        },
      },
      deleteAfterParse: {
        serializedName: "deleteAfterParse",
        type: {
          name: "String",
        },
      },
      enableValidationTool: {
        serializedName: "enableValidationTool",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OrganizationCreate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationCreate",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "Stream",
        },
      },
      resthookSignatureKey: {
        serializedName: "resthookSignatureKey",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OrganizationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationUpdate",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "Stream",
        },
      },
      resthookSignatureKey: {
        serializedName: "resthookSignatureKey",
        nullable: true,
        type: {
          name: "String",
        },
      },
      validationToolConfig: {
        serializedName: "validationToolConfig",
        type: {
          name: "Composite",
          className: "ValidationToolConfig",
        },
      },
    },
  },
};

export const ResumeSearchConfigSearchToolTheme: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchConfigSearchToolTheme",
    modelProperties: {
      ...ThemeConfig.type.modelProperties,
    },
  },
};

export const JobDescriptionSearchConfigSearchToolTheme: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchConfigSearchToolTheme",
      modelProperties: {
        ...ThemeConfig.type.modelProperties,
      },
    },
  };

export const InvitationRespondedBy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvitationRespondedBy",
    modelProperties: {
      ...User.type.modelProperties,
    },
  },
};

export const PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths1UmoszuV3MappingDataSourcesGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths1O6IvdaV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...PathsWvcyp9V3MappingsGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
  };

export const PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema",
      modelProperties: {
        ...PaginatedResponse.type.modelProperties,
        ...Paths4T5Cm5V3IndexGetResponses200ContentApplicationJsonSchemaAllof1
          .type.modelProperties,
      },
    },
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
        type: {
          name: "Composite",
          className: "ResumeData",
        },
      },
    },
  },
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
        type: {
          name: "Composite",
          className: "InvoiceData",
        },
      },
    },
  },
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
        type: {
          name: "Composite",
          className: "JobDescriptionData",
        },
      },
    },
  },
};

export const ResumeRedact: coreClient.CompositeMapper = {
  serializedName: "resume-redact",
  type: {
    name: "Composite",
    className: "ResumeRedact",
    uberParent: "Document",
    polymorphicDiscriminator: Document.type.polymorphicDiscriminator,
    modelProperties: {
      ...Document.type.modelProperties,
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "ResumeRedactData",
        },
      },
    },
  },
};

export const LocationAnnotationUpdateParsed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationAnnotationUpdateParsed",
    modelProperties: {
      ...Location.type.modelProperties,
    },
  },
};

export const ResumeSearchDetailLocationValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailLocationValue",
    modelProperties: {
      ...Location.type.modelProperties,
      ...ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1
        .type.modelProperties,
    },
  },
};

export const JobDescriptionSearchDetailLocationValue: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchDetailLocationValue",
      modelProperties: {
        ...Location.type.modelProperties,
        ...Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1
          .type.modelProperties,
      },
    },
  };

export const ResumeSearchDetailEducationValueItem: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ResumeSearchDetailEducationValueItem",
      modelProperties: {
        ...Education.type.modelProperties,
        ...ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1
          .type.modelProperties,
      },
    },
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
          className: "JobTitleAnnotationParsed",
        },
      },
    },
  },
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
          name: "String",
        },
      },
    },
  },
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
          name: "Date",
        },
      },
    },
  },
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
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
          className: "ExpectedRemunerationAnnotationParsed",
        },
      },
    },
  },
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
          className: "Location",
        },
      },
    },
  },
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
          className: "YearsExperienceAnnotationParsed",
        },
      },
    },
  },
};

export const AnnotationWithValidationResults: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnnotationWithValidationResults",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      validationResults: {
        serializedName: "validationResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ValidationResult",
            },
          },
        },
      },
    },
  },
};

export const FloatAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FloatAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const RowAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RowAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "RowAnnotationParsed",
        },
      },
    },
  },
};

export const TableAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TableAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "TableAnnotationParsed",
        },
      },
    },
  },
};

export const RowBetaAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RowBetaAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "RowBetaAnnotationParsed",
        },
      },
    },
  },
};

export const TableBetaAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TableBetaAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "TableBetaAnnotationParsed",
        },
      },
    },
  },
};

export const CurrencyCodeAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CurrencyCodeAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "DataPointChoice",
        },
      },
    },
  },
};

export const DateRangeAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DateRangeAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "DateRangeAnnotationParsed",
        },
      },
    },
  },
};

export const PhoneNumberAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "PhoneNumberAnnotationParsed",
        },
      },
    },
  },
};

export const UrlAnnotation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UrlAnnotation",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Annotation.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "UrlAnnotationParsed",
        },
      },
    },
  },
};

export const JobTitleAnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobTitleAnnotationUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...AnnotationBase.type.modelProperties,
      ...JobTitleParsed.type.modelProperties,
    },
  },
};

export const TextAnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextAnnotationUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...AnnotationBase.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DateAnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DateAnnotationUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...AnnotationBase.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        nullable: true,
        type: {
          name: "Date",
        },
      },
    },
  },
};

export const LanguageAnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LanguageAnnotationUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...AnnotationBase.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SkillAnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkillAnnotationUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...AnnotationBase.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        readOnly: true,
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ExpectedRemunerationAnnotationUpdate: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExpectedRemunerationAnnotationUpdate",
      additionalProperties: { type: { name: "Object" } },
      modelProperties: {
        ...AnnotationBase.type.modelProperties,
        parsed: {
          serializedName: "parsed",
          type: {
            name: "Composite",
            className: "ExpectedRemunerationAnnotationUpdateParsed",
          },
        },
      },
    },
  };

export const LocationAnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationAnnotationUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...AnnotationBase.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "LocationAnnotationUpdateParsed",
        },
      },
    },
  },
};

export const YearsExperienceAnnotationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "YearsExperienceAnnotationUpdate",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...AnnotationBase.type.modelProperties,
      parsed: {
        serializedName: "parsed",
        type: {
          name: "Composite",
          className: "YearsExperienceAnnotationUpdateParsed",
        },
      },
    },
  },
};

export const ResumeSearchParametersCustomData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchParametersCustomData",
    modelProperties: {
      ...SearchParametersCustomData.type.modelProperties,
    },
  },
};

export const ResumeSearchDetailSkillsValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResumeSearchDetailSkillsValueItem",
    modelProperties: {
      ...ResumeSkill.type.modelProperties,
      ...ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1
        .type.modelProperties,
    },
  },
};

export const ResumeSearchDetailLanguagesValueItem: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ResumeSearchDetailLanguagesValueItem",
      modelProperties: {
        ...ResumeSkill.type.modelProperties,
        ...Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1
          .type.modelProperties,
      },
    },
  };

export const JobDescriptionSearchDetailOccupationGroupValue: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "JobDescriptionSearchDetailOccupationGroupValue",
      modelProperties: {
        ...OccupationGroupSearchResult.type.modelProperties,
      },
    },
  };

export let discriminators = {
  Document: Document,
  "Document.resume": Resume,
  "Document.invoice": Invoice,
  "Document.job-description": JobDescription,
  "Document.resume-redact": ResumeRedact,
};
