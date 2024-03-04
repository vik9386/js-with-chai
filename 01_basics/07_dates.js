let myDate= new Date()
// console.log(typeof myDate)//object
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

let myCreatedDate=new Date(2024,0,25)
// let myCreatedDate=new Date(2024,0,25,17,3)
// let myCreatedDate=new Date("2024-01-25")
// let myCreatedDate=new Date("01-24-2024")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp=Date.now()
// console.log(Math.floor(myTimeStamp/1000))//in millisec
// console.log(myCreatedDate.getTime())


console.log(myCreatedDate.getDay())
console.log(myCreatedDate.getMonth())

// myDate.toLocaleString('default',{
//     weekday:"long",
//     dateStyle:"medium"
// })

console.log(myDate)