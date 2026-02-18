import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-B_FY57xH.js";import{M as h,C as m,b as p}from"./blocks-ezUfb2KY.js";import{C as r}from"./checkbox-DZc1IYcL.js";import{C as l,D as x}from"./checkbox.stories-bZNv17Gx.js";import{C as b,G as i,a as s,b as c}from"./index-CasKW6DH.js";import"./iframe-C2y8kQ_h.js";import"./index-DK0n84OQ.js";import"./index-D21yMTF3.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-qqBd_4NJ.js";import"./triangle-exclamation.component-_ToJGkW8.js";import"./tokens.style-CJdvZpSl.js";import"./icon.component-DykP1ef3.js";import"./alert.component-hiNTc320.js";import"./runtime-nRyYmvPb.js";import"./class-map-Bw1ZUo5-.js";import"./unwrap-slots-qXo5cvKa.js";import"./button.component-DtQCKb28.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DqO0alTM.js";import"./dropdown.component-D6ZAIxtH.js";import"./popover.component-DSZulfJD.js";import"./cross-small.component-CcVhQJKn.js";import"./chevron-bottom.component-KTFir3Td.js";import"./checkmark.component-8BJnhv91.js";import"./circle-check.component-C4Mx0r-x.js";import"./chevron-right.component-BZDbz5nV.js";import"./datepicker.component-8SgY-VLq.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-B5Ug86nr.js";import"./index-tWhssjb8.js";import"./dot-grid-one-horizontal.component-D78g-NJ_.js";import"./context-menu.component-N0ar6I4x.js";import"./filter-chips.component-D1mBox6Z.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-B6x9HH4a.js";import"./segmented-control.component-Dapd9gex.js";import"./index-BiuFUAQj.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
