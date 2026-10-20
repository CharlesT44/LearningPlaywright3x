//# means private field
// and public field menas there is no #

class Credentials {
    #apikey;
    user

    constructor (key, user) {
        this.#apikey = key; //private
        this.user = user; //public
    }

    CharlesgetAuthHeader() {
        return "successfully" + this.#apikey;
    }
}

let cred = new Credentials ("Password1234", "Charlee");

console.log (cred.key);