/**
 * @param {string} str
 * @return {number}
 */
export function myAtoi(str) {
    const matchRegex = /^\s*[-+]?\d+/
    const match = str.match(matchRegex)
    const max = 2 ** 31 - 1
    const min = -(2 ** 31)

    if (!match) {
        return 0
    }

    const num = +match[0]

    if (num > max) {
        return max
    }

    if (num < min) {
        return min
    }

    return num
}