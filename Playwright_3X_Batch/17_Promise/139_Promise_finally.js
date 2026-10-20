let apiCall = new Promise (function(resolve, reject){
    reject({Error : 500})
})


apiCall.then(function(data){
console.log(data);
}) .catch(function(error){
    console.log(error);

}).finally(function(){
    console.log("I will be executed any how ! !");
})
