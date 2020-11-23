/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5
const expected1 = 5

const num2 = 10
const expected2 = 1

const num3 = 25
const expected3 = 7

function sumToOneDigit(num) {
    if (num.toString().length = 1) {
        return num;
    } else {
        numarr = num.toString().split();
        console.log(numarr)
    }
}
console.log(sumToOneDigit(25))

function sumToOneDigit2(num){
    const numString = num.toString();
    //if str length is 1, return this
    if(numString.length === 1){
        return num
    }

    //if not case above, run rest of this
    const numStringArr = numString.split('');


    //calc sum of all nums in arr
    const sumStringArr = numStringArr.reduce((sumTotal, currentVal)=>sumTotal + +currentVal, 0);

    return sumToOneDigit2(sumStringArr)
}

console.log(sumToOneDigit2(num3))



//Here's my version without using slpit

function rSumToOneDigit(num) {
    if (num < 10) return num;
    var lastDigit = num%10;
    var sum = lastDigit + rSumToOneDigit(Math.floor(num/10));
    return rSumToOneDigit(sum);
}

console.log(rSumToOneDigit(19)); // should log 1: 1 + 9 = 10 -> 1 + 0 = 1
console.log(rSumToOneDigit(999)); // should log 9: 9 + 9 + 9= 27 -> 2 + 7 = 9




