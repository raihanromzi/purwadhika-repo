const cToF = (c) => {
  return `${(c * (9 / 5)) + 32}`
}

const isOdd = (num) => {
  return `${num % 2 !== 0}`
}

const isPrime = (num) => {
  let count = 0
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      count++
    }
  }
  return count < 2
}

const sum = (n) => {
  let result = 0
  for (let i = 1; i <= n; i++) {
    result += i
  }
  return result
}

const factorial = (n) => {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}

let fibonacci = [0, 1]

function listFibonacci(num) {
  // starting at array index 1, and push current index + previous index to the array
  for (let i = 1; i < num; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  }
  return fibonacci
}

console.log(listFibonacci(10))
