import { ChartData, ComplexChartData } from '@sebgroup/green-charts'


const pie: ChartData = {
  name: 'Gold tickets',
  type: 'pie',
  values: [
    { name: 'Ej tilldelade', value: 700 },
    { name: 'Tilldelade', value: 200 },
    { name: 'Utnyttjade', value: 100 },
  ]
}
const bar: ChartData = {
  name: 'Antal',
  type: 'bar',
  values: [
    { name: 'Signerade avtal (SEB)', value: 234 },
    { name: 'Påbörjade trials (Oxceed)', value: 197 },
    { name: 'Aktiverade prenumerationer', value: 97 },
    { name: 'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)', value: 12 },
  ]
}
const lines: ComplexChartData = {
  name: 'Diagramrubrik',
  data: [
    {
      name: 'Signerade avtal SEB',
      type: 'line',
      values: [10, 14, 6, 15],
    },
    {
      name: 'Påbörjade trials',
      type: 'line',
      values: [8, 9, 13, 11],
    },
    {
      name: 'Aktiverade prenumerationer',
      type: 'line',
      values: [3, 7, 9, 10],
    },
  ],
  categories: ['jan', 'feb', 'mar', 'apr'],
}
  const oxceed: ComplexChartData = {
    name: 'Totala kostnader',
    data: [
      {
        name: 'Ack. utfall',
        type: 'spline',
        values: [1,2,3,4,5],
        axis: 'y2',
      },
      {
        name: 'Utfall',
        type: 'bar',
        values: [1,2,3,4,5],
      },
      {
        name: 'Ack. prognos',
        type: 'spline',
        values: [1,2,3,4,5],
        axis: 'y2',
      },
      {
        name: 'Prognos',
        type: 'bar',
        values: [1,2,3,4,5],
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr', 'maj'],
  }