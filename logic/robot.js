class Robot {
  constructor(matrix, target) {
    this.matrix = matrix
    this.target = target
    this.currentPosition = {x: 0, y: 0}
    this.currentValue = this.getCurrentValue()
    this.lastVectorIndex = this.matrix[0].length - 1
    this.lastMatrixIndex = this.matrix.length - 1
  }

  getCurrentValue() {
    return this.matrix[this.currentPosition.y][this.currentPosition.x]
  }

  walkUp() {
    if (this.canWalk('y', this.currentPosition.y - 1)) {
      this.currentPosition.y = this.currentPosition.y - 1
      this.walkToBeginning()
    }
  }

  walkToBeginning(index) {
    const initialIndex = index || 0

    if (this.matrix[this.currentPosition.y][initialIndex] !== 0) {
      this.currentPosition.x = initialIndex
      return
    }

    this.walkToBeginning(initialIndex + 1)
  }

  walkRight() {
    const nextIndex = this.currentPosition.x + 1

    if (this.canWalk('x', nextIndex)) {
      this.currentPosition.x = nextIndex
      return
    }

    if (
      nextIndex === this.lastVectorIndex && 
      this.matrix[this.currentPosition.y][nextIndex] === 0
    ) {
      this.walkDown()
      return
    }

    if (typeof this.matrix[this.currentPosition.y][nextIndex] !== 'undefined') {
      this.currentPosition.x = nextIndex
      this.walkRight()
    }
  }

  walkDown() {
    const nextIndex = this.currentPosition.y + 1

    if (this.canWalk('y', nextIndex)) {
      this.currentPosition.y = nextIndex
      
      if (!this.isTheEnd()) {
        this.walkToBeginning()
      }
    }
  }

  walkLeft() {
    const nextIndex = this.currentPosition.x - 1
  
    if (this.canWalk('x', nextIndex)) {
      this.currentPosition.x = nextIndex
    }
  }

  canWalk(axis, index) {
    if (axis === 'x') {
      return this.matrix[this.currentPosition.y][index]
    }

    if (axis === 'y') {
      return this.matrix[index]
    }
  }

  hasFound() {
    return this.getCurrentValue() === this.target
  }

  isTheEnd() {
    return (
      JSON.stringify({x: this.lastVectorIndex, y: this.lastMatrixIndex}) ===
      JSON.stringify(this.currentPosition)
    )
  }

  printProgress() {
    console.log(`> Current position: ${JSON.stringify(this.currentPosition)}`)
    console.log(`> Current value: ${this.getCurrentValue()}`)
  }

  walk() {
    if (this.hasFound()) {
      console.log('Found!')
      return
    }

    this.printProgress()

    this.walkRight()

    if (this.currentPosition.x === this.lastVectorIndex) {
      this.walkDown()
    }

    this.printProgress()

    if (this.isTheEnd()) {
      this.walkToBeginning()

      this.matrix[this.lastMatrixIndex].forEach(() => {
        this.walkRight()
        this.printProgress()

        if (this.hasFound()) {
          console.log('Found!')
          return
        }
      })

      return
    }

    this.walk()
  }
}

module.exports = Robot
