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
        if (freq_table.hasOwnProperty(arr[i])) {
            freq_table[arr[i]] += 1;
        }
        else{
            freq_table[arr[i]] = 1;
        }
    }
    return freq_table
}
console.log(frequencyTableBuilder(["a", "b", "a", "c", "B", "c", "c", "d"]))