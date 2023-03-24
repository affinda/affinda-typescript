[@affinda/affinda](../README.md) / [Exports](../modules.md) / JobDescriptionSearchConfig

# Interface: JobDescriptionSearchConfig

## Table of contents

### Properties

- [actions](JobDescriptionSearchConfig.md#actions)
- [allowPdfDownload](JobDescriptionSearchConfig.md#allowpdfdownload)
- [displayEducation](JobDescriptionSearchConfig.md#displayeducation)
- [displayJobTitle](JobDescriptionSearchConfig.md#displayjobtitle)
- [displayKeywords](JobDescriptionSearchConfig.md#displaykeywords)
- [displayLanguages](JobDescriptionSearchConfig.md#displaylanguages)
- [displayLocation](JobDescriptionSearchConfig.md#displaylocation)
- [displayManagementLevel](JobDescriptionSearchConfig.md#displaymanagementlevel)
- [displayOccupationGroup](JobDescriptionSearchConfig.md#displayoccupationgroup)
- [displaySkills](JobDescriptionSearchConfig.md#displayskills)
- [displayYearsExperience](JobDescriptionSearchConfig.md#displayyearsexperience)
- [hideToolbar](JobDescriptionSearchConfig.md#hidetoolbar)
- [indices](JobDescriptionSearchConfig.md#indices)
- [maxResults](JobDescriptionSearchConfig.md#maxresults)
- [searchToolTheme](JobDescriptionSearchConfig.md#searchtooltheme)
- [showIndexDropdown](JobDescriptionSearchConfig.md#showindexdropdown)
- [userId](JobDescriptionSearchConfig.md#userid)
- [username](JobDescriptionSearchConfig.md#username)
- [weightEducation](JobDescriptionSearchConfig.md#weighteducation)
- [weightJobTitle](JobDescriptionSearchConfig.md#weightjobtitle)
- [weightKeywords](JobDescriptionSearchConfig.md#weightkeywords)
- [weightLanguages](JobDescriptionSearchConfig.md#weightlanguages)
- [weightLocation](JobDescriptionSearchConfig.md#weightlocation)
- [weightManagementLevel](JobDescriptionSearchConfig.md#weightmanagementlevel)
- [weightOccupationGroup](JobDescriptionSearchConfig.md#weightoccupationgroup)
- [weightSkills](JobDescriptionSearchConfig.md#weightskills)
- [weightYearsExperience](JobDescriptionSearchConfig.md#weightyearsexperience)

## Properties

### actions

• `Optional` **actions**: [`JobDescriptionSearchConfigActionsItem`](JobDescriptionSearchConfigActionsItem.md)[]

A list of actions to show in the dropdown in the embedded search tool

___

### allowPdfDownload

• `Optional` **allowPdfDownload**: `boolean`

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

• `Optional` **searchToolTheme**: `Object`

Customize the theme of the embeded search tool.

#### Index signature

▪ [propertyName: `string`]: `any`

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
