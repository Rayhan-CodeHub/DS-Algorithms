apple_first = ['apple', 'mango', 'jackfruit', 'banana', 'lichi', 'guava']
apple_middle = ['mango', 'jackfruit', 'banana', 'apple', 'lichi', 'guava']
apple_last = ['mango', 'jackfruit', 'banana', 'lichi', 'guava', 'apple']

def findApple(myList):
    for i in myList:
        if i == 'apple':    
            print("found apple")
            break

findApple(apple_first) # O(1)

findApple(apple_middle) # O(4)

findApple(apple_last) # O(6) - last element - loop run 6 times - worst case - O(n)
# Big O only cares about Worst Case
