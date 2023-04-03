/*Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in the array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 
Note that the target sum has to be obtained by summing two different integers in the array; you can’t add a single integer to itself to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum.
Sample Input: array = [ 3, 5, -4, 8, 11, 1, -1, 6 ], target = 10
Sample Output: [ -1, 11 ] */

function sum_pairs(array, target) {
  const unique_array = [];
  let sum_pair=[];
  for (let i = 0; i < array.length; i++) {
    const diff = target - array[i];
    if (unique_array.includes(diff)) {
      sum_pair.unshift([diff, array[i]]);
    }
    unique_array.push(array[i]);
  }
  return sum_pair;
}

let output = sum_pairs([ 3,2,5,2,-4,8,11,1,-1,6 ],10);
console.log(output);



 
