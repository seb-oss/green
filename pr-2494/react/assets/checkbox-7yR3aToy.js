import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BzZCe2To.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-Dfy8B5yN.js";import{C as r}from"./checkbox-CBh7-cti.js";import{C as l,D as x}from"./checkbox.stories-OVuxxupk.js";import{C as b,G as i,a as s,b as c}from"./index-BlFhN65k.js";import"./iframe-CelaFuV7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CjXVhvJk.js";import"./index-uwQ6WvYX.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-DT6OBiWo.js";import"./tokens.style-CHtZEMdX.js";import"./triangle-exclamation.component-Dmhxb47C.js";import"./icon-BtVjnqF5.js";import"./alert.component-BS1AP1jc.js";import"./runtime-nRyYmvPb.js";import"./class-map-Nh3yQBam.js";import"./unwrap-slots-h8c-w_RD.js";import"./button.component-Bo6Ew2kg.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-sq-k3_K7.js";import"./dropdown.component-CMNGZOL6.js";import"./popover.component-aclLw27A.js";import"./cross-small.component-BxCgovwK.js";import"./chevron-bottom.component-D3DNmnRi.js";import"./checkmark.component-D7Y063x2.js";import"./circle-check.component-BTaWPirY.js";import"./chevron-right.component-kLEqnNGq.js";import"./datepicker.component-C631pmmB.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CJ717alA.js";import"./index-Dt5knyk1.js";import"./dot-grid-one-horizontal.component-DSAY2UOa.js";import"./context-menu.component-4HJxQPnQ.js";import"./filter-chips.component-ffXJbIoX.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DtP5g2zx.js";import"./segmented-control.component-DWi7R9lk.js";import"./index-DZweOSf1.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
