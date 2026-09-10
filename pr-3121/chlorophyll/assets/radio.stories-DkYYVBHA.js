const n={title:"Components/Radio button",tags:["autodocs"],parameters:{componentIds:["component-radiobutton"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},legend:{control:"text"},firstLabel:{control:"text"},secondLabel:{control:"text"}}},a={render:e=>`
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
  </form>`,args:{firstLabel:"First label",secondLabel:"Second label",enabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const l=["Radiobutton"];export{a as Radiobutton,l as __namedExportsOrder,n as default};
