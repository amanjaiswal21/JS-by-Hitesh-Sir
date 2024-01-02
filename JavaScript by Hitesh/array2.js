const mar=["thor","ironman"]
const dc=["flash", "superman"]

// mar.push(dc)
//it will the dc array in mar arr.So we use concat
console.log(mar);

//concat merge two arr and give a new array
// const newArr=mar.concat(dc);
// console.log(newArr);

//we can also use spread in place of concat
const newArr2=[...mar, ...dc]
console.log(newArr2);


const another=[1,2,[3,4,5,[5,6,6,7]]];
const realAnother=another.flat(Infinity)
console.log(realAnother);

//this is important for interview
console.log(Array.isArray("Aman"));//it will array is prenst or not of this name
console.log(Array.from("Aman")); //it will change into array
console.log(Array.from({name:"Aman"} )); //it will give is empty array because we havenot specified that key and element
