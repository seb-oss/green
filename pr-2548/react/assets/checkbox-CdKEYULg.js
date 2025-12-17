import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CN_dLUcl.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-Dcx10D9N.js";import{C as r}from"./checkbox-5hzbA8Zc.js";import{C as l,D as x}from"./checkbox.stories-rDCad3bm.js";import{C as b,G as i,a as s,b as c}from"./index-DBEFadcz.js";import"./iframe-CwzLcHrC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bbge59vc.js";import"./index-DToG7dYF.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BbxPER_q.js";import"./triangle-exclamation.component-911jE__9.js";import"./tokens.style-Cp6R_W3R.js";import"./icon.component-CfQkyOVl.js";import"./alert.component-BoM1J54Z.js";import"./runtime-nRyYmvPb.js";import"./class-map-BMfMVmFU.js";import"./unwrap-slots-CysQxUCp.js";import"./button.component-CT-ZryuN.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Od6iQ_Tq.js";import"./dropdown.component-BefJXF_f.js";import"./popover.component-ChYr1qjf.js";import"./cross-small.component-CultUpvJ.js";import"./chevron-bottom.component-CNJXfDJO.js";import"./checkmark.component-C3HZjBzj.js";import"./circle-check.component-e-q_K7AC.js";import"./chevron-right.component-DNy1fXo5.js";import"./datepicker.component-DtUBkrtY.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BXAq3hLA.js";import"./index-OM4bG494.js";import"./dot-grid-one-horizontal.component-K5QC4qgg.js";import"./context-menu.component-C7TQTuq0.js";import"./filter-chips.component-CD_WmbWh.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BewvFT5A.js";import"./segmented-control.component-FJdEtey8.js";import"./index-DDQZF032.js";import"./triangle-exclamation-LvI6y3nC.js";const ie=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
