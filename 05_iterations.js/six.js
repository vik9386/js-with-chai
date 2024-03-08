// const coding=["js","cpp","ruby","swift","java"]

// const returnItem = coding.forEach((item)=>{
//     return item
// })

// console.log(returnItem)//undefined
 
// filter method

const nums=[1,2,3,4,5,6,7,8,9,10]

// const newArray = nums.filter((num)=>{
//     return num > 4
// })

// console.log(newArray)

// with forEach

// const arr=[]
// nums.forEach((item)=>{
//     if(item > 4){
//         arr.push(item)
//     }
// })

// console.log(arr)

const books = [
    {title:"book one",genre:"History",publish:1986,edition:2015},
    {title:"book two",genre:"Political",publish:1986,edition:2016},
    {title:"book three",genre:"Fiction",publish:2012,edition:2014},
    {title:"book four",genre:"Non-Fiction",publish:1986,edition:2015},
    {title:"book five",genre:"History",publish:1995,edition:1995},
    {title:"book six",genre:"Fiction",publish:2017,edition:2024},
    {title:"book seven",genre:"Political",publish:1991,edition:2025},
    {title:"book eight",genre:"History",publish:2015,edition:2020},
]

// const userBooks= books.filter((item)=>{return item.genre==="History"})

const userBooks = books.filter((book)=>{return book.publish >= 2000 && book.genre==="Fiction"})
console.log(userBooks)