first_boxes = ['a', 'b', 'c', 'd', 'e']
second_boxes = ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']

function compressBoxesTwice(boxes){

    boxes.forEach(function(boxes1){ // O(n)
        console.log(boxes1)
    })

    boxes.forEach(function(boxes2){ // O(n)
        console.log(boxes2)
    })
}

// O(n) + O(n)
// O(n+n)
// O(2n)
// O(n)

compressBoxesTwice(first_boxes) // O(n)


function compressBoxesTwice_2(boxes1, boxes2){

    boxes1.forEach(function(boxes){ // O(n)
        console.log(boxes)
    })

    boxes2.forEach(function(boxes){ // O(m)
        console.log(boxes)
    })
}

// O(n) + O(m)
// because different inputs use in different forEach function
// boxes1 & boxes2 are not same, they are different, so each forEach function runs different amount of times
// O(n + m)

compressBoxesTwice_2(first_boxes, second_boxes) // O(n + m)
