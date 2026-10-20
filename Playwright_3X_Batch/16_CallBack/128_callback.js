function placeorder(item, callback) {
    console.log("Order Placed....");
        callback();
    }
    //define
    function print() {
        console.log("Normal Fn - Done with the order");
    }
    // first Way
    placeorder("Burger" , print);

    // second Way Anoym
    placeorder ("Burget", function() {
    console.log("Order is ready Pick it up"); 
})

// Third Way Arrow Function
placeorder("Burger",() => {
    console.log("Arrow fn, I am also function without name!")
})
