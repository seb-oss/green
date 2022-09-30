import { ChartOptions, Chart, Axis } from 'billboard.js'
import { ChartSettings, ChartProperties, Legend } from './types'
import { createOptions, createInfo } from './billboard'
import { tmplTooltip } from './templates'

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
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
      }
      expect(parsed).toEqual(expected)
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
            tick: {
              text: {
                show: false,
              },
            },
            height: 10,
          },
        },
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
      }
      expect(parsed).toEqual(expected)
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
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
      }
      expect(parsed).toEqual(expected)
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
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
      }
      expect(parsed).toEqual(expected)
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
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
      }
      expect(parsed).toEqual(expected)
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
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
      }
      expect(parsed).toEqual(expected)
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
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
        grid: {
          y: {
            lines: [{ value: 0, class: 'base-line' }],
          },
        },
      }
      expect(parsed).toEqual(expected)
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
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
        grid: {
          y: {
            lines: [{ value: 0, class: 'base-line' }],
          },
        },
      }
      expect(parsed).toEqual(expected)
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
    it('add tick config if ticksCount is specified in style', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{ name: 'Foo', values: [1], axis: 'y2' }],
        style: {
          axis: {
            y2: {
              show: false,
              ticksCount: 5
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
            stepSize: null
          }
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
              stepSize: 5
            },
          },
        },
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: Axis = {
        y2: {
          show: false,
          tick: {
            count: null,
            stepSize: 5
          }
        },
      }
      expect(parsed.axis).toEqual(expected)
    })
  })
  describe('createInfo', () => {
    let settings: ChartSettings
    let chart: Chart
    beforeEach(() => {
      settings = { data: [] }
      const pChart: Partial<Chart> = {
        categories: jest.fn().mockReturnValue([]),
        color: jest.fn().mockReturnValue('#379D00FF'),
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
          { title: 'Foo', color: '#379D00FF' },
          { title: 'Bar', color: '#379D00FF' },
        ],
      }

      expect(info.legend).toEqual(expected)
    })
    it('calculates Chart style', () => {
      settings.data = [
        { name: 'Foo', values: [] },
        { name: 'Bar', values: [] },
      ]

      const info = createInfo(settings, chart)
      const expected: ChartProperties = {
        '--chart-width': '768px',
        '--chart-height': '500px',
        '--chart-space-left': '49px',
        '--chart-space-right': 0,
      }

      expect(info.properties).toEqual(expected)
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
