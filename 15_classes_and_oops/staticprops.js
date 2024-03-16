class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const chai = new User("chai")
// console.log(chai.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const tea =new Teacher("tea","tea@gmail.com")
tea.logMe()
// console.log(tea.createId())