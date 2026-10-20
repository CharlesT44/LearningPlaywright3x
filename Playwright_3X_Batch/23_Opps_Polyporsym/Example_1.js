class BUG {
    constructor (title, severity) {
        this.title = title;
        this.severity = severity;
    }
        display() {
            console.log (" [" + this.severity + "] " + this.title);
        }
}

let b1 = new BUG ("Login carsh", "Critical");
let b2 = new BUG ("Typo in footer", "Low");

b1.display();
b2.display();