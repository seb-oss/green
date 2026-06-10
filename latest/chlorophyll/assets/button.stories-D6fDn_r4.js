const o={title:"Components/Button",tags:["autodocs"],parameters:{componentIds:["component-button"]},argTypes:{variant:{control:"select",options:["","primary","secondary","tertiary","ghost-dark","ghost-light","danger"]},size:{control:"select",options:["","small","large"]},disabled:{control:"boolean"},text:{control:"text"}}},t={render:e=>`<button class="gds-button ${e.variant} ${e.size}" ${e.disabled?"disabled":""}>${e.text}</button>`,args:{type:"button",text:"Click me!"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => \`<button class="gds-button \${args.variant} \${args.size}" \${args.disabled ? 'disabled' : ''}>\${args.text}</button>\`,
  args: {
    type: 'button',
    text: 'Click me!'
  }
}`,...t.parameters?.docs?.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/button)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-button)`,...t.parameters?.docs?.description}}};const s=["Button"];export{t as Button,s as __namedExportsOrder,o as default};
