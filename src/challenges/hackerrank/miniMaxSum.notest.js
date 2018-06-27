/**
 *
 *
 * @param {Number[]} arr
 */
function miniMaxSum(arr) {
    let min = Math.min(arr[0], arr[1])
    let max = Math.max(arr[0], arr[1])
    let sum = min + max

    for (let i = 2; i < arr.length; i += 1) {
        sum += arr[i]
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    console.log(`${sum - max}  ${sum - min}`)
}

miniMaxSum([1, 2, 3, 4, 5])