import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-D4TDFkqM.js";import{M as u,C as r,b as c}from"./blocks-CHRel8hS.js";import{I as h}from"./buttonGroup-Bem10WT7.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-0kKvKC6D.js";import{C as w,G as s,a as m,b as p}from"./index-BaiwPqrt.js";import"./iframe-CRuJT8C-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cd5pckCt.js";import"./index-CnuYTg99.js";import"./button-A1GMga31.js";import"./iconButton-Dk6VRiSR.js";import"./checkbox-BWH5JG3v.js";import"./id-CK6fwY7Y.js";import"./validator-BsbyFxS7.js";import"./index-CDHMp3Ml.js";import"./triangle-exclamation.component-BOSO0TmR.js";import"./declarative-layout-mixins-tJCrN6Ff.js";import"./icon.component-Cz0Dxn4-.js";import"./create-component-CVDMTe9T.js";import"./text-lsZ75dff.js";import"./edit-D4bc4JJc.js";import"./alert.component-D-rnWg19.js";import"./runtime-Cgryh99k.js";import"./class-map-BTW3ghZw.js";import"./ref-OQBBMjDz.js";import"./button.component-CG8-JDpP.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-0S0P6Ycw.js";import"./card.component-DdX-N4jB.js";import"./circle-check.component-BXV6YqvG.js";import"./chevron-bottom.component-NJZhIA5M.js";import"./cross-small.component-CV7bb15p.js";import"./index-SnEAh7M5.js";import"./calender-add.component-v4RCsIFK.js";import"./chevron-right.component-C-WySFjd.js";import"./dot-grid-one-horizontal.component-DvCvaYG-.js";import"./index-DFYIkVda.js";import"./checkmark.component-BVbaTtMo.js";const pe=({...n})=>e.jsx(h,{...n});function l(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
`,e.jsx(p,{children:e.jsx(m,{margin:"xl 0",children:e.jsxs(s,{variant:"notice",children:[e.jsx(t.strong,{children:"Note:"})," This version of Input is deprecated! Please use the ",e.jsx(t.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-input--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(t.h1,{id:"input",children:"Input"}),`
`,e.jsx(t.h2,{id:"input-without-formitem",children:"Input without FormItem"}),`
`,e.jsx(t.p,{children:"If an input is requested without a label, info or expandable info, then a pure input is rendered. Can be used together with the Group component."}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(t.h2,{id:"input-with-formitem",children:"Input with FormItem"}),`
`,e.jsxs(t.p,{children:["As soon as one of the properties ",e.jsx(t.code,{children:"label"}),", ",e.jsx(t.code,{children:"info"})," or ",e.jsx(t.code,{children:"expandable"})," info are set, the input will be be surrounded by a FormItem."]}),`
`,e.jsx(t.h3,{id:"label-information",children:"Label Information"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(t.h3,{id:"expandable-information",children:"Expandable Information"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(t.h3,{id:"unit-label",children:"Unit label"}),`
`,e.jsx(r,{of:I}),`
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
`,e.jsx(r,{of:g}),`
`,e.jsx(t.h3,{id:"everything-on",children:"Everything On"}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{})]})}function le(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}function o(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{pe as InputTemplate,le as default};
