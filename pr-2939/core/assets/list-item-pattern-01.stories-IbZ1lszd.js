import{b as s}from"./iframe-CIFw3hwN.js";import{a as c}from"./argTableProps-nXMCimIH.js";import{G as p}from"./list-item-pattern-01.component-CXaJ7Q5E.js";import"./cloudy-sun-VxAyr2FS.js";import"./text-uLFA-IkK.js";import"./link-BGPBVrQt.js";import"./flex-f6SU6fNG.js";import"./list-item-BdmJ-kO1.js";import"./divider-CfpThzKa.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-CSRqbLfc.js";import"./checkmark.component-BWtHkcrs.js";import"./icon.component-BHlazdrr.js";import"./chevron-right.component-BrAtJcO3.js";import"./minus-small.component-ByQN8kmB.js";import"./text.component-DedGKdw4.js";import"./default-typography.styles-DHYoTK62.js";import"./rbcb-toggle.template-C2lNXUPm.js";import"./resize-observer-CfkbZofs.js";import"./props-link-BzSZy7qc.js";import"./cloudy-sun.component-BIb1jtmu.js";p.define();const t=e=>Array.from({length:e},(u,g)=>({label:`Item ${g+1}`,value:`Value ${g+1}`})),E={title:"Patterns/List Item Pattern 01",component:"gds-list-item-pattern-01",tags:["autodocs"],argTypes:{...c("gds-list-item-pattern-01")},parameters:{docs:{description:{component:"A list container (`gds-list-pattern-01`) holding one or more row items\n(`gds-list-item-pattern-01`). Together they render a semantic `gds-list`\nwith configurable row slots:\n\n- **Lead**: shows a checkbox when `selectable` is set on the item.\n- **Main**: renders columns from `items`, or falls back to the default slot.\n- **Trail**: shows a chevron link when `href` is set on the item, or accepts custom content via the `trail` slot.\n\nThe row supports three main states:\n- **Selectable**: shows a checkbox in the lead and allows toggling the `checked` state.\n- **Linked**: shows a chevron in the trail and applies a hover state to the entire row.\n- **Default**: no checkbox or chevron, used for simple lists or when custom content is projected in the lead/trail."}}}},n={render:()=>s`
    <gds-flex flex-direction="column" gap="s">
      <gds-list>
        <gds-list-item-pattern-01
          selectable
          .items=${t(3)}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          selectable
          .items=${t(2)}
        ></gds-list-item-pattern-01>
      </gds-list>
      <gds-divider></gds-divider>
      <gds-list>
        <gds-list-item-pattern-01
          .items=${t(3)}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          .items=${t(2)}
        ></gds-list-item-pattern-01>
      </gds-list>
      <gds-divider></gds-divider>
      <gds-list>
        <gds-list-item-pattern-01 href="#" justify-content="flex-start"
          ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
          ><gds-flex flex-direction="column"
            ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
          ></gds-list-item-pattern-01
        >
        <gds-list-item-pattern-01 href="#" justify-content="flex-start"
          ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
          ><gds-flex flex-direction="column"
            ><gds-text>Label</gds-text></gds-flex
          ></gds-list-item-pattern-01
        >
      </gds-list>
      <gds-divider></gds-divider>
      <gds-card>
        <gds-list>
          <gds-list-item-pattern-01
            href="#"
            selectable
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=${t(3)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-flex>
  `},i={name:"List with items",args:{items:[{label:"Account",value:"1234 5678 9012"},{label:"Balance",value:"12 345,00 SEK"}]},argTypes:{items:{name:"Items",control:{type:"object"},description:"Array of `{ label?: string, value: string }` columns to display in the row."}},render:({items:e})=>s`
    <gds-list>
      <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
      <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
    </gds-list>
  `},r={render:()=>s`
    <gds-list>
      <gds-list-item-pattern-01
        selectable
        .items=${t(2)}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        selectable
        checked
        .items=${t(2)}
      ></gds-list-item-pattern-01>
    </gds-list>
  `},d={name:"Linked",render:()=>s`
    <gds-list>
      <gds-list-item-pattern-01 href="#"
        ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
        ><gds-text>Value</gds-text></gds-list-item-pattern-01
      >
      <gds-list-item-pattern-01
        href="#"
        .items=${t(2)}
      ></gds-list-item-pattern-01>
    </gds-list>
  `},l={name:"Selectable + Linked",render:()=>s`
    <gds-list>
      <gds-list-item-pattern-01
        selectable
        href="/accounts/5678"
        .items=${t(3)}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        selectable
        checked
        .items=${t(3)}
      ></gds-list-item-pattern-01>
    </gds-list>
  `},a={name:"Padding inline",args:{paddingInline:"0"},argTypes:{paddingInline:{control:"text"}},render:({paddingInline:e})=>s`
    <gds-list>
      <gds-list-item-pattern-01
        .items=${t(2)}
        padding-inline=${e}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        .items=${t(3)}
        padding-inline=${e}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        selectable
        checked
        .items=${t(3)}
        padding-inline=${e}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        href="#"
        .items=${t(3)}
        padding-inline=${e}
      ></gds-list-item-pattern-01>
    </gds-list>
  `},o={name:"Lead slot",render:()=>s`
    <gds-list>
      <gds-list-item-pattern-01 .items=${t(2)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 .items=${t(3)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 href="#" .items=${t(2)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 selectable .items=${t(2)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
    </gds-list>
  `},m={name:"Trail slot",render:()=>s`
    <gds-list>
      <gds-list-item-pattern-01 .items=${t(2)}>
        <gds-button slot="trail" rank="secondary" size="small"
          >Action</gds-button
        >
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 .items=${t(2)}>
        <gds-link slot="trail" href="#">View</gds-link>
      </gds-list-item-pattern-01>
    </gds-list>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="s">
      <gds-list>
        <gds-list-item-pattern-01
          selectable
          .items=\${listPattern01Items(3)}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          selectable
          .items=\${listPattern01Items(2)}
        ></gds-list-item-pattern-01>
      </gds-list>
      <gds-divider></gds-divider>
      <gds-list>
        <gds-list-item-pattern-01
          .items=\${listPattern01Items(3)}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          .items=\${listPattern01Items(2)}
        ></gds-list-item-pattern-01>
      </gds-list>
      <gds-divider></gds-divider>
      <gds-list>
        <gds-list-item-pattern-01 href="#" justify-content="flex-start"
          ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
          ><gds-flex flex-direction="column"
            ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
          ></gds-list-item-pattern-01
        >
        <gds-list-item-pattern-01 href="#" justify-content="flex-start"
          ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
          ><gds-flex flex-direction="column"
            ><gds-text>Label</gds-text></gds-flex
          ></gds-list-item-pattern-01
        >
      </gds-list>
      <gds-divider></gds-divider>
      <gds-card>
        <gds-list>
          <gds-list-item-pattern-01
            href="#"
            selectable
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-flex>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Default list pattern with one row and various states (selectable, linked, etc).",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'List with items',
  args: {
    items: [{
      label: 'Account',
      value: '1234 5678 9012'
    }, {
      label: 'Balance',
      value: '12 345,00 SEK'
    }]
  },
  argTypes: {
    items: {
      name: 'Items',
      control: {
        type: 'object'
      },
      description: 'Array of \`{ label?: string, value: string }\` columns to display in the row.'
    }
  },
  render: ({
    items
  }) => html\`
    <gds-list>
      <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
      <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...i.parameters?.docs?.source},description:{story:"A list with multiple rows using the `items` property.\nIt has predefined styling for 2-3 columns, but can render more with default slot content.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-list>
      <gds-list-item-pattern-01
        selectable
        .items=\${listPattern01Items(2)}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        selectable
        checked
        .items=\${listPattern01Items(2)}
      ></gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...r.parameters?.docs?.source},description:{story:"When `selectable` is set on an item, a checkbox appears in the lead slot.\nToggle state is exposed via the `checked` property and `toggle-change` event.",...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Linked',
  render: () => html\`
    <gds-list>
      <gds-list-item-pattern-01 href="#"
        ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
        ><gds-text>Value</gds-text></gds-list-item-pattern-01
      >
      <gds-list-item-pattern-01
        href="#"
        .items=\${listPattern01Items(2)}
      ></gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...d.parameters?.docs?.source},description:{story:"When `href` is set the trail renders list-item as an anchor link and\nthe row gains a hover state covering the main and trail slots.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Selectable + Linked',
  render: () => html\`
    <gds-list>
      <gds-list-item-pattern-01
        selectable
        href="/accounts/5678"
        .items=\${listPattern01Items(3)}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        selectable
        checked
        .items=\${listPattern01Items(3)}
      ></gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...l.parameters?.docs?.source},description:{story:"`selectable` + `href`.",...l.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Padding inline',
  args: {
    paddingInline: '0'
  },
  argTypes: {
    paddingInline: {
      control: 'text'
    }
  },
  render: ({
    paddingInline
  }) => html\`
    <gds-list>
      <gds-list-item-pattern-01
        .items=\${listPattern01Items(2)}
        padding-inline=\${paddingInline}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        .items=\${listPattern01Items(3)}
        padding-inline=\${paddingInline}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        selectable
        checked
        .items=\${listPattern01Items(3)}
        padding-inline=\${paddingInline}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        href="#"
        .items=\${listPattern01Items(3)}
        padding-inline=\${paddingInline}
      ></gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...a.parameters?.docs?.source},description:{story:"Use the `padding-inline` property to customize horizontal padding\non a list item. Set to `0` to remove padding.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Lead slot',
  render: () => html\`
    <gds-list>
      <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 .items=\${listPattern01Items(3)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 href="#" .items=\${listPattern01Items(2)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 selectable .items=\${listPattern01Items(2)}>
        <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
      </gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...o.parameters?.docs?.source},description:{story:"Slot any content into the `lead` slot to show an icon or avatar on the left.\nWhen `selectable` is set the checkbox takes precedence and the lead slot is hidden.",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Trail slot',
  render: () => html\`
    <gds-list>
      <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
        <gds-button slot="trail" rank="secondary" size="small"
          >Action</gds-button
        >
      </gds-list-item-pattern-01>
      <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
        <gds-link slot="trail" href="#">View</gds-link>
      </gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...m.parameters?.docs?.source},description:{story:"Use the `trail` slot to add a button, link, or any other content to the end of the row.\nWhen `href` is set, the entire row becomes a link and the trail content is rendered inside the anchor.",...m.parameters?.docs?.description}}};const _=["Default","ListWithItems","Selectable","Linked","SelectableLinked","PaddingInline","LeadSlot","TrailButton"];export{n as Default,o as LeadSlot,d as Linked,i as ListWithItems,a as PaddingInline,r as Selectable,l as SelectableLinked,m as TrailButton,_ as __namedExportsOrder,E as default};
