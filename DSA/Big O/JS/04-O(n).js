const lapArray = new Array(100).fill("dell")

function findLaptop(array){
    for (i=0; i<array.length; i++){
        if (array[i] == "dell"){
            console.log("found dell")
        }
    }
}

findLaptop(lapArray) // O(n) - Linear time

// O(n) because Operation is depends on Input
// O(n) means n times operation
