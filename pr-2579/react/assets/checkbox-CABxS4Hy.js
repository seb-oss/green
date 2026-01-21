import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DCm8cbkO.js";import{M as h,C as m,b as p}from"./blocks-DruKEThJ.js";import{C as r}from"./checkbox-CCeZ_Vyi.js";import{C as l,D as x}from"./checkbox.stories-QII1Sedg.js";import{C as b,G as i,a as s,b as c}from"./index-CT0qEI7P.js";import"./iframe-DHUitZsM.js";import"./index-i2PT_L_5.js";import"./index-BqRa58fX.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-Bu2jXN0F.js";import"./triangle-exclamation.component-CtVBNTFG.js";import"./tokens.style-C_YaCOKd.js";import"./icon.component-DlyO6pHb.js";import"./alert.component-DoqikZ_8.js";import"./runtime-nRyYmvPb.js";import"./class-map-Dax-NQL0.js";import"./unwrap-slots-C6dsj1r1.js";import"./button.component-Bo20h0vr.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-B-8GFm3Q.js";import"./dropdown.component-Da_MLvR0.js";import"./popover.component-h9CM2al3.js";import"./cross-small.component-Bvr_gzym.js";import"./chevron-bottom.component-DaU0wZNG.js";import"./checkmark.component-BQB0rF1X.js";import"./circle-check.component-BCLUo-Yh.js";import"./chevron-right.component-p3y8NG0m.js";import"./datepicker.component-BuDPMGLb.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CXeqqzPz.js";import"./index-BB1TzO4Y.js";import"./dot-grid-one-horizontal.component-PQg2OQcL.js";import"./context-menu.component-B1fsgYZq.js";import"./filter-chips.component-D2Zzxt2z.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DtlCZ-vX.js";import"./segmented-control.component-BY3-W09N.js";import"./index-BRn-FdVt.js";import"./triangle-exclamation-BKMFNW-u.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
