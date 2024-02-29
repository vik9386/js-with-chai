// primitives type

// 7 types => number,string,boolean,null,undefined,symbol,BigInt


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)//false bcoz symbol always use for uniqueness


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

console.log(typeof hero)//object
console.log(typeof myObj)//object
console.log(typeof myFunc)//function (but called function object)