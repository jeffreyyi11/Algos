/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC"
const expected1 = "abcABC"

const str2 = "helloo"
const expected2 = "helo"

function stringDedupe(str) {
    var freq_table = {}
    var single_string = ''
    for (let i = 0; i < str.length; i++){
        if (str[i] in freq_table){
            freq_table[str[i]] += 1
        }
        else{
            freq_table[str[i]] = 1
        }
    }
    for (key in freq_table){
        single_string += key
    }
    return single_string
}

function stringDedupe2(str){
    let temp = '';
    for (let i = 0; i < str.length; i++){
        if (temp.includes(str[i])) {
            continue;
        }
        else {
            temp += str[i];
        }
    }
    return temp;
}
console.log(stringDedupe("helloo"))
/* ******************************************************************************** */

/*
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello"
const expected1 = "olleh"

const str2 = "hello world"
const expected2 = "olleh dlrow"

const str3 = "abc def ghi"
const expected3 = "cba fed ihg"

function reverseWords(str) {
    var reverse_string = ''
    var split_string = str.split(' ') //[abc, def, ghi]
    for(let i = 0; i < split_string.length; i++){ //1 abc
        var the_string = split_string[i];
        for(let j = the_string.length - 1; j >=0; j--){ //cba
            console.log('print')
            reverse_string += the_string[j]
        }
        if (i <= split_string.length - 1){
            reverse_string += " ";
        }
    }
    return reverse_string
}

console.log(reverseWords("abc def ghi"))
