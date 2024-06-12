import"./grid-8f4ff50c.js";import{x as t}from"./lit-element-2a5e401f.js";import"./gds-element-24e794df.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./tokens.style-f227efef.js";const G={title:"Components/Grid",component:"gds-grid",tags:["autodocs"],parameters:{docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/grid)\n\nThe `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute."}}}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<div class="exampleCell">COL: 01</div>
<div class="exampleCell">COL: 02</div>
<div class="exampleCell">COL: 03</div>
<div class="exampleCell">COL: 04</div>
<div class="exampleCell">COL: 05</div>
<div class="exampleCell">COL: 06</div>
<div class="exampleCell">COL: 07</div>
<div class="exampleCell">COL: 08</div>`}},n={...i},e={...i,render:d=>t`
    <gds-grid columns="l:8 m:4 s:2" gap="l:l m:m s:s" padding="l:2xl m:l s:xs">
      <div class="exampleCell">COL: 01</div>
      <div class="exampleCell">COL: 02</div>
      <div class="exampleCell">COL: 03</div>
      <div class="exampleCell">COL: 04</div>
      <div class="exampleCell">COL: 05</div>
      <div class="exampleCell">COL: 06</div>
      <div class="exampleCell">COL: 07</div>
      <div class="exampleCell">COL: 08</div>
    </gds-grid>
  `},l={...i,name:"Example: All breakpoints + Auto Columns",render:d=>t`
    <gds-grid
      columns="4"
      gap="l:2xl m:2xl s:2xl"
      row-gap="l:2xl m:2xl s:2xl"
      padding="l"
      auto-columns="100"
    >
      <div class="exampleCell">COL: 01</div>
      <div class="exampleCell">COL: 02</div>
      <div class="exampleCell">COL: 03</div>
      <div class="exampleCell">COL: 04</div>
      <div class="exampleCell">COL: 05</div>
      <div class="exampleCell">COL: 06</div>
      <div class="exampleCell">COL: 07</div>
      <div class="exampleCell">COL: 08</div>
    </gds-grid>
  `},s={...i,name:"Auto Columns attribute",render:d=>t`
    <gds-grid auto-columns="240">
      <div class="exampleCell">COL: 01</div>
      <div class="exampleCell">COL: 02</div>
      <div class="exampleCell">COL: 03</div>
      <div class="exampleCell">COL: 04</div>
      <div class="exampleCell">COL: 05</div>
      <div class="exampleCell">COL: 06</div>
      <div class="exampleCell">COL: 07</div>
      <div class="exampleCell">COL: 08</div>
    </gds-grid>
  `},a={...i,render:()=>t``};var o,r,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(m=(r=n.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var c,p,u,v,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="l:8 m:4 s:2" gap="l:l m:m s:s" padding="l:2xl m:l s:xs">
      <div class="exampleCell">COL: 01</div>
      <div class="exampleCell">COL: 02</div>
      <div class="exampleCell">COL: 03</div>
      <div class="exampleCell">COL: 04</div>
      <div class="exampleCell">COL: 05</div>
      <div class="exampleCell">COL: 06</div>
      <div class="exampleCell">COL: 07</div>
      <div class="exampleCell">COL: 08</div>
    </gds-grid>
  \`
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:'To use the `gds-grid`, you add it to your HTML and specify the number of `columns` for `desktop`, `tablet`, and `mobile` devices using the `columns` attribute. The `columns`, `gap`, `row-gap` and `padding` attributes can take either a single value or a string of three tokens separated by spaces, each prefixed with `l:` for `desktop`, `m:` for `tablet`, and `s:` for mobile.\n\nIf a single value is provided, it will be used for all screen sizes. If three tokens are provided, each screen size will use the value specified for it.\n\n```html\n<!-- Using a single value for all screen sizes -->\n<gds-grid columns="2" gap="xl" row-gap="2xl" padding="2xl">\n  <!-- Child elements here -->\n</gds-grid>\n\n<!-- Using different values for each screen size -->\n<gds-grid\n  columns="l:8 m:4 s:2"\n  gap="l:xl m:l s:xs"\n  row-gap="l:xl m:l s:xs"\n  padding="l:2xl m:l s:xs"\n>\n  <!-- Child elements here -->\n</gds-grid>\n```\n\n#### Example\n\nThis example shows a grid with 8 columns on desktop, 4 on tablet, and 2 on mobile. It also has a gap of `l` on desktop, `m` on tablet, and `s` on mobile. The padding is `2xl` on desktop, `l` on tablet, and `xs` on mobile.',...(g=(v=e.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var C,h,x,b,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Example: All breakpoints + Auto Columns',
  render: args => html\`
    <gds-grid
      columns="4"
      gap="l:2xl m:2xl s:2xl"
      row-gap="l:2xl m:2xl s:2xl"
      padding="l"
      auto-columns="100"
    >
      <div class="exampleCell">COL: 01</div>
      <div class="exampleCell">COL: 02</div>
      <div class="exampleCell">COL: 03</div>
      <div class="exampleCell">COL: 04</div>
      <div class="exampleCell">COL: 05</div>
      <div class="exampleCell">COL: 06</div>
      <div class="exampleCell">COL: 07</div>
      <div class="exampleCell">COL: 08</div>
    </gds-grid>
  \`
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"This example shows a grid with `4` columns on all breakpoints desktop, tablet, and on mobile. It also has a gap of `2xl` on all breakpoints. The padding is `l` on all breakpoints. As well as `auto-columns` attribute is set to `100` which will make the columns to be `~100px` wide.",...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var L,O,w,k,y;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Auto Columns attribute',
  render: args => html\`
    <gds-grid auto-columns="240">
      <div class="exampleCell">COL: 01</div>
      <div class="exampleCell">COL: 02</div>
      <div class="exampleCell">COL: 03</div>
      <div class="exampleCell">COL: 04</div>
      <div class="exampleCell">COL: 05</div>
      <div class="exampleCell">COL: 06</div>
      <div class="exampleCell">COL: 07</div>
      <div class="exampleCell">COL: 08</div>
    </gds-grid>
  \`
}`,...(w=(O=s.parameters)==null?void 0:O.docs)==null?void 0:w.source},description:{story:'The `auto-columns` attribute makes the grid flexible by adjusting column widths based on available space and content size. If space is limited, it reduces the number of columns while maintaining a minimum column width based on the value provided. The `auto-columns` attribute can take either a single value or a string of three tokens separated by spaces, each prefixed with `l:` for `desktop`, `m:` for `tablet`, and `s:` for `mobile` respectively.\n\nIt can be used without the other attributes and still fit the content on the available width. But for more granular control it can be used with the `columns`, `gap`, and `padding` attributes.\n\nAuto Columns, while optional, remove the need for breakpoints, adapting to content for a more flexible and responsive grid. However, they can still be used in conjunction with breakpoints to accommodate content in both cases.\n\n```html\n<!-- Using a single value for all screen sizes -->\n<gds-grid columns="2" gap="xl" auto-columns="200">\n  <!-- Child elements here -->\n</gds-grid>\n\n<!-- Using different values for each screen size -->\n<gds-grid columns="l:8 m:4 s:2" auto-columns="l:200 m:100 s:80">\n  <!-- Child elements here -->\n</gds-grid>\n```\n\n> The `auto-columns` attribute, used with CSS grid layout, calculates the maximum column width by subtracting the total gap width from the total available width and dividing by the number of columns. This is represented by the formula `MaxColumnWidth = (W - ((C - 1) * G)) / C`, where `W` is the total available width, `C` is the number of columns, and `G` is the width of a single gap. This calculated width is then used to set each column\'s width, with a minimum width of the `auto-columns` value.\n\n#### Example: Auto Columns without other attributes\n\nThis example has the fluid attribute and it will adapt the content automatically based on the available width and min inline size.\nThe `auto-columns` attribute is set to `240` which will make the columns to be `240px` no matter the screen/container size.',...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.description}}};var z,T,S,A,I;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`\`
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source},description:{story:`Sizes ref are part of the internal design system and are used to define the \`gap\` and \`padding\` for different devices. The following are the available sizes:

| Size | Token   | Pixels |
| ---- | ------- | ------ |
| 3xl  | size/12 | 96px   |
| 2xl  | size/9  | 48px   |
| xl   | size/7  | 32px   |
| l    | size/6  | 24px   |
| m    | size/5  | 16px   |
| s    | size/3  | 8px    |
| xs   | size/2  | 4px    |
| none | size/0  | 0px    |

#### Breakpoints

The grid component has three breakpoints for \`desktop\`, \`tablet\`, and \`mobile\` devices. The following are the available breakpoints:

| Category | Type       | Size   |
| -------- | ---------- | ------ |
| L        | desktop-lg | 2560px |
| L        | desktop-md | 1440px |
| L        | desktop-sm | 1024px |
| M        | tablet     | 768px  |
| S        | mobile     | 425px  |`,...(I=(A=a.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};const H=["Basic","Usage","AllBreakpoints","AutoColumns","Sizes"];export{l as AllBreakpoints,s as AutoColumns,n as Basic,a as Sizes,e as Usage,H as __namedExportsOrder,G as default};
