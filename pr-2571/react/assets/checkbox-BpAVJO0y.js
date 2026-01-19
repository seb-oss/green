import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Dl6dlu0m.js";import{M as h,C as m,b as p}from"./blocks-Dt9rWmDI.js";import{C as r}from"./checkbox-CyphfHn4.js";import{C as l,D as x}from"./checkbox.stories-BmRH8OFX.js";import{C as b,G as i,a as s,b as c}from"./index-CJkucr5c.js";import"./iframe-CyU874dF.js";import"./index-DU-7n0kW.js";import"./index-DNVMsWRP.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-CC-DZQMl.js";import"./triangle-exclamation.component-C7GCcdzK.js";import"./tokens.style-0xPp33fj.js";import"./icon.component-COKJW-rP.js";import"./alert.component-BcEGZFYs.js";import"./runtime-nRyYmvPb.js";import"./class-map-DprOt83U.js";import"./unwrap-slots-CmYJfw1M.js";import"./button.component-BvacdI7D.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DSeZUj30.js";import"./dropdown.component-hAAVpVSD.js";import"./popover.component-DY0ZIFFG.js";import"./cross-small.component-B78JkwNl.js";import"./chevron-bottom.component-Ddp5_gGC.js";import"./checkmark.component-CxKtsX5O.js";import"./circle-check.component-CWty16bt.js";import"./chevron-right.component-DE-DOBac.js";import"./datepicker.component-D-NDnj0-.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-ZVtrF-76.js";import"./index-lLF3I9Un.js";import"./dot-grid-one-horizontal.component-DK2DiR8E.js";import"./context-menu.component-CcgohDIe.js";import"./filter-chips.component-C7JC2RXE.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-qcardp18.js";import"./segmented-control.component-jhy4qM13.js";import"./index-C84ZTD48.js";import"./triangle-exclamation-DRDRcIm0.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
