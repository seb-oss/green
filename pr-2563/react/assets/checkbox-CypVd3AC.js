import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DoSfTK6r.js";import{M as h,C as m,b as p}from"./blocks-YWNeQBYD.js";import{C as r}from"./checkbox-D2eh4uLn.js";import{C as l,D as x}from"./checkbox.stories-Do2JJ3ah.js";import{C as b,G as i,a as s,b as c}from"./index-Cd3BL2Y3.js";import"./iframe-DYS0wwl6.js";import"./index-PiVaSsYd.js";import"./index-DHQhIzeK.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-CtLU9TUz.js";import"./triangle-exclamation.component-DIXE-yhT.js";import"./tokens.style-CEj53FLI.js";import"./icon.component-IewqXgD1.js";import"./alert.component-IN9tym-c.js";import"./runtime-nRyYmvPb.js";import"./class-map-DFQxccEl.js";import"./unwrap-slots-DDD1K7Sv.js";import"./button.component-CtvYwCLb.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-AerxwP10.js";import"./dropdown.component-B0aBD9pb.js";import"./popover.component-DDqRcw0S.js";import"./cross-small.component-B7YSS0Up.js";import"./chevron-bottom.component-K0ZxR76K.js";import"./checkmark.component-CT8OUiUd.js";import"./circle-check.component-DNLg0IRE.js";import"./chevron-right.component-Ct0m0QtA.js";import"./datepicker.component-DW8W7gXo.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Cn4UpmAR.js";import"./index-C0bueOUO.js";import"./dot-grid-one-horizontal.component-Dr2uGYme.js";import"./context-menu.component-DGn8vbwc.js";import"./filter-chips.component-BltRdOkh.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CZLeDOWy.js";import"./segmented-control.component-BrS8_Vq8.js";import"./index-B0uyyt6T.js";import"./triangle-exclamation-CXu53-uK.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
