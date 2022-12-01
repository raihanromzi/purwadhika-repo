const findMajorityElement = (nums) => {
  const obj = {}
  let objMajority = {}
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1
    } else {
      obj[nums[i]] += 1
      if (obj[nums[i]] > max) {
        max = obj[nums[i]]
        objMajority = {}
        objMajority[nums[i]] = max
      }
    }
  }
  return `Majority Element is: ${Object.keys(objMajority)[0]}`
}

console.log(findMajorityElement([3, 2, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2]))
