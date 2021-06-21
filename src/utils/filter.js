// filter<T>(predicate: (element: T) => boolean, collection: T[]): T[]

/**
 * сallback for filter
 * @template T
 *
 * @callback callbackForFilter
 * @param {T} element
 * @param {number} [index]
 * @param {T[]} [array]
 * @returns {boolean}
 */

/**
 * custom function Array.prototype.filter
 *
 * @template T, V
 *
 * @param {callbackForFilter} predicate
 * @param {T[]} collection
 * @returns {V[]}
 *
 * @example filterCustom(el => el > 2, [1, 2, 3, 4, 5]) // [3, 4, 5]
 */

export const filterCustom = (predicate, collection) => {
  // eslint-disable-next-line array-callback-return
  return collection.reduce((result, currentValue, index, array) => {
    return predicate(currentValue, index, array) ? [...result, currentValue] : result;
  }, [])
}
