class GuessingGame {
  constructor() {
    this.min = null
    this.max = null
    this.number = null
  }

  setRange(min, max) {
    this.min = min
    this.max = max
  }

  guess() {
    return (this.number = Math.ceil((this.min + this.max) * 0.5))
  }

  lower() {
    this.max = this.number
  }

  greater() {
    this.min = this.number
  }
}

module.exports = GuessingGame
