// 5. Find the missing number from unsorted array with O(n) complexity
// Algorithm
// Create a variable sum = 1 which will store the missing number and a counter variable c = 2.
// Traverse the array from start to end.
// Update the value of sum as sum = sum — array[i] + c and update c as c++.
// Print the missing number as a sum.
let sum=1;
let c=2;
let arr=[2,3,6,1,5,7,8]
for(let i=0 ;i<arr.length;i++){
    sum=sum-arr[i]+c;
    c++;
}

console.log(sum);
