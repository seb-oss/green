const o={title:"Components/Radio button",tags:["autodocs"],parameters:{componentIds:["component-radiobutton"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},legend:{control:"text"},firstLabel:{control:"text"},secondLabel:{control:"text"}}},a={render:e=>`
  <form>
    <div class="gds-form-group">
      <fieldset>
        <legend>${e.legend}</legend>
        <div>
          <label class="gds-form-control">
            <input type="radio" name="default" class="${e.validation}" ${e.disabled} />
            <span>${e.firstLabel}</span><i></i>
          </label>
          <label class="gds-form-control">
            <input type="radio" name="default" checked class="${e.validation}" ${e.disabled} />
            <span>${e.secondLabel}</span><i></i>
          </label>
        </div>
      </fieldset>
    </div>
  </form>`,args:{firstLabel:"First label",secondLabel:"Second label",enabled:!0}};var n,l,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => \`
  <form>
    <div class="gds-form-group">
      <fieldset>
        <legend>\${args.legend}</legend>
        <div>
          <label class="gds-form-control">
            <input type="radio" name="default" class="\${args.validation}" \${args.disabled} />
            <span>\${args.firstLabel}</span><i></i>
          </label>
          <label class="gds-form-control">
            <input type="radio" name="default" checked class="\${args.validation}" \${args.disabled} />
            <span>\${args.secondLabel}</span><i></i>
          </label>
        </div>
      </fieldset>
    </div>
  </form>\`,
  args: {
    firstLabel: 'First label',
    secondLabel: 'Second label',
    enabled: true
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const d=["Radiobutton"];export{a as Radiobutton,d as __namedExportsOrder,o as default};
