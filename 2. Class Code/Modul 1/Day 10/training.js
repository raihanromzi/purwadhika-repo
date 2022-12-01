let result = 0
let nums = [3, 2, 4]
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length - 1; j++) {
    result += nums[i] + nums[j]
  }
}