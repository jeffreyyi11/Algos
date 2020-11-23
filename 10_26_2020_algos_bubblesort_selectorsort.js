// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i -1; j++) {
        if (arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        }
    }
    return arr
    }

    console.log(bubbleSort([1,5,2,7,9,10,3]))

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr) {
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        for min = i;
        for(var j = i + 1; j < len; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
            if(min !== i) {
                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr
    }
    
    console.log(selectionSort([1,5,2,7,9,10,3]))




// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png
// https://www.geeksforgeeks.org/selection-sort/c/selection-sort.png