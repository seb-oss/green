const i={title:"Components/Checkbox",tags:["autodocs"],parameters:{componentIds:["component-checkbox"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},text:{control:"text"}}},l={render:e=>`<label class="form-control">
  <input id="canvas-checkbox" type="checkbox" class="${e.validation}"  ${e.disabled?"disabled":""} ${e.checked?"checked":""} />
  <span>${e.text}</span>
  <i></i>
</label>`,args:{text:"Click me!",disabled:!1,checked:!1,indeterminate:!1},parameters:{}},a={render:()=>`<div class="form-group">
  <label class="form-control was-validated is-invalid">
    <input type="checkbox" class="is-invalid" />
    <span>Invalid checkbox</span>
    <i></i>
  </label>
  <span class="form-info">Error</span>
</div>`},o={render:()=>`<div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend class="sr-only">Hidden checkbox group legend</legend>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Hidden legend one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Hidden legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `},s={render:()=>`
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Visible checkbox group legend</legend>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Visible legend one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Visible legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `,name:"HorizontalGroup",parameters:{}},r={render:()=>`
    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>
        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Normal one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Normal two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Neutral</span>
    </div>
    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>
        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>
        <div>
          <label class="form-control">
            <input required class="is-valid" type="checkbox" />
            <span>Valid one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required class="is-valid" type="checkbox" required />
            <span>Valid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Valid</span>
    </div>
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>
        <div>
          <label class="form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>Invalid one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required class="is-invalid" type="checkbox" required />
            <span>Invalid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Error</span>
    </div>
  `},n={render:()=>`
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>One</span>
            <i></i>
          </label>          <label class="form-control">
            <input required type="checkbox" required />
            <span>Two</span>
            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Neutral</span>
    </div>    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>        <div>
          <label class="form-control">
            <span>One</span>            <input required class="is-valid" type="checkbox" />            <i></i>
          </label>          <label class="form-control">
            <span>Two</span>            <input required class="is-valid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Valid</span>
    </div>    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>        <div>
          <label class="form-control">
            <span>One</span>            <input required class="is-invalid" type="checkbox" />            <i></i>
          </label>          <label class="form-control">
            <span>Two</span>            <input required class="is-invalid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Error</span>
    </div>
  `,name:"HorizontalValidation",parameters:{}},c=["Checkbox","Invalid","Group","HorizontalGroup","Validation","HorizontalValidation"];export{l as Checkbox,o as Group,s as HorizontalGroup,n as HorizontalValidation,a as Invalid,r as Validation,c as __namedExportsOrder,i as default};
