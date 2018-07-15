/* eslint-disable */
/**
 *
 *
 * @param {Number[]} arr
 */
export function countSwaps(arr) {
    const lastSortedIndex = arr.length - 1
    let numOfSwaps = 0
    let sorted = false

    while (!sorted) {
        sorted = true

        for (let i = 0; i < lastSortedIndex; i += 1) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
                numOfSwaps += 1
            }
        }
    }

    console.log(`Array is sorted in ${numOfSwaps} swaps.`)
    console.log(`First Element: ${arr[0]}`)
    console.log(`Last Element: ${arr[arr.length - 1]}`)
}