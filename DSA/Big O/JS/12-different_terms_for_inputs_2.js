first_boxes = ['a', 'b', 'c', 'd', 'e', 'f']
second_boxes = ['g', 'h', 'i', 'j', 'k', 'l']

function compressBoxesTwice(boxes1, boxes2){
    boxes1.forEach(function(box1){  // O(n)
        boxes2.forEach(function(box2){ // O(n)
            console.log(box1, box2)
        })
    })
}

// nested for loop
// O(n * n)
// O(n^2)
// This is Quadratic Time
// O(n^2) is horrible

compressBoxesTwice(first_boxes, second_boxes) // O(n^2)

// O(n^2)
// O(2^2) = input 2, operations 4
// O(3^2) = input 3, operations 9
// O(4^2) = input 4, operations 16
