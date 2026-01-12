import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Z5fD0fR_.js";import{M as u,C as n,b as c}from"./blocks-D24D8KSH.js";import{I as h}from"./buttonGroup-6KQrF8wP.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-D2ZQcCAg.js";import{C as w,G as s,a as m,b as p}from"./index-BBKL6L6X.js";import"./iframe-D5za-sDm.js";import"./index-CdYOo6_N.js";import"./index-Zqm_AfoP.js";import"./button-BGNmGnxH.js";import"./iconButton-BzWZvNKF.js";import"./checkbox-DIIoMFDa.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-DxcQqL6R.js";import"./triangle-exclamation.component-2jYArF7m.js";import"./tokens.style-S4lj6_Ik.js";import"./icon.component-CYxstYSl.js";import"./create-component-CPRSibq9.js";import"./triangle-exclamation-OQjucEpl.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-Cc7L6T_X.js";import"./runtime-nRyYmvPb.js";import"./class-map-Ce7Of4vy.js";import"./unwrap-slots-CrJjDXMy.js";import"./button.component-CfdDL-JY.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bu4BLl5x.js";import"./dropdown.component-BFo2LCZv.js";import"./popover.component-kT9GRZA2.js";import"./cross-small.component-CGOoVB7c.js";import"./chevron-bottom.component-O5Yg08u6.js";import"./checkmark.component-B_5na6qS.js";import"./circle-check.component-DOqjf_r0.js";import"./chevron-right.component-Czt3NaSb.js";import"./datepicker.component-CYz_Y2XO.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DXK9REtB.js";import"./index-DRPLSXJa.js";import"./dot-grid-one-horizontal.component-Bj76e-M6.js";import"./context-menu.component-D2daTIUe.js";import"./filter-chips.component-ab5Tqbum.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-niBHsEqO.js";import"./segmented-control.component-v_WxZy27.js";import"./index-DPzOjoN0.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
