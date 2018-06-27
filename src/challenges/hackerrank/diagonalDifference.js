/**
 *
 *
 * @param {Array<Array<Number>>} arr
 * @returns {Number} result
 */
function diagonalDifference(arr) {
    let first = 0
    let second = 0
    const {
        length
    } = arr
    for (let i = 0; i < length; i += 1) {
        first += arr[i][i]
        second += arr[i][length - i - 1]
    }

    return Math.abs(first - second)
}

export {
    diagonalDifference
}