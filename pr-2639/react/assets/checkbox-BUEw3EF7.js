import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-D4CkzS0g.js";import{M as h,C as m,b as p}from"./blocks-C6L_5z8k.js";import{C as r}from"./checkbox-DwOk4b-d.js";import{C as l,D as x}from"./checkbox.stories-C3mshlqf.js";import{C as b,G as i,a as s,b as c}from"./index-D9fAD7ss.js";import"./iframe-BTzNRez1.js";import"./index-DIretwfC.js";import"./index-CjIe94ZQ.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-ClHiDxml.js";import"./triangle-exclamation.component-DkDYJAe7.js";import"./tokens.style-BRv0vHcz.js";import"./icon.component-Byh-Cpn9.js";import"./alert.component-wO6lRqim.js";import"./runtime-nRyYmvPb.js";import"./class-map-4-6aH2cj.js";import"./unwrap-slots-mMf3_z3_.js";import"./button.component-Bgdni5PK.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CRtjirDm.js";import"./dropdown.component-D2WKIuIB.js";import"./popover.component-BPp-7cw-.js";import"./cross-small.component-kiWmdwtA.js";import"./chevron-bottom.component-D_ODGUoz.js";import"./checkmark.component-CU1iH_Jj.js";import"./circle-check.component-Bwt-1KdR.js";import"./chevron-right.component-CRYJAmGK.js";import"./datepicker.component-BOMXPhHi.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DEUIcLwC.js";import"./index-CYZ16zpe.js";import"./dot-grid-one-horizontal.component-DZqkT3Jh.js";import"./context-menu.component-D0dUJuX1.js";import"./filter-chips.component-B2D1SWJN.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CTFeGdWz.js";import"./segmented-control.component-CKDunO7m.js";import"./index-D_0GKJc_.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
