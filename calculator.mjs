// let value = 5
let value = 5
let name = 'Ram'

class studentDetails {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export {studentDetails, name, value}

export function sum(a, b) {
  return a + b
}
export function sub(a, b) {
  return a - b
}

function mul(a, b) {
  return a * b
}
function div(a, b) {
  return a / b
}

export {mul, div}

export class carDetails {
  constructor(name, speed) {
    this.name = name
    this.speed = speed
  }
}

