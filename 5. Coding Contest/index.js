function beautifulDays(i, j, k) {
  let counter = 0
  for (let day = i; day <= j; day++) {
    const reverseDay = parseInt(day.toString().split('').reverse().join(''))
    const result = Math.abs(day - reverseDay) / k
    if (Number.isInteger(result) && result % 1 === 0) {
      counter++
    }
  }
  return counter
}

function timeConversion(s) {
  const pmCheck = s.includes('PM')
  const hrs = s.replace(/[\W_a-zA-Z]/g, ' ').trim().split(' ')[0]
  let newTime = ''

  if (hrs === 12 && pmCheck === false) {
    newTime = `00:${s.split(':')[1]}:${s.split(':')[2].replace('AM', '')}`
  } else if (hrs === 12 && pmCheck === true) {
    newTime = '12' + ':' + s.split(':')[1] + ':' + s.split(':')[2].replace('PM', '')
  } else if (!pmCheck && hrs < 10) {
    newTime = '0' + hrs + ':' + s.split(':')[1] + ':' + s.split(':')[2].replace('AM', '')
  } else if (!pmCheck) {
    newTime = hrs + ':' + s.split(':')[1] + ':' + s.split(':')[2].replace('AM', '')
  } else if (pmCheck) {
    newTime = (parseInt(hrs) + 12) + ':' + s.split(':')[1] + ':' + s.split(':')[2].replace('PM', '')
  }

  return newTime
}

function catsAndMouse(x, y, z) {
  const catA = Math.abs(x - z) < Math.abs(y - z)
  const catB = Math.abs(x - z) > Math.abs(y - z)
  const mouseC = Math.abs(x - z) === Math.abs(y - z)
  if (catA) {
    return 'Cat A'
  } else if (catB) {
    return 'Cat B'
  } else if (mouseC) {
    return 'Mouse C'
  }
}

console.log(timeConversion('10:00:00PM'));
