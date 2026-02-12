import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CD2-l6_w.js";import{M as u,C as n,b as c}from"./blocks-BN6c3gO3.js";import{I as h}from"./buttonGroup-BzN8ag9Z.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-CmJG3RTN.js";import{C as w,G as s,a as m,b as p}from"./index-OAoF4DQJ.js";import"./iframe-C8E0pb2N.js";import"./index-BW6g1WUt.js";import"./index-f45LMHFV.js";import"./button-DQXlPo_F.js";import"./iconButton-C5cuH2h5.js";import"./checkbox-DarBFxzp.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-CFHtYgwH.js";import"./triangle-exclamation.component-BZmE1uyf.js";import"./tokens.style-sfiJXGX1.js";import"./icon.component-4e4CR7DE.js";import"./create-component-CPRSibq9.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-CcELmw3a.js";import"./runtime-nRyYmvPb.js";import"./class-map-DAQjl4VN.js";import"./unwrap-slots-B3mneWgM.js";import"./button.component-BJ2VUaXI.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BuzCBS3t.js";import"./dropdown.component-Bv78njj8.js";import"./popover.component-8YyzfFWG.js";import"./cross-small.component-jfjKJdTN.js";import"./chevron-bottom.component-Dw9X7Zeg.js";import"./checkmark.component-Czt5Cleq.js";import"./circle-check.component-CQ6N9LVw.js";import"./chevron-right.component-Dk8o2rrD.js";import"./datepicker.component-Dq5nmmUS.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DDANmUzF.js";import"./index-6uYLtMH5.js";import"./dot-grid-one-horizontal.component-DKlzJaWZ.js";import"./context-menu.component-BFNt46g-.js";import"./filter-chips.component-Cs1xb55A.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-B3F6XKck.js";import"./segmented-control.component-mQ8NVrXN.js";import"./index-CnPSeJSP.js";const xe=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
`,e.jsx(p,{children:e.jsx(m,{margin:"xl 0",children:e.jsxs(s,{variant:"notice",children:[e.jsx(t.strong,{children:"Note:"})," This version of Input is deprecated! Please use the ",e.jsx(t.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-input--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(t.h1,{id:"input",children:"Input"}),`
`,e.jsx(t.h2,{id:"input-without-formitem",children:"Input without FormItem"}),`
`,e.jsx(t.p,{children:"If an input is requested without a label, info or expandable info, then a pure input is rendered. Can be used together with the Group component."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h2,{id:"input-with-formitem",children:"Input with FormItem"}),`
`,e.jsxs(t.p,{children:["As soon as one of the properties ",e.jsx(t.code,{children:"label"}),", ",e.jsx(t.code,{children:"info"})," or ",e.jsx(t.code,{children:"expandable"})," info are set, the input will be be surrounded by a FormItem."]}),`
`,e.jsx(t.h3,{id:"label-information",children:"Label Information"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(t.h3,{id:"expandable-information",children:"Expandable Information"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(t.h3,{id:"unit-label",children:"Unit label"}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(t.h3,{id:"formatter",children:"Formatter"}),`
`,e.jsx(t.p,{children:`A formatting callback that takes the current value as an argument and returns the formatted value can be supplied to the Input.
The returned value will be displayed in the field and outputted in the onChange callback.`}),`
`,e.jsx(t.p,{children:"The following is just an example. Test thoroughly for your use case before using in production!"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Input
    label="Input"
    info="Formats input as swedish number"
    maxLength={8}
    unit="Kr"
    formatter={(value) => {
      const trimmedValue = value.replace('\\u00A0', '').replace('\\xa0', '')
      return !trimmedValue || isNaN(Number(trimmedValue))
        ? value
        : new Intl.NumberFormat('sv-SE').format(Number(trimmedValue))
    }}
  />
`})}),`
`,e.jsx(h,{label:"Input",info:"Formats input as swedish number",maxLength:8,unit:"Kr",formatter:a=>{const i=a.replace(" ","").replace(" ","");return!i||isNaN(Number(i))?a:new Intl.NumberFormat("sv-SE").format(Number(i))}}),`
`,e.jsx(t.h3,{id:"validation",children:"Validation"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.code,{children:"validator"}),", despite it's name, does not add validation. It's simply a way to add an error message to the field."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(t.h3,{id:"everything-on",children:"Everything On"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{})]})}function je(r={}){const{wrapper:t}={...d(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}function o(r,t){throw new Error("Expected "+(t?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{xe as InputTemplate,je as default};
