const large = new Array(100).fill("rayhan") // build large array with 100 rayhan

function findRayhan(array){
    let start_time = performance.now()
    
    for (a=0; a<array.length; a++){
        if (array[a] == "rayhan"){
            console.log("find rayhan")
        }
    }
    
    let end_time = performance.now()
    
    console.log(`find rayhan function took time ${end_time - start_time} milliseconds`)
}

findRayhan(large)

// as our input grow, our function became slower & slower & slower...
// so performance.now() is not a good solution
// we use Big O notation, Big O notation count the steps of an Algorithm when it run
