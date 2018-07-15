/* eslint-disable */

function findEleInRotArr(arr, l, h, key) {
    if (l > h) {
        return -1
    }

    let mid = Math.floor((l + h) / 2)
    if (arr[mid] == key) {
        return mid
    }

    // If arr[l...mid] is sorted 
    if (arr[l] <= arr[mid])
        if (key >= arr[l] && key <= arr[mid]) {
            return search(arr, l, mid - 1, key)
        }
    return search(arr, mid + 1, h, key)

    if (key >= arr[mid] && key <= arr[h]) {
        return search(a, mid + 1, h, key)
    }
    return search(arr, l, mid - 1, key)
}