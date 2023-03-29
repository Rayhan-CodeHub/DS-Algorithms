import time

def findRayhan(number):
    large_list = []

    for i in range(number):
        large_list.append("rayhan") # build large list

    start_time = time.perf_counter()
    
    zero = 0
    for y in large_list:
        if y == "rayhan":
            zero+=1
            print(f'{zero} found rayhan')

    end_time = time.perf_counter()
    print(f'find rayhan function took {end_time-start_time} milliseconds')

findRayhan(1000)

# as our input grow, our function became slower & slower & slower...
# so time.perf_counter() is not a good solution
# we use Big O notation, Big O notation count the steps of an Algorithm when it run
  