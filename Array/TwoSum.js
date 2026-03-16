// function twoSum(nums, target) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
// }

// const nums = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(nums, target));


/***********
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

********** */

// var longestCommonPrefix = function(strs) {
//     if (!strs.length) return "";
//     strs.sort();
//     let first = strs[0], last = strs[strs.length - 1], result = "";
//     for (let i = 0; i < first.length; i++) {
//         if (first[i] === last[i]) {
//             result += first[i];
//         } else {
//             break;
//         }
//     }
//     return result;
// };