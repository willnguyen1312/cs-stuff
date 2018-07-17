/**
 *
 *
 * @param {Function} func
 * @param {Number} arity
 */
export function curry(func, arity = func.length) {
    return function closure(...args) {
        if (args.length >= arity) {
            return func(...args)
        }
        return curry(func.bind(this, ...args), arity - args.length)

    }
}