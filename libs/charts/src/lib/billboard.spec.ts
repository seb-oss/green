import { ChartOptions } from 'billboard.js'
import { ChartSettings } from './types'
import { createOptions } from './billboard'

describe('parse', () => {
  it('parses simple ChartData', () => {
    const chart: ChartSettings = {
      data: [{
        name: 'Foo',
        type: 'bar',
        values: [1,2,3],
      }]
    }
    const parsed = createOptions(chart)
    const expected: ChartOptions = {
      data: {
        columns: [
          ['Foo', 1, 2, 3]
        ],
        types: {
          'Foo': 'bar',
        },
      },
      legend: { show: false },
    }
    expect(parsed).toEqual(expected)
  })
  it('parses ChartData with named x-axis', () => {
    const chart: ChartSettings = {
      data: [{
        name: 'Foo',
        type: 'area',
        values: [1, 2, 3],
      }],
      categories: [ 'Herp', 'Derp', 'Slurp' ],
    }
    const parsed = createOptions(chart)
    const expected: ChartOptions = {
      data: {
        columns: [
          ['Foo', 1, 2, 3]
        ],
        types: {
          'Foo': 'area'
        },
      },
      axis: {
        x: {
          categories: [ 'Herp', 'Derp', 'Slurp' ],
          type: 'category',
        },
      },
      legend: { show: false },
    }
    expect(parsed).toEqual(expected)
  })
  it('sets types from Chart to ChartData', () => {
    const chart: ChartSettings = {
      type: 'bar',
      data: [
        { name: 'Foo', values: [1] },
        { name: 'Bar', values: [2] },
      ]
    }
    const parsed = createOptions(chart)
    const expected: ChartOptions = {
      data: {
        columns: [
          ['Foo', 1],
          ['Bar', 2],
        ],
        types: {
          'Foo': 'bar',
          'Bar': 'bar',
        },
      },
      legend: { show: false },
    }
    expect(parsed).toEqual(expected)
  })
  it('makes ChartData type overrides Chart type', () => {
    const chart: ChartSettings = {
      type: 'bar',
      data: [
        { name: 'Foo', values: [1] },
        { name: 'Bar', values: [2], type: 'area' },
      ]
    }
    const parsed = createOptions(chart)
    const expected: ChartOptions = {
      data: {
        columns: [
          ['Foo', 1],
          ['Bar', 2],
        ],
        types: {
          'Foo': 'bar',
          'Bar': 'area',
        },
      },
      legend: { show: false },
    }
    expect(parsed).toEqual(expected)
  })
  it('sets bar as default', () => {
    const chart: ChartSettings = {
      data: [
        { name: 'Foo', values: [1] },
        { name: 'Bar', values: [2], type: 'area' },
      ]
    }
    const parsed = createOptions(chart)
    const expected: ChartOptions = {
      data: {
        columns: [
          ['Foo', 1],
          ['Bar', 2],
        ],
        types: {
          'Foo': 'bar',
          'Bar': 'area',
        },
      },
      legend: { show: false },
    }
    expect(parsed).toEqual(expected)
  })
})
