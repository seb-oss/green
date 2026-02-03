import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BWVSm6iY.js";import{M as h,C as m,b as p}from"./blocks-BFOgZEHS.js";import{C as r}from"./checkbox-g5sNuGDm.js";import{C as l,D as x}from"./checkbox.stories-CevjR6BO.js";import{C as b,G as i,a as s,b as c}from"./index-Me13LkCq.js";import"./iframe-pjw-7Lqr.js";import"./index-BkSgyr6S.js";import"./index-DWRBZ-sF.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-ChVhbCAd.js";import"./triangle-exclamation.component-CozpcWl7.js";import"./tokens.style-QGGT8I76.js";import"./icon.component-CI66v_GV.js";import"./alert.component-Dl-7QJQY.js";import"./runtime-nRyYmvPb.js";import"./class-map-D7L2K4mx.js";import"./unwrap-slots-Bw6PFvuc.js";import"./button.component-bFXI6fKD.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Dfq1mwPa.js";import"./dropdown.component-CKT5DspA.js";import"./popover.component-CppmPqC7.js";import"./cross-small.component-BuD78yzo.js";import"./chevron-bottom.component-CJWgzizM.js";import"./checkmark.component-BzzUfAhw.js";import"./circle-check.component-D7QC_2Z0.js";import"./chevron-right.component-BisOhwN0.js";import"./datepicker.component-DFxnOkHY.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-9jwuPK1q.js";import"./index-Bqmz77xH.js";import"./dot-grid-one-horizontal.component-C6RVRpXe.js";import"./context-menu.component-BIBbrb5R.js";import"./filter-chips.component-DNBf1iA4.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CYiD0yVW.js";import"./segmented-control.component-CCKm_pRh.js";import"./index-j8A6Igum.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
