// const coading=["CPP","JAVSCRIPT","PYTHON"]

// const value=coading.forEach((it)=>{
//    console.log(it);
//    return it;
// })
// console.log(value);
//it will return undeg=fined,foreach will not return any value

/////////////////////////////////////////////////////
const arr=[1,2,3,4,5,6,7,8]
//method1
const newvalues=arr.filter((num)=>{
return num>4
})
//method2
const newvalues2=arr.filter((num)=>
     num>4
    )

console.log(newvalues);
console.log(newvalues2);


//////////////////////////////////////////////////
const arr2=[1,2,3,4,5,6,7,8]
const num2=arr2.map((num)=>{
return num+2
})
console.log(num2);

const num3=arr2
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>40)
    console.log(num3);