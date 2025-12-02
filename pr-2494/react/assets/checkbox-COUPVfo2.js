import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-B4ytBV2m.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-BKHoK_Ea.js";import{C as r}from"./checkbox-CTxrDGeW.js";import{C as l,D as x}from"./checkbox.stories-KPivJjiV.js";import{C as b,G as i,a as s,b as c}from"./index-DC0S3AiV.js";import"./iframe-CR_Org8W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-kncHLa.js";import"./index-Bq0-4XNc.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-5NACUfWh.js";import"./tokens.style-Di0rsWkG.js";import"./triangle-exclamation.component-Bi37gt4N.js";import"./icon-CelGpa7L.js";import"./alert.component-ixxl56re.js";import"./runtime-nRyYmvPb.js";import"./class-map-C_uUrXaf.js";import"./unwrap-slots-BpeMTfcO.js";import"./button.component-CApkkVSx.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DmT2wSpO.js";import"./dropdown.component-DbZjgPTo.js";import"./popover.component-BuxGQ8MC.js";import"./cross-small.component-CF8kFKFq.js";import"./chevron-bottom.component-DQEuEFs1.js";import"./checkmark.component-Cwol0E8z.js";import"./circle-check.component-BFxtOnwK.js";import"./chevron-right.component-BEbtUWPk.js";import"./datepicker.component-glZDjqY0.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-C_LNSNeo.js";import"./index-Bx2QzUWG.js";import"./dot-grid-one-horizontal.component-BtSE0Vjw.js";import"./context-menu.component-DWyVJ0qj.js";import"./filter-chips.component-CqJC8qe_.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BzvWK8y4.js";import"./segmented-control.component-CYz6IRDk.js";import"./index-CDs8zVxx.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
