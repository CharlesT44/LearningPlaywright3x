let fastserver = new Promise(function (resolve) {
    setTimeout (function() {
        resolve ("Fast 100ms")
    }), 100
});

let slowserver = new Promise(function (resolve){
    setTimeout (function(){
        resolve("Fast 500ms")
    }), 500
});

Promise.race([fastserver, slowserver]).then(function (winner) {
    console.log("Winner :" , winner);
})