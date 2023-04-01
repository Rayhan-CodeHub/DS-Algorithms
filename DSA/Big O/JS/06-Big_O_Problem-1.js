function funChallenge(input){
    let a = 15; // O(1) constant
    a = 40+5; // O(1) constant

    for (let i=0; i<input.length; i++){ // O(n) linear
        anotherFunction(); // O(n) linear
        let newVariable = true; // O(n) linear
        a++; // O(n) linear
    }
    return a; // O(1) constant
}

// O(1)+O(1)+O(n)+O(n)+O(n)+O(n)+O(1)
// 1+1+n+n+n+n+1 = 3+4n = Big O(3+4n) = O(n) linear time

funChallenge() // O(n)
