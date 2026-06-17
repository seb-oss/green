import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-CZeIfDrk.js";import{M as h,C as l,b as m}from"./blocks-aj_1mSKd.js";import{C as r}from"./checkbox-GAwgr7H3.js";import{C as p,D as x}from"./checkbox.stories-BUxYNIlJ.js";import{C as b,G as s,a as i,b as c}from"./index-CtWhUiVs.js";import"./iframe-DvzKjYkA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTiOAneY.js";import"./index-DCxONVJ-.js";import"./id-CK6fwY7Y.js";import"./validator-BsbyFxS7.js";import"./index-K3NQ39mN.js";import"./triangle-exclamation.component-Fc_qJFRR.js";import"./declarative-layout-mixins-lLUuMxcp.js";import"./icon.component-DJIYceGZ.js";import"./alert.component-ovNA7oE5.js";import"./runtime-Cgryh99k.js";import"./class-map-CIhlZ7t8.js";import"./ref-Bj5M8Itj.js";import"./button.component-DaCZqes7.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-DwS_oB8y.js";import"./card.component-BlxjBCXw.js";import"./circle-check.component-ChIT6GFt.js";import"./chevron-bottom.component-C7NcUnG7.js";import"./cross-small.component-C9qCbSEV.js";import"./index-Do-4-8uK.js";import"./calender-add.component-H-cWmLzH.js";import"./chevron-right.component-BZXjkWIW.js";import"./dot-grid-one-horizontal.component-Chuc_iDb.js";import"./index-DDkH3zLM.js";import"./checkmark.component-CjRjEY93.js";const U=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:p}),`
`,e.jsx(c,{children:e.jsx(i,{margin:"xl 0",children:e.jsxs(s,{variant:"notice",children:[e.jsx(o.strong,{children:"Note:"})," This version of Checkbox is deprecated! Please use the ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-checkbox--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(o.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(o.h2,{id:"basic",children:"Basic"}),`
`,e.jsx(l,{of:x}),`
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
`,e.jsx(m,{})]})}function W(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}function n(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{U as CheckboxTemplate,W as default};
