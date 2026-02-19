import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BU5CuOIx.js";import{M as h,C as m,b as p}from"./blocks-JtsA7v0U.js";import{C as r}from"./checkbox-Bo10g0c0.js";import{C as l,D as x}from"./checkbox.stories-D_DySCyY.js";import{C as b,G as i,a as s,b as c}from"./index-DH6gu5Uc.js";import"./iframe-KJCJb7wS.js";import"./index-B2-4Itdx.js";import"./index-jBLGnCCe.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BIj5CZ45.js";import"./triangle-exclamation.component-C9tczSxU.js";import"./tokens.style-rytQjdJ2.js";import"./icon.component-D0LrdCb5.js";import"./alert.component-sTalZqiK.js";import"./runtime-nRyYmvPb.js";import"./class-map-Bnq7lbfu.js";import"./unwrap-slots-CXh6k74V.js";import"./button.component-DgchASNp.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BpmokJHa.js";import"./dropdown.component-BxYJ2TRN.js";import"./popover.component-BpafTGy2.js";import"./cross-small.component-BIPEGLHH.js";import"./chevron-bottom.component-Ccgw_uYX.js";import"./checkmark.component-CuJgwfvU.js";import"./circle-check.component-D9tAVUyY.js";import"./chevron-right.component-BgbakiMi.js";import"./datepicker.component-BCACJH3q.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Cnfcxo0d.js";import"./index-DqCHG9XO.js";import"./dot-grid-one-horizontal.component-ME9mhvkd.js";import"./context-menu.component-Bca8IFw9.js";import"./filter-chips.component-D0SD5IE_.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Cj2rmQ7I.js";import"./segmented-control.component-CIpEIR6D.js";import"./index-DvNDwRPE.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
