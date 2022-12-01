const arrToStr = (arr) => {
  let str = ''
  arr.map((val, idx) => idx == arrStr.length - 1 ? str += ' and ' + val : (idx == 0 ? str += val : str += ' , ' + val))
  return console.log(str)
}

const arr = [1, 2, 3]
arr.map(function (x) {
  console.log1(x)
})
