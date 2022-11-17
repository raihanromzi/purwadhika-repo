// Employee Salary
class Employee {

  #name
  #age
  #address
  #company
  workingHours = []
  totalSalary = 0

  constructor(name, age, address, company) {
    this.#name = name
    this.#age = age
    this.#address = address
    this.#company = company
  }

  get getWorkingHours() {
    let totalDaysWorks = this.workingHours.length
    let totalHoursWorks = 0
    for (let i = 0; i < this.workingHours.length; i++) {
      totalHoursWorks += this.workingHours[i]
    }
    return `${this.#name} has been working for ${totalDaysWorks}D, ${totalHoursWorks}H`
  }

  addWorking(hour) {
    this.workingHours.push(hour)
  }

  calculateTotalSalary() {
    console.log('')
  }
}

class FullTimeEmployee extends Employee {

  constructor(name, age, address, company) {
    super(name, age, address, company)
  }

  get TotalSalary() {
    this.calculateTotalSalary()
    return `Your Total Salary is Rp${this.totalSalary.toLocaleString()}`
  }

  calculateTotalSalary() {
    for (let i = 0; i < this.workingHours.length; i++) {
      for (let j = 1; j <= this.workingHours[i]; j++) {
        if (j <= 6) {
          this.totalSalary += 100000
        } else if (j >= 7) {
          this.totalSalary += 75000
        }
      }
    }
    return this.totalSalary
  }
}

class PartTimeEmployee extends Employee {
  constructor(name, age, address, company) {
    super(name, age, address, company)
  }

  get TotalSalary() {
    this.calculateTotalSalary()
    return `Your Total Salary is Rp${this.totalSalary.toLocaleString()}`
  }

  calculateTotalSalary() {
    for (let i = 0; i < this.workingHours.length; i++) {
      for (let j = 1; j <= this.workingHours[i]; j++) {
        if (j <= 6) {
          this.totalSalary += 50000
        } else if (j >= 7) {
          this.totalSalary += 30000
        }
      }
    }
    return this.totalSalary
  }
}

const fullTimer1 = new FullTimeEmployee('Raihan', 21, 'Bandung', 'Tokopedia')
fullTimer1.addWorking(7)
fullTimer1.addWorking(7)
fullTimer1.addWorking(8)
fullTimer1.addWorking(24)
console.log(fullTimer1.getWorkingHours)
console.log(fullTimer1.TotalSalary)

console.log()

const partTimer1 = new PartTimeEmployee('Dio', 23, 'Pekanbaru', 'Bukalapak')
for (let i = 0; i < 30; i++) {
  partTimer1.addWorking(i)
}
console.log(partTimer1.getWorkingHours)
console.log(partTimer1.TotalSalary)
