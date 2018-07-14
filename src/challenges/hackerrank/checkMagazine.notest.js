/**
 *
 *
 * @param {String} magazine
 * @param {String} note
 */
export function checkMagazine(magazine, note) {
    let valid = true
    const lookup = magazine.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? (acc[cur] + 1) : 1
        return acc
    }, {})


    for (const item of note) {
        if (lookup[item]) {
            lookup[item] -= 1
        } else {
            valid = false
            break
        }
    }

    console.log(valid ? 'Yes' : 'No')
}