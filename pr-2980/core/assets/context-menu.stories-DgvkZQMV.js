import{b as i,r as a}from"./iframe--MLfqQYT.js";import"./context-menu-CeyQddU_.js";import"./menu-item-CN5qTkAc.js";import"./menu-heading-DC2adxM_.js";import{a as c}from"./argTableProps-BpdoFiEM.js";import"./arrow-up-v7fj7AHz.js";import"./dot-grid-one-horizontal-C6Wc9Wva.js";import"./flex-DksfZ1O-.js";import"./preload-helper-PPVm8Dsz.js";import"./context-menu.component-PUnCrCUN.js";import"./localized-decorator-B9N46xqv.js";import"./unwrap-slots-BbLg1Fni.js";import"./ref-C9YkrkKz.js";import"./popover.component-BNat3_fb.js";import"./floating-ui.dom-DPpwG6Py.js";import"./cross-small.component-BjuZQDuW.js";import"./icon.component-i0AdzwRk.js";import"./menu-heading.component-4NRIVyhp.js";import"./arrow-up.component-BREZyc0W.js";import"./flex.component-BUCAhQ1W.js";a();const B={title:"Components/Context menu",component:"gds-context-menu",subcomponents:{GdsMenuItem:"gds-menu-item"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/context-menu)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-moremenu)

A context menu displays a list of contextual actions.`}}},tags:["autodocs"],argTypes:{...c("gds-context-menu")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{items:{control:{type:"object"}}},args:{innerHTML:`<gds-menu-item>Action 1</gds-menu-item>
<gds-menu-item>Action 2</gds-menu-item>
<gds-menu-item>Action 3</gds-menu-item>`}},m={...r},e={...r,render:d=>i`
    Activated action: <span id="display-action"></span>
    <br />
    <gds-context-menu popover-label="Select an action" button-label="Menu">
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 1
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 2
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 3
      </gds-menu-item>
    </gds-context-menu>
  `},t={...r,render:d=>i`
    <gds-context-menu>
      <gds-button slot="trigger" rank="tertiary">
        Custom trigger
        <gds-icon-dot-grid-one-horizontal
          slot="trail"
        ></gds-icon-dot-grid-one-horizontal>
      </gds-button>
      <gds-menu-item>Action 1</gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>Action 3</gds-menu-item>
    </gds-context-menu>
  `},n={...r,render:d=>i`
    <gds-context-menu
      label="Select an action"
      button-label="Menu"
      show-label
      .showLabel=${!0}
    >
      <gds-menu-item>Action 1</gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>Action 3</gds-menu-item>
    </gds-context-menu>
  `},o={...r,render:d=>i`
    <gds-flex gap="xs">
      <gds-button>Label</gds-button>
      <gds-context-menu placement="bottom-end">
        <gds-button slot="trigger" aria-label="More options">
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
        <gds-menu-item>Menu item 1</gds-menu-item>
        <gds-menu-item>Menu item 2</gds-menu-item>
        <gds-menu-item>Menu item 3</gds-menu-item>
      </gds-context-menu>
    </gds-flex>
  `},s={name:"ARIA Forwarding",render:()=>i`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="context-label">Row Options</div>
      <div id="context-description">Select an action for this item</div>
      <div id="menu-controlled">Menu controlled area</div>
      <gds-context-menu
        gds-aria-labelledby="context-label"
        gds-aria-describedby="context-description"
        gds-aria-controls="menu-controlled"
      >
        <gds-menu-item>Edit</gds-menu-item>
        <gds-menu-item>Copy</gds-menu-item>
        <gds-menu-item>Delete</gds-menu-item>
      </gds-context-menu>
    </gds-flex>
  `};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...m.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    Activated action: <span id="display-action"></span>
    <br />
    <gds-context-menu popover-label="Select an action" button-label="Menu">
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 1
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 2
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 3
      </gds-menu-item>
    </gds-context-menu>
  \`
}`,...e.parameters?.docs?.source},description:{story:'Menu items are defined by adding `gds-menu-item` elements as children of the `gds-context-menu` element.\nYou should always provide a `button-label` so the button is accessibible. Consider to show the label as\nwell with `show-label` set to `true`;\n\nTo handle the user\'s interaction, you can listen to `click` events on individual menu items, or to the\n`gds-menu-item-click` event on the parent `gds-context-menu` element.\n\nNote that you should always supply a label for the context menu. The label should describe the context\nof the menu, such as "Select an action for XYZ".',...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-context-menu>
      <gds-button slot="trigger" rank="tertiary">
        Custom trigger
        <gds-icon-dot-grid-one-horizontal
          slot="trail"
        ></gds-icon-dot-grid-one-horizontal>
      </gds-button>
      <gds-menu-item>Action 1</gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>Action 3</gds-menu-item>
    </gds-context-menu>
  \`
}`,...t.parameters?.docs?.source},description:{story:"You can provide a custom trigger for the context menu by adding an element to the `trigger` slot.\nThe trigger element should be focusable, preferably a `gds-button` element. Appropriate ARIA attributes will be added\nto the trigger element automatically, but misuse of this slot can still result in an inaccessible component.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-context-menu
      label="Select an action"
      button-label="Menu"
      show-label
      .showLabel=\${true}
    >
      <gds-menu-item>Action 1</gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>Action 3</gds-menu-item>
    </gds-context-menu>
  \`
}`,...n.parameters?.docs?.source},description:{story:"You can show the label by setting the `show-label` attribute on the `<gds-context-menu>` element.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-flex gap="xs">
      <gds-button>Label</gds-button>
      <gds-context-menu placement="bottom-end">
        <gds-button slot="trigger" aria-label="More options">
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
        <gds-menu-item>Menu item 1</gds-menu-item>
        <gds-menu-item>Menu item 2</gds-menu-item>
        <gds-menu-item>Menu item 3</gds-menu-item>
      </gds-context-menu>
    </gds-flex>
  \`
}`,...o.parameters?.docs?.source},description:{story:"You can provide a custom icon for the context menu trigger by using the `icon` slot.\n\nFor example like this split button pattern.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="context-label">Row Options</div>
      <div id="context-description">Select an action for this item</div>
      <div id="menu-controlled">Menu controlled area</div>
      <gds-context-menu
        gds-aria-labelledby="context-label"
        gds-aria-describedby="context-description"
        gds-aria-controls="menu-controlled"
      >
        <gds-menu-item>Edit</gds-menu-item>
        <gds-menu-item>Copy</gds-menu-item>
        <gds-menu-item>Delete</gds-menu-item>
      </gds-context-menu>
    </gds-flex>
  \`
}`,...s.parameters?.docs?.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels, descriptions, and controls to be associated with the internal trigger button.\nUses `gds-aria-labelledby`, `gds-aria-describedby`, and `gds-aria-controls` to wire up external accessibility text.",...s.parameters?.docs?.description}}};const L=["Basic","Usage","CustomTrigger","ShowLabel","CustomIcon","AriaForwarding"];export{s as AriaForwarding,m as Basic,o as CustomIcon,t as CustomTrigger,n as ShowLabel,e as Usage,L as __namedExportsOrder,B as default};
