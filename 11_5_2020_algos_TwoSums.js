// https://leetcode.com/problems/two-sum/

const { array } = require("prop-types");

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats, duplicates possible

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {
    let sol = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while(nums[i] + nums[j] !== target && j < nums.length) {
            j++;
        }
        if(nums[i] + nums[j] === target) {
            sol.push(i);
            sol.push(j);
            return sol;
        }
    }
}

console.log(twoSums([15,7,11,2], 9));
// console.log(twoSums([2,7,11,15], 9))

function twoSumsonePass(nums,target){
    var returnarr=[];
    var sumtable={};
    for(var i=0;i<nums.length;i++)
    {
        if(!sumtable[target-nums[i]])
            sumtable[nums[i]]=i;
        else
        {
            returnarr.push(sumtable[target-nums[i]])
            returnarr.push(i);
        }
    }
    return returnarr;
}

function twoSumsRecursive(arr, target, idx1 = 0, idx2 = 0){
    if(idx1 == arr.length || idx2 == arr.length)
    {
        console.log(-1);
        return -1;
    }
    if(target === arr[idx1] + arr[idx2] && idx1 !== idx2)
    {
        console.log(idx1, idx2)
        return [idx1, idx2];
    }
    else if(idx2 !== arr.length-1){
        twoSumsRecursive(arr, target, idx1, idx2 + 1);
    }
    else{
        idx2=0;
        twoSumsRecursive(arr, target, idx1+1, idx2);
    }
}
twoSumsRecursive([6,4,5,1,1,9], 15);

function twoSumBetter(nums, target) {
    const map = {};
    // ""email"" => hashing method => 834791293
    // [834791291, 834791293, 834791292] 

    // {6: 0, 8: 1, 2: 2}

    for (let i = 0; i < nums.length; i++) {
        let missingNumber = target - nums[i];
        if (map.hasOwnProperty(missingNumber)) {
            return [map[missingNumber], i] // [0, 3]
        }
        map[missingNumber] = i;
    }
    return [];
}