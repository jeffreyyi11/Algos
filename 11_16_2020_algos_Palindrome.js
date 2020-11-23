// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "racecar"
// "tacocat"

// "baba" => true
// "baab"


// "bcda" => false
// "abcd"


function canStrBecomePalindrome(str) {
    if(str.length === 0) {
        return false;
    }
    if(str.length === 1) {
        return true;
    }
    var arr= [];
    arr = str.split("");
    arr = arr.sort();
    let oddCounter = 0;
    for(let i = 0; i < arr.length; i = i+2) {
        (if arr[i] != arr[i+1]) {
            oddCounter++;
        }
    }
    if(oddCounter === 1 || oddCounter === 0) {
        return true;
    } else {
        return false;
    }
}

function canStrBecomePalindrome(str) {
    // check zero length edge case
    if (str.length === 0) {
        return false;
    }

    // create a map for character frequencies, a count of odds, and if the length is odd bool
    const charFrequencies = {};
    let oddFreqCount = 0;
    let isOddLen = str.length % 2 !== 0;

    // loop characters of your string
    // 0(n)
    for (const char of str) {
        if (!charFrequencies.hasOwnProperty(char)) {
            charFrequencies[char] = 1;
        } else {
            charFrequencies[char]++;
        }
    }

    // {"a": 2, "b": 2, "c": 1}

    // loop frequencies.
    // 0(n-m)
    for (const key of Object.keys(charFrequencies)) {
        const charFreq = charFrequencies[key];

        // if odd occurrences
        if (charFreq % 2 !== 0) {
            oddFreqCount++;

            // either the string is odd and we allow one odd number
            // or the string is even and we allow none

            // either way fail right here
            if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
                return false;
            }
        }
    }

    // get through the for in loop? you are true
    return true;
}