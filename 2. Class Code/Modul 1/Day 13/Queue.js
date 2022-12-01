module.exports = class Queue {

  allProcess = new Map([])

  async add(item) {
    const randomInterval = Math.round(Math.random() * (3000 - 500)) + 500
    const inQueue = item.toString()
    const delay = () => new Promise(resolve => setTimeout(resolve, randomInterval))
    await delay(this.allProcess.set(inQueue, randomInterval))
  }

  runProcess() {
    for (let [key, value] of this.allProcess.entries()) {
      console.log(`${key} Done ${((value / 1000) % 60)} Second `)
    }
  }
}
