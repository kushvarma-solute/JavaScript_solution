// 1. Find the frequency of elements in array
// Method 1: Using Reduce method of array:
let arr = ["hello", "world", "java", "hello", "java" ];
let frequency=arr.reduce((item, index) => {    
    if(item[index])
     {
        item[index]++;
     }
     else
     {
        item[index]=1;
     }
     return item;
},{});
console.log("Method 1:",frequency);

// Method 2: Using an Object

let frequency2={};
arr.forEach((index) => {    
    if(frequency2[index])
     {
        frequency2[index]++;
     }
     else
     {
        frequency2[index]=1;
     }
});

console.log("Method 2:",frequency2);