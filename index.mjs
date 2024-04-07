import {name, value, studentDetails,carDetails, sum, div} from './calculator.mjs'

const student = new studentDetails('Ram', 15)
console.log(student)
console.log(student.age)

const car=new carDetails("Ferrari",80)
console.log(car)
console.log(car.speed)

console.log(name)
console.log(value)

console.log(sum(6, 3))
console.log(div(6, 3))
