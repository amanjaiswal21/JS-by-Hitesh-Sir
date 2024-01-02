//map
const map =new Map();
map.set('IN',"INDIA") 
map.set('USA',"America") 
map.set('FR',"FRANCE") 

for (const it of map) {
     console.log(it);
    
}

for (const [key,val] of map) {
    console.log(key,"-->",val);
    
}

//forof loop not work on objects
const myObj= {
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}
console.log(   );

//we are using for in loop for object
//if we use forin l oop in array the value of it is 0,1,2,3 etc lets take an example
//forin loop not work on map
for (const key in myObj) {
    console.log(`${key} -> ${myObj[key]}`);
}

const arr=['a','c','d','e' ,'f']
for (const key in arr) {
    console.log(key);
    console.log(`${key} and the value is ${arr[key]}`);
}

//for each loop
arr.forEach((it)=>{
console.log(it);
})


// myObj.forEach((it)=>{
//     console.log(`${it.key}`);
// })

//we can also pass functionn in for each loop
console.log("New");
function print(it){
    console.log( it);
}
arr.forEach(print)