// 2. Group items on the basis of age of given array of object

// Input : 
let people = [
 {name:"Alice", age: 21},
 {name:"Max", age: 20},
 {name:"Jane", age: 20}
];
console.log(people[0]["age"]);

 //Method 1:using reduce:
let peopl2=people.reduce((item,obj,i)=>{
    const key=obj.age;
    if(!item[key])
    {
       item[key]=[];
    }
       item[key].push(obj);
    return item;
},{});
console.log(peopl2);

//Method 2:using groupBy (to use the group by method we have to import the node lodash library)     
var arr = require("lodash");
let people2= arr.groupBy(people,"age");
console.log(people2);
