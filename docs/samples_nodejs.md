

Document API - Workspace
------------------------

Document API - Collection
-------------------------

Document API - Document
-----------------------

Document API - Extractor
------------------------

Document API - Data Point
-------------------------

Document API - Annotation
-------------------------

Document API - Tag
------------------

Organization API - Organization
-------------------------------

Organization API - Membership
-----------------------------

Organization API - Invitation
-----------------------------

Webhook API
-----------

Search & Match API - Searching
------------------------------

### getResumeSearchMatch - Match a single resume and job description

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda")

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

const resumeIdentifier = "REPLACE_RESUME_IDENTIFIER"
const jobDescriptionIdentifier = "REPLACE_JOB_DESCRIPTION_IDENTIFIER"
const indexName = "REPLACE_INDEX_NAME" // Optional

client.getResumeSearchMatch(resumeIdentifier, jobDescriptionIdentifier, { indexName }).then((result) => {
    console.log("Returned data:")
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:")
    console.error(err)
});
```

Search & Match API - Embedding
------------------------------

### getResumeSearchConfig - Get the config for the logged in user's embeddable resume search tool

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda")

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.getResumeSearchConfig().then((result) => {
    console.log("Returned data:")
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:")
    console.error(err)
});
```

Search & Match API - Indexing
-----------------------------