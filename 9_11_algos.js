/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

const newInv1 = [
  { name: "Grain of Rice", quantity: 9000 },
  { name: "Peanut Butter", quantity: 50 },
  { name: "Royal Jelly", quantity: 20 },
]
const currInv1 = [
  { name: "Peanut Butter", quantity: 20 },
  { name: "Grain of Rice", quantity: 1 },
]
// const expected1 = [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]

const newInv2 = []
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currInv) {
    //loop through newInv
    for (let i = 0; i < newInv; i++) {
        console.log(newInv[i]['name'])
        if (newInv[i]['name'] in currInv.foreach('name')){
            //add quanity
        }   else {
            //current quantity is new quantity
        }
    }
    //return currInv
}

//help func
function isInInv(obj, arr) {
    for (let i = 0; i < arr.length; i++){
        if (obj.name == arr[i].name){
            return i;
        }
    }
    return -1;
}

function updateInventory(newInv, currInv) {
    for (let i = 0; i < newInv.length; i++){
        let inInv = isInInv(newInv[i], currInv)
        if (inInv > -1) {
            currInv[inInv].quantity += newInv[i].quantity;
        } else{
            currInv.push(newInv[i]);
        }
    }
    return currInv;
}
/* ******************************************************************************** */

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

// const strA1 = "yes"
// const strB1 = "eys"
// const expected1 = true

// const strA2 = "yes"
// const strB2 = "eYs"
// const expected2 = true

// const strA3 = "no"
// const strB3 = "noo"
// const expected3 = false

// const strA4 = "silent"
// const strB4 = "listen"
// const expected4 = true

function isAnagram(s1, s2) {
    if (s1.lenght != s2.length){
        return false
    }
    var table1 = {}
    var table2 = {}
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] in table1) {
            s1[i] += 1
        } else {
            s1[i] = 1
        }
        if (s2[i] in table2) {
            s2[i] += 1
        } else {
            s2[i] = 1
        }
    }
}



function isAnagram(s1, s2) {
    var j = s1.toLowerCase().split("").sort().join();
    var i = s2.toLowerCase().split("").sort().join();
    return j === i
}

console.log(isAnagram('silent', 'listent'))