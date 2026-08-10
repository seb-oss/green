import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CVXvIcNj.js";import{M as a,C as c,S as o}from"./blocks-DX0LAs5m.js";import{C as i}from"./chart-GSXj_SoI.js";import{I as d,G as h}from"./index.stories-DSN6ATsA.js";import"./iframe-Bkqsf1Bb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkD_wkDP.js";const f=r=>e.jsx(i,{...r});function t(r){const n={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"getting-started-with-charts-in-react",children:"Getting started with charts in React"}),`
`,e.jsxs(n.p,{children:["First, install the ",e.jsx(n.code,{children:"@sebgroup/green-react-charts"})," package:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @sebgroup/green-react-charts
`})}),`
`,e.jsx(n.p,{children:"or add with Yarn:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @sebgroup/green-react-charts
`})}),`
`,e.jsxs(n.p,{children:[`Then you need to import the base styles for charts. Without these, the charts will look broken and not render correctly.
The `,e.jsx(n.code,{children:"~@sebgroup/green-charts"})," package should have been installed as a dependency when you installed ",e.jsx(n.code,{children:"@sebgroup/green-react-charts"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '~@sebgroup/green-charts/scss';
`})}),`
`,e.jsx(n.p,{children:"Then you can start using the Chart react component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Chart, ChartSettings } from '@sebgroup/green-react-charts'

export const MyChart = () => {
  const settings: ChartSettings = {
    data: [
      {
        name: 'Score card',
        values: [12, 9, 3, 1],
      },
    ],
    categories: [
      'Signerade avtal (SEB)',
      'Påbörjade trials (Oxceed)',
      'Aktiverade prenumerationer',
      'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)',
    ],
  }

  return <Chart settings={settings} />
}
`})}),`
`,e.jsx(c,{children:e.jsx(o,{of:h})})]})}function C(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{f as Template,C as default};
