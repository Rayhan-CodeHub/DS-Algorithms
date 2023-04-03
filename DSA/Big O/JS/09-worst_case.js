const apple_first = ["apple", "mango", "banana", "jackfruit", "guava", "Lichi"]
const apple_middle = ["mango", "banana", "jackfruit", "apple", "guava", "Lichi"]
const apple_last = ["mango", "banana", "jackfruit", "guava", "Lichi", "apple"]

function worst_case(array){
    for (let i=0; i<array.length; i++){
        if (array[i] == "apple"){
            console.log("found apple")
            break; // otherwise loop run 6(array length) times
        }
    }
}

worst_case(apple_first)
// "apple" element found in first place
// loop run 1 time, O(1)
// it is not worst case

worst_case(apple_middle)
// "apple" element found in fourth place
// loop run 4 times, O(4)
// it is not worst case

worst_case(apple_last)
// "apple" element found in last place
// loop run 6 times(array length is 6), O(6)
// break statement don't utilize because it is worst case
// Big O only cares about Worst Case
// this is Big O(n)
