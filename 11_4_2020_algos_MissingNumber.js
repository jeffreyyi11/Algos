// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

// 0(n)
function findMissingValue(arr) {
    let n = arr.length;
    let total = n*(n+1) / 2;
    for(let i = 0; i < n; i++) {
        total -= arr[i];
    }
    return total;
}

console.log(findMissingValue([5, 2, 7, 8, 4, 9, 3, 0, 1]))

function findMissingValue2(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(!arr.includes(i)) {
            return i
        }
    }
}
console.log(findMissingValue2([5, 2, 7, 8, 4, 9, 3, 0, 1]));

function findMissingValue3(arr) {
    let arrSum = 0;
    let realSum = arr.length;
    for(let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
        realSum += i;
    }
    return realSum - arrSum;
}

// VII

// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [10, 11, 12, 13, 17, 18, 3, 5, 6, 9]
// return 3

function minOfSortedRotated(arr){
    if(arr.length === 0) return [];
    if(arr.length === 1) return arr[0];
    var start = 0;
    if(arr[0] > arr[arr.length-1]) {
        start = arr.length - 1;
        while(arr[start] > arr[start-1]) {
            start--;
        }
    }
    return arr[start];
}
console.log(minOfSortedRotated([10, 11, 12, 13, 17, 18, 3, 5, 6, 9]));

function minOfSortedRotated2(arr){
    if (arr.length<1){
        return false
    }
    for (let i=1;i<arr.length;i++){
        if (arr[i]<arr[i-1]){
        return arr[i]
        }
    }
    return arr[0];
}
console.log(minOfSortedRotated2([9, 10, 11, 12, 13, 17, 18, 3, 5, 6]))

function minOfSorted3(arr, low = 0, high = arr.length - 1) {
    // define middle
    let middle = Math.floor((low + high) / 2);

    // not rotated
    if (high < low) {
        return arr[0]
    }

    // one element
    if (high === low) {
        return arr[low];
    }

    // check if middle+1 is minimum element
    if (middle < high && arr[middle + 1] < arr[middle]) {
        return arr[middle + 1];
    }

    // check if mid itself is min
    if (middle > low && arr[middle] < arr[middle - 1]) {
        return arr[middle]
    }

    // otherwise recurse left or right
    if (arr[high] > arr[middle]) {
        return minOfSorted3(arr, low, middle - 1)
    } else {
        return minOfSorted3(arr, middle - 1, high);
    }

}