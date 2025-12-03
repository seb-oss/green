import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-VOr2a6-o.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-Cd2v8Na6.js";import{C as r}from"./checkbox-DWC6_wDX.js";import{C as l,D as x}from"./checkbox.stories-g31jOVRf.js";import{C as b,G as i,a as s,b as c}from"./index-BOJcUciM.js";import"./iframe-C271Nerd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPJ9-dy6.js";import"./index-Bi5rrA2L.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BtIA32v7.js";import"./tokens.style-hQQ-W_TI.js";import"./triangle-exclamation.component-DtgAd-Tc.js";import"./icon.component-DX3bWAzX.js";import"./alert.component-Dum99QDK.js";import"./runtime-nRyYmvPb.js";import"./class-map-Dt2ytuHu.js";import"./unwrap-slots-DN9XH1bv.js";import"./button.component-DV-wpW8q.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-C4trvypr.js";import"./dropdown.component-CZKnCS5R.js";import"./popover.component-CB168AvC.js";import"./cross-small.component-CeFPyei7.js";import"./chevron-bottom.component-BU1gVsk2.js";import"./checkmark.component-CYihVGlj.js";import"./circle-check.component-BGnnHiE6.js";import"./chevron-right.component-DasNy-4E.js";import"./datepicker.component-BhyYuSZz.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-B0z9fbn9.js";import"./index-vGYJp257.js";import"./dot-grid-one-horizontal.component-DKQ6UCT4.js";import"./context-menu.component-7KQkoH1x.js";import"./filter-chips.component-B7hurEtt.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CYvBAafE.js";import"./segmented-control.component-BAsaZ7mA.js";import"./index-CkL5asgY.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
