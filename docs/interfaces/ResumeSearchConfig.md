[@affinda/affinda](../README.md) / [Exports](../modules.md) / ResumeSearchConfig

# Interface: ResumeSearchConfig

## Table of contents

### Properties

- [actions](ResumeSearchConfig.md#actions)
- [allowPdfDownload](ResumeSearchConfig.md#allowpdfdownload)
- [customFieldsConfig](ResumeSearchConfig.md#customfieldsconfig)
- [displayEducation](ResumeSearchConfig.md#displayeducation)
- [displayJobTitle](ResumeSearchConfig.md#displayjobtitle)
- [displayKeywords](ResumeSearchConfig.md#displaykeywords)
- [displayLanguages](ResumeSearchConfig.md#displaylanguages)
- [displayLocation](ResumeSearchConfig.md#displaylocation)
- [displayManagementLevel](ResumeSearchConfig.md#displaymanagementlevel)
- [displayOccupationGroup](ResumeSearchConfig.md#displayoccupationgroup)
- [displaySkills](ResumeSearchConfig.md#displayskills)
- [displayYearsExperience](ResumeSearchConfig.md#displayyearsexperience)
- [distanceUnit](ResumeSearchConfig.md#distanceunit)
- [hideSidePanel](ResumeSearchConfig.md#hidesidepanel)
- [hideToolbar](ResumeSearchConfig.md#hidetoolbar)
- [indices](ResumeSearchConfig.md#indices)
- [maxResults](ResumeSearchConfig.md#maxresults)
- [searchToolTheme](ResumeSearchConfig.md#searchtooltheme)
- [showIndexDropdown](ResumeSearchConfig.md#showindexdropdown)
- [userId](ResumeSearchConfig.md#userid)
- [username](ResumeSearchConfig.md#username)
- [weightEducation](ResumeSearchConfig.md#weighteducation)
- [weightJobTitle](ResumeSearchConfig.md#weightjobtitle)
- [weightKeywords](ResumeSearchConfig.md#weightkeywords)
- [weightLanguages](ResumeSearchConfig.md#weightlanguages)
- [weightLocation](ResumeSearchConfig.md#weightlocation)
- [weightManagementLevel](ResumeSearchConfig.md#weightmanagementlevel)
- [weightOccupationGroup](ResumeSearchConfig.md#weightoccupationgroup)
- [weightSkills](ResumeSearchConfig.md#weightskills)
- [weightYearsExperience](ResumeSearchConfig.md#weightyearsexperience)

## Properties

### actions

• `Optional` **actions**: [`SearchConfigAction`](SearchConfigAction.md)[]

A list of actions to show in the dropdown in the embedded search tool

___

### allowPdfDownload

• `Optional` **allowPdfDownload**: `boolean`

___

### customFieldsConfig

• `Optional` **customFieldsConfig**: [`CustomFieldConfig`](CustomFieldConfig.md)[]

___

### displayEducation

• `Optional` **displayEducation**: `boolean`

___

### displayJobTitle

• `Optional` **displayJobTitle**: `boolean`

___

### displayKeywords

• `Optional` **displayKeywords**: `boolean`

___

### displayLanguages

• `Optional` **displayLanguages**: `boolean`

___

### displayLocation

• `Optional` **displayLocation**: `boolean`

___

### displayManagementLevel

• `Optional` **displayManagementLevel**: `boolean`

___

### displayOccupationGroup

• `Optional` **displayOccupationGroup**: `boolean`

___

### displaySkills

• `Optional` **displaySkills**: `boolean`

___

### displayYearsExperience

• `Optional` **displayYearsExperience**: `boolean`

___

### distanceUnit

• `Optional` **distanceUnit**: `string`

The unit of distance to use for location based searches

___

### hideSidePanel

• `Optional` **hideSidePanel**: `boolean`

Hide the entire side panel.

___

### hideToolbar

• `Optional` **hideToolbar**: `boolean`

Hide the reset/import toolbar.

___

### indices

• `Optional` **indices**: `string`[]

List of index names.

___

### maxResults

• `Optional` **maxResults**: `number`

Maximum number of results that can be returned. Setting to "null" means no limitation.

___

### searchToolTheme

• `Optional` **searchToolTheme**: [`ThemeConfig`](ThemeConfig.md)

Customize the theme of the embeded search tool.

___

### showIndexDropdown

• `Optional` **showIndexDropdown**: `boolean`

Controls whether or not the index dropdown is displayed to the user

___

### userId

• `Optional` `Readonly` **userId**: `number`

ID of the logged in user.
NOTE: This property will not be serialized. It can only be populated by the server.

___

### username

• `Optional` `Readonly` **username**: `string`

Username of the logged in user.
NOTE: This property will not be serialized. It can only be populated by the server.

___

### weightEducation

• `Optional` **weightEducation**: `number`

___

### weightJobTitle

• `Optional` **weightJobTitle**: `number`

___

### weightKeywords

• `Optional` **weightKeywords**: `number`

___

### weightLanguages

• `Optional` **weightLanguages**: `number`

___

### weightLocation

• `Optional` **weightLocation**: `number`

___

### weightManagementLevel

• `Optional` **weightManagementLevel**: `number`

___

### weightOccupationGroup

• `Optional` **weightOccupationGroup**: `number`

___

### weightSkills

• `Optional` **weightSkills**: `number`

___

### weightYearsExperience

• `Optional` **weightYearsExperience**: `number`
