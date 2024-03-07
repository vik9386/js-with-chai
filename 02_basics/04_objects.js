const tinderUser = new Object()// singleton object
// const tinderUser={}// non singleton object

tinderUser.id="123abd"
tinderUser.name="sammy"
tinderUser.isLoggedIn=true
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"vikash",
            lastName:"kumar"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)


// using spread operator
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

// const newArray =[
//     {
//         id:123,
//         name:"vikash"
//     },
//     {
//         loaction:"jaipur"
//     },
//     {
//         city:"patna"
//     }
// ]

// console.log(newArray[1].loaction)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(Object.hasOwnProperty("name"))

// desrtucturing

const course ={
    courseName:"JS in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseName:name,price ,courseInstructor:instructor} = course

// console.log(instructor)
// console.log(name)

// json format

// {
//     "name":"hitesh",
//     "price":"999",
//     "instructor":"hitesh"
// }


// [
    {},
    {},
    {}
]