/**
 *
 *
 * @param {String} str
 */
function getLookup(str) {
    return str.split('').reduce((acc, cur) => {
        acc[cur] = acc[cur] ? (acc[cur] + 1) : 1

        return acc
    }, {})
}

/**
 *
 *
 * @param {String} a
 * @param {String} b
 * 
 * @return {Number} result
 */
export function makeAnagram(a, b) {
    let result = 0
    const lookupA = getLookup(a)
    const lookupB = getLookup(b)

    Object.keys(lookupA).forEach(key => {
        if (lookupB[key]) {
            result += Math.abs(lookupA[key] - lookupB[key])
            delete lookupB[key]
        } else {
            result += lookupA[key]
        }
        delete lookupA[key]
    })

    Object.keys(lookupB).forEach(key => {
        if (lookupA[key]) {
            result += Math.abs(lookupA[key] - lookupB[key])
            delete lookupA[key]
        } else {
            result += lookupB[key]
        }
        delete lookupB[key]
    })

    return result
}