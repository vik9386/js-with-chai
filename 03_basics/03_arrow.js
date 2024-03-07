// const user={
//     name:"vikash",
//     price:399,

//     welcome:function(){
//         console.log(`hello ${this.name} welcome to website`)
//         console.log(this)
//     }

// }

// this keyword current context ko refer krta h

// user.welcome()
// user.name="sam"
// user.welcome()
// console.log(this)

// node enevoronment me this {} provide deta h
// jbki browser me window object deta h


//this ko object ke sath me hi use kiya ja skta h 

// function chai(){
//     const username="vikash"
//     console.log(this.username)
// }

// chai()


// const chai = function(){
//     const username="vikash"
//     console.log(this.username)
// }

// chai()

// const chai = ()=>{
//     const username="vikash"
//     console.log(this)
// }

// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// implicit return 

// const addTwo = (num1,num2)=>  num1+num2;
// const addTwo = (num1,num2)=>  (num1+num2);

// console.log(addTwo(2,3))

// how to return object ---> use (),otherwise not work

const returnObject=()=>({username:"vikash"})

console.log(returnObject())







