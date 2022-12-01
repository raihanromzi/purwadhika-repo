const romanToInteger = (romanStr) => {
  const romanNumerals = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  const arrRomanStr = romanStr.split('').reverse()
  let result = 0, current, previous = 0

  for (const char of arrRomanStr) {
    current = romanNumerals.get(char)
    if (current >= previous) {
      result += current
    } else {
      result -= current
    }
    previous = current
  }
  return result
}
console.log(romanToInteger('MCMXCIV'))
