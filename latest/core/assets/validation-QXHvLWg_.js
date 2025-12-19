import{u as i,j as e,M as o}from"./iframe-CaSnqVAO.js";function a(t){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Form/Validation"}),`
`,e.jsx("h1",{children:"Form validation"}),`
`,e.jsx(n.p,{children:`Green Core components have built-in support for form validation. The validation feature is built on top of the
browsers native validation features, using ElementInternals and Constraint Validation API.`}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[`Validation is configured by adding a validator to a form element. A validator is an object that implements the
`,e.jsx(n.code,{children:"GdsValidator"})," interface:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export interface GdsValidator {
  /**
   * Validate the form control element. Should return the validity state and an optional validation message.
   */
  validate(element: GdsFormControlElement): [ValidityState, string] | undefined
}
`})}),`
`,e.jsx(n.p,{children:"Here is how you can use it in a component in a Lit element:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-dropdown
  label="Pick a pet"
  .validator=\${{
    validate: (el: GdsDropdown) => {
      if (el.value !== 'cat')
        return [
          { ...el.validity, valid: false, customError: true },
          'Only cats are allowed!',
        ]
    },
  }}
>
  <gds-option>Pick favorite</gds-option>
  <gds-option value="dog">Dog</gds-option>
  <gds-option value="cat">Cat</gds-option>
  <gds-option value="fish">Fish</gds-option>
</gds-dropdown>
`})}),`
`,e.jsxs(n.p,{children:["The return value of the ",e.jsx(n.code,{children:"validate"}),` method should be a tuple of the validity state (as a
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",rel:"nofollow",children:e.jsx(n.code,{children:"ValidityState"})}),` object) and a validation message.
The `,e.jsx(n.code,{children:"ValidityState"}),` object communicates the cause of the validation failure to the user agent. If the control was
initially in a valid state, setting it to invalid will also cause it to emit a `,e.jsx(n.code,{children:"invalid"})," event."]}),`
`,e.jsxs(n.p,{children:["Additionally, if the validity state changes due to the validate method, a ",e.jsx(n.code,{children:"gds-validity-state"})," event will be dispatched. This event is not emitted when validity is explicitly set."]}),`
`,e.jsx(n.p,{children:"The validator is executed when the value of the form control changes, and when the form emits a submit event."}),`
`,e.jsx(n.h2,{id:"using-other-validation-methods",children:"Using other validation methods"}),`
`,e.jsxs(n.p,{children:["The validity state can also be explicitly set by setting the property ",e.jsx(n.code,{children:"invalid"})," to ",e.jsx(n.code,{children:"true"}),", or setting the ",e.jsx(n.code,{children:"aria-invalid"}),`
attribute to `,e.jsx(n.code,{children:"true"}),". This is useful when working with other validation libraries, such as Angular reactive forms."]}),`
`,e.jsxs(n.p,{children:["In this case the validation message can be supplied via the ",e.jsx(n.code,{children:"message"}),` slot (usually, but depends on the component),
for example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-dropdown *nggCoreElement label="Pick a pet" [invalid]="isInvalid">
  <span slot="message">{{ invalidMessage }}</span>
  ...options...
</gds-dropdown>
`})}),`
`,e.jsx(n.h2,{id:"displaying-a-validation-summary",children:"Displaying a validation summary"}),`
`,e.jsxs(n.p,{children:["To display a validation summary, you can use the ",e.jsx(n.code,{children:"gds-form-summary"}),` component. This component automatically subscribes to
changes in its parent form and displays a list of validation issues. This only needs the `,e.jsx(n.code,{children:"invalid"}),` state to be true, so it
should work with any validation framework, as long as both the summary component and form components are children of a form
element.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form>
  <!-- Form controls here -->
  <gds-form-summary></gds-form-summary>
</form>
`})})]})}function l(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{l as default};
