// 1. Create a function that can create a triangle pattern according to the height
const triangle = (height) => {
  let result = ''
  let count = 1
  for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      if (count >= 10) {
        result += `${count} `
        count++
      } else {
        result += `0${count} `
        count++
      }
    }
    result += '\n'
  }
  console.log(result)
}

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 􏰃 with "Fizz", multiples of 􏰅 with "Buzz", multiples of 􏰃 and 􏰅 with "FizzBuzz".
const fizzBuzz = (n) => {
  let result = ''
  for (let i = 1; i <= n; i++) {
    i % 5 === 0 && i % 3 === 0 ? result += 'FizzBuzz\n' : i % 3 === 0 ? result += 'Fizz\n' : i % 5 === 0 ? result += 'Buzz\n' : result += `${i}\n`
  }
  console.log(result)
}

// Create a function to calculate Body Mass Index (BMI)
const BMI = (weight, height) => {
  const result = weight / ((height) ** 2)
  let output = ''
  result < 18.5 ? output += 'Less Weight' : result
}
