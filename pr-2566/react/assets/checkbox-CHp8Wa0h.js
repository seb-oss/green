import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-zQi0WZ7z.js";import{M as h,C as m,b as p}from"./blocks-BuasxNfj.js";import{C as r}from"./checkbox-Dc9TPc5u.js";import{C as l,D as x}from"./checkbox.stories-DMbxZqoy.js";import{C as b,G as i,a as s,b as c}from"./index-CFTbRHAh.js";import"./iframe-BjHPRoxb.js";import"./index-wYU4qXMa.js";import"./index-DpT9V2SL.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BxgQzT9p.js";import"./triangle-exclamation.component-BBL1k4ra.js";import"./tokens.style-B-Srw6XU.js";import"./icon.component-z3F3tG-d.js";import"./alert.component-BevG6_r-.js";import"./runtime-nRyYmvPb.js";import"./class-map-ChV1nyEV.js";import"./unwrap-slots-BAYNi54b.js";import"./button.component-D5C3C2px.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-B3iB73nz.js";import"./dropdown.component-B-_83UMP.js";import"./popover.component-62DhSRYd.js";import"./cross-small.component-C74cWUwn.js";import"./chevron-bottom.component-mlm688c5.js";import"./checkmark.component-D-W4hwWM.js";import"./circle-check.component-D2FzyOhX.js";import"./chevron-right.component-UjPIxnTc.js";import"./datepicker.component-3S-QEDEW.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-D4sYc2W6.js";import"./index-BPyBfEb9.js";import"./dot-grid-one-horizontal.component-DVGB8XMS.js";import"./context-menu.component-C9YA_WPY.js";import"./filter-chips.component-B5X-kSzp.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-727vX-a9.js";import"./segmented-control.component-DEvkelRH.js";import"./index-B2En3MjG.js";import"./triangle-exclamation-CE5az-9k.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(c,{children:e.jsx(s,{margin:"xl 0",children:e.jsxs(i,{variant:"notice",children:[e.jsx(o.strong,{children:"Note:"})," This version of Checkbox is deprecated! Please use the ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-checkbox--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(o.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(o.h2,{id:"basic",children:"Basic"}),`
`,e.jsx(m,{of:x}),`
`,e.jsx(o.h2,{id:"checked-state",children:"Checked state"}),`
`,e.jsxs(o.p,{children:["You control the state of the checkbox by setting the ",e.jsx(o.code,{children:"checked"})," prop to true or false. You can use the ",e.jsx(o.code,{children:"onChange"})," handler to listen to user input and update state in your app accordingly."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`function RobotCheckComponent () {
  const [isRobot, setIsRobot] = useState<boolean>()

  return (
    <Checkbox
      label="Check this if you are a robot"
      checked={isRobot}
      onChange={(event) => { setIsRobot(event.target.checked) }
    />
  )
}
`})}),`
`,e.jsx(o.h2,{id:"states-and-variants-checkbox",children:"States and variants checkbox"}),`
`,e.jsxs("form",{children:[e.jsx(r,{label:"Normal unchecked"}),e.jsx(r,{label:"Normal checked",checked:!0}),e.jsx(r,{label:"Invalid unchecked",validator:{indicator:"error",message:"Invalid"}}),e.jsx(r,{label:"Invalid checked",validator:{indicator:"error",message:"Invalid"},checked:!0})]}),`
`,e.jsx(o.h2,{id:"validation",children:"Validation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Checkbox
  label="Invalid checked"
  validator={{
    indicator: 'error',
    message: 'Error',
  }}
  checked
/>
`})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{})]})}function ie(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}function n(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ne as CheckboxTemplate,ie as default};
