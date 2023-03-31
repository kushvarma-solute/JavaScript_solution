//9. Print all duplicate elements of an array
let array = ["hello",1,2,"hello",,5,6,7,1,2,8,"world"];
const unique = new Set(array);
const duplicate = array.filter(currentValue => {
      if (unique.has(currentValue)) {
         unique.delete(currentValue);
      }
      else {
         return currentValue;
      }
   }
);

console.log(duplicate);

 
       
 