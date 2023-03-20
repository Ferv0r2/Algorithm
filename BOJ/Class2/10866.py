from collections import deque
from sys import stdin

d = deque()
n = int(stdin.readline())

for i in range(n):
    command = stdin.readline().split()
    
    if command[0] == "push_front":
        d.appendleft(command[1])

    if command[0] == "push_back":
        d.append(command[1])

    if command[0] == "pop_front":
        print(d.popleft() if d else -1)

    if command[0] == "pop_back":
        print(d.pop() if d else -1)

    if command[0] == "size":
        print(len(d))

    if command[0] == "empty":
        print(0 if d else 1)

    if command[0] == "front":
        print(d[0] if d else -1)

    if command[0] == "back":
        print(d[len(d)-1] if d else -1)