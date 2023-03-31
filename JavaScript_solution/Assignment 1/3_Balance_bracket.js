//3. Program to check a string with balanced brackets.
let str1 = "( {} [] ({}))";
let str2 = "}}";
let isValid=(str)=>{
    let stack=[];
    for(let i=0;i<str.length;i++)
    {
        let bracket = str[i];
         if(bracket==='{' || bracket==='(' || bracket==='['){
            stack.push(bracket);
        }
        else if(bracket==='}' || bracket===')' || bracket===']')
        {
             const lastBracket = stack.pop();
             if ((bracket === ')' && lastBracket !== '(') ||
                (bracket === ']' && lastBracket !== '[') ||
                (bracket === '}' && lastBracket !== '{'))   
                {
                    return false;
                 }
        }
    }
    console.log(stack);
    return stack.length===0;

}
console.log(isValid(str2)); 
