let name="vikash"
let repoCount= 10

// console.log(name+" has "+ repoCount + " repository")

//string interpolation --> string literals

// console.log(`${name} has ${repoCount} repository`)

// other method

let newString= new String("vikash-kr-sharma")
//  console.log(newString.length)
//  console.log(newString.charAt(2))
//  console.log(newString.indexOf("k"))

//  const anotherString= "    vikash.  "
// console.log(anotherString)
// console.log(anotherString.trim())

const newStringOne= newString.substring(0,3)// negative index not possible
// console.log(newStringOne)

const newStringTwo= newString.slice(0,3)// here negative index possible
// console.log(newStringTwo)
 
const url="https://vikash.com/vikash%20kumar"
console.log(url.replace("%20","-"))

console.log(url.includes("vikash"))

// console.log(newString.split(""))
console.log(newString.split("-",2))