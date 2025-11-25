const n={title:"Components/Textarea",tags:["autodocs"],parameters:{componentIds:["component-input"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},label:{control:"text"},formInfo:{control:"text"}}},e={render:a=>`
    <div class="form-group">
      <label for="exampleTextarea">${a.label}</label>
      ${a.formInfo?'<span class="form-info">'+a.formInfo+"</span>":""}
      <textarea id="exampleTextarea" class="${a.validation}" ${a.disabled}></textarea>
      <span class="form-info">${a.validation?a.validation:"Neutral"}</span>
    </div>`,args:{label:"Textarea label",formInfo:"Lorem ipsum very long description of textarea and what should be entered"}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => \`
    <div class="form-group">
      <label for="exampleTextarea">\${args.label}</label>
      \${args.formInfo ? '<span class="form-info">' + args.formInfo + '</span>' : ''}
      <textarea id="exampleTextarea" class="\${args.validation}" \${args.disabled}></textarea>
      <span class="form-info">\${args.validation ? args.validation : 'Neutral'}</span>
    </div>\`,
  args: {
    label: 'Textarea label',
    formInfo: 'Lorem ipsum very long description of textarea and what should be entered'
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const s=["Textarea"];export{e as Textarea,s as __namedExportsOrder,n as default};
