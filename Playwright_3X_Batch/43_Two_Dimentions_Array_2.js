let testmatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];
for(let i=0; i < testmatrix.length; i++) {

    for(let j=0; j < testmatrix [i].length; j++) {
        process.stdout.write(testmatrix[i][j] +" ")

        } console.log("");
    }

