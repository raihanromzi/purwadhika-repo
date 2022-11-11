const books = [
  {
    'name': 'Comic',
    'stock': 5,
    'price': 10000
  },
  {
    'name': 'Social Book',
    'stock': 10,
    'price': 20000
  },
  {
    'name': 'Science Book',
    'stock': 12,
    'price': 25000
  }
]

const showProducts = (books) => {
  let listBooks = ''
  for (let i = 0; i < books.length; i++) {
    listBooks += `${i + 1}. ${books[i]['name']} - ${books[i]['stock']} - ${books[i]['price']}\n`
  }
  const choice = prompt(listBooks + '\n' + 'Select Book to Buy')
  const buy = prompt(`How Many Books`)
  validateChoice(choice.toString().toLowerCase(), books)
  validateStock(choice.toString().toLowerCase(), Number(buy), books)
  showTotal(choice.toString().toLowerCase(), buy, books)
}

const validateChoice = (bookName, books) => {
  for (let i = 0; i < books.length; i++) {
    if (bookName === books[i]['name']) {
      validateStock(books)
    }
  }
}

const validateStock = (nameBook, buy, books) => {
  for (let i = 0; i < books.length; i++) {
    if (nameBook === books[i]['name'].toLowerCase()) {
      if (buy > books[i]['stock']) {
        alert('Book Out of Stock')
      } else {
        showTotal(nameBook, buy, books)
      }
    }
  }
}

const showTotal = (nameBook, buy, books) => {
  const checkout = 'Please Input Price Correctly'
  let price = ''
  for (let i = 0; i < books.length; i++) {
    if (nameBook === books[i]['name'].toLowerCase()) {
      price = books[i]['price']
      const total = prompt(`${checkout}\nTotal: ${price}`)
      if (Number(total) === price) {
        prompt('Success! Happy Reading!')
        books[i]['stock']--
      } else {
        prompt('Wrong!')
      }
    }
  }
}

const app = () => {
  let flag = true
  while (flag) {
    let welcomeChoice = prompt('Hello! Welcome to Book Store! Press 1 to Continue (Exit: Press 0)')
    if (welcomeChoice === '0') {
      flag = false
      break
    }

    if (welcomeChoice === '1') {
      showProducts(books)
    }

  }
}

app()