const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor)

const chai = {
    name:"chai",
    price:250,
    isAvaialable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))