class ICIC {
    #balance;

    constructor (name, balance) {
        this.#balance = balance;
        this.name = name;
     }
            getbalance() {

                return this.#balance;
            }
            setbalance(balance, isCashier) {
                if (isCashier) {
                    this.#balance = balance;
                } else {
                    console.log("Not allowed")
                }
            }
}

let Charles = new ICIC ("Charles", 2000);
console.log (Charles.getbalance());
Charles.setbalance(100000, false);
console.log(Charles.getbalance());