import{b as s}from"./iframe-BFOz556-.js";import{a as p}from"./argTableProps-B4rPkO2R.js";import{G as u}from"./list-item-pattern-01.component-vIEOwvDP.js";import"./cloudy-sun-Cdylc6sR.js";import"./text-CvfIS86a.js";import"./link-CbmK7xJ2.js";import"./flex--w2-iAi1.js";import"./list-item-B4QH6zW6.js";import"./card-BQEOuTuS.js";import"./avatar-1ah4-84S.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-Bks9EXN7.js";import"./checkmark.component-BcSuKlUt.js";import"./icon.component-eZxdIJ4v.js";import"./chevron-right.component-CRw3y1Xc.js";import"./minus-small.component-Bbi9YSnh.js";import"./text.component-Do2fdDQH.js";import"./default-typography.styles-Y2Emtnpw.js";import"./rbcb-toggle.template-BvwtFQXK.js";import"./resize-observer-CfkbZofs.js";import"./props-link-DMfmuvxV.js";import"./cloudy-sun.component-OZO5CYxK.js";import"./card.component-FI8rcXIN.js";import"./avatar.component-Dly5pq3M.js";import"./people-profile.component-DySWq3QO.js";u.define();const t=e=>Array.from({length:e},(h,c)=>({label:`Item ${c+1}`,value:`Value ${c+1}`})),G={title:"Patterns/List Item Pattern 01",component:"gds-list-item-pattern-01",tags:["autodocs"],argTypes:{...p("gds-list-item-pattern-01")},parameters:{docs:{description:{component:"A list container (`gds-list-pattern-01`) holding one or more row items\n(`gds-list-item-pattern-01`). Together they render a semantic `gds-list`\nwith configurable row slots:\n\n- **Lead**: shows a checkbox when `selectable` is set on the item.\n- **Main**: renders columns from `items`, or falls back to the default slot.\n- **Trail**: shows a chevron link when `href` is set on the item, or accepts custom content via the `trail` slot.\n\nThe row supports three main states:\n- **Selectable**: shows a checkbox in the lead and allows toggling the `checked` state.\n- **Navigational**: shows a chevron in the trail and applies a hover state to the entire row.\n- **Default**: no checkbox or chevron, used for simple lists or when custom content is projected in the lead/trail."}}}},n={render:()=>s`
    <gds-grid columns="2" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable</gds-text>
        <gds-list>
          <gds-list-item-pattern-01
            selectable
            .items=${t(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            checked
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Navigational</gds-text>
        <gds-list>
          <gds-list-item-pattern-01
            padding-inline="0"
            href="#"
            justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
            ></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            padding-inline="0"
            href="#"
            justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text></gds-flex
            ></gds-list-item-pattern-01
          >
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable and navigational</gds-text>
        <gds-list dividers>
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
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01
            .items=${t(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `},i={name:"List with items",args:{items:[{label:"Account",value:"1234 5678 9012"},{label:"Balance",value:"12 345,00 SEK"}]},argTypes:{items:{name:"Items",control:{type:"object"},description:"Array of `{ label?: string, value: string }` columns to display in the row."}},render:({items:e})=>s`
    <gds-grid columns="2" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Items</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Custom content</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 selectable
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column" gap="4xs">
              <gds-text tag="label" font="body-l-book">Custom content</gds-text>
            </gds-flex></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01 padding-inline="0"
            ><gds-avatar size="l" slot="lead">AF</gds-avatar
            ><gds-flex flex-direction="column" gap="4xs">
              <gds-text tag="label" font="body-l-book">Custom content</gds-text>
              <gds-text font="body-m">Custom content</gds-text>
            </gds-flex></gds-list-item-pattern-01
          >
        </gds-list>
      </gds-card>
    </gds-grid>
  `},d={render:()=>s`
    <gds-card variant="neutral-02-outlined" width="50%">
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
    </gds-card>
  `},a={name:"Navigational",render:()=>s`
    <gds-card variant="neutral-02-outlined" width="50%">
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
    </gds-card>
  `},r={name:"Selectable and navigational",render:()=>s`
    <gds-card variant="neutral-02-outlined" width="50%">
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
    </gds-card>
  `},l={render:()=>s`
    <gds-grid columns="2" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
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
        <gds-list dividers>
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
    </gds-grid>
  `},g={name:"Padding inline",args:{paddingInline:"0"},argTypes:{paddingInline:{control:"text"}},render:({paddingInline:e})=>s`
    <gds-grid gap="s" columns="2">
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
          <gds-list-item-pattern-01
            href="#"
            .items=${t(3)}
            padding-inline=${e}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `},o={name:"Lead slot",render:()=>s`
    <gds-grid gap="s" columns="2">
      <gds-text font="heading-s">Lead slot with icon</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(3)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s">Lead slot with avatar</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(1)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s">Selectable with icon in lead slot</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01 selectable .items=${t(2)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 selectable .items=${t(3)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `},m={name:"Trail slot",render:()=>s`
    <gds-grid columns="2" gap="s">
      <gds-text font="heading-s">Trail slot with button</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-button slot="trail" rank="secondary" size="small"
              >Action</gds-button
            >
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-button slot="trail" rank="secondary" size="small"
              >Action</gds-button
            >
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s">Trail slot with link</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-link slot="trail" href="#">View</gds-link>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-link slot="trail" href="#">View</gds-link>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s"
        >Navigational with href (no content in trail slot)</gds-text
      >
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01
            padding-inline="0"
            .items=${t(2)}
            href="#"
          >
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            padding-inline="0"
            .items=${t(2)}
            href="#"
          >
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="2" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable</gds-text>
        <gds-list>
          <gds-list-item-pattern-01
            selectable
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            checked
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Navigational</gds-text>
        <gds-list>
          <gds-list-item-pattern-01
            padding-inline="0"
            href="#"
            justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
            ></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            padding-inline="0"
            href="#"
            justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text></gds-flex
            ></gds-list-item-pattern-01
          >
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable and navigational</gds-text>
        <gds-list dividers>
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
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Default list pattern with one row and various states (selectable, navigational, etc).",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    <gds-grid columns="2" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Items</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Custom content</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 selectable
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column" gap="4xs">
              <gds-text tag="label" font="body-l-book">Custom content</gds-text>
            </gds-flex></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01 padding-inline="0"
            ><gds-avatar size="l" slot="lead">AF</gds-avatar
            ><gds-flex flex-direction="column" gap="4xs">
              <gds-text tag="label" font="body-l-book">Custom content</gds-text>
              <gds-text font="body-m">Custom content</gds-text>
            </gds-flex></gds-list-item-pattern-01
          >
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...i.parameters?.docs?.source},description:{story:"A list with multiple rows using the `items` property.\nIt has predefined styling for 2-3 columns, but can render more with default slot content.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-card variant="neutral-02-outlined" width="50%">
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
    </gds-card>
  \`
}`,...d.parameters?.docs?.source},description:{story:"When `selectable` is set on an item, a checkbox appears in the lead slot.\nToggle state is exposed via the `checked` property and `toggle-change` event.",...d.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Navigational',
  render: () => html\`
    <gds-card variant="neutral-02-outlined" width="50%">
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
    </gds-card>
  \`
}`,...a.parameters?.docs?.source},description:{story:"When `href` is set the trail renders list-item as an anchor link and\nthe row gains a hover state covering the main and trail slots.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Selectable and navigational',
  render: () => html\`
    <gds-card variant="neutral-02-outlined" width="50%">
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
    </gds-card>
  \`
}`,...r.parameters?.docs?.source},description:{story:"When `selectable` and `href` are set on the same item.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="2" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
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
        <gds-list dividers>
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
    </gds-grid>
  \`
}`,...l.parameters?.docs?.source},description:{story:"When `dividers` is set on `gds-list`, borders are rendered between list items\nand the default gap is removed.",...l.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    <gds-grid gap="s" columns="2">
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
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(3)}
            padding-inline=\${paddingInline}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...g.parameters?.docs?.source},description:{story:"Use the `padding-inline` property to customize horizontal padding\non a list item. Set to `0` to remove padding.",...g.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Lead slot',
  render: () => html\`
    <gds-grid gap="s" columns="2">
      <gds-text font="heading-s">Lead slot with icon</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(3)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s">Lead slot with avatar</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(1)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s">Selectable with icon in lead slot</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01 selectable .items=\${listPattern01Items(2)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 selectable .items=\${listPattern01Items(3)}>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...o.parameters?.docs?.source},description:{story:"Slot any content into the `lead` slot to show an icon or avatar on the left.\nWhen `selectable` is set the checkbox takes precedence and the lead slot is hidden.",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Trail slot',
  render: () => html\`
    <gds-grid columns="2" gap="s">
      <gds-text font="heading-s">Trail slot with button</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-button slot="trail" rank="secondary" size="small"
              >Action</gds-button
            >
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-button slot="trail" rank="secondary" size="small"
              >Action</gds-button
            >
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s">Trail slot with link</gds-text>
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-link slot="trail" href="#">View</gds-link>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-link slot="trail" href="#">View</gds-link>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-text font="heading-s"
        >Navigational with href (no content in trail slot)</gds-text
      >
      <gds-card variant="neutral-02-outlined">
        <gds-list>
          <gds-list-item-pattern-01
            padding-inline="0"
            .items=\${listPattern01Items(2)}
            href="#"
          >
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            padding-inline="0"
            .items=\${listPattern01Items(2)}
            href="#"
          >
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...m.parameters?.docs?.source},description:{story:"Use the `trail` slot to add a button, link, or any other content to the end of the row.\nWhen `href` is set, the entire row becomes a link and a chevron is displayed in the trail slot.",...m.parameters?.docs?.description}}};const K=["Default","ListWithItems","Selectable","Navigational","SelectableNavigational","Dividers","PaddingInline","LeadSlot","TrailButton"];export{n as Default,l as Dividers,o as LeadSlot,i as ListWithItems,a as Navigational,g as PaddingInline,d as Selectable,r as SelectableNavigational,m as TrailButton,K as __namedExportsOrder,G as default};
