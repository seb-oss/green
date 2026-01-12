const o={title:"Components/Radio button",tags:["autodocs"],parameters:{componentIds:["component-radiobutton"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},legend:{control:"text"},firstLabel:{control:"text"},secondLabel:{control:"text"}}},t={render:e=>`
  <form>
    <div class="form-group">
      <fieldset>
        <legend>${e.legend}</legend>
        <div>
          <label class="form-control">
            <input type="radio" name="default" class="${e.validation}" ${e.disabled} />
            <span>${e.firstLabel}</span><i></i>
          </label>
          <label class="form-control">
            <input type="radio" name="default" checked class="${e.validation}" ${e.disabled} />
            <span>${e.secondLabel}</span><i></i>
          </label>
        </div>
      </fieldset>
    </div>
  </form>`,args:{firstLabel:"First label",secondLabel:"Second label",enabled:!0}},l=["Radiobutton"];export{t as Radiobutton,l as __namedExportsOrder,o as default};
