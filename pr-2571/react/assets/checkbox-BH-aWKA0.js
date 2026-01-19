import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CmOEzj0N.js";import{M as h,C as m,b as p}from"./blocks-DFcAEF6w.js";import{C as r}from"./checkbox-B_mHfOTj.js";import{C as l,D as x}from"./checkbox.stories-atAIzu8h.js";import{C as b,G as i,a as s,b as c}from"./index-BJFgAmRQ.js";import"./iframe-0xdCAmy-.js";import"./index-7A98bSqw.js";import"./index-kpJNefGL.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-Bgk_fEjo.js";import"./triangle-exclamation.component-D4AYR-ll.js";import"./tokens.style-BmD1W1bY.js";import"./icon.component-B3RCRozb.js";import"./alert.component-BzR_DKX9.js";import"./runtime-nRyYmvPb.js";import"./class-map-k8PyDJ1P.js";import"./unwrap-slots-DqjjCAF5.js";import"./button.component-DncL0MC2.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BW90JfX2.js";import"./dropdown.component-CjdskM7a.js";import"./popover.component-Br5tMXLn.js";import"./cross-small.component-CtCTC5qB.js";import"./chevron-bottom.component-BEpDYPu5.js";import"./checkmark.component-CmWZcTPa.js";import"./circle-check.component-Djo6bdUr.js";import"./chevron-right.component-Ck-LPVVB.js";import"./datepicker.component-D---Mrq7.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DdoclLGw.js";import"./index-DsW3q4qO.js";import"./dot-grid-one-horizontal.component-0Yec3M5J.js";import"./context-menu.component-YCa2uyKH.js";import"./filter-chips.component-Cd8rAKjo.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BYL1ui9h.js";import"./segmented-control.component-BpOjYp6W.js";import"./index-PGzN5XAZ.js";import"./triangle-exclamation-CPJ6uaxj.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
