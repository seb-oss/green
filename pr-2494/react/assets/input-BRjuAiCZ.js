import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DMO0lECx.js";import{M as u,C as n,b as c}from"./WithTooltip-SK46ZJ2J-Byqh6KRE.js";import{I as h}from"./buttonGroup-Bgwg2ZET.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-DlG-57pA.js";import{C as w,G as s,a as m,b as p}from"./index-CSqoHtC0.js";import"./iframe-DPm0iSSl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C7ikAlpl.js";import"./index-rOIHZKkb.js";import"./button-DwXpPGy4.js";import"./iconButton-DHZxhyJp.js";import"./checkbox-Y7_pWeIM.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-C2DN0W_O.js";import"./tokens.style-rxM20DnB.js";import"./triangle-exclamation.component-B8K9yJIq.js";import"./icon-C3UFGH2W.js";import"./create-component-CPRSibq9.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-B-Cpx1VG.js";import"./runtime-nRyYmvPb.js";import"./class-map-DB8hf7C5.js";import"./unwrap-slots-AexYXwnB.js";import"./button.component-ZNOsqN38.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Dd3qqUw4.js";import"./dropdown.component-D40lFsbv.js";import"./popover.component-BYY9iHo3.js";import"./cross-small.component-Df2cKDvW.js";import"./chevron-bottom.component-BW7YPITg.js";import"./checkmark.component-BQtYEgjM.js";import"./circle-check.component-CsiZsx8S.js";import"./chevron-right.component-rGq7JFxL.js";import"./datepicker.component-C4Ec8uXP.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CMHL6sxx.js";import"./index-BLFmHt40.js";import"./dot-grid-one-horizontal.component-EEqdHKq0.js";import"./context-menu.component-BgZTsZXS.js";import"./filter-chips.component-4sIKpDN-.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DG11tRHq.js";import"./segmented-control.component-DH9r3qJV.js";import"./index-D3oHVOdG.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
