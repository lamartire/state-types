import types from '../src'

describe('types', () => {
  it('creates types hash with given prefix', () => {
    expect(types('@@PREFIX', ['foo', 'bar'])).toMatchSnapshot()
  })
})
