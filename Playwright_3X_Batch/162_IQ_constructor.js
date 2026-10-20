class apiClient {
    constructor (baseURL) {
        this.baseURL = baseURL;
    }
    get(path) {
        return this.baseURL + path;
    }

}

let staging = new apiClient ("https://staging.api.com");
let pro = new apiClient ("http://prod.api.com");
console.log (staging.get ("users"));
console.log (pro.get ("/produsers"));