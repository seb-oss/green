import{j as o}from"./jsx-runtime-u17CrQMm.js";import{e as n}from"./iframe-Beh_VNnr.js";import{G as s}from"./alert.component-Bd5QEBcs.js";import{D as a}from"./datepicker-Di1WAFCT.js";import"./preload-helper-PPVm8Dsz.js";import"./declarative-layout-mixins-TNpzn5PJ.js";import"./runtime-Cgryh99k.js";import"./class-map-i68-QYbz.js";import"./icon.component-CVlXOusQ.js";import"./ref-DH4GvBZ0.js";import"./button.component-POshhrU5.js";import"./aria-forwarding-D9KxWeew.js";import"./when-CI7b_ccM.js";import"./transitional-styles-Cp92Z64h.js";import"./card.component-BMogwOva.js";import"./circle-check.component-CsvrF-4Y.js";import"./chevron-bottom.component-CYr6_tpL.js";import"./cross-small.component-LrOZHOoM.js";import"./triangle-exclamation.component-D0YNoKqk.js";import"./create-component-CVDMTe9T.js";import"./dropdown.component-CYMEimKD.js";import"./popover.component-DpwSCyeR.js";import"./unwrap-slots-BKc5thed.js";import"./checkmark.component-C9alKNhP.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CzWAsfoJ.js";import"./chevron-left.component-BYyy5X6E.js";try{window.customElements.define("gds-alert",s)}catch{}const P={title:"Components/Datepicker",component:a,argTypes:{},parameters:{componentIds:["component-datepicker"],docs:{description:{component:'<gds-alert variant="notice">**Note:** This version of Datepicker is deprecated. Please use the `gds-datepicker` web component from green-core instead.</gds-alert>\n\nDate pickers are used when users need to enter a date. The user can enter the date as text, but the date picker also allows the user to select the date in a visual representation of a calendar.'}}},tags:["autodocs"]},r={args:{label:"Choose date"}},e={args:{label:"Choose date",validator:{validate:t=>{if(t.value!=="correctValue")return[{badInput:!0,customError:!0,patternMismatch:!0,rangeOverflow:!0,rangeUnderflow:!0,stepMismatch:!0,tooLong:!0,tooShort:!0,typeMismatch:!0,valid:!1,valueMissing:!0},"My custom validation message"]},disabled:!0},value:new Date,testId:"test",ref:n.createRef()},render:t=>o.jsx(a,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose date'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose date',
    validator: {
      validate: (el: GdsDatePicker) => {
        /** Put your custom validation logic */
        if (el.value !== 'correctValue') {
          /** And return a validator array */
          return [{
            badInput: true,
            customError: true,
            patternMismatch: true,
            rangeOverflow: true,
            rangeUnderflow: true,
            stepMismatch: true,
            tooLong: true,
            tooShort: true,
            typeMismatch: true,
            valid: false,
            valueMissing: true
          }, 'My custom validation message'];
        }
      },
      disabled: true
    },
    value: new Date(),
    testId: 'test',
    ref: React.createRef()
  },
  render: args => <Datepicker {...args} />
}`,...e.parameters?.docs?.source},description:{story:`To handle validation of the \`Datepicker\`, you can pass a \`validator\` object to the \`Datepicker\` component. The \`validator\` object should have a \`validate\` function that takes the \`Datepicker\` element as an argument and returns an array of the validity state and an optional validation message.

\`\`\`tsx
<Datepicker validator={{ validator: (el: GdsDatepicker) => {
    // Put your custom validation logic
     if (el.value !== 'correctValue') {
       // And return a validator array
       return [
           {
             badInput: true,
             customError: true,
             patternMismatch: true,
             rangeOverflow: true,
             rangeUnderflow: true,
             stepMismatch: true,
             tooLong: true,
             tooShort: true,
             typeMismatch: true,
             valid: false,
             valueMissing: true,
           },
           'My custom validation message',
     ] : [ValidityState, string]
}}} />


\`\`\`

For more information on validation in Green Core, see the [Form Validation](https://storybook.seb.io/latest/core/?path=/docs/docs-form-validation-documentation--docs) example.`,...e.parameters?.docs?.description}}};const R=["Default","Validation"];export{r as Default,e as Validation,R as __namedExportsOrder,P as default};
