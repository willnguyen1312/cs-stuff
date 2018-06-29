/**
 *
 *
 * @param {Number[]} a
 */
function xorSubsequence(a) {
    let subArr = []
    const {
        length
    } = a

    for (let i = 0; i < length; i += 1) {
        for (let j = i + 1; j <= length; j += 1) {
            const item = a.slice(i, j)
            subArr.push(item)
        }
    }

    // eslint-disable-next-line
    subArr = subArr.map(arr => arr.reduce((acc, cur) => acc ^ cur))

    const counts = {}
    subArr.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1
    })

    const keys = Object.keys(counts)

    let key = keys[0]
    let max = counts[key]

    for (let i = 1; i < keys.length; i += 1) {
        const num = counts[keys[i]]
        if (num === max && keys[i] < key) {
            key = keys[i]
        }

        if (num > max) {
            key = keys[i]
            max = num
        }
    }

    console.log(`${key} ${max}`)

}

xorSubsequence([2, 1, 1, 3])