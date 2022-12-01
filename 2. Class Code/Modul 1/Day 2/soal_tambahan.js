// BMI
const calculateBMI = (weight, height) => {
  const bmi = weight / (height ** 2)
  if (bmi < 18.5) {
    console.log('Under')
  } else if (bmi < 25) {
    console.log('Ideal')
  } else {
    console.log('Over')
  }
}
calculateBMI(60, 1.7)

// FizzBuzz
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(`FizzBuzz ${i}`)
    } else if (i % 3 === 0) {
      console.log(`Buzz ${i}`)
    } else if (i % 5 === 0) {
      console.log(`Fizz ${i}`)
    } else {
      console.log(`${i}`)
    }
  }
}

fizzBuzz(15)

