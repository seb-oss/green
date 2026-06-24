import{b as s}from"./iframe-CzLZV9fx.js";import{a as p}from"./argTableProps-CBMaGuFY.js";import{G as u}from"./list-item-pattern-01.component-CyBxAVVG.js";import"./cloudy-sun-Bu6qwuru.js";import"./text-DYpImKPh.js";import"./link-BGDxghVI.js";import"./flex-D2oHigGn.js";import"./list-item-C58shjWo.js";import"./divider-C_pcUuBi.js";import"./card-BsKudPML.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-D4TADlH8.js";import"./checkmark.component-DGDPIdgi.js";import"./icon.component-0M8tZMfJ.js";import"./chevron-right.component-vG0QUkQ4.js";import"./minus-small.component-B-ftsP9W.js";import"./text.component-CEi_eOLs.js";import"./default-typography.styles-8HbNwBvz.js";import"./rbcb-toggle.template-DpLWtQ3w.js";import"./resize-observer-CfkbZofs.js";import"./props-link-FShHYTDs.js";import"./cloudy-sun.component-2VHVLapz.js";import"./card.component-C6pT9Vf_.js";u.define();const t=e=>Array.from({length:e},(h,c)=>({label:`Item ${c+1}`,value:`Value ${c+1}`})),K={title:"Patterns/List Item Pattern 01",component:"gds-list-item-pattern-01",tags:["autodocs"],argTypes:{...p("gds-list-item-pattern-01")},parameters:{docs:{description:{component:"A list container (`gds-list-pattern-01`) holding one or more row items\n(`gds-list-item-pattern-01`). Together they render a semantic `gds-list`\nwith configurable row slots:\n\n- **Lead**: shows a checkbox when `selectable` is set on the item.\n- **Main**: renders columns from `items`, or falls back to the default slot.\n- **Trail**: shows a chevron link when `href` is set on the item, or accepts custom content via the `trail` slot.\n\nThe row supports three main states:\n- **Selectable**: shows a checkbox in the lead and allows toggling the `checked` state.\n- **Linked**: shows a chevron in the trail and applies a hover state to the entire row.\n- **Default**: no checkbox or chevron, used for simple lists or when custom content is projected in the lead/trail."}}}},n={render:()=>s`
    <gds-flex flex-direction="column" gap="s">
      <gds-card variant="neutral-02-outlined">
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
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            .items=${t(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
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
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            href="#"
            selectable
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            selectable
            .items=${t(2)}
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
  `},a={name:"Selectable with href",render:()=>s`
    <gds-list>
      <gds-list-item-pattern-01
        selectable
        href="/accounts/5678"
        .items=${t(3)}
      ></gds-list-item-pattern-01>
      <gds-list-item-pattern-01
        selectable
        checked
        href="/accounts/5678"
        .items=${t(3)}
      ></gds-list-item-pattern-01>
    </gds-list>
  `},l={render:()=>s`
    <gds-flex flex-direction="column" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            padding-inline="0"
            selectable
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            padding-inline="0"
            selectable
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-flex>
  `},o={name:"Padding inline",args:{paddingInline:"0"},argTypes:{paddingInline:{control:"text"}},render:({paddingInline:e})=>s`
    <gds-flex flex-direction="column" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list-item-pattern-01
          .items=${t(2)}
          padding-inline=${e}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          .items=${t(3)}
          padding-inline=${e}
        ></gds-list-item-pattern-01>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list-item-pattern-01
          selectable
          .items=${t(3)}
          padding-inline=${e}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          selectable
          checked
          .items=${t(3)}
          padding-inline=${e}
        ></gds-list-item-pattern-01>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01
            href="#"
            .items=${t(3)}
            padding-inline=${e}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-flex>
  `},g={name:"Lead slot",render:()=>s`
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
      <gds-card variant="neutral-02-outlined">
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
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
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
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            href="#"
            selectable
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            selectable
            .items=\${listPattern01Items(2)}
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
}`,...d.parameters?.docs?.source},description:{story:"When `href` is set the trail renders list-item as an anchor link and\nthe row gains a hover state covering the main and trail slots.",...d.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Selectable with href',
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
        href="/accounts/5678"
        .items=\${listPattern01Items(3)}
      ></gds-list-item-pattern-01>
    </gds-list>
  \`
}`,...a.parameters?.docs?.source},description:{story:"When `selectable` and `href` are set on the same item.",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            padding-inline="0"
            selectable
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            padding-inline="0"
            selectable
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list divider>
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-flex>
  \`
}`,...l.parameters?.docs?.source},description:{story:"When `divider` is set on `gds-list`, borders are rendered between list items\nand the default gap is removed.",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    <gds-flex flex-direction="column" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list-item-pattern-01
          .items=\${listPattern01Items(2)}
          padding-inline=\${paddingInline}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          .items=\${listPattern01Items(3)}
          padding-inline=\${paddingInline}
        ></gds-list-item-pattern-01>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list-item-pattern-01
          selectable
          .items=\${listPattern01Items(3)}
          padding-inline=\${paddingInline}
        ></gds-list-item-pattern-01>
        <gds-list-item-pattern-01
          selectable
          checked
          .items=\${listPattern01Items(3)}
          padding-inline=\${paddingInline}
        ></gds-list-item-pattern-01>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(3)}
            padding-inline=\${paddingInline}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-flex>
  \`
}`,...o.parameters?.docs?.source},description:{story:"Use the `padding-inline` property to customize horizontal padding\non a list item. Set to `0` to remove padding.",...o.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Slot any content into the `lead` slot to show an icon or avatar on the left.\nWhen `selectable` is set the checkbox takes precedence and the lead slot is hidden.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Use the `trail` slot to add a button, link, or any other content to the end of the row.\nWhen `href` is set, the entire row becomes a link and a chevron is displayed in the trail slot.",...m.parameters?.docs?.description}}};const U=["Default","ListWithItems","Selectable","Linked","SelectableLinked","Divider","PaddingInline","LeadSlot","TrailButton"];export{n as Default,l as Divider,g as LeadSlot,d as Linked,i as ListWithItems,o as PaddingInline,r as Selectable,a as SelectableLinked,m as TrailButton,U as __namedExportsOrder,K as default};
