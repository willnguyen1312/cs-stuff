/* eslint-disable */

function insertionSort(items) {
    for (var i = 0; i < items.length; i++) {
        let value = items[i]
        let j
        // store the current item value so it can be placed right
        for (j = i - 1; j > -1 && items[j] > value; j--) {
            // loop through the items in the sorted array (the items from the current to the beginning)
            // copy each item to the next one
            items[j + 1] = items[j]
        }
        // the last item we've reached should now hold the value of the currently sorted item
        items[j + 1] = value
    }
}

const arr = [1, 0, 5, 3]

insertionSort(arr)

console.log(arr);