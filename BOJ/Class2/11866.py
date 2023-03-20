import sys

n, k = map(int, sys.stdin.readline().split())

d = [i+1 for i in range(n)]
result = []
current = 0

while d:
    current += k -1
    if current >= len(d):
        current %= len(d)
                
    result.append(str(d.pop(current)))

print("<", ", ".join(result), ">", sep="")