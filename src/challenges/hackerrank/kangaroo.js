/**
 *
 *
 * @param {Number} x1
 * @param {Number} v1
 * @param {Number} x2
 * @param {Number} v2
 * 
 * @return {String} result
 */
/* eslint no-param-reassign: 0 */
function kangaroo(x1, v1, x2, v2) {

    if (v1 <= v2) {
        return 'NO'
    }

    while (x1 < x2) {
        x1 += v1
        x2 += v2
    }
    return x1 === x2 ? 'YES' : 'NO'
}

export {
    kangaroo
}