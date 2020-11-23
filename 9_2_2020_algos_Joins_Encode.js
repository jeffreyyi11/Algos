/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

// var arr1 = [1, 2, 3]
// var separator1 = ", "
// var expected1 = "1, 2, 3"

// var arr2 = [1, 2, 3]
// var separator2 = "-"
// var expected2 = "1-2-3"

// var arr3 = [1, 2, 3]
// var separator3 = " - "
// var expected3 = "1 - 2 - 3"

// var arr4 = [1]
// var separator4 = ", "
// var expected4 = "1"

// var arr5 = []
// var separator5 = ", "
// var expected5 = ""

function join(arr, separator) {
  // code here
}

/* ******************************************************************************** */

/*
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.


  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

// var str1 = "aaaabbcddd"
// var expected1 = "a4b2c1d3"

// var str2 = ""
// var expected2 = ""

// var str3 = "a"
// var expected3 = "a"

// var str4 = "bbcc"
// var expected4 = "bbcc"

function encodeStr(str) {
  // code here
}

/* ******************************************************************************** */

/*
  String Decode
*/

// var str1 = "a3b2c1d3"
// var expected1 = "aaabbcddd"

function decodeStr(str) {
  // code here
}

// /*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

// var arr1 = [1, 2, 3]
// console.log(arr1)
// var separator1 = ", "
// var expected1 = "1, 2, 3"

// var arr2 = [1, 2, 3]
// var separator2 = "-"
// var expected2 = "1-2-3"

// var arr3 = [1, 2, 3]
// var separator3 = " - "
// var expected3 = "1 - 2 - 3"

// var arr4 = [1]
// var separator4 = ", "
// var expected4 = "1"

// var arr5 = []
// var separator5 = ", "
// var expected5 = ""

function join(arr, separator) {
    // code here
    if (arr.length > 0) {
        let temp = '';
        for (let i = 0; i < arr.length - 1; i++) {
            // temp += arr[i].toString() + separator;
            temp += arr[i].toString() + separator;
        }
            temp += arr[arr.length - 1];
        return temp;
    } else {
        return "";
    }
}


// console.log(join(arr3, separator3));
  /* ******************************************************************************** */
  
  /*
    String Encode
  
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears.
  
  
    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
    */
  
// var str1 = "aaaabbcddd"
// var expected1 = "a4b2c1d3"

//   var str2 = ""
//   var expected2 = ""
  
//   var str3 = "a"
//   var expected3 = "a"
  
//   var str4 = "bbcc"
//   var expected4 = "bbcc"
  
function encodeStr(str) {
    // code here
    var counter = 1;
    var temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter++;
        } else {
            if (counter == 1) {
                temp += str[i] + counter.toString();   
            } else {
                temp += str[i - 1] + counter.toString();
                counter = 1;    
            }
        }
    }
} 

// console.log(encodeStr(str1));
  /* ******************************************************************************** */
  
  /*
    String Decode
  */
  
  var str1 = "a3b2c1d3"
  var expected1 = "aaabbcddd"
  

  function decodeStr(str) {
    // code here
    var temp = '';
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        if (isNaN(str[i])) {
            temp += str[i];
        } else {
            for (let j = 0; j < parseInt(str[i]) - 1; j++) {
                temp += str[i - 1]
            }
        }
    }
    return temp;
  }
  
  console.log(decodeStr(str1));
