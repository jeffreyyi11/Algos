/**
 * MEMBERS: 
 * 
 * 
 * pop(arr, ) removes from the end of the array
 * 
 * push(arr, value) adds to the end of array
 * 
 * shift(arr, value) add to the front of the array
 * 
 * unshift(arr, ) removes from the front of the array
 * 
 * insert(arr, val, position)
 * 
 */


function pop(arr){
    if(arr.length === 0){
        return null;
    }
    var last = arr[arr.length-1];
    arr[arr.length-1] = undefined;
    arr.length = arr.length - 1;
    return last;
 }

 function push(arr, value){
    arr[arr.length] = value;
 }

 push([1,2,3,4,5], 30);

 function unshift(arr, value){
    for(var i=arr.length; i>0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = value;
    return arr;
 }
 // [1,2,3,4,5]
 // [value,1,2,3,4,5]

 function shift(arr){
    if(arr.length === 0){
        return undefined;
    } else if(arr.length === 1){
        var first = arr[0];
        arr.length = 0;
        return first;
    }

    var first = arr[0];
    for(var i=0; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    return first;
 }

 function insert(arr, value, position){
    for(var i=arr.length; i>position; i--){
        arr[i] = arr[i-1];
    }
    arr[position] = value;
    return arr;
 }