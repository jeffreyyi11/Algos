def bubble_sort(a_list):
    for i in range(0, len(a_list)):
        for j in range(0, len(a_list) - 1):
            if a_list[j] > a_list[j+1]:
                a_list[j], a_list[j+1] = a_list[j+1], a_list[j]
    return a_list

print(bubble_sort([1,5,2,7,9,10,3]))