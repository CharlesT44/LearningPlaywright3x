class TestCase{
    constructor (name, priority, status){
        this.name = name;
        this.priority = priority;
        this.status = status;
}

display(){
    console.log(this.name + " -> " + this.priority + " -> " + this.status);
}

}

let LoginTest_ref = new TestCase("Login Test", "Pass", "P0");
let Signup_ref = new TestCase ("Signup Test" , "Fail", "P1");

LoginTest_ref.display();
Signup_ref.display();