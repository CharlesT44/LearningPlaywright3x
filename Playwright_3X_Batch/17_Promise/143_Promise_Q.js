Promise.resolve(1)
  .then(function (val){
console.log(val);
return val + 1;

})

.then(function (val){
console.log(val)
return val + 1;

})
.then(function (val){
console.log(val);

})