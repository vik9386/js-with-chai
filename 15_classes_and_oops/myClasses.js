class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    getPassword(){
        return `${this.password}`
    }

    capitalizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com","123")
console.log(chai.getPassword());
console.log(chai.capitalizeUsername());
