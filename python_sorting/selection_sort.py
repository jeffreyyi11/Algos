def selection(a_list):
    for i in range(0, len(a_list)):
        if a_list[i] < a_list[i+1]:
            min_value = a_list[i]
        else:
            min_value = a_list[i+1]
