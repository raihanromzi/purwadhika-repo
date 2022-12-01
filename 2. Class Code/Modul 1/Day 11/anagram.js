const isAnagram = (str1, str2) => {
  const arrStr1 = str1.split('')
  const arrStr2 = str2.split('')

  if (arrStr1.length !== arrStr2.length) {
    return false
  }

  for (let i = 0; i < arrStr1.length; i++) {
    for (let j = 0; j < arrStr2.length; j++) {
      if (arrStr1[i] === arrStr2[j]) {
        arrStr2.splice(j, 1)
      }
    }
  }

  return arrStr2.length === 0
}

console.log(isAnagram('rap', 'car'))
