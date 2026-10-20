let p = Promise.resolve(5);

p.then(function(val){
    return val * 100;
}).then (function(val){
    console.log ("Result :", val);

})