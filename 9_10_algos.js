/*
  Parens Valid

    Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"
const expected1 = true

const str2 = "N(0(p)3"
const expected2 = false
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"
const expected3 = false
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c"
const expected4 = false
// Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
    var arr = []
    let open ={
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    let closed = {
        ')': true,
        ']': true,
        '}': true'
    }
    for(let i = 0; i < str.length; i++){
        if(open[str[i]]){
            arr.push(char);
        } else if(closed[str[i]]) {
            if (open[arr.pop()] !== str[i])
            return false;
        }
    }
    return arr.length === 0; {return false};
}

function parensValid(str){
    var count = 0
    for (let i = 0; i < str.length; i++){
        if (count < 0){
            return false
        }
        if(str[i] == '('){
            count ++
        }
        if(str[i] == ')'){
            count --
        }
    }
    return count == 0
}
console.log(parensValid("a(b))(c"))
/* ******************************************************************************** */

/*
  Braces Valid

  Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

// const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

// const str2 = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

// const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

function bracesValid(str) {}
// true if all openings have closing
// false
//iterate through str
// check for opening
var stack = []
var opensym = '({{'
var closesym = {
    ')': '(',
    '}': '{',
    ']': '['
}
for (let i = 0; i <str.length; i++) {
    var char = str[i]
    if (opensym.includes(char)) {
        stack.push(char)
    } else if (closesym[char] == stack[stack.length -1]) {
        stack.pop()
    } else{
        continue
    }
    // if (stack.length == 0) return true
    // return false
    return stack.length == 0
}