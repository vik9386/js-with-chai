// objects ko 2 tarike se define krte h
// 1. using constructor -- constructor ke case me singleton object bnta h mtlb ye object apni tarah ka ek hi hota h
// Object.create --- yhi const. hai



// 2. using literals = isme singleton nhi bnta h isme multiple instances bnjate h object ke


// note --> objects me key string hota h lekin isko likhte nhi h but Symbol(data type) ke case me key ko square bracket me likhte ha 

// objects ko access krne ke 2 trike 
// 1. .(dot notation) ---> generally yhi use hote h
// 2. [](square bracket notation) ---> jb key string mein likha to tb ye use hota ha ["key"]


const myKey = Symbol("key1")

const user={
    name:"vkash",
    age:18,
    "full name":"vikash kumar",
    loaction:"jaipur",
    [myKey]:"key1",
    isLogged:true,
    email:"vikash@google.com",
    isLoggedDays:["monday","saturday"]
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user.full name)//here .dot notation not work so use [] notation

// console.log(user["full name"])
// console.log(user[myKey])

// we can freeze (means lock) our object so that no one can change it

// user.email="vikash@chatgpt.com"
// console.log(user)

// Object.freeze(user)
// user.email="vikash@microsoft.com"// email will no change due to freeze
// console.log(user)

// lets add function

user.greetings = function(){
    console.log("Hello JS User")
}

user.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(user.greetings())
console.log(user.greetingsTwo())




