/**
 *
 *
 * @param {Number} n
 */
function staircase(n) {
    for (let i = 1; i <= n; i += 1) {
        console.log("#".repeat(i).padStart(n))
    }
}

staircase(95)