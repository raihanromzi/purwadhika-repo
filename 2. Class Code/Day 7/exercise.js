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

const obj1 = {
  a: '1',
  b: '2',
  c: '3'
}

const obj2 = {
  a: '1',
  c: '3'
}

for (const key1 of Object.keys(obj1)) {
  for (const key2 of Object.keys((obj2))) {
    if (key1 === key2) {
      console.log(`{${key1}: ${obj1[key1]}}`)
    }
  }
}