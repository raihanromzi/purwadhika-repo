const checkPalindrome = (word) => {
  word = word.replace(/, /g, '').toLowerCase()

  let stringToReverse = word.split('')
  let reverseStringLength = stringToReverse.length
  let reverseString = ''

  for (let i = reverseStringLength - 1; i >= 0; i--) {
    reverseString += stringToReverse[i]
  }

  return `Word: ${word} \nReverse: ${reverseString} \nPalindrome: ${reverseString === word}`
}

console.log(checkPalindrome('abba'))