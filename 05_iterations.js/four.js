const languages={
    js:"Javascript",
    swift:"swift by apple",
    rb:"ruby",
    cpp:"C++"
}

// for (const key in languages) {
//     console.log(key)
// }

// for (const key in languages) {
//     console.log(`key is ${key} and value is ${languages[key]}`)
// }

// with array

const programming=['js','rb','py','java']

// for (const key in programming) {
//     console.log(key)
// }

// for (const key in programming) {
//     console.log(programming[key])
// }

// with Map --> forin loop not work for Map

const map = new Map()
map.set("IN","India")
map.set("Fr","France")
map.set("USA","United States Of America")

for (const key in map) {
    console.log(key)
}
