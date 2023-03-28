phone_array = ["samsung", "nokia", "poco", "iphone"]

function findPoco(array){
    for (let i=0; i<phone_array.length; i++){
        if (phone_array[i] === "poco"){
            console.log(`(${i}) found poco`)
        }
    }
}

findPoco(phone_array)