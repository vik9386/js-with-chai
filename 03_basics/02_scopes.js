let a=30
// const b=40
// var c=50


// if(true){
//     let a=50
//     const b=70

//     console.log("Inner:",a)
    
// }

// console.log(a)
// console.log(b)
// console.log(c)


// function one(){
//     const username="vikash"

//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one()


// nested function ke case me child function parent function ke 
// variable ko access kr skte h


if(true){
    const username="vikash"
    if(username=== "vikash"){
        const website=" youtube"
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


// function declaration
console.log(addone(3))

function addone(num){
    return num+1
}

// function expression
console.log(addTwo(4))

const addTwo = function(num2){
    return num2 + 2
}

// function expression ke case me function call , function initialization 
// ke pehle nhi kr skte h




