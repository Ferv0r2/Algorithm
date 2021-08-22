all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"]
present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"]



def get_absent_student(all_array, present_array):
    student_dict = {}
    for key in all_array:   # O(n), 공간 복잡도도 O(n) -> Hash Table은 공간복잡도를 함께 이용
        student_dict[key] = True

    for key in present_array:   # O(n)
        del student_dict[key]

    for key in student_dict.keys(): # O(n)
        return key


print(get_absent_student(all_students, present_students))