let scores = [
    [85, 90, 78],
    [92, 88, 95],
    [76, 84, 89]
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b));
console.log(rowSums);

