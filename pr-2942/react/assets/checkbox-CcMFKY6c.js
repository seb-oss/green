import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-C78f2CDJ.js";import{M as h,C as l,b as m}from"./blocks-uIqXyR4Y.js";import{C as r}from"./checkbox-CZO4v1W0.js";import{C as p,D as x}from"./checkbox.stories-BiUeKk3l.js";import{C as b,G as s,a as i,b as c}from"./index-CZ_VRGuO.js";import"./iframe-TRhOb2Dj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CbEnrI8b.js";import"./index-DBysL93Q.js";import"./id-CK6fwY7Y.js";import"./validator-BsbyFxS7.js";import"./index-FhJBB1Ny.js";import"./triangle-exclamation.component-B3oHIab5.js";import"./declarative-layout-mixins-BS_gv4QM.js";import"./icon.component-DyjtE5AO.js";import"./alert.component-C036HphT.js";import"./runtime-Cgryh99k.js";import"./class-map-BaERiJfA.js";import"./ref-Bt-vr_W6.js";import"./button.component-DNn2u3D4.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-CLlKyzpN.js";import"./card.component-aFGxgl-f.js";import"./circle-check.component-HkvQAMWL.js";import"./chevron-bottom.component-CvrMJXYi.js";import"./cross-small.component-D6GVcTFj.js";import"./index-B0l3jr-D.js";import"./calender-add.component-Dvz3iw_y.js";import"./chevron-right.component-Fn4KARVM.js";import"./dot-grid-one-horizontal.component-IUYVS52m.js";import"./index-DU7ylLJr.js";import"./checkmark.component-CXtoC2vD.js";const U=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:p}),`
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
