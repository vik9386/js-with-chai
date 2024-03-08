const userEmail ="";
if(userEmail){
    console.log("got user mail")
}else {
    console.log("dont have user mail")
}

// falsy values --- false ,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// "0" ,"false"," ",[],{},function(){}

// how to check object is empty or not

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("empty object")
}

// following are true so keep in mind

// 1. false == 0
// 2. false == ''
// 3. 0 == ''


// nullish coalescing operator (??) --> only work with null and undefind

// returns its right-hand side operand when its left-hand side operand
// is null or undefined, and otherwise returns its left-hand side operand.
// iska fallback me use krte h


let val1

val1 = 5 ?? 10

console.log(val1);

val1=null ?? 42
console.log(val1)

val1=undefined ?? 20
console.log(val1)

val1=null ?? 10 ?? 20 // is case me first value hi return hoti ha
console.log(val1)


// ternary operator

// syntax

// condition ? true : false

