//we can create object by both methods but first method is singleton object and other is non-singleton object
const tinder=new Object()
const tinder2={}
tinder.id="123abs",
tinder.name="Abhi"
tinder.IsLoggedIn=false;
// console.log(tinder);

const regularuser={
    email: "abhilasha123@gmail.com",
    fullname: {
        firstname:"Abhilasha",
        lastname:"Kumari"
    }
}
// console.log(regularuser.fullname.firstname);

const obj1={    1:'a', 2:"b"}
const obj2 ={ 3:"c", 4:"d"}

//to merge 
//first
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj1===obj3); //it will show false because it has pushed in new object

//second method
// const obj3=Object.assign(obj1,obj2)
// console.log(obj1===obj3); // it will show true because after obj2 is pushed in obj1

//method 3
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinder))
console.log(Object.values(tinder))