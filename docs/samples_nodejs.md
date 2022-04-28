

Resume Parser
-------------

### getAllResumes - Get list of all resumes

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

### createResume - Upload a resume for parsing

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("path_to_file.pdf");

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

### getResume - Get parse results for a specific resume

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

### deleteResume - Delete a resume

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

Resume Redactor
---------------

### getAllRedactedResumes - Get list of all redacted resumes

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

### createRedactedResume - Upload a resume for redacting

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("path_to_file.pdf");

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

### getRedactedResume - Get redaction results for a specific resume

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

### deleteRedactedResume - Delete a redacted resume

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

Resume Reformatter
------------------

### getAllResumeFormats - Get list of all resume formats

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

### getAllReformattedResumes - Get list of all reformatted resumes

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

### createReformattedResume - Upload a resume for reformatting

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("path_to_file.pdf");

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

### getReformattedResume - Get reformatting results for a specific resume

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

### deleteReformattedResume - Delete a reformatted resume

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

Resume Search
-------------

Job Descriptions
----------------

### getAllJobDescriptions - Get list of all job descriptions

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");


const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)


client.getAllJobDescriptions().then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### createJobDescription - Upload a job description for parsing

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("path_to_file.pdf");

client.createJobDescription({file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

// Can also use a URL:

client.createJobDescription({url: "https://api.affinda.com/static/sample_job_descriptions/example.pdf"}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### getJobDescription - Get job description results for a specific job description file

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.getJobDescription("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### deleteJobDescription - Delete a job description

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.deleteJobDescription("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

Invoice Parser
--------------

### getAllInvoices - Get list of all invoices

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");


const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)


client.getAllInvoices().then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### createInvoice - Upload an invoice for parsing

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream("path_to_file.pdf");

client.createInvoice({file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

// Can also use a URL:

client.createInvoice({url: "https://api.affinda.com/static/sample_invoices/example.pdf"}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### getInvoice - Get parse results for a specific invoice

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.getInvoice("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```

### deleteInvoice - Delete an invoice

```javascript
const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("REPLACE_TOKEN")
const client = new AffindaAPI(credential)

client.deleteInvoice("REPLACE_IDENTIFIER").then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
```