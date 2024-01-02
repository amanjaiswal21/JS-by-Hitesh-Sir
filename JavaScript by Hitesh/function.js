function add(...num1){
    return num1;
}
console.log(add(20,90,80,90))//it will return a array

const add1= function(num){
    return num+1;
}
//scope
if(true){
    let a=10
    const b=20
    var c=40
}
// console.log(a) //it will not print because the scope is only in its curly bracket
// console.log(b) // same as a
console.log(c)// but in this it will print the value





// Immediately invoked function
// ( function chai(){
//     console.log("DB Connected");
// } )();