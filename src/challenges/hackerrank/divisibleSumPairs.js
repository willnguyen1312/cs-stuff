/**
 *
 *
 * @param {Number} n
 * @param {Number} k
 * @param {Number[]} arr
 * 
 * @returns {Number} result
 */
function divisibleSumPairs(n, k, arr) {
    let result = 0

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if ((arr[i] + arr[j]) % k === 0) {
                result += 1
            }
        }
    }

    return result
}

export {
    divisibleSumPairs
}