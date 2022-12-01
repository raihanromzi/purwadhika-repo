// 1
const isObject = (object) => {
  return object != null && typeof object === 'object'
}

const isEqual = (obj1, obj2) => {
  let props1 = Object.getOwnPropertyNames(obj1)
  let props2 = Object.getOwnPropertyNames(obj2)
  if (props1.length !== props2.length) {
    return false
  }
  for (let i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]]
    let val2 = obj2[props1[i]]
    let isObjects = isObject(val1) && isObject(val2)
    if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
      return false
    }
  }
  return true
}

// 2
const obj1 = {
  a: '1',
  b: '2',
  c: '3'
}

const obj2 = {
  a: '1',
  c: '3'
}
const getIntersection = (obj1, obj2) => {
  for (const key1 of Object.keys(obj1)) {
    for (const key2 of Object.keys((obj2))) {
      if (key1 === key2) {
        console.log(`{${key1}: ${obj1[key1]}}`)
      }
    }
  }
}

// 3
const array1 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 2', email: 'student2@mail.com' }
]
const array2 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 3', email: 'student3@mail.com' },
]

const mergeTwoArrays = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if ((arr2[i].name === arr1[j].name) && (arr2[i].email === arr1[j].email)) {
        i++
        j++
      }
      if (arr2[i]) {
        arr1.push(arr2[i])
      }
    }
  }
  return arr1
}

console.log(mergeTwoArrays(array1, array2))