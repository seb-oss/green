const r={title:"Components/Input",tags:["autodocs"],parameters:{componentIds:["component-input"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},enabled:{control:"boolean"},text:{control:"text"},formInfo:{control:"text"}}},o={render:n=>`
    <div class="form-group">
      <label for="inputInvalid">${n.text}</label>
      ${n.formInfo?'<span class="form-info">'+n.formInfo+"</span>":""}
      <input id="inputInvalid" type="text" ${n.validation?'class="'+n.validation+'"':""} ${n.disabled?"disabled":""} />
      <span class="form-info">${n.validation?n.validation:""}</span>
    </div>`,args:{text:"Input label",formInfo:"Lorem ipsum very long description of input and what should be entered",enabled:!0}};var e,t,s,a,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => \`
    <div class="form-group">
      <label for="inputInvalid">\${args.text}</label>
      \${args.formInfo ? '<span class="form-info">' + args.formInfo + '</span>' : ''}
      <input id="inputInvalid" type="text" \${args.validation ? 'class="' + args.validation + '"' : ''} \${args.disabled ? 'disabled' : ''} />
      <span class="form-info">\${args.validation ? args.validation : ''}</span>
    </div>\`,
  args: {
    text: 'Input label',
    formInfo: 'Lorem ipsum very long description of input and what should be entered',
    enabled: true
  }
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/form/input)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-input)`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.description}}};const l=["Input"];export{o as Input,l as __namedExportsOrder,r as default};
