/**
 *
 *
 * @param {Number[]} arr
 */
function migratoryBirds(arr) {
    const lookup = {}
    arr.forEach(id => {
        lookup[id] = lookup[id] ? lookup[id] + 1 : 1
    })

    return Object.keys(lookup).reduce((acc, cur) => {
        if (lookup[acc] < lookup[cur]) {
            return cur
        }
        if (lookup[acc] === lookup[cur]) {
            return acc < cur ? acc : cur
        }

        return +acc
    })
}

export {
    migratoryBirds
}