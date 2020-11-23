/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  // ab#c
  // ac

  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

function backSpace(str) {
    let string = ""
    let count = 0;
    for(let i = str.length - 1; i>= 0; i--) {
        let isBackspace = str[i] === "#";
        if(count > 0 && !isBackspace) {
            count--;
        } else if (isBackspace) {
            count ++;
        } else {
            string = str[i] + str;
        }
    }
    return string;
}

function compareStr(str1, str2) {
    let string1 = backSpace(str1);
    let string2= backSpace(str2);
    return string1 === string2 ? true : false;
}

console.log(compareStr("ab#c", "ad#c"));


/*
    CAN STRING ONE BE MADE FROM STRING TWO

    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */

function createString(letters, input) {
    const availableHash = {};
    for (const char of letters) {
        const charLower = char.toLowerCase();
        if(availableHash.hasOwnProperty(charLower) === false) {
            availableHash[charLower] = 1;
        } else {
            availableHash[charLower] += 1;
        }
    }
    for (const needChar of input) {
        const needCharLower = needChar.toLowerCase();
        if(availableHash.hasOwnProperty(needCharLower) === false) {
            return false;
        } else if (availableHash[needCharLower] === 0){
            return false;
        } else {
            availableHash[needCharLower]--;
        }
    }
    return true;
    
}