//object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Aman",
    [mySym]:"key2",
    "Full Name":"Aman Jaiswal",
    age:20,
    location :"Pryagraj",
    lastLoginDays:["mon","tues"]
}

console.log(jsUser.name);
// console.log(jsUser.Full Name);//this will give us error .So we another method
console.log(jsUser["Full Name"]);
console.log(jsUser[mySym]);
console.log(jsUser);

//if interviewer ask ypu make a symbol and add in object and print the value of symbol the code at line no 15 is not correct because if we check its type it will show string type.So we use square bracket in line no 5

jsUser.age=22;
console.log(jsUser);
// Object.freeze(jsUser)
jsUser.age=20;
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello AJ");
}
console.log(jsUser.greeting);//in this it will show anonymous 
console.log(jsUser.greeting());//in this it is showing hello AJ