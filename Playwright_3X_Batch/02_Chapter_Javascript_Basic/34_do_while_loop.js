let retry = 0;
do {
    console.log ("Retrying to connect to server");
        console.log ("Retry.............", retry);
    retry++;

    } while (retry < 3);