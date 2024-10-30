import { Axis, Chart, ChartOptions } from 'billboard.js'

import { createInfo, createOptions } from './billboard'
import { ChartSettings, Legend } from './types'

describe('billboard', () => {
  describe('createOptions', () => {
    it('parses simple ChartData', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [
          {
            name: 'Foo',
            type: 'bar',
            values: [1, 2, 3],
          },
        ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [['Foo', 1, 2, 3]],
          types: {
            Foo: 'bar',
          },
          axes: {
            Foo: 'y',
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('parses ChartData with named x-axis', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [
          {
            name: 'Foo',
            type: 'area',
            values: [1, 2, 3],
          },
        ],
        categories: ['Herp', 'Derp', 'Slurp'],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [['Foo', 1, 2, 3]],
          types: {
            Foo: 'area',
          },
          axes: {
            Foo: 'y',
          },
        },
        axis: {
          x: {
            categories: ['Herp', 'Derp', 'Slurp'],
            type: 'category',
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('sets types from Chart to ChartData', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        type: 'bar',
        data: [
          { name: 'Foo', values: [1] },
          { name: 'Bar', values: [2] },
        ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [
            ['Foo', 1],
            ['Bar', 2],
          ],
          types: {
            Foo: 'bar',
            Bar: 'bar',
          },
          axes: {
            Foo: 'y',
            Bar: 'y',
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('makes ChartData type overrides Chart type', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        type: 'bar',
        data: [
          { name: 'Foo', values: [1] },
          { name: 'Bar', values: [2], type: 'area' },
        ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [
            ['Foo', 1],
            ['Bar', 2],
          ],
          types: {
            Foo: 'bar',
            Bar: 'area',
          },
          axes: {
            Foo: 'y',
            Bar: 'y',
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('adds y2 axis when defined in data', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [
          {
            name: 'Foo',
            type: 'bar',
            values: [1, 2, 3],
            axis: 'y2',
          },
        ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [['Foo', 1, 2, 3]],
          types: {
            Foo: 'bar',
          },
          axes: {
            Foo: 'y2',
          },
        },
        axis: {
          y2: {
            show: true,
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('sets bar as default', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [
          { name: 'Foo', values: [1] },
          { name: 'Bar', values: [2], type: 'area' },
        ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [
            ['Foo', 1],
            ['Bar', 2],
          ],
          types: {
            Foo: 'bar',
            Bar: 'area',
          },
          axes: {
            Foo: 'y',
            Bar: 'y',
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('adds y base line if any value is negative', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [
          { name: 'Foo', values: [1] },
          { name: 'Bar', values: [-2], type: 'area' },
        ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [
            ['Foo', 1],
            ['Bar', -2],
          ],
          types: {
            Foo: 'bar',
            Bar: 'area',
          },
          axes: {
            Foo: 'y',
            Bar: 'y',
          },
        },
        grid: {
          y: {
            lines: [{ value: 0, class: 'base-line' }],
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('adds y base line if any value is negative', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [
          { name: 'Foo', values: [1] },
          { name: 'Bar', values: [-2], type: 'area' },
        ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [
            ['Foo', 1],
            ['Bar', -2],
          ],
          types: {
            Foo: 'bar',
            Bar: 'area',
          },
          axes: {
            Foo: 'y',
            Bar: 'y',
          },
        },
        grid: {
          y: {
            lines: [{ value: 0, class: 'base-line' }],
          },
        },
      }
      expect(parsed).toMatchObject(expected)
    })
    it('hide y axis if hidden', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [1] }],
        style: {
          axis: {
            y: {
              show: false,
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: Axis = {
        y: {
          show: false,
          clipPath: false,
        },
      }
      expect(parsed.axis).toEqual(expected)
    })
    it('hide x axis if hidden', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [1] }],
        style: {
          axis: {
            x: {
              show: false,
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: Axis = {
        x: {
          show: false,
          clipPath: false,
        },
      }
      expect(parsed.axis).toEqual(expected)
    })
    it('hide y2 axis if hidden', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [1], axis: 'y2' }],
        style: {
          axis: {
            y2: {
              show: false,
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: Axis = {
        y2: {
          show: false,
        },
      }
      expect(parsed.axis).toEqual(expected)
    })
    it('tooltip ratio format', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [],
      }
      const formatter = createOptions({
        settings,
        chartElement,
      }).tooltip.format.value.bind({})
      expect(formatter(undefined, 0)).toEqual('0%')
      expect(formatter(undefined, 0.5)).toEqual('50%')
      expect(formatter(undefined, 0.505)).toEqual('50.5%')
      expect(formatter(undefined, 0.5055)).toEqual('50.55%')
      expect(formatter(undefined, 0.50555)).toEqual('50.56%')
    })
    it('overrides tooltip number format', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [],
        style: {
          tooltipNumberFormat: (value) => `${value} kr`,
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const formattedNumber = parsed.tooltip.format.value.bind({})(
        100,
        undefined,
        undefined,
        undefined,
      )
      expect(formattedNumber).toEqual('100 kr')
    })
    it('overrides tooltip percentages', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [],
        style: {
          tooltipNumberFormat: (value, ratio) => `${value}/${value / ratio}`,
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const formattedNumber = parsed.tooltip.format.value.bind({})(
        10,
        0.1,
        undefined,
        undefined,
      )
      expect(formattedNumber).toEqual('10/100')
    })
    it('add tick config if ticksCount is specified in style', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [1], axis: 'y2' }],
        style: {
          axis: {
            y2: {
              show: false,
              ticksCount: 5,
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: Axis = {
        y2: {
          show: false,
          tick: {
            count: 5,
          },
        },
      }
      expect(parsed.axis).toEqual(expected)
    })
    it('add tick config if stepSize is specified in style', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [1], axis: 'y2' }],
        style: {
          axis: {
            y2: {
              show: false,
              stepSize: 5,
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: Axis = {
        y2: {
          show: false,
          tick: {
            stepSize: 5,
          },
        },
      }
      expect(parsed.axis).toEqual(expected)
    })
    it('add tick config if values is specified for axis in style', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [] }],
        style: {
          axis: {
            y: {
              values: [1, 2, 3, 4],
            },
            y2: {
              values: [100, 200, 300, 400],
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: Axis = {
        y: {
          tick: {
            values: [1, 2, 3, 4],
          },
        },
        y2: {
          tick: {
            values: [100, 200, 300, 400],
          },
        },
      }
      expect(parsed.axis).toMatchObject(expected)
    })
    it('add tick config if tick format function is specified in style', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [] }],
        style: {
          axis: {
            y2: {
              format: (v) => `fmt:${v}`,
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const formatted = parsed.axis.y2.tick.format.bind({})(123)
      expect(formatted).toMatch('fmt:123')
    })
  })
  describe('createInfo', () => {
    let settings: ChartSettings
    let chart: Chart
    beforeEach(() => {
      settings = { data: [] }
      const pChart: Partial<Chart> = {
        categories: jest.fn().mockReturnValue([]),
        color: jest.fn().mockReturnValue('#308800'),
      }
      chart = pChart as Chart
    })
    it('sets legend', () => {
      settings.data = [
        { name: 'Foo', values: [] },
        { name: 'Bar', values: [] },
      ]
      settings.legend = 'top'

      const info = createInfo(settings, chart)
      const expected: Legend = {
        placement: 'top',
        items: [
          { title: 'Foo', color: '#308800' },
          { title: 'Bar', color: '#308800' },
        ],
      }

      expect(info.legend).toEqual(expected)
    })
    it('omit xAxis if hidden', () => {
      settings.data = [{ name: 'Foo', values: [1, 2, 3] }]
      settings.style = { axis: false }

      const info = createInfo(settings, chart)
      expect(info.xAxis).toBeUndefined()
    })
    it('omit xAxis if hidden', () => {
      settings.data = [{ name: 'Foo', values: [1, 2, 3] }]
      settings.style = {
        axis: {
          x: {
            show: false,
          },
        },
      }

      const info = createInfo(settings, chart)
      expect(info.xAxis).toBeUndefined()
    })
    it('add xAxis by default', () => {
      settings.data = [{ name: 'Foo', values: [1, 2, 3] }]

      const info = createInfo(settings, chart)
      expect(info.xAxis).not.toBeUndefined()
    })
    it("don't omit xAxis if shown", () => {
      settings.data = [{ name: 'Foo', values: [1, 2, 3] }]
      settings.style = { axis: true }

      const info = createInfo(settings, chart)
      expect(info.xAxis).not.toBeUndefined()
    })
  })
})
