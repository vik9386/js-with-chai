// for of

const nums=[1,2,3,4,5]
// for (const num of nums) {
//     console.log(num)    
// }

// with strings

const greetings ="Hello world!"
// for (const greet of greetings) {
//     if(greet ===" ")continue;
//     console.log(greet)
// }

// Map(data type) --> iske pas unique value(key=>value ke form me hota h) hota h 
// and it remember the order in which it is inserted

const map = new Map()
map.set("IN","India")
map.set("Fr","France")
map.set("USA","United States Of America")

// console.log(map)
// console.log(map.size)

// so lets loop Map

// for (const key of map) {
//     console.log(key)
// }

// for (const [key,value] of map) {
//     console.log(`key is ${key} and value is ${value}`)
// }

// with object. ---> not work with forof loop

//  const myObject={
//     game1:"NFS",
//     game2:"Mario",
//     game3:"spiderman"
//  }

// for (const {key,value} of myObject) {
//     console.log(`key is ${key} and value is ${value}`)
// } 

