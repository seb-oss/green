# @sebgroup/react-charts

An React wrapper of [@sebgroup/charts](https://github.com/seb-oss/green/tree/main/libs/charts) that is in itself a wrapper of [Billboard.js](https://naver.github.io/billboard.js/)

## Install

```bash
yarn add @sebgroup/green-react-charts
```

```bash
npm install -S @sebgroup/green-react-charts
```

## Use

First you need to import the base styles for charts:

```scss
@use '~@sebgroup/green-charts/scss';
```

Then you can start using the Chart react component:

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
