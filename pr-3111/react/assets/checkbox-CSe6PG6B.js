import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-cWo2AGSQ.js";import{M as h,C as l,b as m}from"./blocks-BvwwbJl6.js";import{C as r}from"./checkbox-BybWTztd.js";import{C as p,D as x}from"./checkbox.stories-CLiQADh_.js";import{C as b,G as s,a as i,b as c}from"./index-DoHzMVJB.js";import"./iframe-DwMiwPBa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrsdlWqu.js";import"./index-CVhjRsm3.js";import"./id-CK6fwY7Y.js";import"./validator-BsbyFxS7.js";import"./index-B9kr0fQV.js";import"./triangle-exclamation.component-BTHF78b3.js";import"./declarative-layout-mixins-CabDXIRX.js";import"./icon.component-pyYq23FR.js";import"./alert.component-Cv4DuuyU.js";import"./runtime-Cgryh99k.js";import"./class-map-CPf615lB.js";import"./ref-DFGPBV9B.js";import"./button.component-C790SO7T.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-4iqXQV8G.js";import"./card.component-CEQbP5HL.js";import"./circle-check.component-dJewUU50.js";import"./chevron-bottom.component-DO8qDwh8.js";import"./cross-small.component-BOkyo4lG.js";import"./index-BPTiMSED.js";import"./calender-add.component-s2g6SYmb.js";import"./chevron-right.component-DiV5LO49.js";import"./dot-grid-one-horizontal.component-D9s2E-ou.js";import"./index-BCQSseFA.js";import"./checkmark.component-gulOLfwb.js";const U=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:p}),`
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
