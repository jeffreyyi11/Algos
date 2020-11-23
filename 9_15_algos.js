/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

  Bonus (alumni interview):
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete

    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
const searchNum4 = 2
const expected4 = 4

function binarySearch(sortedNums, searchNum) {
  // code here
  // divide sorted array in half
  for (let i = 0; i <Math.floor(sortedNums.length); i++){

  }
  // compare last number of first half and first number of second half with search number, 
    // if search number is greater than last number of first half and less than first number of second half return false
    // if equal or pass comparison to number use that half
  
}

function binarySearch2(sortedNums, searchNum) {
    let startIndex = 0;
    let endIndex = sortedNums.length-1;

    while(startIndex<=endIndex) {
        let mid = Math.floor((startIndex+endIndex)/2);

        if(sortedNums[mid]===searchNum) {
            return true;
        } else if(sortedNums[mid] < searchNum) {
            startIndex = mid+1;
        } else {
            endIndex=mid-1;
        }
    }//end while
    return false;
}
console.log(binarySearch2([1, 3, 5, 6], 4))