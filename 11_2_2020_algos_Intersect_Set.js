// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]


// inputs are always to be sorted
// not the same length
// negative numbers? no
// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array

function intersect(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) return [];

    let uniqueSet1 = new Set(arr1);
    let uniqueSet2 = new Set(arr2);
    // console.log(uniqueSet1);
    // console.log(uniqueSet2);
    let set2arr = Array.from(uniqueSet2)
    let sorted = set2arr.filter((i) => uniqueSet1.has(i));
    // console.log(sorted);
    return sorted;
}

console.log(intersect([1,2,2,2,7], [2,2,6,6,7]));


function intersect2(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) return [];

    let uniqueSet1 = new Set(arr1);
    let uniqueSet2 = new Set(arr2);

    let sorted = []
    for (value of uniqueSet1) {
        if (uniqueSet2.has(value)) {
            sorted.push(value);
        }
    }
    return sorted;
}

console.log(intersect2([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))

function intersect3(arr1, arr2) {
    let uniqueArr1 = [];
    let uniqueArr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[1] in uniqueArr1) {
            continue;
        } else {
            uniqueArr1.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in uniqueArr2) {
            continue;
        } else {
            uniqueArr2.push(arr[i]);
        }
    }

    let intersection = [];
    for 
}

function intersection(arr1, arr2) {
    let idx1 = 0; // define indexes for both arrays
    let idx2 = 0;

    const len1 = arr1.length; // fix the lengths
    const len2 = arr2.length;
    const result = []; // set a result

    // while loop is a for loop + an if statement
    // as long as we don't read off an array
    while (idx1 < len1 && idx2 < len2) {
        // walk the smaller idx forward
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            idx2++;
            // else they are equal
        } else {
            // double check we've not already added this number
            if (result[result.length - 1] !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            // walk forward both indexes
            idx1++;
            idx2++;
        }
    }
    return result;
}