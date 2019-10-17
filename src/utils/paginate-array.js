export default (array, subArraySize) => {
  const outputArray = []
  const rangeArray = (
    Array(
      Math.round(array.length / subArraySize)
    )
  )
    .fill('')
    .map((_, index) => index + 1)

  let offset = 0

  rangeArray.forEach((item) => {
    outputArray.push(array.slice(offset, item * subArraySize))
    offset = item * subArraySize
  })

  return outputArray
}
