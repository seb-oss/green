import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-B0tlv4az.js";import{M as h,C as m,b as p}from"./blocks-C3I9DdTT.js";import{C as r}from"./checkbox-CL1jGIPv.js";import{C as l,D as x}from"./checkbox.stories-DoFuu3UJ.js";import{C as b,G as i,a as s,b as c}from"./index-BdnMo5sp.js";import"./iframe-D8ZEAjGh.js";import"./index-CIp6J1eq.js";import"./index-CiflAXII.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BiDSBUuX.js";import"./triangle-exclamation.component-DRP3G5eI.js";import"./tokens.style-qn6ca56b.js";import"./icon.component-DAeSESg_.js";import"./alert.component-_mwmi_vn.js";import"./runtime-nRyYmvPb.js";import"./class-map-DcGs1vWL.js";import"./unwrap-slots-C6aHSuFW.js";import"./button.component-Cv84kGqs.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-W1cd-gtF.js";import"./dropdown.component-BbR2TjVK.js";import"./popover.component-C-iU3zUV.js";import"./cross-small.component-Cozl0ghC.js";import"./chevron-bottom.component-D5sLWc9A.js";import"./checkmark.component-B0riocTG.js";import"./circle-check.component-C2qH0Ca5.js";import"./chevron-right.component-DVwakbCy.js";import"./datepicker.component-CWO8yV1L.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CUOZCOEE.js";import"./index-BfHlzujn.js";import"./dot-grid-one-horizontal.component-BNn2LfV8.js";import"./context-menu.component-CLLd1MVC.js";import"./filter-chips.component-Dpo7o4A-.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DEmGrk4Y.js";import"./segmented-control.component-DiqoSfNn.js";import"./index-jucrcyrZ.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
