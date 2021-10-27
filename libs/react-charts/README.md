# Green React Charts

React Green charting components

## Install

```bash
yarn add @sebgroup/green-react-charts
```

```bash
npm install -S @sebgroup/green-react-charts
```

## Use

```typescript
import { Chart, ChartSettings } from '@sebgroup/green-react-charts'

export const MyChart = () => {
  const settings: ChartSettings = {
    title: 'My mixed chart',
    data: [
      {
        title: 'Sales',
        type: 'bar',
        columns: [100, 200, 300, -50],
      },
      {
        title: 'Prognosis',
        type: 'spline',
        columns: [0, 10, 150, 330],
      },
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr'],
  }

  return <Chart settings={settings} />
}
```
