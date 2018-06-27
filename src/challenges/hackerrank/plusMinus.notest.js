/**
 *
 *
 * @param {Number[]} arr
 */
function plusMinus(arr) {
    const track = {
        pos: 0,
        neg: 0,
        zero: 0
    }

    const {
        length
    } = arr

    arr.reduce((acc, cur) => {
        if (cur === 0) {
            acc.zero += 1
        } else if (cur > 0) {
            acc.pos += 1
        } else {
            acc.neg += 1
        }
        return acc
    }, track)

    console.log((track.pos / length).toFixed(6))
    console.log((track.neg / length).toFixed(6))
    console.log((track.zero / length).toFixed(6))
}

export {
    plusMinus
}