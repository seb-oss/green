import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-iUl4ukIY.js";import{M as h,C as m,b as p}from"./blocks-BgEq9hLu.js";import{C as r}from"./checkbox-266HeK_k.js";import{C as l,D as x}from"./checkbox.stories-DFc5TC_j.js";import{C as b,G as i,a as s,b as c}from"./index-TRbMv8vG.js";import"./iframe-BSWl7YcZ.js";import"./index-Broqep_s.js";import"./index-BEIOyR_r.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BzH3JgNT.js";import"./triangle-exclamation.component-ZarFYUO4.js";import"./tokens.style-73UGey1n.js";import"./icon.component-B5myYiE_.js";import"./alert.component-B6Lx2GMm.js";import"./runtime-nRyYmvPb.js";import"./class-map-DS7Q9EKL.js";import"./unwrap-slots-9osXSDAy.js";import"./button.component-1bxG06bT.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BVSwJt0_.js";import"./dropdown.component-eXTQWXWo.js";import"./popover.component-BJsolS-2.js";import"./cross-small.component-1K3tslnQ.js";import"./chevron-bottom.component-XFzqWv0-.js";import"./checkmark.component-BtPn5Ety.js";import"./circle-check.component-bIeHHLDa.js";import"./chevron-right.component-jh_zBOnq.js";import"./datepicker.component-Db-UpagQ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-rnw6Kr__.js";import"./index-Bhi3vsGG.js";import"./dot-grid-one-horizontal.component-CCQ3jp_A.js";import"./context-menu.component-DNMe8GWO.js";import"./filter-chips.component-CY6MC8o0.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-iIxuAbND.js";import"./segmented-control.component-Com074VZ.js";import"./index-DF9Im6VE.js";import"./triangle-exclamation-DVhLG5eE.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
