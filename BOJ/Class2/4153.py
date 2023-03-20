while True:
    numbers = list(map(int, input().split()))
    numbers.sort()
    if sum(numbers) == 0:
        break
    print("right" if numbers[0]**2 + numbers[1] ** 2 == numbers[2] ** 2 else "wrong")