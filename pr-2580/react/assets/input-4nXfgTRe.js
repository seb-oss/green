import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-B85nirL2.js";import{M as u,C as n,b as c}from"./blocks-DOxPIHXM.js";import{I as h}from"./buttonGroup-qF0sv91C.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-iHpGwpGG.js";import{C as w,G as s,a as m,b as p}from"./index-Cl6qd36U.js";import"./iframe-DbWx9qSi.js";import"./index-DN2XUELy.js";import"./index-YVRPNxbt.js";import"./button-DTfPQ_Zd.js";import"./iconButton-B7WS9o3X.js";import"./checkbox-BlHhB85d.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-Df8MWBBe.js";import"./triangle-exclamation.component-DJnK-6Pq.js";import"./tokens.style-BwUmgGen.js";import"./icon.component-C7EKY0is.js";import"./create-component-CPRSibq9.js";import"./triangle-exclamation-CUikwwFl.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-CvbZ-6UP.js";import"./runtime-nRyYmvPb.js";import"./class-map-Cb4hff4D.js";import"./unwrap-slots-C8Cai_1j.js";import"./button.component-BlSMnAdR.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Hrl55WqK.js";import"./dropdown.component-CmsS932o.js";import"./popover.component-CwgQ0MBG.js";import"./cross-small.component-BUvK-Jx0.js";import"./chevron-bottom.component-Co9-Gec3.js";import"./checkmark.component-DoL39SJh.js";import"./circle-check.component-CoW28z3O.js";import"./chevron-right.component-Cvu1YgXi.js";import"./datepicker.component-jkkIXYT7.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-A4RQcMxy.js";import"./index-DZweYOK9.js";import"./dot-grid-one-horizontal.component-XRpL2bSS.js";import"./context-menu.component-DBffnpFK.js";import"./filter-chips.component-61Fwjn74.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BQsmMyhZ.js";import"./segmented-control.component-CHfxffOW.js";import"./index-C4JQZNKx.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
