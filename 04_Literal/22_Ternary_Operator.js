let statuscode =404;
let category = 
    statuscode < 300 ? "Success" :
    statuscode < 400 ? "Redirect":
    statuscode < 500 ? "Client Error" : "Server Error";
    console.log (`Status ${statuscode}: ${category}`);