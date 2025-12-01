import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CdwnAnu6.js";import{M as u,C as n,b as c}from"./WithTooltip-SK46ZJ2J-BGcwYRB1.js";import{I as h}from"./buttonGroup-BRF0jDsJ.js";import{I as f,D as x,W as j,a as b,U as I,V as g,E as v}from"./input.stories-BLqivkOc.js";import{C as w,G as s,a as m,b as p}from"./index-DSbYao1t.js";import"./iframe-CiHoVW_K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8VcXLAnH.js";import"./index-9NitEPn-.js";import"./button-BODE-lxa.js";import"./iconButton-BCQuz8Rd.js";import"./checkbox-7eh5NUL1.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-CtOWE5R5.js";import"./tokens.style-C9S4thjM.js";import"./triangle-exclamation.component-Bu-U4pcO.js";import"./icon-BzwaUFtQ.js";import"./create-component-CPRSibq9.js";import"./text-DANUJh4r.js";import"./edit-Cs76S9LP.js";import"./alert.component-B3GGYyeL.js";import"./runtime-nRyYmvPb.js";import"./class-map-BwyqSXdP.js";import"./unwrap-slots-BEd2BAVn.js";import"./button.component-Crmi441i.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DNHtitdq.js";import"./dropdown.component-DSqTJ7X7.js";import"./popover.component-CF4fzC5j.js";import"./cross-small.component-MzP4fxz6.js";import"./chevron-bottom.component-tfoPo_y8.js";import"./checkmark.component-kwPcE7Qk.js";import"./circle-check.component-D32hs9V8.js";import"./chevron-right.component-OM1P6j5p.js";import"./datepicker.component-hK5E5hyx.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-nCGgiAez.js";import"./index-onbHHOIO.js";import"./dot-grid-one-horizontal.component-B80hkPsn.js";import"./context-menu.component-BhgQH3nk.js";import"./filter-chips.component-CmqoirsQ.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BOeYqzkX.js";import"./segmented-control.component-8QNaBatb.js";import"./index-Dui8Lp2q.js";const je=({...r})=>e.jsx(h,{...r});function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return w||o("Core",!1),s||o("Core.GdsAlert",!0),m||o("Core.GdsDiv",!0),p||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f}),`
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
