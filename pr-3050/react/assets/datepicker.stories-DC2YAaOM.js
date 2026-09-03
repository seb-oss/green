import{j as o}from"./jsx-runtime-u17CrQMm.js";import{e as n}from"./iframe-C5Ht9GiP.js";import{G as s}from"./alert.component-x0SXUKEX.js";import{D as a}from"./datepicker-XXjbiF-Z.js";import"./preload-helper-PPVm8Dsz.js";import"./declarative-layout-mixins-RRaBVSCZ.js";import"./runtime-Cgryh99k.js";import"./class-map-Dw-lskpk.js";import"./icon.component-EkyqbvYo.js";import"./ref-CVopERTs.js";import"./button.component-D88qyTuS.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-D3LAqJWP.js";import"./card.component-BN5UcPN4.js";import"./circle-check.component-yCxTwzhq.js";import"./chevron-bottom.component-24Qu__em.js";import"./cross-small.component-BlXpaMRd.js";import"./triangle-exclamation.component-C715bgSQ.js";import"./create-component-CVDMTe9T.js";import"./dropdown.component-DG4Ig8nl.js";import"./popover.component-DW-fGwwx.js";import"./menu-listbox.style-Bdad5jo1.js";import"./checkmark.component-CMYf8oPw.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CrXhn4yA.js";import"./chevron-right.component-BTbXl-DV.js";try{window.customElements.define("gds-alert",s)}catch{}const P={title:"Components/Datepicker",component:a,argTypes:{},parameters:{componentIds:["component-datepicker"],docs:{description:{component:'<gds-alert variant="notice">**Note:** This version of Datepicker is deprecated. Please use the `gds-datepicker` web component from green-core instead.</gds-alert>\n\nDate pickers are used when users need to enter a date. The user can enter the date as text, but the date picker also allows the user to select the date in a visual representation of a calendar.'}}},tags:["autodocs"]},r={args:{label:"Choose date"}},e={args:{label:"Choose date",validator:{validate:t=>{if(t.value!=="correctValue")return[{badInput:!0,customError:!0,patternMismatch:!0,rangeOverflow:!0,rangeUnderflow:!0,stepMismatch:!0,tooLong:!0,tooShort:!0,typeMismatch:!0,valid:!1,valueMissing:!0},"My custom validation message"]},disabled:!0},value:new Date,testId:"test",ref:n.createRef()},render:t=>o.jsx(a,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
