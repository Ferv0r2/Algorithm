shop_prices = [30000, 2000, 1500000]
user_coupons = [20, 40]


def get_max_discounted_price(prices, coupons): # O(n)
    prices_index = 0
    coupons_index = 0
    max_discounted_price = 0
    prices.sort(reverse=True)
    coupons.sort(reverse=True)

    while prices_index < len(prices) and coupons_index < len(coupons):
        max_discounted_price += prices[prices_index] * (1 - coupons[coupons_index] * 0.01)
        prices_index += 1
        coupons_index += 1
    
    while prices_index < len(prices):
        max_discounted_price += prices[prices_index]
        prices_index += 1


    return max_discounted_price


print(get_max_discounted_price(shop_prices, user_coupons))  # 926000 이 나와야 합니다.