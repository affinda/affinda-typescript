[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / JobDescriptionSearchConfig

# Interface: JobDescriptionSearchConfig

## Properties

### actions?

> `optional` **actions**: [`SearchConfigAction`](SearchConfigAction.md)[]

A list of actions to show in the dropdown in the embedded search tool

***

### allowPdfDownload?

> `optional` **allowPdfDownload**: `boolean`

***

### customFieldsConfig?

> `optional` **customFieldsConfig**: [`CustomFieldConfig`](CustomFieldConfig.md)[]

***

### displayEducation?

> `optional` **displayEducation**: `boolean`

***

### displayJobTitle?

> `optional` **displayJobTitle**: `boolean`

***

### displayKeywords?

> `optional` **displayKeywords**: `boolean`

***

### displayLanguages?

> `optional` **displayLanguages**: `boolean`

***

### displayLocation?

> `optional` **displayLocation**: `boolean`

***

### displayManagementLevel?

> `optional` **displayManagementLevel**: `boolean`

***

### displayOccupationGroup?

> `optional` **displayOccupationGroup**: `boolean`

***

### displaySkills?

> `optional` **displaySkills**: `boolean`

***

### displayYearsExperience?

> `optional` **displayYearsExperience**: `boolean`

***

### distanceUnit?

> `optional` **distanceUnit**: `string`

The unit of distance to use for location based searches

***

### hideSidePanel?

> `optional` **hideSidePanel**: `boolean`

Hide the entire side panel.

***

### hideToolbar?

> `optional` **hideToolbar**: `boolean`

Hide the reset/import toolbar.

***

### indices?

> `optional` **indices**: `string`[]

List of index names.

***

### maxResults?

> `optional` **maxResults**: `number`

Maximum number of results that can be returned. Setting to "null" means no limitation.

***

### searchToolTheme?

> `optional` **searchToolTheme**: [`JobDescriptionSearchConfigSearchToolTheme`](JobDescriptionSearchConfigSearchToolTheme.md)

Customize the theme of the embeded search tool.

***

### showIndexDropdown?

> `optional` **showIndexDropdown**: `boolean`

Controls whether or not the index dropdown is displayed to the user

***

### userId?

> `readonly` `optional` **userId**: `number`

ID of the logged in user.
NOTE: This property will not be serialized. It can only be populated by the server.

***

### username?

> `readonly` `optional` **username**: `string`

Username of the logged in user.
NOTE: This property will not be serialized. It can only be populated by the server.

***

### weightEducation?

> `optional` **weightEducation**: `number`

***

### weightJobTitle?

> `optional` **weightJobTitle**: `number`

***

### weightKeywords?

> `optional` **weightKeywords**: `number`

***

### weightLanguages?

> `optional` **weightLanguages**: `number`

***

### weightLocation?

> `optional` **weightLocation**: `number`

***

### weightManagementLevel?

> `optional` **weightManagementLevel**: `number`

***

### weightOccupationGroup?

> `optional` **weightOccupationGroup**: `number`

***

### weightSkills?

> `optional` **weightSkills**: `number`

***

### weightYearsExperience?

> `optional` **weightYearsExperience**: `number`
