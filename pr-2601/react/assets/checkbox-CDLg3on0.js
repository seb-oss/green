import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-WAc53dTB.js";import{M as h,C as m,b as p}from"./blocks-D4N9m9WR.js";import{C as r}from"./checkbox-BNL4wZsh.js";import{C as l,D as x}from"./checkbox.stories-dVgBXMZw.js";import{C as b,G as i,a as s,b as c}from"./index-BbmXPi5X.js";import"./iframe-CpjCwRB5.js";import"./index-d85OiOxc.js";import"./index-C0V8CMls.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BsUnAwSD.js";import"./triangle-exclamation.component-CJtmQs-4.js";import"./tokens.style-DKVHSIKv.js";import"./icon.component-BFRhCtD6.js";import"./alert.component-DpIK20OV.js";import"./runtime-nRyYmvPb.js";import"./class-map-DRA4upV3.js";import"./unwrap-slots-CexM88MV.js";import"./button.component-BPrFVdld.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CEw7_X18.js";import"./dropdown.component-zUJ5tQdg.js";import"./popover.component-DTO4Bi4-.js";import"./cross-small.component-CDyQSQcb.js";import"./chevron-bottom.component-DjiHajve.js";import"./checkmark.component-B1dnbpzV.js";import"./circle-check.component-D52iPdaI.js";import"./chevron-right.component-CWiqk0W0.js";import"./datepicker.component-OJkwyvx5.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-sV1a4VSP.js";import"./index-DQVeINMK.js";import"./dot-grid-one-horizontal.component-3iKd1P4p.js";import"./context-menu.component-qARZTvOm.js";import"./filter-chips.component-1PGB4cnA.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-B2Fsr24_.js";import"./segmented-control.component-pIGuc_rT.js";import"./index-BtDgzB_G.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
