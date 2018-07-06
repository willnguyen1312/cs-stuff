/**
 *
 *
 * @param {Number} n
 * @param {Number[]} ar
 * 
 * @returns {Number} result
 */
function sockMerchant(n, ar) {
    let result = 0
    const lookup = ar.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1

        return acc
    }, {})

    Object.keys(lookup).forEach(num => {
        result += Math.floor(lookup[num] / 2)
    })

    return result
}

export {
    sockMerchant
}