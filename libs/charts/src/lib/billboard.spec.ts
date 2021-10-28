import { ChartOptions, Chart } from 'billboard.js'
import { ChartSettings, Legend } from './types'
import { createOptions, createInfo } from './billboard'
import { tmplTooltip } from './templates'

describe('billboard', () => {
  describe('createOptions', () => {
    it('parses simple ChartData', () => {
      const chartElement = '#foo'
      const settings: ChartSettings = {
        data: [{
          name: 'Foo',
          type: 'bar',
          values: [1,2,3],
        }]
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
        data: {
          columns: [
            ['Foo', 1, 2, 3]
          ],
          types: {
            'Foo': 'bar',
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
        data: [{
          name: 'Foo',
          type: 'area',
          values: [1, 2, 3],
        }],
        categories: [ 'Herp', 'Derp', 'Slurp' ],
      }
      const parsed = createOptions({ settings, chartElement })
      const expected: ChartOptions = {
        bindto: '#foo',
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
        ]
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
            'Foo': 'bar',
            'Bar': 'bar',
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
        ]
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
            'Foo': 'bar',
            'Bar': 'area',
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
        ]
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
            'Foo': 'bar',
            'Bar': 'area',
          },
        },
        legend: { show: false },
        tooltip: { contents: { template: tmplTooltip } },
      }
      expect(parsed).toEqual(expected)
    })
  })
  describe('createInfo', () => {
    let settings: ChartSettings
    let chart: Chart
    beforeEach(() => {
      settings = { data: [] }
      const pChart: Partial<Chart> = {
        categories: jest.fn().mockReturnValue([]),
      }
      chart = pChart as Chart
    })
    it('sets title', () => {
      settings.title = 'Foo'
      const info = createInfo(settings, chart)

      expect(info.title).toEqual('Foo')
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
          { title: 'Foo' },
          { title: 'Bar' },
        ],
      }

      expect(info.legend).toEqual(expected)
    })
  })
})
