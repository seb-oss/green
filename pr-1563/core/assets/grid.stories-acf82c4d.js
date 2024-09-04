import"./grid-c5f54293.js";import"./card-221ca8bc.js";import"./flex-1943003e.js";import{x as t}from"./lit-element-71e04f06.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-aacfe7e1.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";const U={title:"Docs/Layout/Grid",component:"gds-grid",tags:["autodocs"],parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grid)\n\nThe `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute."}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{gap:"m",padding:"0",columns:"4",innerHTML:`
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
  `}},d={...a},e={...a,render:n=>t`
    <!-- prettier-ignore -->
    <gds-grid
      columns="s{2} m{4} l{6}"
      gap="s{s} m{s} l{s}"
    >
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 09</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 10</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 11</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 12</gds-flex>
      </gds-card>
    </gds-grid>
  `},s={...a,name:"Breakpoints + Auto Columns",render:n=>t`
    <!-- prettier-ignore -->
    <gds-grid columns="4" gap="m" auto-columns="100">
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  `},r={...a,name:"Auto Columns",render:n=>t`
    <!-- prettier-ignore -->
    <gds-grid gap="s" auto-columns="s{200} m{220} l{240}">
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  `};var i,g,l;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(g=d.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var c,o,x,u,f;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <!-- prettier-ignore -->
    <gds-grid
      columns="s{2} m{4} l{6}"
      gap="s{s} m{s} l{s}"
    >
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 09</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 10</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 11</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 12</gds-flex>
      </gds-card>
    </gds-grid>
  \`
}`,...(x=(o=e.parameters)==null?void 0:o.docs)==null?void 0:x.source},description:{story:'To use the `gds-grid`, you add it to your HTML and specify the number of `columns` for `desktop`, `tablet`, and `mobile` devices using the `columns` attribute. The `columns`, `gap`, `row-gap` and `padding` attributes can take either a single value or a string of three tokens separated by spaces, each prefixed with `l` for `desktop`, `m` for `tablet`, and `s` for mobile.\n\nIf a single value is provided, it will be used for all screen sizes. If three tokens are provided, each screen size will use the value specified for it.\n\n```html\n<!-- Using a single value for all screen sizes -->\n<gds-grid columns="2" gap="xl" row-gap="2xl" padding="2xl">\n  <!-- Child elements here -->\n</gds-grid>\n\n<!-- Using different values for each screen size -->\n<gds-grid\n  columns="l{8} m{4} s{2}"\n  gap="l{xl} m{l} s{xs}"\n  row-gap="l{xl} m{l} s{xs}"\n  padding="l{2xl} m{l} s{xs}"\n>\n  <!-- Child elements here -->\n</gds-grid>\n```\n\n#### Example\n\nThis example shows a grid with 8 columns on desktop, 4 on tablet, and 2 on mobile. It also has a gap of `l` on desktop, `m` on tablet, and `s` on mobile. The padding is `2xl` on desktop, `l` on tablet, and `xs` on mobile.',...(f=(u=e.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var h,b,p,m,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Breakpoints + Auto Columns',
  render: args => html\`
    <!-- prettier-ignore -->
    <gds-grid columns="4" gap="m" auto-columns="100">
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  \`
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source},description:{story:"This example shows a grid with `4` columns on all breakpoints desktop, tablet, and on mobile. It also has a gap of `2xl` on all breakpoints. The padding is `l` on all breakpoints. As well as `auto-columns` attribute is set to `100` which will make the columns to be `~100px` wide.",...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.description}}};var C,L,j,O,w;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Auto Columns',
  render: args => html\`
    <!-- prettier-ignore -->
    <gds-grid gap="s" auto-columns="s{200} m{220} l{240}">
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 01</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 02</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 03</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 04</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 05</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 06</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 07</gds-flex>
      </gds-card>
      <gds-card border="3xs/base300" radius="s">
        <gds-flex height="100px" align="center" justify="center">COL: 08</gds-flex>
      </gds-card>
    </gds-grid>
  \`
}`,...(j=(L=r.parameters)==null?void 0:L.docs)==null?void 0:j.source},description:{story:'The `auto-columns` attribute makes the grid flexible by adjusting column widths based on available space and content size. If space is limited, it reduces the number of columns while maintaining a minimum column width based on the value provided. The `auto-columns` attribute can take either a single value or a string of three tokens separated by spaces, each prefixed with `l:` for `desktop`, `m:` for `tablet`, and `s:` for `mobile` respectively.\n\nIt can be used without the other attributes and still fit the content on the available width. But for more granular control it can be used with the `columns`, `gap`, and `padding` attributes.\n\nAuto Columns, while optional, remove the need for breakpoints, adapting to content for a more flexible and responsive grid. However, they can still be used in conjunction with breakpoints to accommodate content in both cases.\n\n```html\n<!-- Using a single value for all screen sizes -->\n<gds-grid columns="2" gap="xl" auto-columns="200">\n  <!-- Child elements here -->\n</gds-grid>\n\n<!-- Using different values for each screen size -->\n<gds-grid columns="l{8} m{4} s{2}" auto-columns="l{200} m{100} s{80}">\n  <!-- Child elements here -->\n</gds-grid>\n```\n\n> The `auto-columns` attribute, used with CSS grid layout, calculates the maximum column width by subtracting the total gap width from the total available width and dividing by the number of columns. This is represented by the formula `MaxColumnWidth = (W - ((C - 1) * G)) / C`, where `W` is the total available width, `C` is the number of columns, and `G` is the width of a single gap. This calculated width is then used to set each column\'s width, with a minimum width of the `auto-columns` value.\n\n#### Example: Auto Columns without other attributes\n\nThis example has the fluid attribute and it will adapt the content automatically based on the available width and min inline size.\nThe `auto-columns` attribute is set to `240` which will make the columns to be `240px` no matter the screen/container size.',...(w=(O=r.parameters)==null?void 0:O.docs)==null?void 0:w.description}}};const P=["Basic","Usage","AllBreakpoints","AutoColumns"];export{s as AllBreakpoints,r as AutoColumns,d as Basic,e as Usage,P as __namedExportsOrder,U as default};
