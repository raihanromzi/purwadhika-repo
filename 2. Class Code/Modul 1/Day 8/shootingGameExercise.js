class ShootingGame {

  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }

  static getRandom() {
    const items = [{ health: 10 }, { power: 10 }]
    const random = Math.random() * 2
    if (random <= 0.5) {
      return items[0]
    } else if (random > 0.5) {
      return items[1]
    }
  }

  star() {
    let i = 1
    let flag = true
    while (flag) {
      console.log(`Game - ${i}`)
      if (this.player1.health <= 0) {
        flag = false
      } else if (this.player2.health <= 0) {
        flag = false
      }
      // 1. Show Status
      console.log(this.player1.showStatus())
      console.log(this.player2.showStatus())

      // 2. Generate Random Item
      this.player1.useItem()
      this.player2.useItem()

      // 3. War
      this.player1.hit(this.player2.power)
      this.player2.hit(this.player1.power)
      i++
    }
  }
}

class Player {
  name
  health = 100
  power = 10

  set name(value) {
    this.name = value
  }

  hit(power) {
    this.health -= power
  }

  useItem() {
    const bonusItem = ShootingGame.getRandom()
    Object.keys(bonusItem) === 'health' ? this.health += 10 : this.power += 10
  }

  showStatus() {
    return `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
  }
}

const player1 = new Player()
const player2 = new Player()
player1.name = 'A'
player2.name = 'B'
player1.hit(10)

const shootingGame = new ShootingGame(player1, player2)
shootingGame.star()
