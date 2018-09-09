import types from '../src'

describe('types', () => {
  it('creates types hash with given prefix', () => {
    expect(types('@@PREFIX', ['foo', 'bar'])).toEqual({
      bar: '@@PREFIX/bar',
      foo: '@@PREFIX/foo'
    })
  })
})
