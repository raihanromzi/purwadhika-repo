class Player {

  #name
  #turn = null
  #currentBall = null

  constructor(name) {
    this.#name = name
  }

  get currentBall() {
    return this.#currentBall
  }

  set changeCurrentBall(ball) {
    this.#currentBall = ball
  }

  get getName() {
    return `Player Name is ${this.#name}`
  }

  set changeName(name) {
    this.#name = name
  }

  get totalTurn() {
    return this.#turn
  }

  set addTurn(turn) {
    this.#turn += turn
  }
}

class Billiard {

  static nineBall(player1, player2) {
    const ballAlreadyEntered = []
    const ballsOnField = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let flag = true
    let player1Turn = true
    let player2Turn = true
    let player1Balls = []
    let player2Balls = []
    let game = 1

    while (flag) {
      console.log(`Welcome To Game - ${game}`)
      if (player1Turn) {
        const player1Ball = ballsOnField[Math.floor(Math.random() * ballsOnField.length)]

        for (let i = 0; i <= ballAlreadyEntered.length + 1; i++) {
          const minBall = ballsOnField.reduce((a, b) => Math.min(a, b))

          if (player1Ball === 9) {
            console.log(`${player1.getName} Win in Game ${game} with ${player1.totalTurn} Turn`)
            flag = false
            break
          }

          if (player1Ball > minBall) {
            player1.addTurn = 1
            player1Turn = false
            player2Turn = true
            game++
            break
          }

          ballAlreadyEntered.push(player1Ball)
          ballsOnField.splice(i, 1)
          console.log(`${ballAlreadyEntered}`)
          game++
        }

      } else if (player2Turn) {
        const player2Ball = ballsOnField[Math.floor(Math.random() * ballsOnField.length)]

        for (let i = 0; i <= ballAlreadyEntered.length + 1; i++) {
          const minBall = ballsOnField.reduce((a, b) => Math.min(a, b))

          if (player2Ball === 9) {
            console.log(`${player2.getName} Win in Game ${game} with ${player1.totalTurn} Turn`)
            flag = false
            break
          }

          if (player2Ball === ballAlreadyEntered[i]) {
            break
          }

          if (player2Ball > minBall) {
            player1.addTurn = 1
            player1Turn = true
            player2Turn = false
            game++
            break
          }

          ballAlreadyEntered.push(player2Ball)
          ballsOnField.splice(i, 1)
          console.log(`${ballAlreadyEntered}`)
          game++
        }
      }
    }
  }
}

const player1 = new Player('Raihan')
const player2 = new Player('Bimo')
Billiard.nineBall(player1, player2)
