function findNumber(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false;
}

// console.log(findNumber([1,2,3,4,5,6], 5))
// console.log(findNumber([1,2,3,4,5,6], 9))


function printFirstAndLast(arr){
    if(arr.length === 0) {
        console.log("Array is empty");
        return;
    }
    console.log("First element:", arr[0]);
    console.log("Last element:", arr[arr.length - 1]);
}
// printFirstAndLast([10,20,30,40,50]);
// printFirstAndLast([]); // Array is empty   

// // **************************LINEAR SEARCH********************************
// // ********************FIND if an element exsist**************************
let arr3 = [10,20,30,40,50];
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
console.log(linearSearch(arr3,30))  // 2
console.log(linearSearch(arr3,60))  // -1


// /***************Binary Search*************************/
// /****************Works only on sorted array***********/
function binarySearch(arr, target) {
    let low = 0, high = arr.length -1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) low = mid + 1;
        else high = mid -1;
    }
    return -1;
}
console.log(binarySearch([10,20,30,40,50], 40)) // 3


/************Reversing********************/
/*************Reverse the order of element**************/

function reverseArray(arr){
    let left = 0, right = arr.length-1;
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([10,20,30,40,50]))


// /************Insert element at kth position**************/

function insertAt(arr,k,value){
    arr.splice(k,0,value);
    return arr;
}
console.log(insertAt([10,20,30,40],2,25))


// /************Delete element at kth position*************/

// function deleteAt(arr,k){
//     arr.splice(k,1);
//     return arr;
// }
// console.log(deleteAt([10,20,30,40],1))

/*************Find maximum element*******************/

// function maxElement(arr){
//     let max = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxElement([3,4,6,2,7,9,]))


/**************** */

Array.prototype.last = function() {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};
console.log(Array.prototype.last)