import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BdvDuQSs.js";import{M as u,C as n,b as c}from"./WithTooltip-SK46ZJ2J-HK7vylF7.js";import{I as h}from"./buttonGroup-BX6xwggr.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-cRn-UdCA.js";import{C as w,G as s,a as m,b as p}from"./index-yM_hP0YE.js";import"./iframe-BPdYeYer.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BH3GsKyO.js";import"./index-D8wyPbwv.js";import"./button-DiMXzZRC.js";import"./iconButton-RsRIYRDb.js";import"./checkbox-BiLm6SDg.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BJP4Lf36.js";import"./tokens.style-CCQA-xSm.js";import"./triangle-exclamation.component-C7-K1U6X.js";import"./icon-B6Xa3yvm.js";import"./create-component-CPRSibq9.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-BXDrYuM3.js";import"./runtime-nRyYmvPb.js";import"./class-map-seI136rR.js";import"./unwrap-slots-CDWpMIWc.js";import"./button.component-DxlCNO88.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CjxfBaJk.js";import"./dropdown.component-D7-BcoqP.js";import"./popover.component-DmGavyxg.js";import"./cross-small.component-Bkh_BJPe.js";import"./chevron-bottom.component-BJevt17-.js";import"./checkmark.component-D71c-ox_.js";import"./circle-check.component-BSs7rZUs.js";import"./chevron-right.component-DbJRueXy.js";import"./datepicker.component-CbGGPv8R.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CYscPY-d.js";import"./index-SqEXBxUH.js";import"./dot-grid-one-horizontal.component-BRPW14gJ.js";import"./context-menu.component-ChKvSuqs.js";import"./filter-chips.component-DYFyEcAH.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-D2J-yaLY.js";import"./segmented-control.component-DFpvjqoQ.js";import"./index-CvUVa5g0.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
