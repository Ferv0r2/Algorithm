class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)

    # 길이를 모두 알아야 하기 때문에 좋은 코드가 X
    # def get_kth_node_from_last(self, k):
    #     length = 1
    #     cur = self.head

    #     while cur.next is not None:
    #         cur = cur.next
    #         length += 1

    #     end_length = length - k
    #     cur = self.head
    #     for i in range(end_length):
    #         cur = cur.next

    #     return cur

    # K 만큼 길이가 떨어진 2개의 포인터를 사용
    def get_kth_node_from_last(self, k):
        slow = self.head
        fast = self.head

        for i in range(k):
            fast = fast.next

        while fast is not None:
            slow = slow.next
            fast = fast.next

        return slow


linked_list = LinkedList(6)
linked_list.append(7)
linked_list.append(8)

print(linked_list.get_kth_node_from_last(2).data)  # 7이 나와야 합니다!