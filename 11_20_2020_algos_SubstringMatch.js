// STRING MATCHING IN AN ARRAY

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].



// Examples:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.

const isSubstring = (input) => {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++){
            if(input[i].includes(input[j]) && i != j) {
                result.push(input[j]);
            } 
        }
    }
    return result;
}

console.log(isSubstring(["leetcode","et","code"]));
console.log(isSubstring(["blue","green","bu"]));

let matching = words => words.filter(
    word => words.some(
        otherWord => word !== otherWord && otherWord.includes(word)
    )
);