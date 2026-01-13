import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Z5fD0fR_.js";import{M as h,C as m,b as p}from"./blocks-D24D8KSH.js";import{C as r}from"./checkbox-DIIoMFDa.js";import{C as l,D as x}from"./checkbox.stories-ChI0mUfl.js";import{C as b,G as i,a as s,b as c}from"./index-BBKL6L6X.js";import"./iframe-D5za-sDm.js";import"./index-CdYOo6_N.js";import"./index-Zqm_AfoP.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-DxcQqL6R.js";import"./triangle-exclamation.component-2jYArF7m.js";import"./tokens.style-S4lj6_Ik.js";import"./icon.component-CYxstYSl.js";import"./alert.component-Cc7L6T_X.js";import"./runtime-nRyYmvPb.js";import"./class-map-Ce7Of4vy.js";import"./unwrap-slots-CrJjDXMy.js";import"./button.component-CfdDL-JY.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bu4BLl5x.js";import"./dropdown.component-BFo2LCZv.js";import"./popover.component-kT9GRZA2.js";import"./cross-small.component-CGOoVB7c.js";import"./chevron-bottom.component-O5Yg08u6.js";import"./checkmark.component-B_5na6qS.js";import"./circle-check.component-DOqjf_r0.js";import"./chevron-right.component-Czt3NaSb.js";import"./datepicker.component-CYz_Y2XO.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DXK9REtB.js";import"./index-DRPLSXJa.js";import"./dot-grid-one-horizontal.component-Bj76e-M6.js";import"./context-menu.component-D2daTIUe.js";import"./filter-chips.component-ab5Tqbum.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-niBHsEqO.js";import"./segmented-control.component-v_WxZy27.js";import"./index-DPzOjoN0.js";import"./triangle-exclamation-OQjucEpl.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
