import{b as s}from"./iframe--MLfqQYT.js";import{a as c}from"./argTableProps-BpdoFiEM.js";import{G as p}from"./list-item-pattern-01.component-DpbaKhlW.js";import"./cloudy-sun-BJgorrQ2.js";import"./text-CzWyNq1B.js";import"./link-DabbNvaE.js";import"./flex-DksfZ1O-.js";import"./list-item-Cct9O5YX.js";import"./card-Cib6LrUY.js";import"./avatar-UvyPMLMR.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-BUCAhQ1W.js";import"./checkmark.component-CZR3FJzs.js";import"./icon.component-i0AdzwRk.js";import"./chevron-right.component-BdHCP9NQ.js";import"./minus-small.component-C6dwEoh7.js";import"./text.component-DibKKvYh.js";import"./default-typography.styles-CawhV9CK.js";import"./rbcb-toggle.template-CLMkNeNq.js";import"./resize-observer-CfkbZofs.js";import"./props-link-DmZsvgbv.js";import"./cloudy-sun.component-aJbYAOK1.js";import"./card.component-C-A1qXE2.js";import"./avatar.component-FnqUoLRa.js";import"./people-profile.component-CmYceAyO.js";p.define();const t=e=>Array.from({length:e},(u,o)=>({label:`Item ${o+1}`,value:`Value ${o+1}`})),K={title:"Patterns/List Item Pattern 01",component:"gds-list-item-pattern-01",tags:["autodocs"],argTypes:{...c("gds-list-item-pattern-01")},parameters:{docs:{description:{component:"A list container (`gds-list-pattern-01`) holding one or more row items\n(`gds-list-item-pattern-01`). Together they render a semantic `gds-list`\nwith configurable row slots:\n\n- **Lead**: shows a checkbox when `selectable` is set on the item.\n- **Main**: renders columns from `items`, or falls back to the default slot.\n- **Trail**: shows a chevron link when `href` is set on the item, or accepts custom content via the `trail` slot.\n\nThe row supports three main states:\n- **Selectable**: shows a checkbox in the lead and allows toggling the `checked` state.\n- **Navigational**: shows a chevron in the trail and applies a hover state to the entire row.\n- **Default**: no checkbox or chevron, used for simple lists or when custom content is projected in the lead/trail."}}}},n={render:()=>s`
    <gds-grid columns="1; m{2}" gap="s">
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
          <gds-list-item-pattern-01 href="#" justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
            ></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01 href="#" justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
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
  `},i={render:()=>s`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable</gds-text>
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
          <gds-list-item-pattern-01
            selectable
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable with dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01
            selectable
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            checked
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            .items=${t(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `},d={name:"Navigational",render:()=>s`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Navigational</gds-text>
        <gds-list>
          <gds-list-item-pattern-01
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
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
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Navigational with dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
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
  `},a={name:"Selectable and navigational",render:()=>s`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable and navigational</gds-text>
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
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=${t(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=${t(3)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s"
          >Selectable and navigational with dividers</gds-text
        >
        <gds-list dividers>
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
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=${t(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=${t(3)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `},l={render:()=>s`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=${t(2)}
          ></gds-list-item-pattern-01>
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
            selectable
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="#"
            .items=${t(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
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
  `},r={name:"Lead slot",render:()=>s`
    <gds-grid gap="s" columns="1; m{2}">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with icon</gds-text>
        <gds-list>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with icon and dividers</gds-text>

        <gds-list dividers>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with avatar</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with avatar and dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `},g={name:"Trail slot",render:()=>s`
    <gds-grid columns="1; m{2}" gap="s">
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
          <gds-list-item-pattern-01 .items=${t(2)} href="#">
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${t(2)} href="#">
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `},m={name:"List with items",args:{items:[{label:"Account",value:"1234 5678 9012"},{label:"Balance",value:"12 345,00 SEK"}]},argTypes:{items:{name:"Items",control:{type:"object"},description:"Array of `{ label?: string, value: string }` columns to display in the row."}},render:({items:e})=>s`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Items</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=${e}></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="s">
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
          <gds-list-item-pattern-01 href="#" justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
            ></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01 href="#" justify-content="flex-start"
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-flex flex-direction="column"
              ><gds-text>Label</gds-text><gds-text>Value</gds-text></gds-flex
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
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable</gds-text>
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
          <gds-list-item-pattern-01
            selectable
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable with dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01
            selectable
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            checked
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...i.parameters?.docs?.source},description:{story:"When `selectable` is set on an item, a checkbox appears in the lead slot.\nToggle state is exposed via the `checked` property and `toggle-change` event.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Navigational',
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Navigational</gds-text>
        <gds-list>
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
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
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Navigational with dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
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
}`,...d.parameters?.docs?.source},description:{story:"When `href` is set the trail renders list-item as an anchor link and\nthe row gains a hover state covering the main and trail slots.",...d.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Selectable and navigational',
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Selectable and navigational</gds-text>
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
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s"
          >Selectable and navigational with dividers</gds-text
        >
        <gds-list dividers>
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
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="/accounts/5678"
            .items=\${listPattern01Items(3)}
          ></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...a.parameters?.docs?.source},description:{story:"When `selectable` and `href` are set on the same item.",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
          <gds-list-item-pattern-01
            ><gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun
            ><gds-text>Label</gds-text
            ><gds-text slot="trail">value</gds-text></gds-list-item-pattern-01
          >
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-list dividers>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
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
            selectable
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
            selectable
            href="#"
            .items=\${listPattern01Items(2)}
          ></gds-list-item-pattern-01>
          <gds-list-item-pattern-01
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
}`,...l.parameters?.docs?.source},description:{story:"When `dividers` is set on `gds-list`, borders are rendered between list items.",...l.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Lead slot',
  render: () => html\`
    <gds-grid gap="s" columns="1; m{2}">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with icon</gds-text>
        <gds-list>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with icon and dividers</gds-text>

        <gds-list dividers>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01>
            <gds-icon-cloudy-sun slot="lead"></gds-icon-cloudy-sun>
            <gds-text>Label</gds-text>
            <gds-text slot="trail">value</gds-text>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with avatar</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Lead slot with avatar and dividers</gds-text>
        <gds-list dividers>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)}>
            <gds-avatar slot="lead"></gds-avatar>
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...r.parameters?.docs?.source},description:{story:"Slot any content into the `lead` slot to show an icon or avatar on the left.\nWhen `selectable` is set the checkbox takes precedence and the lead slot is hidden.",...r.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Trail slot',
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="s">
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
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)} href="#">
          </gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${listPattern01Items(2)} href="#">
          </gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...g.parameters?.docs?.source},description:{story:"Use the `trail` slot to add a button, link, or any other content to the end of the row.\nWhen `href` is set, the entire row becomes a link and a chevron is displayed in the trail slot.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    <gds-grid columns="1; m{2}" gap="s">
      <gds-card variant="neutral-02-outlined">
        <gds-text font="heading-s">Items</gds-text>
        <gds-list>
          <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
          <gds-list-item-pattern-01 .items=\${items}></gds-list-item-pattern-01>
        </gds-list>
      </gds-card>
    </gds-grid>
  \`
}`,...m.parameters?.docs?.source},description:{story:"A list using the `items` property to generate multiple columns inside each row.\nIt has predefined styling for 2-3 columns. Use default slot content if more columns are needed.",...m.parameters?.docs?.description}}};const U=["Default","Selectable","Navigational","SelectableNavigational","Dividers","LeadSlot","TrailButton","ListWithItems"];export{n as Default,l as Dividers,r as LeadSlot,m as ListWithItems,d as Navigational,i as Selectable,a as SelectableNavigational,g as TrailButton,U as __namedExportsOrder,K as default};
