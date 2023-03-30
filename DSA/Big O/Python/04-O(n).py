list_1 = [1,2,3,4]
list_2 = [1,2,3,4,5]
list_3 = [1,2,3,4,5,6]

def my_function(l_list):
    for i in l_list:
        print(i)

my_function(list_1) # O(4)
my_function(list_2) # O(5)
my_function(list_3) # O(6)
# final ans is: it is O(n) function

# O(n) - Linear Time - Fair
# in O(n), input element == operation
# we can write O(n) or O(x) or O(fish) or O(anything)
# O(n) here O means 'Big O' & n means 'number of input'
# O(n) means n times operation
