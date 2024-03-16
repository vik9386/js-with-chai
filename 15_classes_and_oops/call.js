function setUsername(username){
    // some complex DB calculation
    this.username=username;
    console.log("doing")
}

function createUser(username,email,password){
    setUsername.call(thi s,username)
    this.email=email,
    this.password=password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log((chai));