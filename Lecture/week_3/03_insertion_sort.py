input = [4, 6, 2, 9, 1]

# 1회전 [2, 4, 6, 9, 1]
# 2회전 [2, 4, 6, 9, 1]
# 3회전 [1, 2, 4, 6, 9]

# 최선의 경우 O(n) 시간 복잡도
# 최악의 경우 O(n^2)
def insertion_sort(array):
    n = len(array)
    for i in range(1, n):
        for j in range(i):
            if array[i - j- 1] > array[i - j]:
                array[i - j - 1], array[i - j] = array[i - j], array[i - j - 1] # 위치 바꾸기
            else:
                break
    return


insertion_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!