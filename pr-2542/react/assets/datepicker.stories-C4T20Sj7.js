import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./iframe-Ct16n_P_.js";import{G as v}from"./alert.component-B6sHw57q.js";import{D as u}from"./datepicker-CtKw2WOP.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens.style-DTKZMi0e.js";import"./runtime-nRyYmvPb.js";import"./class-map--5LGXVed.js";import"./icon-CkP7j-Zg.js";import"./unwrap-slots-CQJFw0k0.js";import"./button.component-B1sZXOjI.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DAQPp52o.js";import"./dropdown.component-COlFM-k6.js";import"./popover.component-CRnYjetm.js";import"./cross-small.component-BSKB9T0c.js";import"./triangle-exclamation.component-CIHhgpn1.js";import"./chevron-bottom.component-hBhER7Og.js";import"./checkmark.component-CH6kdkJx.js";import"./circle-check.component-C7MHekrh.js";import"./create-component-CPRSibq9.js";import"./datepicker.component-9tOWu83t.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CHQo-1ZV.js";import"./chevron-right.component-SwejbfNL.js";try{window.customElements.define("gds-alert",v)}catch{}const N={title:"Components/Datepicker",component:u,argTypes:{},parameters:{componentIds:["component-datepicker"],docs:{description:{component:'<gds-alert variant="notice">**Note:** This version of Datepicker is deprecated. Please use the `gds-datepicker` web component from green-core instead.</gds-alert>\n\nDate pickers are used when users need to enter a date. The user can enter the date as text, but the date picker also allows the user to select the date in a visual representation of a calendar.'}}},tags:["autodocs"]},r={args:{label:"Choose date"}},e={args:{label:"Choose date",validator:{validate:t=>{if(t.value!=="correctValue")return[{badInput:!0,customError:!0,patternMismatch:!0,rangeOverflow:!0,rangeUnderflow:!0,stepMismatch:!0,tooLong:!0,tooShort:!0,typeMismatch:!0,valid:!1,valueMissing:!0},"My custom validation message"]},disabled:!0},value:new Date,testId:"test",ref:p.createRef()},render:t=>m.jsx(u,{...t})};var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Choose date'
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,i,d,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:`To handle validation of the \`Datepicker\`, you can pass a \`validator\` object to the \`Datepicker\` component. The \`validator\` object should have a \`validate\` function that takes the \`Datepicker\` element as an argument and returns an array of the validity state and an optional validation message.

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

For more information on validation in Green Core, see the [Form Validation](https://storybook.seb.io/latest/core/?path=/docs/docs-form-validation-documentation--docs) example.`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const q=["Default","Validation"];export{r as Default,e as Validation,q as __namedExportsOrder,N as default};
