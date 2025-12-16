import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BpbyqghF.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-Mxt942zU.js";import{C as r}from"./checkbox-B-pNI7Mx.js";import{C as l,D as x}from"./checkbox.stories-BZH9_Hi8.js";import{C as b,G as i,a as s,b as c}from"./index-CwXk7NqP.js";import"./iframe-ZyucWf8_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C2rWvvJc.js";import"./index-E52tKGXW.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-DSE2I7M-.js";import"./triangle-exclamation.component-BdWVh20Z.js";import"./tokens.style-CHPgHy6M.js";import"./icon.component-ByT0ty5F.js";import"./alert.component-zdqVqlh7.js";import"./runtime-nRyYmvPb.js";import"./class-map-BcqLdOcD.js";import"./unwrap-slots-f09DNN1U.js";import"./button.component-BvazLcWR.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-qcGc-6ri.js";import"./dropdown.component-DRkDizcS.js";import"./popover.component-B1MRBub3.js";import"./cross-small.component-DnDv8bGP.js";import"./chevron-bottom.component-iS7rj8B4.js";import"./checkmark.component-oOadWd9A.js";import"./circle-check.component-CeuizPZ3.js";import"./chevron-right.component-jF5DoDFx.js";import"./datepicker.component-iAQM40C0.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Dvs51eNg.js";import"./index-UwhG-KjD.js";import"./dot-grid-one-horizontal.component-DYfxUZZe.js";import"./context-menu.component-Cjld9bjq.js";import"./filter-chips.component-CJoZukld.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-B5xvO_uL.js";import"./segmented-control.component-By1uUgYB.js";import"./index-BD7dv9U4.js";import"./triangle-exclamation-SEcsH3wx.js";const ie=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
`,e.jsx(p,{})]})}function se(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}function n(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ie as CheckboxTemplate,se as default};
