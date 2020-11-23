// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,12], 16)

// O(n2)

// sum = 16
// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(arr, k){
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
        const consecNums = [];
        let sum = 0;
        let j = i;
        while(sum <= k && j < arr.length - 1) {
            if (sum + arr[j] <= k) {
                sum += arr[j];
                consecNums.push(arr[j]);
                j++;
                if(sum === k) {
                    sums.push([...consecNums]);
                }
            } else {
                break
            }
        }
    }
    return sums;
}
console.log(findConsqSums([2,5,3,6,7,0,0,23,12], 16))


// function findConsqSums(arr, k){
//     if(arr.length == 0) return [];
//     let outputs = [];
//     let solution = [];
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let i = 0; sum <= k; i++) {
//             solution.push(arr[i]);
//             console.log(arr[i])
//             console.log(solution);
//             sum += arr[i];
//             console.log(sum);
//         }
//         if(solution.reduce((a,b) => a + b, 0) === k) {
//             outputs.push(solution);
//         }
//     }
//     return outputs;
// }
// console.log(findConsqSums([2,5,3,6,7,0,0,23,12], 16))

// function findConsqSums(arr, k){
//     if(arr.length == 0) return [];
//     let outputs = [];
//     let solution = [];
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; sum <= k; j++) {
//             solution.push(arr[j]);
//             console.log(arr[j])
//             console.log(solution);
//             sum += arr[j];
//             console.log(sum);
//         }
//         let arrSum = 0;
//         for(let i = 0; i < solution.length; i++) {
//             arrSum += solution[i];
//         }
//         console.log(arrSum);
//         if(arrSum === k) {
//             outputs.push(solution);
//         }
//     }
//     return outputs;
// }
// console.log(findConsqSums([2,5,3,6,7,0,0,23,12], 16))