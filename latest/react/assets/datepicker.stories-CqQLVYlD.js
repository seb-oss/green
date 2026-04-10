import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./iframe-k4DB83LA.js";import{G as v}from"./alert.component-CiBuKFBn.js";import{D as u}from"./datepicker-UZvwXRjz.js";import"./preload-helper-Dp1pzeXC.js";import"./tokens.style-BXOjG97O.js";import"./runtime-nRyYmvPb.js";import"./class-map-Cly5oK8d.js";import"./icon.component-D-KSF2uV.js";import"./ref-D8d8ij8W.js";import"./button.component-BZ_IfdUc.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BuelKE2F.js";import"./card.component-BwNwGGaF.js";import"./circle-check.component-DbmqyM_m.js";import"./chevron-bottom.component-DbdypVDt.js";import"./cross-small.component-BzBuVQni.js";import"./triangle-exclamation.component-CKQpz55q.js";import"./create-component-CPRSibq9.js";import"./dropdown.component-qJdISTvB.js";import"./popover.component-CGkaNDob.js";import"./unwrap-slots-JZ69TbYS.js";import"./checkmark.component-CeUlIkAX.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DnhqQ4dY.js";import"./chevron-right.component-BEKGCY3C.js";try{window.customElements.define("gds-alert",v)}catch{}const q={title:"Components/Datepicker",component:u,argTypes:{},parameters:{componentIds:["component-datepicker"],docs:{description:{component:'<gds-alert variant="notice">**Note:** This version of Datepicker is deprecated. Please use the `gds-datepicker` web component from green-core instead.</gds-alert>\n\nDate pickers are used when users need to enter a date. The user can enter the date as text, but the date picker also allows the user to select the date in a visual representation of a calendar.'}}},tags:["autodocs"]},r={args:{label:"Choose date"}},e={args:{label:"Choose date",validator:{validate:t=>{if(t.value!=="correctValue")return[{badInput:!0,customError:!0,patternMismatch:!0,rangeOverflow:!0,rangeUnderflow:!0,stepMismatch:!0,tooLong:!0,tooShort:!0,typeMismatch:!0,valid:!1,valueMissing:!0},"My custom validation message"]},disabled:!0},value:new Date,testId:"test",ref:p.createRef()},render:t=>m.jsx(u,{...t})};var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

For more information on validation in Green Core, see the [Form Validation](https://storybook.seb.io/latest/core/?path=/docs/docs-form-validation-documentation--docs) example.`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const z=["Default","Validation"];export{r as Default,e as Validation,z as __namedExportsOrder,q as default};
