const o={title:"Components/Input",tags:["autodocs"],parameters:{componentIds:["component-input"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},enabled:{control:"boolean"},text:{control:"text"},formInfo:{control:"text"}}},s={render:n=>`
<div class="gds-form-group">
  <label for="inputInvalid" class="gds-label">${n.text}</label>
  ${n.formInfo?'<span class="gds-form-info">'+n.formInfo+"</span>":""}
  <input id="inputInvalid" type="text" class="gds-input ${n.validation}" ${n.disabled?"disabled":""} />
  <span class="gds-form-info">${n.validation?n.validation:""}</span>
</div>`,args:{text:"Input label",formInfo:"Lorem ipsum very long description of input and what should be entered",enabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => \`
<div class="gds-form-group">
  <label for="inputInvalid" class="gds-label">\${args.text}</label>
  \${args.formInfo ? '<span class="gds-form-info">' + args.formInfo + '</span>' : ''}
  <input id="inputInvalid" type="text" class="gds-input \${args.validation}" \${args.disabled ? 'disabled' : ''} />
  <span class="gds-form-info">\${args.validation ? args.validation : ''}</span>
</div>\`,
  args: {
    text: 'Input label',
    formInfo: 'Lorem ipsum very long description of input and what should be entered',
    enabled: true
  }
}`,...s.parameters?.docs?.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/form/input)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-input)`,...s.parameters?.docs?.description}}};const e=["Input"];export{s as Input,e as __namedExportsOrder,o as default};
