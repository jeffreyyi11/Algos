// Array: Quick Sort
// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https: //upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif
// https://github.com/brendan-codes/nov-mern-2020/tree/main/algos/w1d4

// Create a function that uses yesterday’s partition to sort an array in-place.
//   Time Complexity
//     - Best: O(n log(n))
//     - Average: O(n log(n))
//     - Worst: O(n^2)


//   Steps:
// - recursively partition the array
// - start by partitioning the full array (use the previously built partition algo)
// - then partition the left side of the array (left of new pivot idx)
//   and the right side (right of new pivot idx), recursively



function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length < 2) return arr;
    if (left < right) {
        let pi = partition(arr, left, right);
        quickSort(arr, 0, pi - 1);
        quickSort(arr, pi + 1, arr.length - 1);
    }
}


function partition(arr, left, right){
    // Taking the last element as the pivot
    const pivotValue = arr[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]
    return pivotIndex;
};

// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif

// function quickSort2(arr, left = 0, right = arr.length - 1) {
//     if (left >= right) {
//         return;
//     }
//     const pivot = PartitionLomuto(arr, left, right);
//     quickSort2(arr, left, pivot - 1);
//     quickSort2(arr, pivot + 1, right);

//     return arr;
// }

// let swap = (arr, i, j) => {
//     // swap two indexes in an array
//     [arr[i], arr[j]] = [arr[j], arr[i]]
// };

// let PartitionLomuto = (arr, left, right) => {
//     if (left === undefined) {
//         left = 0;
//     }

//     if (right === undefined) {
//         right = arr.length - 1;
//     }
//     // select a pivot
//     const pivot = arr[right];
//     // start at the left most index
//     let i = left;

//     // looping from the left index until the right
//     for (let j = left; j < right - 1; j++) {
//         // if that value is less than or equal to the pivot
//         if (arr[j] <= pivot) {
//             // swap!
//             swap(arr, i, j);

//             // and move i!
//             i++;
//         }
//     }
//     // final swap to put the pivot back in the right spot
//     swap(arr, i, right);

//     // and return it's index
//     return i;
// }

