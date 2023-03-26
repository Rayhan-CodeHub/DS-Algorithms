# good code requirements :
# Readability
# Scalability (measure by Big O)

# Big O Notation - Asymptotic Analysis

# find target name
name_list = ["rafin", "dollar", "rayhan", "redoy"]

for name in name_list:
    if name == "dollar":
        print(f"{name_list.index(name)} found {name_list[name_list.index(name)]}")
        print("{} found {}".format(name_list.index(name), name_list[name_list.index(name)]))
