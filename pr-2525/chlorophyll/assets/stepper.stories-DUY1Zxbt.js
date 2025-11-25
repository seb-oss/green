const a={title:"Components/Stepper",tags:["autodocs"],parameters:{componentIds:["component-stepper"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},text:{control:"text"},formInfo:{control:"text"}}},e={render:t=>`
    <div class="form-group">
        <label for="stepperInput">${t.text}</label>
        ${t.formInfo?'<span class="form-info">'+t.formInfo+"</span>":""}
        <div class="group group-border group-stepper ${t.validation} ${t.disabled}">
            <button class="tertiary" ${t.attrEnabled}>-</button>
            <input id="stepperInput" type="number" placeholder="0" ${t.attrEnabled} />
            <button class="tertiary" ${t.attrEnabled}>+</button>
        </div>
        <span class="form-info">${t.validation?t.validation:"Neutral"}</span>
    </div>`,args:{text:"Stepper label",formInfo:"Lorem ipsum very long supporting text of what should be entered",enabled:!0}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => \`
    <div class="form-group">
        <label for="stepperInput">\${args.text}</label>
        \${args.formInfo ? '<span class="form-info">' + args.formInfo + '</span>' : ''}
        <div class="group group-border group-stepper \${args.validation} \${args.disabled}">
            <button class="tertiary" \${args.attrEnabled}>-</button>
            <input id="stepperInput" type="number" placeholder="0" \${args.attrEnabled} />
            <button class="tertiary" \${args.attrEnabled}>+</button>
        </div>
        <span class="form-info">\${args.validation ? args.validation : 'Neutral'}</span>
    </div>\`,
  args: {
    text: 'Stepper label',
    formInfo: 'Lorem ipsum very long supporting text of what should be entered',
    enabled: true
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const s=["Stepper"];export{e as Stepper,s as __namedExportsOrder,a as default};
