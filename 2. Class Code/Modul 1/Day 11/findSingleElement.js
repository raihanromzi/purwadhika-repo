const findSingleChar = (arr) => {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1
      console.log(obj)
    } else {
      if (obj[arr[i]]) {
        delete obj[arr[i]]
      }
    }
  }
  return `Single Element is: ${Object.keys(obj)[0]}`
}

console.log(findSingleChar([4, 1, 2, 1, 2]))