import{b as i,r as R}from"./iframe-CL7Bfxf7.js";import"./context-menu-BlMpmDGd.js";import"./menu-item-BOpe0BoN.js";import"./menu-heading-BPQZkfrQ.js";import{a as j}from"./argTableProps-CqaFD09l.js";import"./arrow-up-OWqEWUdb.js";import"./dot-grid-one-horizontal-B7eSeRle.js";import"./flex-DKlmx7v_.js";import"./preload-helper-Dp1pzeXC.js";import"./context-menu.component-BI1GYGrh.js";import"./localized-decorator-VhPkI65L.js";import"./unwrap-slots-DvQTUGWw.js";import"./ref-ChVbzimK.js";import"./popover.component-B3X5AUZg.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./cross-small.component-Cbur2-2c.js";import"./icon.component-CIs8Df4J.js";import"./menu-heading.component-CWS4rdDH.js";import"./arrow-up.component-v_rzMJQq.js";import"./flex.component-C4sihmBH.js";R();const i1={title:"Components/Context menu",component:"gds-context-menu",subcomponents:{GdsMenuItem:"gds-menu-item"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/context-menu)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-moremenu)

A context menu displays a list of contextual actions.`}}},tags:["autodocs"],argTypes:{...j("gds-context-menu")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{items:{control:{type:"object"}}},args:{innerHTML:`<gds-menu-item>Action 1</gds-menu-item>
<gds-menu-item>Action 2</gds-menu-item>
<gds-menu-item>Action 3</gds-menu-item>`}},d={...r},e={...r,render:m=>i`
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
  `},n={...r,render:m=>i`
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
  `},t={...r,render:m=>i`
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
  `},o={...r,render:m=>i`
    <gds-context-menu>
      <gds-icon-arrow-up slot="icon"></gds-icon-arrow-up>
      <gds-menu-item>
        <div>
          <strong>Custom</strong> <em>markup</em> can go here if so is needed!
        </div>
      </gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            color: var(--color);
            --color: var(--intent-danger-background);
          "
        >
          Delete&nbsp;
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </gds-menu-item>
    </gds-context-menu>
    <gds-context-menu show-label button-label="Options">
      <gds-icon-arrow-up slot="icon"></gds-icon-arrow-up>
      <gds-menu-item>
        <div>
          <strong>Custom</strong> <em>markup</em> can go here if so is needed!
        </div>
      </gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            color: var(--color);
            --color: var(--intent-danger-background);
          "
        >
          Delete&nbsp;
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </gds-menu-item>
    </gds-context-menu>
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
  `};var a,c,l;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(c=d.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,u,C,p,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(u=e.parameters)==null?void 0:u.docs)==null?void 0:C.source},description:{story:'Menu items are defined by adding `gds-menu-item` elements as children of the `gds-context-menu` element.\nYou should always provide a `button-label` so the button is accessibible. Consider to show the label as\nwell with `show-label` set to `true`;\n\nTo handle the user\'s interaction, you can listen to `click` events on individual menu items, or to the\n`gds-menu-item-click` event on the parent `gds-context-menu` element.\n\nNote that you should always supply a label for the context menu. The label should describe the context\nof the menu, such as "Select an action for XYZ".',...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};var h,x,w,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:"You can provide a custom trigger for the context menu by adding an element to the `trigger` slot.\nThe trigger element should be focusable, preferably a `gds-button` element. Appropriate ARIA attributes will be added\nto the trigger element automatically, but misuse of this slot can still result in an inaccessible component.",...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var H,f,V,A,M;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(f=t.parameters)==null?void 0:f.docs)==null?void 0:V.source},description:{story:"You can show the label by setting the `show-label` attribute on the `<gds-context-menu>` element.",...(M=(A=t.parameters)==null?void 0:A.docs)==null?void 0:M.description}}};var T,L,Z,k,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-context-menu>
      <gds-icon-arrow-up slot="icon"></gds-icon-arrow-up>
      <gds-menu-item>
        <div>
          <strong>Custom</strong> <em>markup</em> can go here if so is needed!
        </div>
      </gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            color: var(--color);
            --color: var(--intent-danger-background);
          "
        >
          Delete&nbsp;
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </gds-menu-item>
    </gds-context-menu>
    <gds-context-menu show-label button-label="Options">
      <gds-icon-arrow-up slot="icon"></gds-icon-arrow-up>
      <gds-menu-item>
        <div>
          <strong>Custom</strong> <em>markup</em> can go here if so is needed!
        </div>
      </gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            color: var(--color);
            --color: var(--intent-danger-background);
          "
        >
          Delete&nbsp;
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </gds-menu-item>
    </gds-context-menu>
  \`
}`,...(Z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:Z.source},description:{story:"You can provide a custom icon for the context menu trigger by using the `icon` slot.",...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var D,I,B,E,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(B=(I=s.parameters)==null?void 0:I.docs)==null?void 0:B.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels, descriptions, and controls to be associated with the internal trigger button.\nUses `gds-aria-labelledby`, `gds-aria-describedby`, and `gds-aria-controls` to wire up external accessibility text.",...(P=(E=s.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};const r1=["Basic","Usage","CustomTrigger","ShowLabel","CustomIcon","AriaForwarding"];export{s as AriaForwarding,d as Basic,o as CustomIcon,n as CustomTrigger,t as ShowLabel,e as Usage,r1 as __namedExportsOrder,i1 as default};
