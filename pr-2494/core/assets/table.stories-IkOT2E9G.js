import{x as t}from"./lit-element-Bx14lxc-.js";import"./table-C18PyB3Z.js";import"./dropdown-B9gqj8m5.js";import"./input-CeR_M0gW.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CA5ADGwW.js";import"./button.component-nte5-sOS.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C1gztw0h.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./chevron-double-right.component-YaP_lce2.js";import"./icon-Cyq3udZ2.js";import"./unsafe-html-CYO4avEf.js";import"./chevron-left.component-D8lZsGKs.js";import"./chevron-right.component-BAjvqtzM.js";import"./dropdown.component-EBACwo34.js";import"./runtime-CNluP0A8.js";import"./query-async-MEroNOeJ.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-BLMLDB8q.js";import"./form-control-header.component-DSof6t8L.js";import"./badge.component-31Ffk_Dp.js";import"./flex.component-DjV-SouM.js";import"./div.component-DTdhfIq2.js";import"./triangle-exclamation.component-DRCnlnnD.js";import"./card.component-DgPbllnK.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-CufDiWNZ.js";import"./checkmark.component-CddocQY8.js";import"./rbcb-toggle.template-DqXF-ZkM.js";import"./chevron-bottom.component-DgyIWO1Z.js";import"./cross-small.component-BS14rjKa.js";import"./popover.component-D4dN7FfN.js";import"./textarea.component-GtKZgqjt.js";import"./resize-observer-B9k8v2TZ.js";const ye={title:"Components/Table",component:"gds-table",tags:["autodocs"],parameters:{docs:{description:{component:`
A responsive table component with the following features:
- Client-side search
- Sortable columns
- Row selection
- Pagination
- Responsive design
        `}}}},o=e=>Array.from({length:e},(i,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:["Admin","User","Editor"][a%3],status:["Active","Inactive"][a%2]})),r=[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0}],s={args:{columns:r,data:o(100)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},n={args:{columns:r,data:o(5)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},l={args:{columns:r,data:o(1e3)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},m={args:{columns:[{key:"id",label:"#",sortable:!0},{key:"name",label:"Full Name",sortable:!0},{key:"email",label:"Contact Email",sortable:!0}],data:o(50)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},c={args:{columns:r.map(e=>({...e,sortable:!1})),data:o(50)},render:e=>t`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},d={args:{columns:r,data:o(20)},render:e=>t`
    <div>
      <p id="selection-info">No rows selected</p>
      <gds-table
        .columns=${e.columns}
        .data=${e.data}
        @selection-change=${i=>{const a=document.getElementById("selection-info");a&&(a.textContent=`Selected rows: ${i.detail.selectedRows.length}`)}}
      ></gds-table>
    </div>
  `};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(100)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,$,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(5)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(S=($=n.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var f,k,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(1000)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,C,D;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var v,w,E;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,N,x;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(x=(N=d.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const Ce=["Default","SmallDataSet","LargeDataSet","CustomColumns","NonSortableColumns","WithSelectionHandler"];export{m as CustomColumns,s as Default,l as LargeDataSet,c as NonSortableColumns,n as SmallDataSet,d as WithSelectionHandler,Ce as __namedExportsOrder,ye as default};
