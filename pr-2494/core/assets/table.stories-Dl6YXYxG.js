import{x as t}from"./lit-element-Bx14lxc-.js";import"./table-DZg_WSdX.js";import"./dropdown-B9gqj8m5.js";import"./input-C0jvozuq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CA5ADGwW.js";import"./button.component-nte5-sOS.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C1gztw0h.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./dropdown.component-EBACwo34.js";import"./runtime-CNluP0A8.js";import"./query-async-MEroNOeJ.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-BLMLDB8q.js";import"./form-control-header.component-DSof6t8L.js";import"./badge.component-31Ffk_Dp.js";import"./flex.component-DjV-SouM.js";import"./div.component-DTdhfIq2.js";import"./triangle-exclamation.component-DRCnlnnD.js";import"./icon-Cyq3udZ2.js";import"./card.component-DgPbllnK.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-CufDiWNZ.js";import"./checkmark.component-CddocQY8.js";import"./rbcb-toggle.template-DqXF-ZkM.js";import"./chevron-bottom.component-DgyIWO1Z.js";import"./cross-small.component-BS14rjKa.js";import"./popover.component-D4dN7FfN.js";import"./sort.component-DX-m5813.js";import"./chevron-left.component-D8lZsGKs.js";import"./chevron-right.component-BAjvqtzM.js";import"./magnifying-glass.component-U0Z7YZT0.js";import"./textarea.component-GtKZgqjt.js";import"./resize-observer-B9k8v2TZ.js";const we={title:"Components/Table",component:"gds-table",tags:["autodocs"],parameters:{docs:{description:{component:`
A responsive table component with the following features:
- Client-side search
- Sortable columns
- Row selection
- Pagination
- Responsive design
        `}}}},n=e=>Array.from({length:e},(u,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,amount:Math.floor(Math.random()*1e4),status:["Active","Inactive"][a%2]})),r=[{key:"id",label:"#",sortable:!0,align:"right"},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"amount",label:"Amount",sortable:!0,align:"right"},{key:"status",label:"Status",sortable:!0,align:"center"}],o={args:{columns:r,data:n(100)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},s={args:{columns:r,data:n(5)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},l={args:{columns:r,data:n(1e3)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},m={args:{columns:[{key:"id",label:"#",sortable:!0},{key:"name",label:"Full Name",sortable:!0},{key:"email",label:"Contact Email",sortable:!0}],data:n(50)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},d={args:{columns:r.map(e=>({...e,sortable:!1})),data:n(50)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},c={args:{columns:r,data:n(20)},render:e=>t`
    <div>
      <p id="selection-info">No rows selected</p>
      <gds-table
        .columns=${e.columns}
        .data=${e.data}
        @selection-change=${u=>{const a=document.getElementById("selection-info");a&&(a.textContent=`Selected rows: ${u.detail.selectedRows.length}`)}}
      ></gds-table>
    </div>
  `},i={args:{columns:r,data:n(20)},parameters:{docs:{description:{story:`
Demonstrates different column alignments:
- ID: right-aligned (for numbers)
- Name & Email: left-aligned (default for text)
- Amount: right-aligned (for currency/numbers)
- Status: center-aligned
        `}}},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `};var g,p,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(100)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,$,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(5)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(h=($=s.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var S,k,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(1000)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var D,C,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'id',
      label: '#',
      sortable: true
    }, {
      key: 'name',
      label: 'Full Name',
      sortable: true
    }, {
      key: 'email',
      label: 'Contact Email',
      sortable: true
    }],
    data: generateMockData(50)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(M=(C=m.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var v,w,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: generateMockData(50)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var N,x,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(20)
  },
  render: args => html\`
    <div>
      <p id="selection-info">No rows selected</p>
      <gds-table
        .columns=\${args.columns}
        .data=\${args.data}
        @selection-change=\${(e: CustomEvent) => {
    const info = document.getElementById('selection-info');
    if (info) {
      info.textContent = \`Selected rows: \${e.detail.selectedRows.length}\`;
    }
  }}
      ></gds-table>
    </div>
  \`
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var I,R,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(20)
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates different column alignments:
- ID: right-aligned (for numbers)
- Name & Email: left-aligned (default for text)
- Amount: right-aligned (for currency/numbers)
- Status: center-aligned
        \`
      }
    }
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Ee=["Default","SmallDataSet","LargeDataSet","CustomColumns","NonSortableColumns","WithSelectionHandler","ColumnAlignment"];export{i as ColumnAlignment,m as CustomColumns,o as Default,l as LargeDataSet,d as NonSortableColumns,s as SmallDataSet,c as WithSelectionHandler,Ee as __namedExportsOrder,we as default};
