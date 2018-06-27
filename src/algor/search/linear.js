/**
 *
 *
 * @param {Array<Number>} arr
 * @param {Number} target
 * @returns {Number} index
 */
function linearSearch(arr = [], target) {
    if (!arr.length) {
        return -1
    }

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === target) {
            return i
        }
    }

    return -1
}

export {
    linearSearch
}