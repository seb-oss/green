import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-MNO2rrId.js";import{M as u,C as r,b as c}from"./blocks-o_ENZ5J0.js";import{I as h}from"./buttonGroup-Bz1EnsuI.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-Ba8cdqha.js";import{C as w,G as s,a as m,b as p}from"./index-j95dkQJb.js";import"./iframe-DCGoxIdv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Y_1-MB85.js";import"./index-Dr2J0By6.js";import"./button-QzcMgnJd.js";import"./iconButton-FBHy9X1s.js";import"./checkbox-DvFuwwQ9.js";import"./id-CK6fwY7Y.js";import"./validator-BsbyFxS7.js";import"./index-BwSbHMLT.js";import"./triangle-exclamation.component-R_D8ul7j.js";import"./declarative-layout-mixins-COOVEMYp.js";import"./icon.component-C7TXtfVJ.js";import"./create-component-CVDMTe9T.js";import"./text-lsZ75dff.js";import"./edit-D4bc4JJc.js";import"./alert.component-b6oAImK6.js";import"./runtime-Cgryh99k.js";import"./class-map-CRHcxpCs.js";import"./ref-CPdlqB2q.js";import"./button.component-C8JGLeuM.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-CYqFqEhy.js";import"./card.component-De8eU8K1.js";import"./circle-check.component-DnqsIE-t.js";import"./chevron-bottom.component-DxYt63ia.js";import"./cross-small.component-ndoHtA6w.js";import"./index-xUSLaTvO.js";import"./calender-add.component-BQbP4pZH.js";import"./chevron-right.component-BhNxB9ox.js";import"./dot-grid-one-horizontal.component-DHZU4Mka.js";import"./index-D68j0o40.js";import"./checkmark.component-CXeJbsdo.js";const pe=({...n})=>e.jsx(h,{...n});function l(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
