/**
 *
 *
 * @param {Number} n
 * @param {Number} p
 * 
 * @returns {Number} result
 */
function pageCount(n, p) {
    const numPage = n % 2 ? n - 1 : n

    const pageFromLeft = Math.ceil((p - 1) / 2)
    const pageFromRight = Math.ceil((numPage - p) / 2)

    return pageFromLeft < pageFromRight ? pageFromLeft : pageFromRight
}

export {
    pageCount
}