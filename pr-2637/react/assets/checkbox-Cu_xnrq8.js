import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DmQdhVTs.js";import{M as h,C as m,b as p}from"./blocks-KP6KJ5Pa.js";import{C as r}from"./checkbox-CNQgMr9U.js";import{C as l,D as x}from"./checkbox.stories-2C7I4j5U.js";import{C as b,G as i,a as s,b as c}from"./index-CwAphsd4.js";import"./iframe-Cxe0EI8F.js";import"./index-UMjl-2tV.js";import"./index-UHloBdPs.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-C7C1oFvO.js";import"./triangle-exclamation.component-BT7drLfA.js";import"./tokens.style-CLk5f2WV.js";import"./icon.component-CKzO4ohX.js";import"./alert.component-CoLTKVPs.js";import"./runtime-nRyYmvPb.js";import"./class-map-B5hwANPR.js";import"./unwrap-slots-8hnmqcD4.js";import"./button.component-BvUAo_CY.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CikXkF_x.js";import"./dropdown.component-ChgrRDlE.js";import"./popover.component-B13hAgok.js";import"./cross-small.component-BeRUt0hk.js";import"./chevron-bottom.component-CfE1evuh.js";import"./checkmark.component-C61RbyLm.js";import"./circle-check.component-CKppgkkl.js";import"./chevron-right.component-B5dn43KL.js";import"./datepicker.component-6dQV-gZE.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DmlPBgFc.js";import"./index-DstNDkhp.js";import"./dot-grid-one-horizontal.component-CjJc8z6M.js";import"./context-menu.component-6xbCNyDF.js";import"./filter-chips.component-uPaGeklS.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Bt8DDbbS.js";import"./segmented-control.component-01bIE4x5.js";import"./index-Cv7TOSIy.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
