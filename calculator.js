// // let value = 5
// function sum(n1, n2) {
//   return n1 + n2
// }
// class StudentDetails {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

function sum(a, b) {
  return a + b
}
exports.sum = sum
function sub(a, b) {
  return a - b
}

exports.sub = sub

class studentDetails {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
exports.studentDetails = studentDetails

class carDetails {
  constructor(name, speed) {
    this.name = name
    this.speed = speed
  }
}

exports.carDetails = carDetails
