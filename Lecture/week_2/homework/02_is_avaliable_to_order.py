shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
shop_orders = ["오뎅", "콜라", "만두"]


def is_available_to_order(menus, orders):
    menus.sort()
    for order in orders:
        if not is_existing_target_number_binary(order, menus):
            return False
    return True

# O((M + N) * log N) 시간 복잡도 소요
# def is_existing_target_number_binary(target, array):
#     current_min = 0
#     current_max = len(array) - 1
#     current_guess = (current_min + current_max) // 2
   
#     while current_min <= current_max:
#         if array[current_guess] == target:
#             return True
#         elif array[current_guess] < target:
#             current_min = current_guess + 1
#         else:
#             current_max = current_guess - 1
#         current_guess = (current_min + current_min) // 2

#     return False

# 집합 자료형을 통해 시간 복잡도가 더 좋은 코드 구현
# # O(M + N) 시간 복잡도 소요
def is_available_to_order(menus, orders):
    menus_set = set(menus)
    for order in orders:
        if order not in menus_set:
            return False
    return True


result = is_available_to_order(shop_menus, shop_orders)
print(result)