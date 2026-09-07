const n={title:"Components/Badge",tags:["autodocs"],parameters:{componentIds:["component-badge"]},argTypes:{variant:{control:"select",options:["","info","success","warning","danger","light","dark"]},dismissible:{control:"boolean"},text:{control:"text"}}},s={render:e=>`
    <span class="gds-badge ${e.variant}">
      <strong>${e.text}</strong>
      ${e.dismissible?`<button class="gds-close">
          <span class="sr-only">Remove</span>
          <i></i>
        </button>`:""}
    </span>`,args:{text:"Badge",dismissible:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => \`
    <span class="gds-badge \${args.variant}">
      <strong>\${args.text}</strong>
      \${args.dismissible ? \`<button class="gds-close">
          <span class="sr-only">Remove</span>
          <i></i>
        </button>\` : \`\`}
    </span>\`,
  args: {
    text: 'Badge',
    dismissible: false
  }
}`,...s.parameters?.docs?.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/badge)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-badge)

Badges are available in a number of different variants. Please note that the colors used in the examples below are not final yet.`,...s.parameters?.docs?.description}}};const a=["Badge"];export{s as Badge,a as __namedExportsOrder,n as default};
