// 4. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)
let arr = [1, 2, 3, 4, 6, 7, 8, 9];
 

let twoSum = (arr,target)=>{
    let output=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
           if(arr[i]+arr[j]==target){
                output.unshift([arr[j],arr[i]]);
           }

        }
    }
    return output;
    // console.log("Pairs are:",output);
}
console.log(twoSum(arr, 9));//[ [ 6, 3 ], [ 7, 2 ], [ 8, 1 ] ]