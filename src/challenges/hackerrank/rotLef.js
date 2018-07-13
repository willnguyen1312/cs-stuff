/**
 *
 *
 * @param {Number} a
 * @param {Number} d
 * 
 * @return {Number[]} result
 */
export function rotLeft(a, d) {
    const {
        length
    } = a
    const result = Array.from({
        length
    })

    for (let i = 0; i < length; i += 1) {
        const index = (length - d + i) % length

        result[index] = a[i]
    }

    return result
}