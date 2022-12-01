const students1 = [
  {
    name: 'A',
    email: 'a@gmail.com',
    age: 1,
    score: 1
  },
  {
    name: 'B',
    email: 'b@gmail.com',
    age: 2,
    score: 2
  },
  {
    name: 'C',
    email: 'c@gmail.com',
    age: 3,
    score: 3
  },
  {
    name: 'D',
    email: 'd@gmail.com',
    age: 4,
    score: 4
  }
]

const students2 = [
  {
    name: 'E',
    email: 'a@gmail.com',
    age: 5,
    score: 5
  },
  {
    name: 'F',
    email: 'b@gmail.com',
    age: 6,
    score: 6
  },
  {
    name: 'G',
    email: 'c@gmail.com',
    age: 7,
    score: 7
  },
  {
    name: 'H',
    email: 'd@gmail.com',
    age: 8,
    score: 8
  }
]

class CalculateStudents {
  #maxAge
  #minAge
  #averageAge
  #maxScore
  #minScore
  #averageScore

  constructor(arrStudents) {
    this.arrStudents = arrStudents
  }

  findHighestLowestAverageScore() {
    this.#maxScore = this.arrStudents[0].score
    this.#minScore = this.arrStudents[0].score
    this.#averageScore = 0

    for (let i = 0; i < this.arrStudents.length; i++) {
      if (this.arrStudents[i].score > this.#maxScore) {
        this.#maxScore = this.arrStudents[i].score
      } else if (this.arrStudents[i] < this.#maxScore) {
        this.#maxScore = this.arrStudents[i].score
      }
      this.#averageScore += this.arrStudents[i].score
    }

    return ({
      highest: this.#maxScore / this.arrStudents.length,
      lowest: this.#minScore,
      average: this.#averageScore
    })
  }

  findHighestLowestAge() {
    this.#maxAge = this.arrStudents[0].age
    this.#minAge = this.arrStudents[0].age
    this.#averageAge = 0

    for (let i = 0; i < this.arrStudents.length; i++) {
      if (this.arrStudents[i].age > this.#maxAge) {
        this.#maxAge = this.arrStudents[i].age
      } else if (this.arrStudents[i] < this.#maxAge) {
        this.#maxAge = this.arrStudents[i].age
      }
      this.#averageAge += this.arrStudents[i].age
    }

    return ({
      highest: this.#maxAge / this.arrStudents.length,
      lowest: this.#minAge,
      average: this.#averageAge
    })
  }
}

const a = new CalculateStudents(students2)

console.log(a.findHighestLowestAge())
console.log(a.findHighestLowestAverageScore())

const b = {
  a: 'a'
}

console.log(Object.entries(b).length)

