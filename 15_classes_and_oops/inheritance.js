class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com","123")
chai.addCourse()

const masalachai =new User("masalaChai")
masalachai.logMe()

chai.logMe()

console.log(chai instanceof Teacher)//true
console.log(Teacher instanceof User)//false
console.log(masalachai instanceof User)//true