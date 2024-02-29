// primitives type

// 7 types => number,string,boolean,null,undefined,symbol,BigInt


const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId)//false bcoz symbol always use for uniqueness


// non-primitive(reference type)

//Array
let hero=["shaktimaan","nagarjun","digo"]
//objects
let myObj={
    nam:"vikash",
    age:16
}
//functions

let myFunc=function(){

}

// console.log(typeof hero)//object
// console.log(typeof myObj)//object
// console.log(typeof myFunc)//function (but called function object)



// JS has 2 types of memory --- stack and heap
// stack used for primitive data type -- isme varaible ki copy milti h means if u change original data not changed
// heap used for reference data type -- isme variable ka reference milta h means if u changed the original will get changed 

let youtubeName= "vikash@g.com"
let anotherYoutubeName=youtubeName

anotherYoutubeName ="chai aur code"

console.log(youtubeName)
console.log(anotherYoutubeName)

let userOne= {
    email:"vikash@34g.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.upi="72367889@ybl"

console.log(userOne.upi)
console.log(userTwo.upi)