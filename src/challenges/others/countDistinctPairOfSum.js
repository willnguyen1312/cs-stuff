/**
 *
 *
 * @param {Number[]} arr
 * @param {Number} sum
 * @returns {Number} result
 */
function countDistinctPairOfSumFirstTry(arr, sum) {
    let result = 0
    const lookup = arr.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = true
        }
        return acc
    }, {})


    // eslint-disable-next-line
    Object.keys(lookup).reduce((acc, cur) => {
        const complement = sum - cur
        if (lookup[complement]) {
            delete lookup[cur]
            delete lookup[complement]
            result += 1
        }
    })

    return result

}

/**
 *
 *
 * @param {Number[]} arr
 * @param {Number} sum
 * @returns {Number} result
 */
function countDistinctPairOfSumSecondTry(arr, sum) {
    let result = 0
    const set = new Set(arr)

    // eslint-disable-next-line
    for (const item of set) {
        const complement = sum - item
        if (set.has(complement)) {
            result += 1
            set.delete(item)
            set.delete(complement)
        }
    }
    return result
}

export {
    countDistinctPairOfSumFirstTry,
    countDistinctPairOfSumSecondTry
}