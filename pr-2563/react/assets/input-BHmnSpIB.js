import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DoSfTK6r.js";import{M as u,C as n,b as c}from"./blocks-YWNeQBYD.js";import{I as h}from"./buttonGroup-D-Kzzxf1.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-Bkf1XlnC.js";import{C as w,G as s,a as m,b as p}from"./index-Cd3BL2Y3.js";import"./iframe-DYS0wwl6.js";import"./index-PiVaSsYd.js";import"./index-DHQhIzeK.js";import"./button-CUQEH4oH.js";import"./iconButton-C5UEU9gz.js";import"./checkbox-D2eh4uLn.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-CtLU9TUz.js";import"./triangle-exclamation.component-DIXE-yhT.js";import"./tokens.style-CEj53FLI.js";import"./icon.component-IewqXgD1.js";import"./create-component-CPRSibq9.js";import"./triangle-exclamation-CXu53-uK.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-IN9tym-c.js";import"./runtime-nRyYmvPb.js";import"./class-map-DFQxccEl.js";import"./unwrap-slots-DDD1K7Sv.js";import"./button.component-CtvYwCLb.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-AerxwP10.js";import"./dropdown.component-B0aBD9pb.js";import"./popover.component-DDqRcw0S.js";import"./cross-small.component-B7YSS0Up.js";import"./chevron-bottom.component-K0ZxR76K.js";import"./checkmark.component-CT8OUiUd.js";import"./circle-check.component-DNLg0IRE.js";import"./chevron-right.component-Ct0m0QtA.js";import"./datepicker.component-DW8W7gXo.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Cn4UpmAR.js";import"./index-C0bueOUO.js";import"./dot-grid-one-horizontal.component-Dr2uGYme.js";import"./context-menu.component-DGn8vbwc.js";import"./filter-chips.component-BltRdOkh.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CZLeDOWy.js";import"./segmented-control.component-BrS8_Vq8.js";import"./index-B0uyyt6T.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
`,e.jsx(c,{})]})}function be(r={}){const{wrapper:t}={...d(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}function o(r,t){throw new Error("Expected "+(t?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{je as InputTemplate,be as default};
