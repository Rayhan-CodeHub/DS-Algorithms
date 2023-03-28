const my_array = ["one", "two", 'three', 'four', "five", 'six', "seven", "eight", "nine", "ten"]

function find_number(m_array){
    let start_time = performance.now();

    let x;
    for (x=0; x<m_array.length; x+=1){
        if (my_array[x] === "five"){
            console.log(`found ${my_array[x]}`)
        }
    }

    let end_time = performance.now();
    console.log(`find_number took time : ${end_time-start_time} milliseconds`)
}

find_number(my_array)

/* In JavaScript performance.now() method can be used to check the performance of your code.
You can check the execution time of your code using this method. */

// issue : can't run in my pc (may be node version is low)
