let nums = [10, 25, .30, 45];
let result = nums.find (x => x > 20);
console.log(result);

//findindex
let index = nums.findIndex(n => n > 20);
console.log(index);

nums.findLast(n => n > 20); //45
nums.findLastIndex (n => n > 20); //3