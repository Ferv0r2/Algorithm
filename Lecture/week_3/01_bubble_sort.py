input = [4, 6, 2, 9, 1]

# 1회전 [4, 2, 6, 1, 9]
# 2회전 [2, 4, 1, 6, 9]
# 3회전 [2, 1, 4, 6, 9]
# 4회전 [1, 2, 4, 6, 9]


# O(n^2) -> 반복문 2번
def bubble_sort(array):
    n = len(array)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j] # 위치 바꾸기
    return


bubble_sort(input)
print(input)  # [1, 2, 4, 6, 9] 가 되어야 합니다!