const c={title:"Components/Button",tags:["autodocs"],parameters:{componentIds:["component-button"]},argTypes:{type:{control:"select",options:["button","submit","reset"]},variant:{control:"select",options:["","primary","secondary","tertiary","ghost","danger"]},size:{control:"select",options:["","small","large"]},disabled:{control:"boolean"},text:{control:"text"}}},e={render:t=>`<button type="${t.type}" class="${t.variant} ${t.size}" ${t.disabled?"disabled":""}>${t.text}</button>`,args:{type:"button",text:"Click me!"}};var o,s,n,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => \`<button type="\${args.type}" class="\${args.variant} \${args.size}" \${args.disabled ? 'disabled' : ''}>\${args.text}</button>\`,
  args: {
    type: 'button',
    text: 'Click me!'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/button)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-button)`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.description}}};const i=["Button"];export{e as Button,i as __namedExportsOrder,c as default};
