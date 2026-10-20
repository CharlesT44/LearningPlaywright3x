let attempt = 0;
function flakyAPI(){
    attempt++;
    if(attempt <= 3){
        return Promise.resolve("Attempt " + attempt + ": success!");

    }
        return Promise.reject("Attempt " + attempt + ": Failed");

}

async function retryTesting(maxRetries) {
    for (let i=1; i<=maxRetries; i++){
        try{
            let result = await flakyAPI();
            console.log ('Pass Promise!, i Will exit also', result);

        }catch (error) {
            console.log ('Fail Promise', error);
        }
    }
} retryTesting(5);