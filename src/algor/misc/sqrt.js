/* eslint-disable */
function floorSqrt(x) {

    if (x === 0 || x === 1) {
        return x
    }

    let start = 1
    let end = x
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (mid * mid == x) {
            return mid
        }


        if (mid * mid < x) {
            start = mid + 1
            ans = mid
        } else {
            end = mid - 1
        }
    }

    return ans
}

console.log(floorSqrt(10));