const my_array = ['a', 'b', 'c', 'd']
console.log("before push",my_array)
my_array.push('e')
console.log("after push", my_array)

// what is the time complexity of this code ?
// push() method always apply end of the array

// before push
// ['a', 'b', 'c', 'd']
// [ 0    1    2    3 ]

// after push
// ['a', 'b', 'c', 'd', 'e]
// [ 0    1    2    3    4]

// always push to the last position of the array
// O(1) operation
