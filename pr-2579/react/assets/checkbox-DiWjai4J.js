import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Db8nbw06.js";import{M as h,C as m,b as p}from"./blocks-BzshW1E9.js";import{C as r}from"./checkbox-DfL_0QDW.js";import{C as l,D as x}from"./checkbox.stories-DTYfBGA3.js";import{C as b,G as i,a as s,b as c}from"./index-lv3y9P5m.js";import"./iframe-CIL6nGzy.js";import"./index-CnD2suD8.js";import"./index-m3L_cdhI.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BlJx7ZeG.js";import"./triangle-exclamation.component-C4EKB0WP.js";import"./tokens.style-XDACrouk.js";import"./icon.component-RaWennUv.js";import"./alert.component-CrABWyfg.js";import"./runtime-nRyYmvPb.js";import"./class-map-O0cWeAEz.js";import"./unwrap-slots-DxxvU8zL.js";import"./button.component-CQxeRybX.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BHZWm49d.js";import"./dropdown.component-CJ8FGAP4.js";import"./popover.component-CxqdQgFB.js";import"./cross-small.component-DIP5Nvce.js";import"./chevron-bottom.component-B8elGFfJ.js";import"./checkmark.component-sabD552z.js";import"./circle-check.component-DpK1WPEs.js";import"./chevron-right.component-D3SvCcAn.js";import"./datepicker.component-bbioQi-8.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BSt4jyyr.js";import"./index-D-jN8qjc.js";import"./dot-grid-one-horizontal.component-Dpzy8N1d.js";import"./context-menu.component-DzU_Z8To.js";import"./filter-chips.component-Bd9Lfo98.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DCt1uNLI.js";import"./segmented-control.component-CQ_KST84.js";import"./index-uaJfc_K5.js";import"./triangle-exclamation-BtPvLoTj.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
