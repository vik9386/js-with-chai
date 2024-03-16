// const user = {
//     userName:"vikash",
//     logInCount:8,
//     signedIn:true,

//     userDetails: function(){
//         // console.log(`got user details from database`)
//         console.log(`username: ${this.userName}`)
//         console.log(this)
//     }

// }

// console.log(user.userName)
// console.log(user.userDetails())
// console.log(this)


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount =loginCount;
    this.isLoggedIn=isLoggedIn
    return this
}
// new keyword hi constructor kehlata h or ye naya instance deta h hmesa
const userOne = new User("vikash",12,true)
const userTwo = new User("akash",11,false)
console.log(userOne) 
console.log(userTwo)

