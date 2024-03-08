// reduce method

const arr =[1,2,3]

// const total = arr.reduce(function(acc,currVal){
//     console.log(`acc : ${acc} and curvalue: ${currVal}`)
//     return acc + currval
// },0)
// console.log(total)

// with arrow function

// const total= arr.reduce((acc,currVal)=>acc + currVal,0)
// console.log(total);

const shoppingCart = [
    {
        course:"JS",
        price:1999
    },
    {
        course:"Python",
        price:3999
    },
    {
        course:"Mobile dev",
        price:5999
    },
    {
        course:"Data Science",
        price:21999
    },
]

// const totalCartPrice = shoppingCart.map(item=>item.price)
//                        .reduce((acc,currVal)=>{return acc+currVal},0)
// console.log(totalCartPrice)  

// second method

const totalCartPrice = shoppingCart.reduce((acc,item)=>{ return acc + item.price},0)
console.log(totalCartPrice);