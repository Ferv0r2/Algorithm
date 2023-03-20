input = [4, 6, 2, 9, 1]

# 1회전 [1, 6, 2, 9, 4]
# 2회전 [1, 2, 6, 9, 4]
# 3회전 [1, 2, 4, 9, 6]
# 4회전 [1, 2, 4, 6, 9]


# O(n^2) -> 반복문 2번
def selection_sort(array):
    n = len(array)
    for i in range(n - 1):
        min_index = i
        for j in range(n - i):
            if array[i + j] < array[min_index]:
                min_index = i + j
 
        array[i], array[min_index] = array[min_index], array[i] # 위치 바꾸기
    return


selection_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!