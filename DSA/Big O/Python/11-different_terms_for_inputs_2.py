first_boxes = ['a', 'b', 'c', 'd', 'e', 'f']
second_boxes = ['g', 'h', 'i', 'j', 'k', 'l']

def compressBoxesTwice(boxes1, boxes2):
    for i in boxes1: # O(n)
        for j in boxes2: # O(n)
            print(i, j)

# nested for loop
# O(n * n)
# O(n^2)
# This is Quadratic Time
# O(n^2) is horrible

compressBoxesTwice(first_boxes, second_boxes) # O(n^2)

# O(n^2)
# O(2^2) = input 2, operations 4
# O(3^2) = input 3, operations 9
# O(4^2) = input 4, operations 16
