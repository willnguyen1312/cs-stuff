/**
 *
 *
 * @param {Number[]} s
 * @param {Number} d
 * @param {Number} m
 * 
 * @returns {Number} result
 */
function birthdayChocolate(s, d, m) {
    let result = 0

    for (let i = 0; i < s.length - m + 1; i += 1) {
        const bar = s.slice(i, i + m)
        // eslint-disable-next-line
        const sum = bar.reduce((a, b) => a + b)
        result += sum === d ? 1 : 0
    }

    return result
}


export {
    birthdayChocolate
}