let myHeroes = ["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.vikash = function(){
    console.log(`vikash is present in all objects`)
}
// heroPower.vikash()
// myHeroes.vikash()

Array.prototype.heyVikash=function(){
    console.log("viaksh says hey")
}

// myHeroes.heyVikash()
// heroPower.heyVikash()


// inheritance

const user={
    username:"chai",
    email:"chai@google.com"
}
const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:true
}

const TASupport={
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__= user

// modern syntax
Object.setPrototypeOf(teachingSupport,teacher)


let anotherUserName = "chaiaurcode      "

Object.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()

"vikash".trueLength()
"iceTea.  ".trueLength()



