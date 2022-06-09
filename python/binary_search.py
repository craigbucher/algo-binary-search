# Binary Search in python


def binary_search(target, array):
    low, high = 0, len(array)-1
    # Repeat until the pointers low and high meet each other
    while low <= high:

        mid = low + (high - low)//2

        if array[mid] == target:
            return mid

        elif array[mid] < target:
            low = mid + 1

        else:
            high = mid - 1

    return -1


# array = [3, 4, 5, 6, 7, 8, 9]
# x = 7

#print(binary_search(x, array))


[1, 5, 7, 2, 3, 8, 4, 9]
[1, 5, 7, 2, ]
[1, 5, 7, 2, 3, 8, 4, 9]

# print(binary_search(7, largeArray))

# smallArray = [1, 2, 3, 4, 5]
# largeArray = [1, 5, 7, 2, 3, 8, 4, 9]

# print(binary_search(1, smallArray) === 0);
# print(binary_search(2, smallArray) === 1);
# print(binary_search(3, smallArray) === 2);
# print(binary_search(4, smallArray) === 3);
# print(binary_search(5, smallArray) === 4);
# print(binary_search(7, largeArray) === 5);