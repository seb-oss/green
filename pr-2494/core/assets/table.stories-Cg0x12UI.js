import{x as n}from"./lit-element-Bx14lxc-.js";import{a as P}from"./argTableProps-Cf8QYlZk.js";import"./table-PxA7LV4B.js";import"./dropdown-B9gqj8m5.js";import"./input-C0jvozuq.js";import"./custom-elements-kLmfXFyp.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CA5ADGwW.js";import"./button.component-nte5-sOS.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C1gztw0h.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./dropdown.component-EBACwo34.js";import"./runtime-CNluP0A8.js";import"./query-async-MEroNOeJ.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-BLMLDB8q.js";import"./form-control-header.component-DSof6t8L.js";import"./badge.component-31Ffk_Dp.js";import"./flex.component-DjV-SouM.js";import"./div.component-DTdhfIq2.js";import"./triangle-exclamation.component-DRCnlnnD.js";import"./icon-Cyq3udZ2.js";import"./card.component-DgPbllnK.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-CufDiWNZ.js";import"./checkmark.component-CddocQY8.js";import"./rbcb-toggle.template-DqXF-ZkM.js";import"./chevron-bottom.component-DgyIWO1Z.js";import"./cross-small.component-BS14rjKa.js";import"./popover.component-D4dN7FfN.js";import"./sort.component-DX-m5813.js";import"./chevron-left.component-D8lZsGKs.js";import"./chevron-right.component-BAjvqtzM.js";import"./magnifying-glass.component-U0Z7YZT0.js";import"./textarea.component-GtKZgqjt.js";import"./resize-observer-B9k8v2TZ.js";const Ue={title:"Components/Table",component:"gds-table",argTypes:{...P("gds-text")},tags:["autodocs"],parameters:{docs:{description:{component:`
A responsive table component with the following features:
- Client-side search
- Sortable columns
- Row selection
- Pagination
- Responsive design
        `}}}},a=e=>Array.from({length:e},(p,s)=>({id:s+1,name:`User ${s+1}`,email:`user${s+1}@example.com`,amount:Math.floor(Math.random()*1e4),status:["Active","Inactive"][s%2]})),t=[{key:"id",label:"#",sortable:!0,align:"right"},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"amount",label:"Amount",sortable:!0,align:"right"},{key:"status",label:"Status",sortable:!0,align:"center"}],o={args:{columns:t,data:a(100),density:"comfortable"},argTypes:{density:{control:"select",options:["comfortable","compact","spacious"],description:"Controls the spacing density of the table",table:{type:{summary:"string"},defaultValue:{summary:"comfortable"}}}},render:e=>n`
    <gds-table
      .columns=${e.columns}
      .data=${e.data}
      density=${e.density}
    ></gds-table>
  `},r={args:{columns:t,data:a(5)},render:e=>n`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},l={args:{columns:t,data:a(1e3)},render:e=>n`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},i={args:{columns:[{key:"id",label:"#",sortable:!0},{key:"name",label:"Full Name",sortable:!0},{key:"email",label:"Contact Email",sortable:!0}],data:a(50)},render:e=>n`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},d={args:{columns:t.map(e=>({...e,sortable:!1})),data:a(50)},render:e=>n`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},m={args:{columns:t,data:a(20)},render:e=>n`
    <div>
      <p id="selection-info">No rows selected</p>
      <gds-table
        .columns=${e.columns}
        .data=${e.data}
        @selection-change=${p=>{const s=document.getElementById("selection-info");s&&(s.textContent=`Selected rows: ${p.detail.selectedRows.length}`)}}
      ></gds-table>
    </div>
  `},c={args:{columns:t,data:a(20)},parameters:{docs:{description:{story:`
Demonstrates different column alignments:
- ID: right-aligned (for numbers)
- Name & Email: left-aligned (default for text)
- Amount: right-aligned (for currency/numbers)
- Status: center-aligned
        `}}},render:e=>n`
    <gds-table .columns=${e.columns} .data=${e.data}></gds-table>
  `},u={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h3>Compact</h3>
        <gds-table
          .columns=${t}
          .data=${a(5)}
          density="compact"
        ></gds-table>
      </div>

      <div>
        <h3>Comfortable (Default)</h3>
        <gds-table
          .columns=${t}
          .data=${a(5)}
          density="comfortable"
        ></gds-table>
      </div>

      <div>
        <h3>Spacious</h3>
        <gds-table
          .columns=${t}
          .data=${a(5)}
          density="spacious"
        ></gds-table>
      </div>
    </div>
  `,parameters:{docs:{description:{story:`
### Density Modes
The table supports three density modes:
- **Compact**: Minimal spacing, good for displaying large datasets
- **Comfortable**: Default mode, balanced spacing
- **Spacious**: More generous spacing, good for readability
        `}}}},g={args:{columns:[{key:"id",label:"#",sortable:!0,align:"right"},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0,align:"center"},{key:"created",label:"Created Date",sortable:!0},{key:"lastLogin",label:"Last Login",sortable:!0}],data:a(20)},parameters:{docs:{description:{story:`
### Column Visibility
Users can show/hide columns using the column selector dropdown in the header.
- Multiple columns can be selected/deselected
- Column visibility state is maintained
- Responsive design adjusts to visible columns
        `}}}};var b,y,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(100),
    density: 'comfortable'
  },
  argTypes: {
    density: {
      control: 'select',
      options: ['comfortable', 'compact', 'spacious'],
      description: 'Controls the spacing density of the table',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'comfortable'
        }
      }
    }
  },
  render: args => html\`
    <gds-table
      .columns=\${args.columns}
      .data=\${args.data}
      density=\${args.density}
    ></gds-table>
  \`
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,$,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(5)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(k=($=r.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var C,D,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: generateMockData(1000)
  },
  render: args => html\`
    <gds-table .columns=\${args.columns} .data=\${args.data}></gds-table>
  \`
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var S,M,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(M=i.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var w,E,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var A,L,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var T,V,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var F,U,_;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h3>Compact</h3>
        <gds-table
          .columns=\${columns}
          .data=\${generateMockData(5)}
          density="compact"
        ></gds-table>
      </div>

      <div>
        <h3>Comfortable (Default)</h3>
        <gds-table
          .columns=\${columns}
          .data=\${generateMockData(5)}
          density="comfortable"
        ></gds-table>
      </div>

      <div>
        <h3>Spacious</h3>
        <gds-table
          .columns=\${columns}
          .data=\${generateMockData(5)}
          density="spacious"
        ></gds-table>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
### Density Modes
The table supports three density modes:
- **Compact**: Minimal spacing, good for displaying large datasets
- **Comfortable**: Default mode, balanced spacing
- **Spacious**: More generous spacing, good for readability
        \`
      }
    }
  }
}`,...(_=(U=u.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var j,B,H;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'id',
      label: '#',
      sortable: true,
      align: 'right'
    }, {
      key: 'name',
      label: 'Name',
      sortable: true
    }, {
      key: 'email',
      label: 'Email',
      sortable: true
    }, {
      key: 'role',
      label: 'Role',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      sortable: true,
      align: 'center'
    }, {
      key: 'created',
      label: 'Created Date',
      sortable: true
    }, {
      key: 'lastLogin',
      label: 'Last Login',
      sortable: true
    }],
    data: generateMockData(20)
  },
  parameters: {
    docs: {
      description: {
        story: \`
### Column Visibility
Users can show/hide columns using the column selector dropdown in the header.
- Multiple columns can be selected/deselected
- Column visibility state is maintained
- Responsive design adjusts to visible columns
        \`
      }
    }
  }
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const _e=["Default","SmallDataSet","LargeDataSet","CustomColumns","NonSortableColumns","WithSelectionHandler","ColumnAlignment","DensityModes","ColumnVisibility"];export{c as ColumnAlignment,g as ColumnVisibility,i as CustomColumns,o as Default,u as DensityModes,l as LargeDataSet,d as NonSortableColumns,r as SmallDataSet,m as WithSelectionHandler,_e as __namedExportsOrder,Ue as default};
