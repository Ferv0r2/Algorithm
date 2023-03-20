from itertools import combinations

n, m = map(int, input().split())
cards = list(map(int, input().split()))
result = 0

for card in combinations(cards, 3):
    tmp = sum(card)
    if result < tmp <= m:
        result = tmp

print(result)