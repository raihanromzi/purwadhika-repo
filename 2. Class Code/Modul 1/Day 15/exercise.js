// Write a code to check whether the date is a weekend.
const checkWeekend = (date) => {
  try {
    const day = new Date(date)
    return day.getMonth()
  } catch (e) {
    return 'Date Format is Not Correct'
  }
}

console.log(checkWeekend('2013/1/16'))