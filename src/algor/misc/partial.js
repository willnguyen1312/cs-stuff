/**
 *
 *
 * @param {Function} func
 * @param {Number} arity
 */
export function partial(func, args) {
    return func.bind(this, ...args)
}