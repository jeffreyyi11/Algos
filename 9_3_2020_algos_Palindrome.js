/*
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a"
const expected1 = true

const str2 = "racecar"
const expected2 = true

const str3 = "Dud"
const expected3 = false

const str4 = "oho!"
const expected4 = false

function isPalindrome(str) {
  // code here
  var reverse_string = '';
  for (let i = str.length - 1; i>= 0; i--){
      reverse_string += str[i];
  }
  console.log(reverse_string)
//   if (reverse_string === str) {
//       return ("true palindrome");
//   }
//   else{
//       return ("not a palimdrome")
//   }
  return reverse_string === str //return true or false, don't need if/else statements
}
console.log(isPalindrome("a x a"))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('Dud'))
console.log(isPalindrome('oho!'))
/* ******************************************************************************** */

/*
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring.

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const str1 = "what up, daddy-o?"
const expected1 = "dad"

const str2 = "uh, not much"
const expected2 = "u"

const str3 = "Yikes! my favorite racecar erupted!"
const expected3 = "e racecar e"

function longestPalindromicSubstring(str) {
  // code here
  // set the longest palindrome
  var longest = str[0]
  // read str
  for (var outeri = 0; outeri < str.length; outeri++){
    // console.log(outeri);
    for (var inneri = outeri + 1; inneri < str.length; inneri++){
      // console.log(inneri);
      var str_slice = str.slice(outeri, inneri);
      if (isPalindrome(str_slice)){
        if(longest.length < str_slice.length){
          longest = str_slice;
        }
      }
    }
  }
  // check if a piece of it is a palindrome
  // if it is make that piece the longest
  // return longest
  return longest
}



