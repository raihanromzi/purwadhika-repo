// 1. Write a code to display the multiplication table of a given integer.
const displayMultiplication = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number}x${i}`)
  }
}

// 2. Write a code to check whether a string is a palindrome or not.
const checkPalindrome = (word) => {
  const wordCheck = word.toLowerCase()
  const reverseWord = word.split('').reverse().join('').toLowerCase()
  if (wordCheck === reverseWord) {
    console.log(`${word} is Palindrome`)
  } else {
    console.log(`${word} is not Palindrome`)
  }
}

// 3. Write a code to convert centimeter to kilometer.
const convertCMtoKM = (cm) => {
  return `${cm} cm in km is ${cm / 1000} km`
}

// 4. Write a code to format number as currency (IDR)
const formatNumber = (rp) => {
  const arr = rp.toString().split('')
  const arrResult = []
  let result = 'Rp'
  for (let i = arr.length - 1; i >= 0; i--) {
    arrResult.push(arr[i])
  }

  console.log(arrResult)
  result += arrResult.reverse().join('')
  result += ',00'
  return result
}

const idr = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' })
// console.log(idr.format(10000))

const capitalizeWord = (word) => {
  let result = ''
  word.split(' ').forEach((word) => {
    result += word.charAt(0).toUpperCase() + word.slice(1) + ' '
  })
  return result
}

// Write a code to reverse a string.
const reverseString = (word) => {
  return word.split('').reverse().join('')
}
