import { ChartData, createOptions } from './index'

describe('parse', () => {
  it('parses simple ChartData correctly', () => {
    const data: ChartData = {
      name: 'Foo',
      type: 'bar',
      values: [1,2,3]
    }
    const parsed = createOptions(data)

    expect(parsed).toEqual({

    })
  })
})
