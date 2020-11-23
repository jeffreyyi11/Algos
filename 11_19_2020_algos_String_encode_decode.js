// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// The maximum number of consecutive characters in a row is 9

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.


const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function stringEncode(str) {
    let newStr = "";
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            if(count === 1) {
                newStr += str[i] + count.toString();
            } else {
                newStr += str[i] + count.toString();
                count = 1;
            }
        }
    }
    return newStr.length < str.length ? newStr : str;
}

console.log(stringEncode("aaaabbcdddbbb"))

// String Decode

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function stringDecode(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(str[i])) {
            let repeat = parseInt(str[i]);
            while(repeat > 0) {
                newStr += str[i - 1];
                repeat--;
            }
        }
    }
    return newStr;
}

console.log(stringDecode("a3b2c1d3"))