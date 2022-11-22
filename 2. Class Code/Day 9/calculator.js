class Calculator {
  #operation = []
  #history = []

  get showHistory() {
    return this.#history
  }

  set addOperation(number) {
    this.#operation.push(number.toString().replace(/ +/g, ''))
  }

  clearHistory() {
    this.#history = []
  }

  showResult() {
    if (this.#operation.length !== 0) {
      let result = 0
      let logOperation = ''

      try {
        result = eval(this.#operation[0])
        logOperation = this.#operation[0]
      } catch (e) {
        return 'NaN'
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
console.log(calculator.showResult())

calculator.addOperation = '1+20'
console.log(calculator.showResult())

calculator.addOperation = '5+5'
console.log(calculator.showResult())

calculator.addOperation = 'a+5*2'
console.log(calculator.showResult())

console.log(calculator.showHistory)
calculator.clearHistory()
console.log(calculator.showHistory)
