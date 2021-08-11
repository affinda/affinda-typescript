import {AffindaAPI, AffindaCredential} from "./dist";

let credential = new AffindaCredential("8965c50e603a4c543346d7399bcc1b8fa62063c7")

const client = new AffindaAPI(credential, {})

client.getResume("YCffVqbh", {}).then(resume => console.log(JSON.stringify(resume)))

