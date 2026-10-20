let apiCall = new Promise(function (resolve, reject){
resolve ({status : 200, Body : "User data"});
})
        apiCall.then(function(response){
            console.log(response);
            console.log(response.status);
            console.log(response.Body);

})