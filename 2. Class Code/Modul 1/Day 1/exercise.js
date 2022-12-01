const findAreaRectangle = (n) => {
  return n * n
}

const findPerimeterRectangle = (n) => {
  return 4 * n
}

const findDiameterCircleCircle = (n) => {
  return 2 * Math.PI * n
}

const findAnglesOfTriangle = (deg1, deg2) => {
  return 180 - deg1 - deg2
}

const getDifferenceBetweenDates = (date1, date2) => {
  return date1 - date2
}

const convertDate = (n) => {
  const year = Math.floor(n / 365)
  const month = Math.floor(n % 365 / 30)
  const day = Math.floor(n % 365 % 30)
  return ({ year, month, day })
}

console.log(convertDate(400))