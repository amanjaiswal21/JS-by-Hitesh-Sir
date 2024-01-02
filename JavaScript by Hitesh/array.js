const myArr=[1,2,3,4];
myArr.push(7)//insert in last position
myArr.pop()

myArr.unshift(9)//insert in first position
myArr.shift()

console.log(myArr.includes(9));//boolean types it will tell that value is present or not

console.log(myArr.indexOf(1)); //it will tell about index


const newArr=myArr.join(); //only it will change into arr to string data type
console.log(newArr);
console.log(myArr);

console.log(typeof newArr);


//slice ,splice

console.log("A",myArr);

const my1=myArr.slice(1,3);
console.log(my1);

console.log("B",myArr);

const my2=myArr.splice(1,3);
console.log(my2);

console.log(myArr);

//in slice last index not include but in splice last index include...slice does not chamge in original arr but splice change the original array

