array = [5, 3, 2, 1, 6, 8, 7, 4]

# [5] [3] -> [3, 5]
# [2] [1] -> [1, 2]
# [6] [8] -> [6, 8]
# [7] [4] -> [4, 7] 
# -> [1, 2, 3, 5] [4, 6, 7, 8] 길이 n/2, 길이 n/4 2개를 비교 및 병합 -> O(n)
# -> [1, 2, 3, 4, 5, 6, 7, 8] 길이 n, 길이 n/2 2개를 비교 및 병합 -> O(n)
# -> n/2 * k -> k = log n, 각각의 단계는 O(n) 시간 복잡도
# 즉, O(n log n) 시간 복잡도

# Divide and Conquer 분할 정복
def merge_sort(array):
    if len(array) <= 1: # 재귀함수는 탈출조건 필수 !!
        return array
    mid = (0 + len(array)) // 2 # 이진 탐색이 생각남
    left_array = merge_sort(array[:mid])
    right_array = merge_sort(array[mid:])

    # 쪼갠 배열 확인
    # print(array)
    # print('left_array', left_array)
    # print('right_array', right_array)

    return merge(left_array, right_array)

# 최악의 경우 O(n) -> len(array1) + len(array2) -> len(array)
def merge(array1, array2):
    result = []
    array1_index = 0
    array2_index = 0

    # 한 배열이 모두 삽입될 때까지 반복 후, 남은 다른 배열을 삽입
    while array1_index < len(array1) and array2_index < len(array2):
        if array1[array1_index] < array2[array2_index]:
            result.append(array1[array1_index])
            array1_index += 1
        else:
            result.append(array2[array2_index])
            array2_index += 1

    if array1_index == len(array1):
        while array2_index < len(array2):
            result.append(array2[array2_index])
            array2_index += 1

    if array2_index == len(array2):
        while array1_index < len(array1):
            result.append(array1[array1_index])
            array1_index += 1

    return result


print(merge_sort(array))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!