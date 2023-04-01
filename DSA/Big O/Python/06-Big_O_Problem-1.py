def funChallenge(input):
    x = 5 # O(1)
    y = x+10 # O(1)
    z = x*2 # O(1)

    for i in range(10): # O(n)
        str(y) # O(n)
        str(z) # O(n)
        p = "This is new string" # O(n)
        x+=1 # O(n)

    return "hello world" # O(1)

# O(1)+O(1)+O(1)+O(n)+O(n)+O(n)+O(n)+O(n)+O(1)
# 1+1+1+n+n+n+n+n+1 = 4+5n = Big O(4+5n) = O(n)

funChallenge(10) # O(n)
