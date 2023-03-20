s = "(())()"


def is_correct_parenthesis(string): # O(n)
    stack = []

    for i in range(len(string)):
        if string[i] == '(':
            stack.append(i)
        elif string[i] == ')':
            if len(stack) == 0:
                return False
            stack.pop()

    if len(stack) == 0:
        return True
    return False


print(is_correct_parenthesis(s))  # True 를 반환해야 합니다!