import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-B_21fPPp.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-DQsIbQlR.js";import{C as r}from"./checkbox-D3oj1xko.js";import{C as l,D as x}from"./checkbox.stories-HkD8EIr-.js";import{C as b,G as i,a as s,b as c}from"./index-DZaFxwV-.js";import"./iframe-BDifA8yT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CqXDwye2.js";import"./index-B5tSmkZ6.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-Dhn4dE3j.js";import"./tokens.style-Dg3DjNA6.js";import"./triangle-exclamation.component-BKCz0EJ4.js";import"./icon.component-DgQbdcMX.js";import"./alert.component-CGSeDA1c.js";import"./runtime-nRyYmvPb.js";import"./class-map--_fRTFHt.js";import"./unwrap-slots-B5ATO2SA.js";import"./button.component-Hl7dLSp2.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CLwggSoW.js";import"./dropdown.component-CoGrTlkf.js";import"./popover.component-CxQr7Tce.js";import"./cross-small.component-BAfW7RQt.js";import"./chevron-bottom.component-Pg3XnUuL.js";import"./checkmark.component-DFEKLRNm.js";import"./circle-check.component-DbvQh5-v.js";import"./chevron-right.component-CMNCTtuG.js";import"./datepicker.component-B7RAlcuO.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-iesJWQdd.js";import"./index-BMqpUNq6.js";import"./dot-grid-one-horizontal.component-5EcR7PRP.js";import"./context-menu.component-s_MxtW66.js";import"./filter-chips.component-DKN5TJYv.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-HGv1FCoy.js";import"./segmented-control.component-D28UCBGf.js";import"./index-DxRyU4LM.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
