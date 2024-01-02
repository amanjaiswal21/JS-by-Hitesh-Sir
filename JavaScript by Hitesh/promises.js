const promiseOne=new Promise(function(resolve, reject) {
    //Do async call
    //db call,cryptography
    setTimeout(function(){
  console.log("Async task is complete");
  resolve();
    }, 1000)
})

promiseOne.then(function(){
     console.log("Promise consumed");
})



new Promise((res,rej)=>{
    setTimeout(function(){
        console.log("Async task 2 is complete");
        res();
          }, 1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

///////////////////////////////////////////
const promiseThree=new Promise((resolve ,reject)=>{
setTimeout(()=>{
  resolve({userName:"Aman",password:"1234"})
},1000)
}) 

promiseThree.then((user)=>{
console.log(user.userName);
})

///////////////////////////////////////// 


const promiseFour=new Promise((resolve,reject)=>{
setTimeout(()=>{
    let err=false;
    if(!err){
        resolve({userName:"Aman",password:"1234",Age:"20"})
    }
    else{
        reject('Error: Something went wrong')
    }
},1000)
})


promiseFour.then((user)=>{
console.log(user);
return user.userName;
}).
   then((username)=>{
console.log(username);
}).
   catch((err)=>{
    console.log(err);
   })
   .finally(()=>{
    console.log("The promise is either resolve or reject");
   })



   const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true;
        if(!err){
            resolve({userName:"Aman Jaiswal",password:"1234",Age:"20"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
   })

   async function consumePromiseFive(){
     try{
        const response= await promiseFive;
        console.log(response);
     }catch(err){
      console.log(err);
     }
   }

   consumePromiseFive();