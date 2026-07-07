import{h as d}from"./iframe-7cQTFavr.js";import"./link-CZkfySh5.js";import"./popover-C1yuKbpG.js";import"./flex-_-LG-6eT.js";import"./card-BWpuGtW6.js";import"./text-CzcfAkRh.js";import"./divider-BihtHz4H.js";import"./magnifying-glass-DVKUrSzW.js";import"./star-CfPmlKtd.js";import"./arrow-right-DsZFe3TZ.js";import"./chain-link-DG9fIpnl.js";import{a as o}from"./argTableProps-2KitSP6r.js";import"./preload-helper-PPVm8Dsz.js";import"./props-link-CJkDC_NT.js";import"./popover.component-ZzRF36P-.js";import"./localized-decorator-C7_wkvKS.js";import"./floating-ui.dom-DPpwG6Py.js";import"./cross-small.component-BwE8nJuQ.js";import"./icon.component-1pC9-FPY.js";import"./flex.component-SondyWuq.js";import"./card.component-BzA19iC8.js";import"./text.component-DHfay3Ig.js";import"./default-typography.styles-oYHINIYQ.js";import"./magnifying-glass.component-BjZyEdve.js";import"./star.component-CKlHYQPg.js";import"./arrow-right.component-ZDmoPR_A.js";const E={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...o("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},a={...e},n={...e,name:"Icon: Lead",render:()=>d` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`},i={...e,name:"Icon: Trail",render:()=>d` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},r={...e,name:"Text Decoration",render:()=>d`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},t={...e,name:"Label",render:()=>d`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `},s={...e,name:"ARIA Forwarding",render:()=>d`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="link-label">External resource</div>
      <div id="link-description">Opens in a new window</div>
      <gds-link
        href="#"
        gds-aria-labelledby="link-label"
        gds-aria-describedby="link-description"
      >
        Visit documentation
      </gds-link>
    </gds-flex>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Lead',
  render: () => html\` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>\`
}`,...n.parameters?.docs?.source},description:{story:"A link component with a leading icon.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () => html\` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>\`
}`,...i.parameters?.docs?.source},description:{story:"A link component with a trailing icon.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Text Decoration',
  render: () => html\`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...r.parameters?.docs?.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Label',
  render: () => html\`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  \`
}`,...t.parameters?.docs?.source},description:{story:`On the \`gds-link\` component, the \`label\` attribute is used to provide an accessible name for the link.

It will be forwarded to the \`aria-label\` attribute of the underlying anchor element.


Use this when:
- The link contains only an icon
- The visual text needs a different description for screen readers
- Additional context is needed for accessibility

\`\`\`html
<!-- Icon-only link -->
<gds-link href="/settings" label="Open settings">
 <gds-icon-settings></gds-icon-settings>
</gds-link>

<!-- Different screen reader text -->
<gds-link href="/article" label="Read full article about climate change">
 Read more
</gds-link>
\`\`\``,...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="link-label">External resource</div>
      <div id="link-description">Opens in a new window</div>
      <gds-link
        href="#"
        gds-aria-labelledby="link-label"
        gds-aria-describedby="link-description"
      >
        Visit documentation
      </gds-link>
    </gds-flex>
  \`
}`,...s.parameters?.docs?.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal anchor element.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...s.parameters?.docs?.description}}};const B=["Basic","Lead","Trail","TextDecoration","Label","AriaForwarding"];export{s as AriaForwarding,a as Basic,t as Label,n as Lead,r as TextDecoration,i as Trail,B as __namedExportsOrder,E as default};
