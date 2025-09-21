// check is a number exist in an array (0(n))

// function findNumber(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return true;
//         }
//     }
//     return false
// }
// console.log(findNumber([1,2,3,4,5],9));
// console.log(findNumber([1,2,3,4,5],5));


// Q print the first and last element of the array

// function firstAndLast(arr){
//     if(arr.length===0){
//         console.log("array is empty")
//         return
//     }
//     console.log("first element is",arr[0])
//     console.log("last element is",arr[arr.length-1])
// }
// firstAndLast([10,20,34])
// firstAndLast([])

//******************LINEAR AEARCH********************/
// **********Find if an element exists***************

// let arr = [10,20,30,40]
// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return true
//         }
//     }
//     return false
// }
// console.log(linearSearch(arr,30))
// console.log(linearSearch(arr,300))


//************Binary search --> works only on sorted array******/
// function binarySearch(arr,target){
//     let low = 0, high= arr.length-1
//     while(low<=high){
//         let mid = Math.floor((low+high)/2);
//         if(arr[mid]===target)return mid;
//         else if(arr[mid]<target) low=mid+1;
//         else high = mid-1;
//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,4,5],5))

//***************Reversing --> Reverse the order of element****/
// function reverseArr(arr){
//     let first=0,last=arr.length-1;
//     while(first<last){
//         [arr[first],arr[last]]=[arr[last],arr[first]]
//         first++
//         last--
//     }
//     return arr
// }
// console.log(reverseArr([1,2,3,4,5]))

// ************Insert element at kth position*************
function insert(arr,k,value){
    arr.splice(k,0,value)
    return arr
}
console.log(insert([1,2,3,4,5],2,200))

// *************Delete element at kth position************
function deleteAt(arr,k){
    arr.splice(k,1);
    return arr;
}
console.log(deleteAt([10,20,30,40]))
