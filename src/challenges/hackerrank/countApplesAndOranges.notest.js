/**
 *
 *
 * @param {Number} s
 * @param {Number} t
 * @param {Number} a
 * @param {Number} b
 * @param {Number[]} apples
 * @param {Number[]} oranges
 *
 */
// eslint-disable-next-line
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let count = 0

    apples.forEach(distance => {
        const appleLocation = a + distance
        if (appleLocation >= s && appleLocation <= t) {
            count += 1
        }
    })
    console.log(count)

    count = 0

    oranges.forEach(distance => {
        const appleLocation = b + distance
        if (appleLocation >= s && appleLocation <= t) {
            count += 1
        }
    })

    console.log(count)
}