import{x as t}from"./iframe-C-vSePkR.js";import"./card-B79GTse1.js";import"./flex-C4J0xRk9.js";import"./div-m49OfbB-.js";import{a as n}from"./argTableProps-CtVGYQM_.js";import"./card.component-dplERBBH.js";import"./flex.component-C5LxecxV.js";const l={title:"Components/Grid",component:"gds-grid",tags:["autodocs"],parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grid)\n\nThe `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute."}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{...n("gds-grid")},args:{gap:"m",padding:"0",columns:"4",innerHTML:`
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 08</gds-flex>
      </gds-card>
  `}},f={...e},x={...e,render:s=>t`
    <!-- prettier-ignore -->
    <gds-grid
      columns="s{2} m{4} l{6}"
      gap="s{s} m{s} l{s}"
    >
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 08</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 09</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 10</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 11</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 12</gds-flex>
      </gds-card>
    </gds-grid>
  `},m={...e,name:"Breakpoints + Auto Columns",render:s=>t`
    <!-- prettier-ignore -->
    <gds-grid columns="4" gap="m" auto-columns="100">
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  `},h={...e,name:"Auto Columns",render:s=>t`
    <!-- prettier-ignore -->
    <gds-grid gap="s" auto-columns="s{200} m{220} l{240}">
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card variant="secondary">
        <gds-flex height="100px" align-items="center" justify-content="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  `},y=["Basic","Usage","AllBreakpoints","AutoColumns"];export{m as AllBreakpoints,h as AutoColumns,f as Basic,x as Usage,y as __namedExportsOrder,l as default};
