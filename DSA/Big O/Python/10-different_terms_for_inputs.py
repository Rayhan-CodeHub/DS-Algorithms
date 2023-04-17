first_boxes = ['a', 'b', 'c', 'd', 'e']
second_boxes = ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']

def compressBoxesTwice(boxes_1, boxes_2):
    for box1 in boxes_1: # O(n)
        print(box1)

    for box2 in boxes_2: # O(m)
        print(box2)

# O(n) + O(m)
# because different inputs use in different for loop
# boxes_1 & boxes_2 are not same, they are different, so each for loop runs different amount of time
# O(n + m)

compressBoxesTwice(first_boxes, second_boxes) # O(n + m)
