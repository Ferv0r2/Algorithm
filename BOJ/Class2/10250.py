t = int(input())

for _ in range(t):
    h, w, n = map(int, input().split())
    floor = h if n % h == 0 else n % h
    room = n // h + 1 if int(n/h) == n//h and floor != h  else n // h
        
    print('{0}{1:02d}'.format(floor, room))