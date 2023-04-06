my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def printFirstElementThenMiddleElementThenPrintHi100Times(anyList):
    # step 1 : print 1st element from list
    # step 2 : then print middle element from list
    # step 3 : finally print 'Hi' 100 times

    print(anyList[0]) # O(1)

    middle_element = (len(anyList) - 1) // 2
    index = 0

    while index < middle_element: # O(n/2)
        print(my_list[index])
        index+=1

    for i in range(100): # O(100)
        print(f"{i} Hi")

# O(1) + O(n/2) + O(100)
# O(1 + n/2 + 100)
# O(n/2 + 101)
# O(n/2 + 1)
# O(n/2)
# O(n)

printFirstElementThenMiddleElementThenPrintHi100Times(my_list) # O(n)


# another example :
# O(a + 5000000)
# O(a)
