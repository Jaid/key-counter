/** @module key-counter */

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @example
 * import keyCounter from "key-counter"
 * const result = keyCounter()
 * result === 1549410770
 * @function
 * @returns {number} Seconds since epoch
 */
export default class {

  /**
   * @constructor
   * @param {string[]|Object<string, number} initialValues
   */
  constructor(initialValues) {
    this.map = {}
  }

  /**
   * @contructor
   * @param {Object<string, number>}
   */
  feedWithMap(counterMap) {

  }

  /**
   * @param {string[]} stringArray
   */
  feedArray(stringArray) {

  }

  /**
   * @param {string} key
   */
  feed(key) {

  }

}