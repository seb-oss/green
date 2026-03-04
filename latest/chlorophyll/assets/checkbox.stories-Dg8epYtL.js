const s={title:"Components/Checkbox",tags:["autodocs"],parameters:{componentIds:["component-checkbox"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},text:{control:"text"}}},i={render:e=>`<label class="gds-form-control">
  <input id="canvas-checkbox" type="checkbox" class="${e.validation}"  ${e.disabled?"disabled":""} ${e.checked?"checked":""} />
  <span>${e.text}</span>
  <i></i>
</label>`,args:{text:"Click me!",disabled:!1,checked:!1,indeterminate:!1},parameters:{}},l={render:()=>`<div class="gds-form-group">
  <label class="gds-form-control was-validated is-invalid">
    <input type="checkbox" class="is-invalid" />
    <span>Invalid checkbox</span>
    <i></i>
  </label>
  <span class="gds-form-info">Error</span>
</div>`},a={render:()=>`<div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend class="sr-only">Hidden checkbox group legend</legend>
        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>Hidden legend one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Hidden legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `},o={render:()=>`
    <div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Visible checkbox group legend</legend>
        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>Visible legend one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Visible legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `,name:"HorizontalGroup",parameters:{}},d={render:()=>`
    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>
        <span id="checkboxGroupHelp" class="gds-form-info">
          Checkbox group description
        </span>
        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>Normal one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Normal two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="gds-form-info">Neutral</span>
    </div>
    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>
        <span id="checkboxGroupHelp1" class="gds-form-info">
          Checkbox group description
        </span>
        <div>
          <label class="gds-form-control">
            <input required class="is-valid" type="checkbox" />
            <span>Valid one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required class="is-valid" type="checkbox" required />
            <span>Valid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="gds-form-info">Valid</span>
    </div>
    <div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="gds-form-info">Checkbox group description</span>
        <div>
          <label class="gds-form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>Invalid one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required class="is-invalid" type="checkbox" required />
            <span>Invalid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="gds-form-info">Error</span>
    </div>
  `},r={render:()=>`
    <div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>        <span id="checkboxGroupHelp" class="gds-form-info">
          Checkbox group description
        </span>        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>One</span>
            <i></i>
          </label>          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Two</span>
            <i></i>
          </label>
        </div>
      </fieldset>      <span class="gds-form-info">Neutral</span>
    </div>    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>        <span id="checkboxGroupHelp1" class="gds-form-info">
          Checkbox group description
        </span>        <div>
          <label class="gds-form-control">
            <span>One</span>            <input required class="is-valid" type="checkbox" />            <i></i>
          </label>          <label class="gds-form-control">
            <span>Two</span>            <input required class="is-valid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="gds-form-info">Valid</span>
    </div>    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="gds-form-info">Checkbox group description</span>        <div>
          <label class="gds-form-control">
            <span>One</span>            <input required class="is-invalid" type="checkbox" />            <i></i>
          </label>          <label class="gds-form-control">
            <span>Two</span>            <input required class="is-invalid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="gds-form-info">Error</span>
    </div>
  `,name:"HorizontalValidation",parameters:{}},n=["Checkbox","Invalid","Group","HorizontalGroup","Validation","HorizontalValidation"];export{i as Checkbox,a as Group,o as HorizontalGroup,r as HorizontalValidation,l as Invalid,d as Validation,n as __namedExportsOrder,s as default};
