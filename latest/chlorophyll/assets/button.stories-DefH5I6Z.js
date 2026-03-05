const c={title:"Components/Button",tags:["autodocs"],parameters:{componentIds:["component-button"]},argTypes:{variant:{control:"select",options:["","primary","secondary","tertiary","ghost-dark","ghost-light","danger"]},size:{control:"select",options:["","small","large"]},disabled:{control:"boolean"},text:{control:"text"}}},t={render:e=>`<button class="gds-button ${e.variant} ${e.size}" ${e.disabled?"disabled":""}>${e.text}</button>`,args:{type:"button",text:"Click me!"}};var o,s,n,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => \`<button class="gds-button \${args.variant} \${args.size}" \${args.disabled ? 'disabled' : ''}>\${args.text}</button>\`,
  args: {
    type: 'button',
    text: 'Click me!'
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/button)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-button)`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.description}}};const i=["Button"];export{t as Button,i as __namedExportsOrder,c as default};
