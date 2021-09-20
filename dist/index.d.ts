import { IsObjectsEqual } from './types';
/**
 * @description
 * function for compare not deep and deep object, not support compare Map and Set objects
 *
 * @param {Array} objectsArray
 * @returns {boolean}
 *
 * @example
 * isObjectsEqual([{a: '1'}, {a: '1'}])
 * // => true
 *
 * isObjectsEqual([{a: '1'}, {a: '2'}
 * // => false
 *
 * isObjectsEqual([{a: '1'}, {a: '1'}, {a: '2'}])
 * // => false
 *
 * const firstObject = {
 *     a: 1,
 *     b: {
 *         c: 1
 *     }
 * },
 * secondObject = {
 *     a: 1,
 *     b: {
 *         c: 2
 *     }
 * }
 *
 * isObjectsEqual([firstObject, secondObject])
 * // => false
 */
declare const isObjectsEqual: IsObjectsEqual;
export default isObjectsEqual;
