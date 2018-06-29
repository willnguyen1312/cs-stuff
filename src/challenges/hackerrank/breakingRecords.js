/**
 *
 *
 * @param {Number[]} scores[i]res
 * 
 * @returns {Number[]} result
 */
function breakingRecords(scores) {
    let max = 0
    let min = 0
    let currentMax = scores[0]
    let currentMin = scores[0]

    for (let i = 1; i < scores.length; i += 1) {
        if (scores[i] > currentMax) {
            max += 1
            currentMax = scores[i]
        }

        if (scores[i] < currentMin) {
            min += 1
            currentMin = scores[i]
        }
    }

    return [max, min]
}

export {
    breakingRecords
}