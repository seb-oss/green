import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BQBjT9xG.js";import{M as h,C as m,b as p}from"./blocks-CfkD8sFh.js";import{C as r}from"./checkbox-t7cXG6bP.js";import{C as l,D as x}from"./checkbox.stories-C5HXh4TZ.js";import{C as b,G as i,a as s,b as c}from"./index-BTEOnFwT.js";import"./iframe-DevRqpyg.js";import"./index-W51qGYLq.js";import"./index-BoR1MBM2.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-DmWwIz5Y.js";import"./triangle-exclamation.component-DCf4-eeY.js";import"./tokens.style-DMD45hGJ.js";import"./icon.component-DwwQygxz.js";import"./alert.component-DhKD0OJC.js";import"./runtime-nRyYmvPb.js";import"./class-map-AOjz-ZyO.js";import"./unwrap-slots-6rzUoQJv.js";import"./button.component-DaQ5SXsC.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BLhHncRg.js";import"./dropdown.component-Dx4xuK78.js";import"./popover.component-mqlcYP2f.js";import"./cross-small.component-D2IVeO7L.js";import"./chevron-bottom.component-xRD8ansJ.js";import"./checkmark.component-KtneVU1r.js";import"./circle-check.component-CtErEb2R.js";import"./chevron-right.component-Dn3qv8zq.js";import"./datepicker.component-BXWDB4-I.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Dxr8Da9u.js";import"./index-Cm66ZsV9.js";import"./dot-grid-one-horizontal.component-Jx3MrAwm.js";import"./context-menu.component-BrXCZ6Z4.js";import"./filter-chips.component-BkYv4YbB.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CVrxxiQ_.js";import"./segmented-control.component-2LD7re_9.js";import"./index-DcegIx2A.js";import"./triangle-exclamation-Djt1Sdj1.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
