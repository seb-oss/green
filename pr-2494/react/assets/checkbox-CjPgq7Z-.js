import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BdvDuQSs.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-HK7vylF7.js";import{C as r}from"./checkbox-BiLm6SDg.js";import{C as l,D as x}from"./checkbox.stories-etZw8CVD.js";import{C as b,G as i,a as s,b as c}from"./index-yM_hP0YE.js";import"./iframe-BPdYeYer.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BH3GsKyO.js";import"./index-D8wyPbwv.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BJP4Lf36.js";import"./tokens.style-CCQA-xSm.js";import"./triangle-exclamation.component-C7-K1U6X.js";import"./icon-B6Xa3yvm.js";import"./alert.component-BXDrYuM3.js";import"./runtime-nRyYmvPb.js";import"./class-map-seI136rR.js";import"./unwrap-slots-CDWpMIWc.js";import"./button.component-DxlCNO88.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CjxfBaJk.js";import"./dropdown.component-D7-BcoqP.js";import"./popover.component-DmGavyxg.js";import"./cross-small.component-Bkh_BJPe.js";import"./chevron-bottom.component-BJevt17-.js";import"./checkmark.component-D71c-ox_.js";import"./circle-check.component-BSs7rZUs.js";import"./chevron-right.component-DbJRueXy.js";import"./datepicker.component-CbGGPv8R.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CYscPY-d.js";import"./index-SqEXBxUH.js";import"./dot-grid-one-horizontal.component-BRPW14gJ.js";import"./context-menu.component-ChKvSuqs.js";import"./filter-chips.component-DYFyEcAH.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-D2J-yaLY.js";import"./segmented-control.component-DFpvjqoQ.js";import"./index-CvUVa5g0.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
