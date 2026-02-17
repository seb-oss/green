import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CdOaMeG8.js";import{M as h,C as m,b as p}from"./blocks-DA5rPlmO.js";import{C as r}from"./checkbox-zSWcWtKq.js";import{C as l,D as x}from"./checkbox.stories-CyJxvL2Q.js";import{C as b,G as i,a as s,b as c}from"./index-DUdh0X2d.js";import"./iframe-UO1v_jiM.js";import"./index-BXStrRKO.js";import"./index-y9PZAUrC.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-DNFmqlxc.js";import"./triangle-exclamation.component-TZmXzwWY.js";import"./tokens.style-BN6693AU.js";import"./icon.component-C0SpIziV.js";import"./alert.component-DyaiZ0in.js";import"./runtime-nRyYmvPb.js";import"./class-map-1VnQb1HR.js";import"./unwrap-slots-Mn03bFGd.js";import"./button.component-fXzNm2ok.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-C9eNtMbg.js";import"./dropdown.component-Dyh47_pu.js";import"./popover.component-DQgu3wXd.js";import"./cross-small.component-x7XDby3q.js";import"./chevron-bottom.component-DXgT7IM3.js";import"./checkmark.component-DyQU0bS1.js";import"./circle-check.component-D_ofk550.js";import"./chevron-right.component-D_96yf2W.js";import"./datepicker.component-CSfJbG7W.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DizNGpiF.js";import"./index-DvgQOhxn.js";import"./dot-grid-one-horizontal.component-BUxHWYnD.js";import"./context-menu.component-kXqPPHjl.js";import"./filter-chips.component-DKVVVRCI.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CZX2BfZT.js";import"./segmented-control.component-DCLypjK7.js";import"./index-ClE9nd3e.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
