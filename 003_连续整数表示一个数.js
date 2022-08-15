// const consecutiveInteger = function (number) {

// }

// const number = 17
// consecutiveInteger(number)

const a1 = { name: '张三'}
const a2 = { age: 18} 
// console.log(JSON.parse(JSON.stringify(a1)))
// console.log(JSON.parse(JSON.stringify(a2)))
// const a3 = Object.assign(a1, a2)
// console.log(JSON.parse(JSON.stringify(a1)))
// console.log(JSON.parse(JSON.stringify(a2)))
// console.log(a3)

const a4 = Object.assign({}, a1, a2)
console.log(JSON.parse(JSON.stringify(a1)))
console.log(JSON.parse(JSON.stringify(a2)))
console.log(a4)