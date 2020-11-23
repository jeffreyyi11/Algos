function sort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        temp = arr[i];
        if(arr[i + 1] < arr[i]){
            arr[i] = arr[i+1];
            arr[i+1] = temp
        }
    }
    return arr
}
console.log(sort([3,7,8,9,4,5,1,2,6]));
// first
//