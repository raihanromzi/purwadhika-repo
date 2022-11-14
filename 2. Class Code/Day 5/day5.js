// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).

// With Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

const arr = [12, 35, 7, 1, 2, 8]
// Find Lower
console.log(bubbleSort(arr)[0])

// Find Max
console.log(bubbleSort(arr)[arr.length - 1])

// Find Average
const findAverage = (arr) => {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
  }
  return res / arr.length
}

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
const concatWords = (arr) => {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result += `${arr[i]} `
    } else if (i === arr.length - 1) {
      result += ' and ' + arr[i]
    } else {
      result += ',' + arr[i]
    }
  }
  return result
}
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
const calculateTwoArray = (arr1, arr2) => {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (i === j) {
        result.push(arr1[i] + arr2[j])
      }
    }
  }
  return result
}

console.log(calculateTwoArray([1, 2, 3], [3, 2, 1]))


