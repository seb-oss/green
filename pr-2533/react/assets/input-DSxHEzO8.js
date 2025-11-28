import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-1EMxbEAs.js";import{M as u,C as n,b as c}from"./WithTooltip-SK46ZJ2J-CP6fS6iH.js";import{I as h}from"./buttonGroup-qUXKEPzk.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-DnijfhCn.js";import{C as w,G as s,a as m,b as p}from"./index-DC3ayLn3.js";import"./iframe-DCAnp-F1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7f6o6RO.js";import"./index-BZRGR-kp.js";import"./button-CZXogYc_.js";import"./iconButton-iumjVI7g.js";import"./checkbox-C1KG5AKO.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-4wM5AXv7.js";import"./tokens.style-2eIxml9r.js";import"./triangle-exclamation.component-iRGSKvNF.js";import"./icon.component-BoUMn6u9.js";import"./create-component-CPRSibq9.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-DQ4wu6xR.js";import"./runtime-nRyYmvPb.js";import"./class-map-YJMI3JxZ.js";import"./unwrap-slots-BUUaliHi.js";import"./button.component-CLqrE5F9.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CnJbDinn.js";import"./dropdown.component-rwOTJLCy.js";import"./popover.component-H84QEhLU.js";import"./cross-small.component-CXnJsXvG.js";import"./chevron-bottom.component-DeWOdhLO.js";import"./checkmark.component-9S5ot2vb.js";import"./circle-check.component-Dyw-3jBJ.js";import"./chevron-right.component-w0r4yQSz.js";import"./datepicker.component-B1old_dN.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CIzbRk06.js";import"./index-CU_S3bnB.js";import"./dot-grid-one-horizontal.component-CX66_9Vf.js";import"./context-menu.component-B0CFL33z.js";import"./filter-chips.component-r7KBVmCx.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DbHQmLty.js";import"./segmented-control.component-zsWyB9Dv.js";import"./index-sUa5yb-G.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
