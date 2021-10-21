import { ChartOptions } from 'billboard.js'
import { ChartData, createOptions } from './index'

describe('parse', () => {
  it('parses simple ChartData', () => {
    const data: ChartData = {
      name: 'Foo',
      type: 'bar',
      values: [1,2,3]
    }
    const parsed = createOptions(data)
    const expected: ChartOptions = {
      data: {
        columns: [
          ['Foo', 1, 2, 3]
        ],
        types: {
          'Foo': 'bar',
        },
      },
    }
    expect(parsed).toEqual(expected)
  })
  it.skip('parses ChartData with named values', () => {
    const data: ChartData = {
      name: 'Foo',
      type: 'area',
      values: [
        { name: 'Herp', value: 1 },
        { name: 'Derp', value: 2 },
        { name: 'Slurp', value: 3 },
      ]
    }
    const parsed = createOptions(data)
    const expected: ChartOptions = {
      data: {
        json: [
          { name: 'Herp', value: 1 },
          { name: 'Derp', value: 2 },
          { name: 'Slurp', value: 3 },
        ],
        keys: {
          x: 'name',
          value: ['value'],
        },
        types: {
          'Foo': 'area',
        },
      },
    }
    expect(parsed).toEqual(expected)
  })
})
