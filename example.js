const {AffindaAPI} = require("./dist");

class affindaToken {
    constructor(token) {
        this.token = token
    }

    getToken() {
        return this
        // Used as affindatoken.token, so just return class
    }
}

let t = new affindaToken("")
const client = new AffindaAPI(t, "");

function start() {
    return client.getResume("YCffVqbh");
    // return client.getAllResumes()

}

// Call start
(async () => {
    console.log('before start');

    let res = await start();
    console.log(JSON.stringify(res))

    console.log('after start');
})();
