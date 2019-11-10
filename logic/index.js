const Robot = require('./robot')

const matrix = [
  [1,1,1,1],
  [0,1,1,0],
  [0,1,0,1],
  [0,1,9,1],
  [1,1,1,1]
]

const robot = new Robot(matrix, 9)
robot.walk()
