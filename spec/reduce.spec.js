const { reduce } = require('../dist/index.js')

describe('reduce#array', () => {
  it('should operate on numbers', () => {
    const i = [1, 2, 3, 4, 5]
    const f = (acc, curr) => acc + curr
    const o = 15
    const b = 0

    expect(reduce(f, b, i)).toEqual(o)
  })

  it('should operate on strings', () => {
    const i = ['a', 'ab', 'abc', 'abcd', 'abcde']
    const f = (acc, curr) => acc + curr
    const o = 'aababcabcdabcde'
    const b = ''

    expect(reduce(f, b, i)).toEqual(o)
  })
})

describe('reduce#curry', () => {
  it('should return a function if not passed an iterable', () => {
    const f = n => n + 2
    const b = 0
    const c = reduce(f, b)

    expect(typeof c).toEqual('function')
  })

  it('should return a correct function', () => {
    const i = [ 1, 2, 3, 4, 5 ]
    const f = (a, b) => a + b
    const o = 15
    const b = 0
    const c = reduce(f, b)
    
    expect(c(i)).toEqual(o)
  })
})

