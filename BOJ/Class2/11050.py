import sys

n, k = map(int, sys.stdin.readline().split())
memory = [0] * (n+1)

def factorial(x):    
    if memory[x] != 0:
        return memory[x]
    if x < 2:
        return 1
    
    memory[x] = x * factorial(x-1)
    return memory[x]

print(factorial(n) // (factorial(n-k) * factorial(k)))