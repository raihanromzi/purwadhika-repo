const maximumProfit = (prices) => {
  let max = null
  let temp = null
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (!max) {
        max = prices[j] - prices[i]
      } else {
        temp = prices[j] - prices[i]
        if (temp > max) {
          max = temp
        }
      }
    }
  }
  return max < 0 ? max = 0 : max
}

console.log(maximumProfit([7, 1, 5, 3, 6, 4]))