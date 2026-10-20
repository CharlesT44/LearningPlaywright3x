class TestRunner {
    static TotalTest = 0
    static passCount = 0
        constructor (name, passed){
            this.name = name;
            TestRunner.TotalTest++;
            if(passed) {
                TestRunner.passCount++;
            }

    }
}

let t1 = new TestRunner ("LoginTest", true);
let t2 = new TestRunner ("signTest", false);
let t3 = new TestRunner ("dashboard", true);
let t4 = new TestRunner ("SupportTest", true);

console.log (TestRunner.TotalTest);
console.log (TestRunner.passCount);
console.log (t1.name);
console.log (t2.name);
console.log (t3.name);
console.log (t4.name);
