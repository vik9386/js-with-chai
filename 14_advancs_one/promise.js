// how to create promise 

// const promiseOne = new Promise(function(resolve,reject){
//     // Do async task like DB connecting,cryptography,network
//     setTimeout(() => {
//         console.log('Async task completed');
//         resolve()
//     }, 1000);
// })


// consumption of promise
// promiseOne.then(()=>{
//     console.log("promise consumed")
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Asnc task 2");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Async 2 completed")
// })

// const promiseThree =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userName:"vikash",email:"vikash@email.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
// console.log(user.email);
// })

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error=true; 
//         if(!error){
//             resolve({userName:"vikash",password:"123"})
//         }else{
//             reject('ERROR : Something Went Wrong')
//         }
//     },1000)
// })

// const promiseRetrun =promiseFour
// .then((user=>{
//     return user.userName
    
// }))
// .then((userName)=>{
//     console.log(userName)
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected")
// })


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error=false; 
//         if(!error){
//             resolve({userName:"javascript",password:"123"})
//         }else{
//             reject('ERROR : JS Went Wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json()
//     console.log(data)
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log("error"))
