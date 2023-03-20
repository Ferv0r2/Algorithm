from sys import stdin

input = stdin.readline
n = int(input())

stack = []
result = []
flag = 0
current = 1

for i in range(n):
    num = int(input())
    while current <= num:
        stack.append(current)
        result.append("+")
        current += 1
        
    if stack[-1] == num:
        stack.pop()
        result.append("-")
        
    else:
        print("NO")
        flag = 1
        break

if flag == 0:
    for i in result:
        print(i)