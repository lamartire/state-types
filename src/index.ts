import { ITypes } from './types'

const types = (prefix: string, types: string[]): ITypes =>
  types.reduce(
    (acc, type) =>
      Object.assign(acc, {
        [type]: `${prefix}/${type}`
      }),
    {}
  )

export default types
