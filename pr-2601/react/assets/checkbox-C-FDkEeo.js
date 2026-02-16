import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-YLa5-V7Q.js";import{M as h,C as m,b as p}from"./blocks-69Q4strh.js";import{C as r}from"./checkbox-c8K4fqqg.js";import{C as l,D as x}from"./checkbox.stories-DpM2hgeY.js";import{C as b,G as i,a as s,b as c}from"./index-DQIHrFdy.js";import"./iframe-CeXvLgxy.js";import"./index-CCnnaBau.js";import"./index-BOe-vWBb.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-h406NjQD.js";import"./triangle-exclamation.component-yG6LUG5Q.js";import"./tokens.style-BoSy-EbY.js";import"./icon.component-UORbI64J.js";import"./alert.component-C2P2nS0V.js";import"./runtime-nRyYmvPb.js";import"./class-map-UJI29Vnz.js";import"./unwrap-slots-ds8lDFVr.js";import"./button.component-CUObPqBB.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bw-yxDDo.js";import"./dropdown.component-Ah5AOPDG.js";import"./popover.component-4kIjSHXo.js";import"./cross-small.component-Brb4YBVw.js";import"./chevron-bottom.component-CMWIIlkf.js";import"./checkmark.component-CZDj2_6J.js";import"./circle-check.component-BaVa0LTu.js";import"./chevron-right.component-JW4FjT85.js";import"./datepicker.component-Cwqa1I73.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-JynXsM9D.js";import"./index-C2DlfzFI.js";import"./dot-grid-one-horizontal.component-FnKwqAEB.js";import"./context-menu.component-Ea83WAdB.js";import"./filter-chips.component-ygdCKGVC.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CYzI9v6p.js";import"./segmented-control.component-Ct1sotcM.js";import"./index-B_Zau11P.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
`,e.jsx(p,{})]})}function ne(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}function n(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{re as CheckboxTemplate,ne as default};
