import {Document, Invoice, InvoiceData, JobDescription, JobDescriptionData, Resume, ResumeData} from "./models";

export function asInvoice(doc: Document): Invoice {
    if (doc.meta.collection?.extractor?.identifier != 'invoice') {
        throw new Error('Document does not appear to be an invoice.');
    }
    return {
        clientVerifiedDt: doc.meta.confirmedDt?.toISOString() || null,
        meta: doc.meta,
        data: doc.data as InvoiceData,
        error: doc.error ?? {},
    };
}

export function asJobDescription(doc: Document): JobDescription {
    if (doc.meta.collection?.extractor?.identifier != 'job-description') {
        throw new Error('Document does not appear to be an job description.');
    }
    return {
        meta: doc.meta,
        data: doc.data as JobDescriptionData,
        error: doc.error ?? {},
    };
}

export function asResume(doc: Document): Resume {
    if (doc.meta.collection?.extractor?.identifier != 'resume') {
        throw new Error('Document does not appear to be an resume.');
    }
    return {
        meta: doc.meta,
        data: doc.data as ResumeData,
        error: doc.error ?? {},
    };
}
