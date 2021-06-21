/**
 * сallback for map
 * @template T, V
 *
 * @callback callbackForMap
 * @param {T} element
 * @param {number} [index]
 * @param {T[]} [array]
 * @returns {V}
*/

/**
 * custom function Array.prototype.map
 * 
 * @template T, V
 *
 * @param {callbackForMap} callback
 * @param {T[]} collection
 * @returns {V[]}
 *
 * @example mapCustom(el => el + 1, [1, 2, 3]) // [2, 3, 4]
 */
export const mapCustom = (callback, collection) => {
  return collection.reduce((result, currentValue, index, array) => [...result, callback(currentValue, index, array)], [])
}
