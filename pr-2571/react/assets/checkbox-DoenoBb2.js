import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-ClvIZUkl.js";import{M as h,C as m,b as p}from"./blocks-DrP9MO2y.js";import{C as r}from"./checkbox-DHyBmSgp.js";import{C as l,D as x}from"./checkbox.stories-4sRHUM-y.js";import{C as b,G as i,a as s,b as c}from"./index-Bs-fQFFN.js";import"./iframe-BcPI5vdr.js";import"./index-CU8bsUgR.js";import"./index-CijvtnO6.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-C1Mz1Yb4.js";import"./triangle-exclamation.component-Bcfyt3dx.js";import"./tokens.style-B3_bUxlA.js";import"./icon.component-eZbyebnV.js";import"./alert.component-BEk0OhCu.js";import"./runtime-nRyYmvPb.js";import"./class-map-CLFyfFyk.js";import"./unwrap-slots-CrM5yCyL.js";import"./button.component-DfoVutl3.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-B5jINYwi.js";import"./dropdown.component-BZGBFEFY.js";import"./popover.component-BS3Vp5zK.js";import"./cross-small.component-B1ECrPxW.js";import"./chevron-bottom.component-BfoSqGVm.js";import"./checkmark.component-DnKEilH2.js";import"./circle-check.component-BUdgY7Rn.js";import"./chevron-right.component-uyW61VtK.js";import"./datepicker.component-D3wyexVn.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-EixCtMwg.js";import"./index-mjgixg-a.js";import"./dot-grid-one-horizontal.component-CQZSqyIp.js";import"./context-menu.component-CMAbddGD.js";import"./filter-chips.component-BNdZMSIU.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-D4RlndHW.js";import"./segmented-control.component-COiBdHrz.js";import"./index-0zDqyIsy.js";import"./triangle-exclamation-CvWLrQp9.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
