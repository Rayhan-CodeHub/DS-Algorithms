const theArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

function printFirstElementThenMiddleElementThenPrintHi100Times(array){
    console.log(array[0]) // O(1)

    const middle_of_array = Math.floor(array.length / 2)
    let index = 0

    while (index < middle_of_array){ // O(n/2)
        console.log(index)
        index++;
    }

    for(let i=0; i<100; i++){ // O(100)
        console.log(`${i} Hi`)
    }
}

// O(1) + O(n/2) + O(100)
// O(1 + n/2 + 100)
// O(n/2 + 101)
// O(n/2 + 1)
// O(n + 1)
// O(n) - when input grows bigger & bigger (ex: million times) then we can drop 1 because 1 is useless that time 

printFirstElementThenMiddleElementThenPrintHi100Times(theArray) // O(n)


// another example :
// O(a + 50000000)
// O(a) - Drop the Constant
