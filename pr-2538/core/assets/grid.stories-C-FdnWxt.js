import{x as r}from"./iframe-CoeLk9uN.js";import"./card-A2_YFbJu.js";import"./flex-D64Xm0cM.js";import"./div-22XRElqa.js";import{a as w}from"./argTableProps-DUznpR4t.js";import"./preload-helper-Dp1pzeXC.js";import"./card.component-CkicOUYk.js";import"./flex.component-Du6i932h.js";const I={title:"Components/Grid",component:"gds-grid",tags:["autodocs"],parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grid)\n\nThe `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute."}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{...w("gds-grid")},args:{gap:"m",padding:"0",columns:"4",innerHTML:`
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
  `}},s={...a},e={...a,render:d=>r`
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
  `},n={...a,name:"Breakpoints + Auto Columns",render:d=>r`
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
  `},t={...a,name:"Auto Columns",render:d=>r`
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
  `};var i,c,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var l,o,h,m,f;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
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
  \`
}`,...(h=(o=e.parameters)==null?void 0:o.docs)==null?void 0:h.source},description:{story:'To use the `gds-grid`, you add it to your HTML and specify the number of `columns` for `desktop`, `tablet`, and `mobile` devices using the `columns` attribute. The `columns`, `gap`, `row-gap` and `padding` attributes can take either a single value or a string of three tokens separated by spaces, each prefixed with `l` for `desktop`, `m` for `tablet`, and `s` for mobile.\n\nIf a single value is provided, it will be used for all screen sizes. If three tokens are provided, each screen size will use the value specified for it.\n\n```html\n<!-- Using a single value for all screen sizes -->\n<gds-grid columns="2" gap="xl" row-gap="2xl" padding="2xl">\n  <!-- Child elements here -->\n</gds-grid>\n\n<!-- Using different values for each screen size -->\n<gds-grid\n  columns="l{8} m{4} s{2}"\n  gap="l{xl} m{l} s{xs}"\n  row-gap="l{xl} m{l} s{xs}"\n  padding="l{2xl} m{l} s{xs}"\n>\n  <!-- Child elements here -->\n</gds-grid>\n```\n\n#### Example\n\nThis example shows a grid with 8 columns on desktop, 4 on tablet, and 2 on mobile. It also has a gap of `l` on desktop, `m` on tablet, and `s` on mobile. The padding is `2xl` on desktop, `l` on tablet, and `xs` on mobile.',...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.description}}};var x,u,p,v,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Breakpoints + Auto Columns',
  render: args => html\`
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
  \`
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"This example shows a grid with `4` columns on all breakpoints desktop, tablet, and on mobile. It also has a gap of `2xl` on all breakpoints. The padding is `l` on all breakpoints. As well as `auto-columns` attribute is set to `100` which will make the columns to be `~100px` wide.",...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var C,L,j,O,b;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Auto Columns',
  render: args => html\`
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
  \`
}`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source},description:{story:`Auto Columns, while optional, remove the need for breakpoints, adapting to content for a more flexible and responsive grid.
It can still be used in conjunction with breakpoints to accommodate content in both cases.

\`\`\`html
<!-- Using a single value for all screen sizes -->
<gds-grid columns="2" gap="xl" auto-columns="200">
  <!-- Child elements here -->
</gds-grid>

<!-- Using different values for each screen size -->
<gds-grid columns="l{8} m{4} s{2}" auto-columns="l{200} m{100} s{80}">
  <!-- Child elements here -->
</gds-grid>
\`\`\`
#### Explanation of the Formula

1. **Variables**:
   - **W**: Total available width of the grid container (e.g., \`width: 100%;\`).
   - **C**: Number of columns (in this example, it will depend on how many items fit in the available width).
   - **G**: Width of a single gap (in this case, \`gap: 10px;\`).

2. **Formula**:


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 499 122"><path fill="currentColor" d="M107.008 65h-1.14l-.264-7.104-1.488 3.36h-.54l-1.5-3.36-.264 7.104h-1.128l.408-8.4h1.404l1.344 3.024 1.344-3.024h1.416l.408 8.4Zm7.328 0h-1.068l-.24-1.308c-.448.952-1.212 1.428-2.292 1.428-.632 0-1.124-.156-1.476-.468-.352-.32-.528-.764-.528-1.332 0-.744.324-1.304.972-1.68.648-.384 1.708-.58 3.18-.588v-.564c0-.808-.452-1.212-1.356-1.212-.72 0-1.456.188-2.208.564v-1.032c.816-.352 1.596-.528 2.34-.528.728 0 1.292.188 1.692.564.408.368.612.88.612 1.536v2.592l.372 2.028Zm-3.348-.876c.56 0 1.016-.172 1.368-.516.352-.344.528-.78.528-1.308v-.528c-1.088.008-1.868.116-2.34.324-.464.2-.696.544-.696 1.032 0 .664.38.996 1.14.996Zm11.144.876h-1.308l-1.632-2.604L117.56 65h-1.308l2.268-3.312-2.172-3.288h1.308l1.536 2.556 1.536-2.556h1.308l-2.172 3.3 2.268 3.3Zm6.703-4.944c0-.88-.156-1.524-.468-1.932-.312-.408-.788-.612-1.428-.612-.712 0-1.224.26-1.536.78-.312.512-.468 1.352-.468 2.52s.156 2.004.468 2.508c.312.504.828.756 1.548.756.84 0 1.688-.272 2.544-.816v1.164c-.888.464-1.78.696-2.676.696-.968 0-1.72-.356-2.256-1.068-.528-.712-.792-1.716-.792-3.012 0-1.456.284-2.58.852-3.372.576-.792 1.388-1.188 2.436-1.188.912 0 1.628.316 2.148.948.528.624.792 1.5.792 2.628h-1.164Zm5.588 5.064c-.888 0-1.572-.28-2.052-.84-.48-.568-.72-1.368-.72-2.4 0-1.144.264-2.028.792-2.652.528-.632 1.268-.948 2.22-.948.888 0 1.572.28 2.052.84.488.56.732 1.356.732 2.388 0 1.152-.264 2.044-.792 2.676-.528.624-1.272.936-2.232.936Zm-1.26-1.536c.272.36.732.54 1.38.54.648 0 1.104-.184 1.368-.552.272-.376.408-1.008.408-1.896 0-.88-.136-1.5-.408-1.86-.264-.36-.72-.54-1.368-.54-.64 0-1.096.184-1.368.552-.272.368-.408.996-.408 1.884 0 .88.132 1.504.396 1.872Zm10.724.54c.528 0 1.036-.152 1.524-.456v1.008c-.552.296-1.124.444-1.716.444-.752 0-1.328-.228-1.728-.684-.4-.464-.6-1.152-.6-2.064V57.08h-2.34v-.96h3.42v6.156c0 1.232.48 1.848 1.44 1.848Zm7.592-5.724h1.08V65h-.816l-.204-1.548c-.688 1.112-1.54 1.668-2.556 1.668-.568 0-1.012-.168-1.332-.504-.312-.336-.468-.832-.468-1.488V58.4h1.08v4.584c0 .808.356 1.212 1.068 1.212.352 0 .684-.112.996-.336.32-.224.704-.616 1.152-1.176V58.4Zm7.975-.12c.88 0 1.32.676 1.32 2.028V65h-1.02v-4.56c0-.424-.052-.736-.156-.936-.104-.2-.288-.3-.552-.3-.384 0-.704.264-.96.792.008.064.012.168.012.312V65h-1.02v-4.56c0-.784-.216-1.176-.648-1.176-.384 0-.72.312-1.008.936V65h-1.02v-6.6h.768l.204 1.14c.384-.84.892-1.26 1.524-1.26.552 0 .912.332 1.08.996.352-.664.844-.996 1.476-.996Zm6.704 0c.568 0 1.008.168 1.32.504.32.336.48.832.48 1.488V65h-1.068v-4.584c0-.808-.36-1.212-1.08-1.212-.352 0-.688.112-1.008.336-.312.224-.692.62-1.14 1.188V65h-1.068v-6.6h.804l.204 1.548c.688-1.112 1.54-1.668 2.556-1.668Zm8.924-1.68h1.152c0 2.76-.344 5.56-1.032 8.4h-1.464l-.816-3.24-.816 3.24h-1.452c-.696-2.872-1.044-5.672-1.044-8.4h1.152c0 2.384.228 4.836.684 7.356l1.224-4.86h.516l1.224 4.884c.448-2.608.672-5.068.672-7.38Zm6.632-.972v1.608h-1.452v-1.608h1.452Zm-.192 8.412h1.824V65h-5.28v-.96h2.376v-4.68h-2.016v-.96h3.096v5.64Zm8.372-7.92h1.068V65h-.804l-.18-1.128c-.44.832-1.124 1.248-2.052 1.248-.8 0-1.42-.292-1.86-.876-.432-.584-.648-1.412-.648-2.484 0-1.104.216-1.96.648-2.568.44-.608 1.06-.912 1.86-.912.864 0 1.52.348 1.968 1.044V56.12Zm-1.68 8.04c.608 0 1.04-.18 1.296-.54.256-.368.384-.988.384-1.86 0-.904-.128-1.548-.384-1.932-.256-.392-.688-.588-1.296-.588-.608 0-1.04.184-1.296.552-.248.36-.372.976-.372 1.848 0 .904.128 1.552.384 1.944.256.384.684.576 1.284.576Zm10.303-4.8h-2.88v3.42c0 .456.108.796.324 1.02.216.216.58.324 1.092.324.512 0 1-.104 1.464-.312v1.032c-.528.184-1.052.276-1.572.276-.792 0-1.388-.196-1.788-.588-.4-.4-.6-.936-.6-1.608V59.36h-1.524v-.696l1.524-.264.252-1.476h.828V58.4h2.88v.96Zm6.008-1.08c.536 0 .948.168 1.236.504.296.336.444.832.444 1.488V65h-1.08v-4.584c0-.808-.316-1.212-.948-1.212-.336 0-.652.112-.948.336-.296.216-.656.604-1.08 1.164V65h-1.08v-8.88h1.08v3.708c.648-1.032 1.44-1.548 2.376-1.548Z"/><path fill="currentColor" d="M230.78 60.596v-.96h6.12v.96h-6.12Zm0 2.304v-.96h6.12v.96h-6.12Z"/><path fill="currentColor" d="M285.607 42.6h1.152c0 2.76-.344 5.56-1.032 8.4h-1.464l-.816-3.24-.816 3.24h-1.452c-.696-2.872-1.044-5.672-1.044-8.4h1.152c0 2.384.228 4.836.684 7.356l1.224-4.86h.516l1.224 4.884c.448-2.608.672-5.068.672-7.38Zm10.312 4.188h5.76v.96h-5.76v-.96Zm18.208.516c0 2.112.632 3.904 1.896 5.376h-1.14c-.672-.864-1.164-1.708-1.476-2.532-.304-.824-.456-1.708-.456-2.652 0-1.008.152-1.94.456-2.796.312-.856.804-1.716 1.476-2.58h1.14c-1.264 1.472-1.896 3.2-1.896 5.184Zm7.675 0c0 2.112.632 3.904 1.896 5.376h-1.14c-.672-.864-1.164-1.708-1.476-2.532-.304-.824-.456-1.708-.456-2.652 0-1.008.152-1.94.456-2.796.312-.856.804-1.716 1.476-2.58h1.14c-1.264 1.472-1.896 3.2-1.896 5.184Zm9.668-1.248c0-.88-.156-1.524-.468-1.932-.312-.408-.788-.612-1.428-.612-.712 0-1.224.26-1.536.78-.312.512-.468 1.352-.468 2.52s.156 2.004.468 2.508c.312.504.828.756 1.548.756.84 0 1.688-.272 2.544-.816v1.164c-.888.464-1.78.696-2.676.696-.968 0-1.72-.356-2.256-1.068-.528-.712-.792-1.716-.792-3.012 0-1.456.284-2.58.852-3.372.576-.792 1.388-1.188 2.436-1.188.912 0 1.628.316 2.148.948.528.624.792 1.5.792 2.628h-1.164Zm2.828.732h5.76v.96h-5.76v-.96Zm11.396 3.204h2.112V51h-5.58v-1.008h2.34V43.68l-2.34 1.68v-1.416l2.172-1.344h1.296v7.392Zm6.859-2.496c0-2.112-.632-3.904-1.896-5.376h1.14c.672.864 1.16 1.708 1.464 2.532.312.824.468 1.708.468 2.652 0 1.008-.156 1.94-.468 2.796-.304.856-.792 1.716-1.464 2.58h-1.14c1.264-1.472 1.896-3.2 1.896-5.184ZM363.145 51h-1.308l-1.632-2.604L358.573 51h-1.308l2.268-3.312-2.172-3.288h1.308l1.536 2.556 1.536-2.556h1.308l-2.172 3.3 2.268 3.3Zm4.796-4.248h3v3.24c-.384.328-.856.6-1.416.816-.552.208-1.132.312-1.74.312-.968 0-1.72-.356-2.256-1.068-.528-.712-.792-1.716-.792-3.012 0-1.456.316-2.58.948-3.372.632-.792 1.528-1.188 2.688-1.188.584 0 1.308.144 2.172.432v1.128c-.856-.352-1.62-.528-2.292-.528-.84 0-1.444.256-1.812.768-.36.504-.54 1.348-.54 2.532s.152 2.028.456 2.532c.312.504.824.748 1.536.732.688-.008 1.324-.172 1.908-.492V47.76h-1.86v-1.008Zm7.64.744c0-2.112-.632-3.904-1.896-5.376h1.14c.672.864 1.16 1.708 1.464 2.532.312.824.468 1.708.468 2.652 0 1.008-.156 1.94-.468 2.796-.304.856-.792 1.716-1.464 2.58h-1.14c1.264-1.472 1.896-3.2 1.896-5.184ZM261.378 60.788h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.675 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.675 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.675 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96Zm7.675 0h5.76v.96h-5.76v-.96Zm7.676 0h5.76v.96h-5.76v-.96ZM331.47 74.056c0-.88-.156-1.524-.468-1.932-.312-.408-.788-.612-1.428-.612-.712 0-1.224.26-1.536.78-.312.512-.468 1.352-.468 2.52s.156 2.004.468 2.508c.312.504.828.756 1.548.756.84 0 1.688-.272 2.544-.816v1.164c-.888.464-1.78.696-2.676.696-.968 0-1.72-.356-2.256-1.068-.528-.712-.792-1.716-.792-3.012 0-1.456.284-2.58.852-3.372.576-.792 1.388-1.188 2.436-1.188.912 0 1.628.316 2.148.948.528.624.792 1.5.792 2.628h-1.164Z"/></svg>


3. **How It Works**:
   - **Calculate Total Gap Width**: The total gap width is calculated as \`(C - 1) x G\`.
   - **Subtract from Total Width**: Subtract the total gap width from the total available width \`W\`.
   - **Divide by Number of Columns**: Divide the remaining width by the number of columns \`C\` to get the maximum column width.

### Example Calculation

Assuming:
-  Total available width \`W = 500px\`
-  Number of columns \`C = 3\`
-  Gap width \`G = 10px\`

**Calculation**:
1. Total gap width: \`(3 - 1) x 10 = 20px\`
2. Remaining width: \`500 - 20 = 480px\`
3. Max column width: \`480 / 3 = 160px\`

### Result

Each column would have a maximum width of **160px** while respecting the gaps between them. If the viewport is resized, the grid will automatically * adjust the number of columns and their widths based on the available space.

This example demonstrates how the \`auto-columns\` attribute and the formula work together in a CSS Grid Layout.

<hr />

This example has the fluid attribute and it will adapt the content automatically based on the available width and min inline size.
The \`auto-columns\` attribute is set to \`240\` which will make the columns to be \`240px\` no matter the screen/container size.`,...(b=(O=t.parameters)==null?void 0:O.docs)==null?void 0:b.description}}};const B=["Basic","Usage","AllBreakpoints","AutoColumns"];export{n as AllBreakpoints,t as AutoColumns,s as Basic,e as Usage,B as __namedExportsOrder,I as default};
