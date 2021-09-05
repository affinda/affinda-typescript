

Parser
------

### Gets list of all resumes

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");


const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)


client.getAllResumes().then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Uploads a resume for parsing

```javascript
const {AffindaCredential, Aresumes_postffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("PATH_TO_RESUME.pdf");

client.createResume({file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

// Can also use a URL:

client.createResume({url: "https://api.affinda.com/static/sample_resumes/example.pdf"}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Gets parse results for a specific resume

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.getResume("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Deletes a resume

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.deleteResume("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

Redactor
--------

### Gets list of all redacted resumes

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");


const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)


client.getAllRedactedResumes().then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Uploads a resume for redacting

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("PATH_TO_RESUME.pdf");

client.createRedactedResume({file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

// Can also use a URL:

client.createRedactedResume({url: "https://api.affinda.com/static/sample_resumes/example.pdf"}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Gets redaction results for a specific resume

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.getRedactedResume("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Deletes a redacted resume

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.deleteRedactedResume("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

Reformatter
-----------

### Gets list of all resume formats

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");


const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)


client.getAllResumeFormats().then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Gets list of all reformatted resumes

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");


const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)


client.getAllReformattedResumes().then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Uploads a resume for reformatting

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("PATH_TO_RESUME.pdf");

client.createReformattedResume("Affinda", {file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

// Can also use a URL:

client.createReformattedResume("Affinda", {
        url: "https://api.affinda.com/static/sample_resumes/example.pdf"
    }
).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
})
```

### Gets reformatting results for a specific resume

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.getReformattedResume("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### Deletes a reformatted resume

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.deleteReformattedResume("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```