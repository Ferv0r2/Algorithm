import sys

inputs = sys.stdin.readlines()
cards = map(int, inputs[1].split())
numbers = map(int, inputs[3].split())

mapping = {}
for i in cards: 
    if i in mapping:
        mapping[i] += 1
    else:
        mapping[i] = 1
    
for i in numbers:
    if i in mapping:
        print(mapping[i], end=" ")
    else:
        print("0", end=" ")