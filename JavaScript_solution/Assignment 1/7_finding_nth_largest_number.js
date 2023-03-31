//7. Find the nth largest element in a sorted array.
let arr=[1,6,8,4,2,9,4];
let n=3;
let temp=0;
for(i =0;i<arr.length;i++){ 
    if(arr[i]>arr[i+1]){
      temp=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
      i=-1;
    }
 
}
arr=[...new Set(arr)]
console.log(arr);
console.log("The nth largest number is",arr[n-1]);