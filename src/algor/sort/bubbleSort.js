/* eslint-disable */
const bubbleSort = function name(arr) {
    const lastSortedIndex = arr.length - 1
    let sorted = false

    while (!sorted) {
        sorted = true

        for (let i = 0; i < lastSortedIndex; i += 1) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
}