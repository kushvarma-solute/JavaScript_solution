// 6. Find the missing number from sorted array with O(n) complexity
let arr = [2, 5, 3, 1, 9, 6, 7,7];
let missingValues = [];

let set = new Set(arr);//Set is a collection of unique values.
console.log("unique values:",set)
let min = Math.min(...arr);
let max = Math.max(...arr);

for (let i = min; i <= max; i++) {
  if (!set.has(i)) {
    missingValues.push(i);
  }
}

console.log(missingValues);
