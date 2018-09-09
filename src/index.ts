import { ITypes } from './types'

/**
 * Creates re-usable types object for easy and sematic mapping unique actions types
 * @example
 * types('PREFIX', ['foo', 'bar'])
 * // will return
 * { foo: 'PREFIX/foo', bar: 'PREFIX/bar' }
 * @param {String} prefix Types prefix
 * @param {Array<String>} types Types list
 * @returns {Object} Types object
 */
const types = (prefix: string, types: string[] = []): ITypes =>
  types.reduce(
    (acc, type) =>
      Object.assign(acc, {
        [type]: `${prefix}/${type}`
      }),
    {}
  )

export default types
