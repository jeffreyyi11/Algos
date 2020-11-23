/*
  Zip Arrays into Map


  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value
 */

// const keys1 = ["abc", 3, "yo"]
// const vals1 = [42, "wassup", true]
// const expected1 = {
//   abc: 42,
//   3: "wassup",
//   yo: true,
// }

function zipArraysIntoMap(keys, values) {
    var some_dict = {}
    if (keys.length == values.length){
        for (let i = 0; i < keys.length; i++){
            some_dict[keys[i]] = values[i]
        }
    } else if (values.length < keys.length) {
        return ("not enough keys")
    }
    else{
        return ('not enough values')
    }
    return some_dict
}
console.log(zipArraysIntoMap(['abc', 3, 'yo'], [42, 'wassup', true]))

/* ******************************************************************************** */

/*
  Invert Hash

  A hash table / hash map is an obj / dictionary

  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

// const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
// const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };
// get keys of obj into array
// get values of obj into another array
// set object keys as values and the values from key

function invertObj(obj) {
    var newobj = {}
    for(const x in obj) {
        if(obj[x].toString() in newobj) {
            return false;
        }
        newobj[obj[x].toString()] = x;
    }
    return newobj
}

console.log(invertObj({ name: "Zaphod", charm: "high", morals: "dicey" }))

