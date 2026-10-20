Promise.resolve("start")
    .then(function(val){
        console.log(val);
        throw new Error("Broke code in step 2");

    })

    .then(function(){
        console.log("Code is run successfully");
    })

    .catch(function (err){
        console.log("Caught :", err.message);
    })