let result = require('./calculator')

const {studentDetails, carDetails} = result
const student = new studentDetails('Ram', 16)
const car = new carDetails('Ferrari', 80)

console.log(student)
console.log(car)
console.log(car.name)
