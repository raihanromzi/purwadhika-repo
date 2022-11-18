class Calculator {
  #operation = []
  #history = []

  set addOperation(number) {
    this.#operation.push(number.toString().replace(/ +/g, ''))
  }

  get showHistory() {
    return this.#history
  }

  clearHistory() {
    this.#history = []
  }

  showResult() {
    if (this.#operation.length !== 0) {
      let result = 0
      let logOperation = ''

      for (let i = 0; i < this.#operation.length; i++) {
        try {
          result = eval(this.#operation[i])
          logOperation = this.#operation[i]
        } catch (e) {
          return 'NaN'
        }
      }

      this.#operation = []
      this.#history.push(`${logOperation} = ${result}`)
      return `${logOperation} = ${result}`
    } else {
      return 'Please Input Operation'
    }
  }
}

const calculator = new Calculator()

calculator.addOperation = '1+20'
console.log(calculator.showResult())

calculator.addOperation = '5+5'
console.log(calculator.showResult())

calculator.addOperation = '50+5*2'
console.log(calculator.showResult())

console.log(calculator.showHistory)
calculator.clearHistory()
console.log(calculator.showHistory)
