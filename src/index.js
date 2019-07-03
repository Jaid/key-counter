/** @module key-counter */

import {isString, isArrayLike, sortBy, fromPairs} from "lodash"
import sortKeys from "sort-keys"

/**
 * @example
 * import KeyCounter from "key-counter"
 * const counter = KeyCounter()
 * counter.feed("bananas")
 * counter.get("bananas") === 1
 */
export default class {

  /**
   * @constructor
   * @param {string[]|Object<string, number} [initialValues]
   */
  constructor(initialValues) {
    this.map = {}
    if (initialValues) {
      this.feed(initialValues)
    }
  }

  /**
   * @param {Object<string, number>}
   */
  feedWithMap(counterMap) {
    for (const [key, incrementValue] of Object.entries(counterMap)) {
      this.feed(key, incrementValue)
    }
  }

  /**
   * @param {string[]} stringArray
   * @param {number} [incrementValue=1]
   */
  feedWithArray(stringArray, incrementValue) {
    for (const key of stringArray) {
      this.feed(key, incrementValue)
    }
  }

  /**
   * @param {string} key
   * @param {number} [incrementValue=1]
   */
  feedWithKey(key, incrementValue = 1) {
    if (!this.map.hasOwnProperty(key)) {
      this.map[key] = incrementValue
    } else {
      this.map[key] += incrementValue
    }
  }

  /**
   * @param {string|string[]|Object<string, number>} value
   * @param {number} [incrementValue=1]
   */
  feed(value, incrementValue = 1) {
    if (value |> isString) {
      this.feedWithKey(value, incrementValue)
    } else if (value |> isArrayLike) {
      this.feedWithArray(value, incrementValue)
    } else {
      this.feedWithMap(value)
    }
  }

  /**
   * @param {string} key
   * @returns {null|number}
   */
  get(key) {
    return this.map[key] || null
  }

  /**
   * @returns {number} Number of different keys
   */
  size() {
    return this.keys().length
  }

  /**
   * @returns {string[]} All different keys
   */
  keys() {
    return Object.keys(this.map)
  }

  values() {
    return Object.values(this.map)
  }

  /**
   * @returns {number} Sum of all counts
   */
  sum() {
    return Object.values(this.map).reduce((sum, value) => {
      return sum + value
    }, 0)
  }

  /**
   * @returns {Object<string, number>}
   */
  toObject() {
    return {...this.map}
  }

  /**
   * @returns {Object<string, number>}
   */
  toObjectSortedByKeys() {
    return sortKeys(this.map)
  }

  /**
   * @returns {Object<string, number>}
   */
  toObjectSortedByValues() {
    return fromPairs(sortBy(Object.entries(this.map), [entry => entry[1], entry => entry[0]]))
  }

}