/**
 *
 *
 * @param {Number[]} arr
 */
function birthdayCakeCandles(arr) {
    let max = arr[0]
    const lookup = {
        [arr[0]]: 1
    }

    for (let i = 1; i < arr.length; i += 1) {
        if (!lookup[arr[i]]) {
            lookup[arr[i]] = 1
        } else {
            lookup[arr[i]] += 1
        }

        if (max < arr[i]) {
            max = arr[i]
        }
    }

    return lookup[max]
}

export {
    birthdayCakeCandles
}