import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-C7LYE82L.js";import{M as h,C as l,b as m}from"./blocks-CnGrNBjK.js";import{C as r}from"./checkbox-DTo9gr0Q.js";import{C as p,D as x}from"./checkbox.stories-17EgmEcH.js";import{C as b,G as s,a as i,b as c}from"./index-Cl4BxlHl.js";import"./iframe-CQUnwiD8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CIWZCzjo.js";import"./index-MHndklZb.js";import"./id-CK6fwY7Y.js";import"./validator-BsbyFxS7.js";import"./index-CncV63K2.js";import"./triangle-exclamation.component-C7oZhJUX.js";import"./tokens.style-B9dm16Su.js";import"./icon.component-Buf0R8yE.js";import"./alert.component-C6iK_8ZT.js";import"./runtime-nRyYmvPb.js";import"./class-map-CH5RdcFs.js";import"./ref-DJiapoSF.js";import"./button.component-1bcRdqQh.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DrHEwaoE.js";import"./card.component-BmZX1aP5.js";import"./circle-check.component-BHjIsbFu.js";import"./chevron-bottom.component-Bqbu32Ni.js";import"./cross-small.component-CHZH7K3R.js";import"./index-BJsP_4kZ.js";import"./calender-add.component-nrx3b3sJ.js";import"./chevron-right.component-Yvgj8Tzr.js";import"./dot-grid-one-horizontal.component-uhOf-2kd.js";import"./index-BdA-3_4q.js";import"./checkmark.component-CuYLwUJO.js";const U=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:p}),`
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
