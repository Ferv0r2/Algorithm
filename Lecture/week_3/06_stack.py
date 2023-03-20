class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def push(self, value):
        new_node = Node(value)

        if self.is_empty:
            self.head = new_node

        new_node.next = self.head
        self.head = new_node        
        return

    # pop 기능 구현
    def pop(self):
        if self.is_empty:
            return"Stack is Empty"
        delete_head = self.head
        self.head = delete_head.next
        del(delete_head)

        return delete_head

    def peek(self):
        if self.is_empty():
            return "Stack is empty"

        return self.head.data

    # isEmpty 기능 구현
    def is_empty(self):
        return self.head is None

stack = Stack()
stack.push(3)
print(stack.peek())
stack.push(4)
print(stack.pop())
print(stack.peek())