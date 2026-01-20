import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DtsLPFsa.js";import{M as u,C as n,b as c}from"./blocks-C9T6LgSb.js";import{I as h}from"./buttonGroup-BxcV3JCt.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-DBPtGPeF.js";import{C as w,G as s,a as m,b as p}from"./index-BsLKi_Xb.js";import"./iframe-5qkdo8nA.js";import"./index-CqIW5RTg.js";import"./index-C2Nz_L-p.js";import"./button-BcVEsdaI.js";import"./iconButton-BkyWbqcX.js";import"./checkbox-DIkki8vs.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BAAXNqw0.js";import"./triangle-exclamation.component-C4vfVdRl.js";import"./tokens.style-XSitfRHR.js";import"./icon.component-BPM5A-6x.js";import"./create-component-CPRSibq9.js";import"./triangle-exclamation-BTiPn1eA.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-Dzn-iyri.js";import"./runtime-nRyYmvPb.js";import"./class-map-Cby5Oy2K.js";import"./unwrap-slots-BUkkWqUh.js";import"./button.component-DKbrxmn0.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DURIhdpS.js";import"./dropdown.component-4MBFJHv7.js";import"./popover.component-CTsc22ZB.js";import"./cross-small.component-BZ6V79yb.js";import"./chevron-bottom.component-DxMHmR-C.js";import"./checkmark.component-CqfFQmKu.js";import"./circle-check.component-DcAFCE6F.js";import"./chevron-right.component-_xRJk2vj.js";import"./datepicker.component-Ot441FKZ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BRo8u9B0.js";import"./index-BVQ54fMw.js";import"./dot-grid-one-horizontal.component-C6tiy28j.js";import"./context-menu.component-_BriSA5k.js";import"./filter-chips.component-BzGOOLbO.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BjBL83JJ.js";import"./segmented-control.component-CRXR_hyR.js";import"./index-BRdtESSo.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
