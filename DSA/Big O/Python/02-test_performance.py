import time
# The time module in Python provides functions for handling time-related tasks
# The time-related tasks includes :

# reading the current time
# formatting time
# sleeping for a specified number of seconds and so on.

my_list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

def findNumber(m_list):
    start_time = time.perf_counter()

    for m_list in my_list:
        if m_list == "ten":
            print(f"{my_list.index(m_list)} found {m_list}")

    end_time = time.perf_counter()

    print(f'findNumber function took time : {end_time-start_time} milliseconds')

findNumber(my_list)
