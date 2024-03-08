// forEach

const coding=["js","cpp","ruby","swift","java"]

// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// forEach syntax --- forEach((element,index,arr)=>{})

// coding.forEach((item,index,arr)=>{
//     console.log(`index is ${index} and value is ${item} and array is ${arr}`)
// })

// array of objects --> [{},{},{}]

const myCoding=[
    {
        language:"javascript",
        extension:"js"
    },
    {
        language:"python",
        extension:"py"
    },
    {
        language:"java",
        extension:"java"
    },
]

myCoding.forEach((item)=>{
    console.log(item.language)
})

