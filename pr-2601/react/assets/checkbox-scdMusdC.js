import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CVD57raL.js";import{M as h,C as m,b as p}from"./blocks-DJZLxdgb.js";import{C as r}from"./checkbox-DgFOVwKE.js";import{C as l,D as x}from"./checkbox.stories-Pi9Q2453.js";import{C as b,G as i,a as s,b as c}from"./index-Ccg77D-F.js";import"./iframe-BXkhAyBK.js";import"./index-CizREeUa.js";import"./index-BU8nSUgh.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-C5IyA2Lt.js";import"./triangle-exclamation.component-CAKXw7yA.js";import"./tokens.style-COaLJygP.js";import"./icon.component-ROp4cbzM.js";import"./alert.component-cZz8UsJq.js";import"./runtime-nRyYmvPb.js";import"./class-map-DXWOJLRM.js";import"./unwrap-slots-xT2u58Cp.js";import"./button.component-BkcIImXx.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-LuJatCgX.js";import"./dropdown.component-wpRcXX5C.js";import"./popover.component-CTEQymH7.js";import"./cross-small.component-CeJAiNmC.js";import"./chevron-bottom.component-L4mCQ_af.js";import"./checkmark.component-DQnI_PpJ.js";import"./circle-check.component-l7slmowJ.js";import"./chevron-right.component-BKk7Ta2t.js";import"./datepicker.component-UTvkGTfp.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-G4voz53z.js";import"./index-BvV9ch2R.js";import"./dot-grid-one-horizontal.component-CIcfEG-H.js";import"./context-menu.component-CnNJKCJN.js";import"./filter-chips.component-CVbDi0V1.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-80-bOMNf.js";import"./segmented-control.component-DDucScFO.js";import"./index-ClJWMHjo.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
