/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: dict.has_key(key)
*/

// const arr1 = ["a", "a", "a"]
// const expected1 = {
//   a: 3,
// }

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// }

// const arr3 = []
// const expected3 = {}

function frequencyTableBuilder(arr) {
    var freq_table ={};
    for (let i = 0; i < arr.length; i++){
        if (arr[i] in freq_table){
            freq_table[arr[i]] += 1;
        }
        else {
            freq_table[arr[i]] = 1;
        }
    }
    return freq_table
}

function frequencyTableBuilder(arr) {
    var freq_table ={};
    for (let i = 0; i < arr.length; i++){
        if (freq_table.hasOwnProperty(arr[i])) {
            freq_table[arr[i]] += 1;
        }
        else{
            freq_table[arr[i]] = 1;
        }
    }
    return freq_table
}
/* ******************************************************************************** */

/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

// const str1 = "This is a test"
// const expected1 = "test a is This"

function reverseWordOrder(wordsStr) {
    var split_arr = wordsStr.split(" ");
    var reverseStr = ""
    for (let i = split_arr.length - 1; i > 0; i--){
        reverseStr += split_arr[i];
        reverseStr += " ";
    }
    reverseStr += split_arr[0]
    return reverseStr
}

console.log(reverseWordOrder("This is a test"))
